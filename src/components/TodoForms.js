import React, {Component} from 'react';

import PropTypes from 'prop-types'

class TodoForms extends Component{
    constructor(){
        super();
        this.state = {
            id: 0,
            title: '',
            responsible: '',
            description: '',
            done: false,
            priority: 'low'
        };

        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInput(e) {
        const {value, name} = e.target;
        this.setState({
            [name]: value
        });

        console.log("writing:",e.target.value, e.target.name)
    }

    handleSubmit(e) {
        e.preventDefault();
        this.state.id = this.props.todosLenght
        this.props.onAddTodo(this.state.id, this.state);
        console.log("Sending the data...");
        this.state.id = 0
    }

    render(){
        
        return(
            <div className="card">
                <form className="card-body" onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <input
                        type="text"
                        name="title"
                        onChange={this.handleInput}
                        className="form-control"
                        placeholder="Title"
                        required
                        />
                    </div>
                    <div className="form-group">
                        <input
                        type="text"
                        name="responsible"
                        onChange={this.handleInput}
                        className="form-control"
                        placeholder="Responsible"
                        required
                        />
                    </div>
                    <div className="form-group">
                        <input
                        type="text"
                        name="description"
                        onChange={this.handleInput}
                        className="form-control"
                        placeholder="Description"
                        required
                        />
                    </div>
                    <div className="form-group">
                        <select
                        name="priority"
                        className="form-control"
                        onChange={this.handleInput}
                        >
                            <option style={{backgroundColor: "red"}}>Low</option>
                            <option style={{backgroundColor: "yellow"}}>Medium</option>
                            <option style={{backgroundColor: "green"}}>High</option>
                        </select>
                    </div>
                    <button type="submit" className="btn btn-primary" style={btnSave}>Save</button>
                </form>
            </div>
        );
    }
}

TodoForms.propTypes = {
    onAddTodo: PropTypes.func.isRequired
}

const btnSave = {
    fontSize: "15px"
}

export default TodoForms