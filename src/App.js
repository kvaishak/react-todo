import React, { Component } from 'react';
import TodoInput from './components/todoinput';
import TodoList from './components/todolist'

//Importing bootstrap and UUID
import 'bootstrap/dist/css/bootstrap.min.css';
import { v4 as uuidv4 } from 'uuid';


export default class App extends Component {
  
  //constructor which initializes and holds the vale
  state = {
    items: [],
    id:uuidv4(),
    todotext:'',
    editItem:false
  }

  //method for handling the input change
  handleChange = (e) => {
    this.setState({
      todotext: e.target.value
    });
  }

  //method for handling the submit
  handleSubmit = (e) => {
    e.preventDefault();

    const newItem = {
      id: this.state.id,
      todotext: this.state.todotext
    };

    console.log(newItem);
    
    this.setState({
      items : this.state.items.concat(newItem),
      todotext:'',
      id: uuidv4(),
      editItem: false
    });

  }

  //method for clearing the list
  clearList = () =>{
    this.setState({
      items : [] 
    })
  }

  //method for deleting individual todo
  handleDelete = (id) => {
    const filterdItems = this.state.items.filter(item => item.id !== id);
    this.setState({
      items : filterdItems
    })
  }

  render(){
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-8 mt-4">
            <h3 className="text-center text-capitalize"> Todo input</h3>
              <TodoInput todotext={this.state.todotext} handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>
              <TodoList items={this.state.items} clearList={this.clearList} handleDelete={this.handleDelete}/>
            </div>  
        </div>
      </div>
  
    );
  }  
}

