import React from 'react'
import CounterApp from './Components/CounterApp'
import TodoList from './Components/TodoList'
import Accordion from './Components/Accordion'
import StateLift from './Components/StateLift'
import ReactContext from './Components/ReactContext'
import NormalComponent from './Components/NormalComponent'
import { HigherOrderComponent } from './Components/NormalComponent'

const RedNormalComponent = HigherOrderComponent(NormalComponent)

const App = () => {
  return (
    <div>
      {/* <CounterApp /> */}
      {/* <TodoList /> */}
      {/* <Accordion />*/}
      {/* <StateLift /> */}
      {/* <ReactContext /> */}
      <RedNormalComponent />
    </div>
  )
}

export default App