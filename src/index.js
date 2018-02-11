import React from 'react';
import {render} from 'react-dom';
import {Provider} from  'react-redux';
import { createStore} from 'redux';
import todoApp from './reducers';
import App from './components/app'
import {addTodo} from './actions'

let store=createStore(todoApp);
const listener=store.subscribe(()=>{
  console.log(store.getState().todos);
})
render(
<Provider store={store}>
<App/>
</Provider>,
document.querySelector('.container')
);


// ReactDOM.render(
//   <Provider store={createStoreWithMiddleware(reducers)}>
//     <App />
//   </Provider>
//   , document.querySelector('.container'));
