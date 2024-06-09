import React, { useState } from 'react'
import Navbar from './Navbar'

const DeleteStudent = () => {

    const [data,setdata]=useState(
        {
            "id":""
        }
    )

    const inputhandler = (event)=>{
        setdata({...data, [event.target.name]: event.target.value})
    }

    const readvalue=()=>{
        console.log(data)
    }


  return (
    <div>
        <Navbar/>
    
        <div className="container">
        <div className="row">
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <div className="row g-3">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <label htmlFor="" className="label form-label">ID</label>
                        <input type="text" className="input form-control" name='id' value={data.id} onChange={inputhandler}/>
                    </div>
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <button className="btn btn-danger" onClick={readvalue}>DELETE</button>
                    </div>
                </div>
            </div>
        </div>
    </div>



    </div>
  )
}

export default DeleteStudent