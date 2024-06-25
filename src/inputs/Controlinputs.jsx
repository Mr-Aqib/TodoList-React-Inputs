import React, { useState } from 'react'
import toast from 'react-hot-toast'

const Controlinputs = () => {
  const [name, setName] = useState("")
  const [errname, setErrname] = useState(false)
  const consoleclick = (e) => {
    e.preventDefault()
    if (name)
    {
      setErrname(false)
        toast.success("Done", {icon:"😊😊😊"})
       console.log(name)
    setName("")
      
    }
    else
    {
      toast.error("Enter Name", { icon: "😠😠" })
      setErrname(true)
    
    }
    setTimeout(() => {
      setErrname(false)
    }, 4000);
  
  }
  return (
    <>
      <div className="container">
        <div className="col-lg-5 mx-auto shadow p-3 rounded-5">
          <form action="">
          <label htmlFor="">Enter Your Name</label>
          <input type="text"
            className='form-control'
            placeholder='Enter Your Name'
            value={name}
            onChange={(e)=>setName(e.target.value)}

            />
            {
              errname && (
                <div className="alert text-danger alert-dark p-1 my-2" >
                  Please enter
                </div>
              )
            }
            <button  onClick={consoleclick} className="btn btn-dark my-2 mx-auto d-block w-25">Enter</button>
            </form>
        </div>
      </div>
    </>
  )
}

export default Controlinputs