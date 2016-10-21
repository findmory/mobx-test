// frameworks
import React, { Component } from 'react';
import { observer, Provider } from 'mobx-react';
import DevTools from 'mobx-react-devtools';

// components
import TestSubComponent from './TestSubComponent';
import ButtonComponent from './ButtonComponent';

// stores
import userStore from './stores/UserStore';

// css
import './App.css';

@observer
class App extends Component {
  renderItem(key) {
    return (
    <li
      key={key}
      id={key}
      onClick={this.toggleNames}
      className={`selected-${userStore.names[key].selected}`}
    >
      {userStore.names[key].name}
    </li>
    )
  }

  render() {
    return (
      <div>
        <ButtonComponent />
        <button onClick={this.onName}>
         Add Name
        </button>
        <p>Selected Names {userStore.selectedNamesCount}</p>
        <ul>
          {Object.keys(userStore.names).map(key =>{
            return this.renderItem(key)
          })}
        </ul>
        <Provider {...userStore}>
          <TestSubComponent />
        </Provider>
        <DevTools />
      </div>
    );
  }


  onName = () => {
    userStore.addName("Tom");
  }

  toggleNames = (e) => {
    console.log('toggling', e.target.id)
    userStore.toggleName(e.target.id)
  }
};


export default App;
