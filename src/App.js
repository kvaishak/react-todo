import React from 'react';
import TodoInput from './components/todoinput';
import TodoList from './components/todolist'

//Importing bootstrap and UUID
import 'bootstrap/dist/css/bootstrap.min.css';
import uuid from 'uuid';


function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-10 mx-auto col-md-8 mt-4">
          <h3 className="text-center text-capitalize"> Todo input</h3>
            <TodoInput />
            <TodoList />
          </div>  
      </div>
    </div>

  );
}

export default App;
