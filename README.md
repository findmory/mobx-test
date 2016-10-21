This is a project created with ```create-react-app <projectname> --scripts-version custom-react-scripts``` so I can use MobX decorators

after initilizing it I edited the .env file to include
```REACT_APP_DECORATORS=true```

I also added mobx with:
```npm install --save-dev mobx mobx-react mobx-react-devtools
(or yarn add mobx mobx-react mobx-react-devtools --dev```

As an example I broke the state into two different stores and am using various parts of the store in a child component and a grandchild component

Just to show the ease of accessing state without passing it down the tree

For example, ButtonComponent gets just COUNT store and it gets it directly, not passed down

TestSubComponent gets the 'names' prop passed down from the UserStore
this is done in the parent component by wrapping it with a provider:

#####PARENT
```import { Provider } from 'mobx-react';
import userStore from './stores/UserStore';
<Provider {...userStore}>
  <TestSubComponent />
</Provider>```

#####CHILD
```import { inject } from 'mobx-react';
@inject('names')```
now you have access to this.props.names