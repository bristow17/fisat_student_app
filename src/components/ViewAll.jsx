import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'

const ViewAll = () => {

    const [stud, chngstud] = useState([])

    const fetchdata = () => {
        axios.get("https://courseapplogix.onrender.com/getdata").then(
            (response) => {
                console.log(response.data)
                chngstud(response.data)
            }
        ).catch(
            (error)=>(
                console.log()
            )
        ).finally()
    }

    useEffect(() => { fetchdata() }, [])

    return (
        <div>
            <Navbar />
        <br></br><br></br>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-col-xl-12 col-xxl-12">

                        <table class="table">
                            <thead>
                                <tr>

                                    {/* <th scope="col">ID</th> */}
                                    <th scope="col">First Name</th>
                                    <th scope="col">Last Name</th>
                                    <th scope="col">College</th>
                                    <th scope="col">DOB</th>
                                    <th scope="col">Course</th>
                                    <th scope="col">Mobile</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Address</th>
                                    {/* <th scope="col"></th> */}
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    stud.map(
                                        (value, i) => {
                                            return <tr>

                                                {/* <td>{value._id}</td> */}
                                                <td>{value.firstname}</td>
                                                <td>{value.lastname}</td>
                                                <td>{value.college}</td>
                                                <td>{value.dob}</td>
                                                <td>{value.course}</td>
                                                <td>{value.mobile}</td>
                                                <td>{value.email}</td>
                                                <td>{value.address}</td>
                                            </tr>
                                        }
                                    )
                                }
                            </tbody>
                        </table>

                    </div>
                </div>
            </div>
        </div>



    )
}

export default ViewAll