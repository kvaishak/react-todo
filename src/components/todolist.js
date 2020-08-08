import React, { Component } from 'react';
import TodoItem from './todoitem'

export default class TodoList extends Component {
    render() { 
        return ( 
            <div>
                <ul className="list-group my-5">
                    <h3 className="text-center text-capitalize"> Todo list</h3>
                    <TodoItem />
                    <button type="button" className="btn btn-danger btn-block text-capitalize mt-5">clear list</button>
                </ul>
            </div>
         );
    }
};
 