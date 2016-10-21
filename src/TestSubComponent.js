import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';


@inject('names')
//import userStore from './UserStore';
@observer
class TestSubComponent extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <p> sub-component: {this.props.names['0001'].name} </p>
        {this.props.names.test}
      </div>
    );
  }

};

export default TestSubComponent;
