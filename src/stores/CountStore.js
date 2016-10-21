import { observable, action } from 'mobx';

class CountStore {
  @observable count = 0;

  constructor() {
    // initial state
    this.count = 0;
  }

  @action incCount() {
    console.log(this.count)
    this.count += 1;
  }

  @action clearCount() {
    this.count = 0;
  }

}

const countStore = new CountStore();
export default countStore;

export { CountStore };
