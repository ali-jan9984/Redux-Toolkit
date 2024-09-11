import React from 'react';
import { Provider } from 'react-redux';
import {store} from './app/store.js';
import AddTodos from './components/Addtodo.jsx';
import Todos from './components/todos.jsx'
import './App.css';

const App = () => {
  return (
    <Provider store={store}>
      <div className='container'>
        <h1 className='main-heading'>Todo App</h1>
        <AddTodos />
        <Todos/>
      </div>
    </Provider>
  );
};

export default App;



