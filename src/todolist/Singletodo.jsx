import React, { useState } from 'react'
import { MdDelete } from "react-icons/md";
const Singletodo = ({ item, remove, index }) => {
    const [check, setCheck] = useState(false)
  return (
      <>
          <div className=" singletodo col-lg-5 col-10 mx-auto p-3 shadow my-2 rounded-3 d-flex flex-row align-items-center justify-content-between">
              <h5 style={{ textDecoration: `${check ? 'line-through' : 'none'}` }} >{item}</h5>
              <div className="d-flex gap-2 flex-row align-items-center justify-content-center">
              <button className='btnbtnb' onClick={()=>remove(index)}>
                  <MdDelete className=' text-danger bg-none'  />
                  </button>
             
                      <input type="checkbox"
                  onChange={()=>setCheck(!check)}
                      />
                 
                
                  </div>
              
          </div>
      </>
  )
}

export default Singletodo