import { observable, computed, action } from 'mobx';

class UserStore {
  @observable names = {};

  constructor() {
    // initial state
    this.names = {
      '0001': {name:'mike', selected:false},
      '0002': {name:'jill', selected:true},
      '0003': {name:'ted', selected:false},
    }
  }

  @computed get selectedNamesCount() {
    return Object.keys(this.names).filter(
      (key) => this.names[key].selected === true
    ).length;
  }


  @action addName(name) {
    const key = Date.now();
    this.names = {
      ...this.names,
      [key] : {'name': name, 'selected': false}
    }
  }

  @action toggleName(key) {
    this.names[key].selected = this.names[key].selected !== true
  }

}

const userStore = new UserStore();
export default userStore;

export { UserStore };
