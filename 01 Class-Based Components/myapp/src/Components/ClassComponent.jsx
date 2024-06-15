/* -----> Third Party Packages <----- */
import {Component} from "react"

/* -----> Component <----- */
class ClassComponent extends Component{
    // Initialization
    constructor(props){
        console.log("constructor")
        super(props)
        this.state = {counter:0}
    }

    // Mount
    componentDidMount(){
        console.log("componentDidMount method")
    }

    // Update
    componentDidUpdate(){
        console.log("componentDidUpdate method")
    }

    // Unmount
    componentWillUnmount(){
        console.log("componentWillUnmount method")
    }

    // Methods
    handleIncrement = () => {
        console.log("---custom handleIncrement method")
        this.setState((prevState) => ({counter:prevState.counter+1}))
    }
    
    // render
    render(){
        console.log("render method")
        // State destructuring
        const {counter} = this.state

        // return JSX
        return (
        <div>
            <h1>I am ClassComponent</h1>
             <div>
                <span>{counter}</span>
                <button onClick={this.handleIncrement}>counter</button>
                </div>
        </div>
        )
    }
}

/* -----> Export <----- */
export default ClassComponent