import React, { Component } from 'react';
import TodoInput from './components/todoinput';
import TodoList from './components/todolist'

//Importing bootstrap and UUID
import 'bootstrap/dist/css/bootstrap.min.css';
import { v4 as uuidv4 } from 'uuid';


export default class App extends Component {
  todoCacheData;

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

    this.handleDataCaching();
  }

  //method for handling the submit
  handleSubmit = (e) => {
    e.preventDefault();

    const newItem = {
      id: this.state.id,
      todotext: this.state.todotext
    };
    
    this.setState({
      items : this.state.items.concat(newItem),
      todotext:'',
      id: uuidv4(),
      editItem: false
    });

    this.handleDataCaching();
    
  }

  //method for clearing the list
  clearList = () =>{
    this.setState({
      items : [] 
    });

    this.handleDataCaching();
  }

  //method for deleting individual todo
  handleDelete = (id) => {
    const filterdItems = this.state.items.filter(item => item.id !== id);
    this.setState({
      items : filterdItems
    });

    this.handleDataCaching();
  }

  //method for handling the edit
  handleEdit = (id) => {
    const filterdItems = this.state.items.filter(item => item.id !== id);
    const selectedItem = this.state.items.find(item => item.id === id);

    this.setState({
      items : filterdItems,
      todotext: selectedItem.todotext,
      id: id,
      editItem: true
    });

    this.handleDataCaching();
  }

  //React Life cycle - called after the render method
  componentDidMount() {
    if (localStorage.getItem('reactTodoCache')) {
      this.todoCacheData = JSON.parse(localStorage.getItem('reactTodoCache'));
        this.setState({
            items: this.todoCacheData.items,
          id: this.todoCacheData.id,
          todotext: this.todoCacheData.todotext,
          editItem :  this.todoCacheData.editItem
        })
      } else {
        this.setState({
          items: [],
          id:uuidv4(),
          todotext:'',
          editItem:false
        })
      }
  }
  //localstorage data updation
  handleDataCaching(){
     //using set-time out because otherwise the state woudint have updated
     setTimeout(()=>{
      localStorage.setItem('reactTodoCache', JSON.stringify(this.state));
    }, 1000);
  }

  render(){
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-8 mt-4">
            <h3 className="text-center text-capitalize"> Todo input</h3>
              <TodoInput todotext={this.state.todotext} handleChange={this.handleChange} handleSubmit={this.handleSubmit} editItem={this.state.editItem}/>
              <TodoList items={this.state.items} clearList={this.clearList} handleDelete={this.handleDelete} handleEdit={this.handleEdit}/>
            </div>  
        </div>
      </div>
  
    );
  }  
}

