import React, { useState } from 'react'
import { MdDelete } from "react-icons/md";
const Singletodo = ({ item, remove, index }) => {
    const [check, setCheck] = useState(false)
  return (
      <>
          <div className=" col-lg-5 col-10 mx-auto p-3 shadow my-2 rounded-3 d-flex flex-row align-items-center justify-content-between">
              <h5 >{item}</h5>
              <div className="d-flex flex-row align-items-center justify-content-center">
              <button className='bg-white border-0' onClick={()=>remove(index)}>
                  <MdDelete className='text-danger'  />
                  </button>
              <button className='form-check bg-white border-0'>
                      <input type="checkbox"
                  onChange={()=>setCheck(true)}
                      />
                  </button>
                
                  </div>
              
          </div>
      </>
  )
}

export default Singletodo