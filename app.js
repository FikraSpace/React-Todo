// import UI lib to be used
import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import styled from 'styled-components'

let Input = styled.input`
  width: 100%;
  height: 40px;
  border: 2px solid #000;
  font-size: 1.5rem;
`

let MyButton = styled.button`
  border: none;
  background-color: red;
  color: white;
  padding: 10px;
  
`



// Define a statuful components
class Todos extends Component {

  // the constructor is used to set the intial state
  constructor(){
    super()

    // define the intial state
    this.state = {
      todos: [],
      inputValue:'hello '
    }
  }

  // when the user is writing to the input text, upate the inputValue key in the state
  oninputchange (event){
    this.setState({
      inputValue: event.target.value
    })
  }
  
  onkeyup (event){
    let todos = this.state.todos;
    if (event.key === 'Enter') {
      todos.push({
        text: this.state.inputValue,
        status: 'UNCHECKED'
      })
      this.setState({
        todos: todos,
        inputValue: ''
      })

    }
  }

  render(){
    return (
      <div className="container">
        <Input type="text" value={this.state.inputValue} onKeyUp={this.onkeyup.bind(this)}  
        onChange={this.oninputchange.bind(this)}/>

        {
          this.state.todos.map((item, i)=>{
            return <Todo item={item} key={i}/>
          })
        }

      </div>
    )
  }
}

function Todo(props) {
  return (
  <div>
    <div className="item">{props.item.text}</div>
    <MyButton>Remove</MyButton>
  </div>
  )
}

// Define a statless components
function App() {
  return (
    <Todos />
  )
}

// Display content
ReactDOM.render(<App/>, document.getElementById('root'))

