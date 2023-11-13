import React, {useState, useEffect}from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'


const Users = () => {

    const [users, setUsers] = useState([])    

    useEffect(()=>{
        axios.get('http://localhost:8080')
        .then(res=> setUsers(res.data))
        .catch(err=> console.error(err))
    })

    const handleDelete =(id)=>{
        axios.delete('http://localhost:8080/deleteUser/'+id)
        .then(res=>{console.log(res)})
        .catch(err=>console.log(err))
    }

  return (
    <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
        <div className='w-50 bg-white rounded p-3'>
            <Link to='/create' className='btn btn-success'>Add +</Link>
            <table className='table'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Age</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((user)=>{
                         return<tr>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.age}</td>
                                <td>

                                    <Link to={`/update/${user._id}`} className='btn btn-warning'>Update</Link>
                                    <button className='btn btn-danger' onClick={()=>handleDelete(user._id)}>Delete</button>
                                </td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default Users