import React, { Component } from 'react';
import { observer } from 'mobx-react';

// here i am getting the store directly instead of passing it down
import countStore from './stores/CountStore';
@observer
class ButtonComponent extends Component {

  handleCount = () => {
    // do some other things... log .. calc values, pass parms, etc
    countStore.clearCount();
  }

  // here I am showing that the click handlers can:
  // 1. call the action directly inline (incCount)
  // 2. can call a method to do some other things

  render() {
    return (
      <div>
        <button onClick={() => countStore.incCount()}>
          Clicks: {countStore.count}
        </button>
        <button onClick={this.handleCount}>
          clear count
        </button>
      </div>
    );
  }

};

export default ButtonComponent;
