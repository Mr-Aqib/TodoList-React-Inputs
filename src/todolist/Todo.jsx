import React, { useState } from 'react'
import toast from 'react-hot-toast'
import Singletodo from './Singletodo'


const Todo = () => {
    const [todo, setTodo] = useState("")
    const [error, setError] = useState(false)
    const [data, setData] = useState([])
    const handletodo = (e) =>
    {
     e.preventDefault()
        if (todo)
        {
            toast.success("Task added successfully")
            
            setData([...data,todo])
            console.log(data)
            setTodo("")
        }
        else
        {
            toast.error("Please Enter Your Todo")
        }
   
        console.log(todo)
       
        }
    const removetoodo = (id) =>
    {
        const newdata = data.filter((item, index) =>
        {
            return index != id
           
        })
         setData(newdata)
            }
  return (
      <>
          <div className="container">
              <div className="col-lg-5 inputtodo my-4 mx-auto shadow p-4 rounded-4">
                  <form action="">
                      <label className='d-block text-center fs-3 text-white my-1' htmlFor=""  >Enter Your Todo</label>
                      <input onChange={(e)=> setTodo(e.target.value)} className='form-control' type="text" value={todo} />
                      <button onClick={handletodo} className="btn my-2 w-50 d-block mx-auto btn-success">
                          Add Todo
                      </button>
                  
                  </form>
              </div>
              <div className="d-flex flex-column">
                  {
                      data?.map((item, index) =>
                      {
                          return (
                              <Singletodo key={ index} index={index} remove={removetoodo} item={item} />
                          )
  
                    })
                    }
              </div>
            
          </div>
            
      </>
  )
}

export default Todo