import React, { Component } from 'react';

export default class TodoInput extends Component {
    render() { 
        const {todotext, handleChange, handleSubmit, editItem} = this.props;
        return ( 
            <div className="card card-body my-3">
                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <div className="input-group-text bg-primary text-white">
                                <i className="fas fa-space-shuttle" />
                            </div>
                        </div>
                        <input type="text" className="form-control"  placeholder="Add a todo item" value={todotext} onChange={handleChange}/>
                    </div>
                    <button type="submit" className={ editItem ? "btn btn-block btn-success mt-3" : "btn btn-block btn-primary mt-3"}>
                        {editItem ? "Edit item" : "Add item"}
                    </button>
                </form>
            </div>
         );
    }
};
 