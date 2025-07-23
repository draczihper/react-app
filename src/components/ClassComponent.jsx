import { Component } from "react";

class ClassComponent extends Component {
    constructor(props){
        super(props);
    
        this.state = {
            todos: [],
            inputVal: ""
        }

    this.handelInputChange = this.handelInputChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this);
    };

    handelInputChange(e){
        this.setState((state) => ({
            ...state,
            inputVal: e.target.value
        }))
    }

    handleSubmit(e){
        e.preventDefault()
        this.setState((state) => ({
            state: state.todos.concat(state.inputVal),
            inputVal: ""
        }))
    }

    render() {
        return (
<section>
            <h3>{this.props.name}</h3>
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="task-entry">Enter a task: </label>
                <input 
                type="text"
                id="task-entry"
                name="task-entry"
                value={this.state.inputVal}
                onChange={this.handleInputChange}
                />
                <button type="submit">Submit</button>
            </form>
            <h4>All the tasks!</h4>
            <ul>{this.state.todos.map((todo) => (
                <li key={todo}>{todo}</li>
             ))} </ul>
        </section>
        )
    }
}

export default ClassComponent