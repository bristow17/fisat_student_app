import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'

const ViewAll = () => {

    const [stud, chngstud] = useState([])
    
    const fetchdata=()=>{
        axios.get("https://anishpdm.github.io/dummy-api-new/student.json").then(
            (response)=>{
                console.log(response.data)
                chngstud(response.data)
            }
        ).catch().finally()
    }

    useEffect(()=>{fetchdata()},[])

    return (
        <div>
            <Navbar />

            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                        {
                                stud.map(
                                    (value,i)=>{
                                        return <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
                                        <div class="card">
                                            <img src="https://i.pinimg.com/736x/ff/28/57/ff28577f0c90281ecf84faa74a770c27.jpg" class="card-img-top" alt="..." height="300px"></img>
                                            <div class="card-body">
        
                                                <p class="card-text">{value._id}</p>
                                                <p class="card-text">{value.firstname}</p>
                                                <p class="card-text">{value.lastname}</p>
                                                <p class="card-text">{value.college}</p>
                                                <p class="card-text">{value.email}</p>
                                                <p class="card-text">{value.course}</p>
                                                <p class="card-text">{value.address}</p>
                                                <p class="card-text">{value.dob}</p>
                                                <p class="card-text">{value.mobile}</p>
                                                {/* <p class="card-text">{value.__v}</p> */}
                                                {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                                            </div>
                                        </div>
                                    </div>
                                    }
                                )
                            }
                            
                        </div>
                    </div>
                </div>
            </div>




        </div>
    )
}

export default ViewAll