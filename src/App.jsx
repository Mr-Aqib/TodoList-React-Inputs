import React from 'react'
import Controlinputs from './inputs/Controlinputs'
import './inputs/style.css'
import toast, { Toaster } from 'react-hot-toast';
import Todo from './todolist/Todo';

const App = () => {
  return (
    <>
      {/* <Controlinputs /> */}
      <Toaster />
      <Todo/>

    </>
  )
}

export default App