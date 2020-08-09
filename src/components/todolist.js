import React, { Component } from 'react';
import TodoItem from './todoitem'

export default class TodoList extends Component {
    render() { 
        const {items, clearList} = this.props;
        return ( 
            <div>
                <ul className="list-group my-5">
                    <h3 className="text-center text-capitalize"> Todo list</h3>
                    {
                        items.map(item => {
                            return(
                                <TodoItem key={item.id} todotext={item.todotext}/>
                            )
                        })
                    }
                   
                    <button type="button" className="btn btn-danger btn-block text-capitalize mt-5" onClick={clearList}>clear list</button>
                </ul>
            </div>
         );
    }
};
 