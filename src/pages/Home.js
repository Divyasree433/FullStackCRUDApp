import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { ToastContainer,toast } from 'react-toastify';
import { useParams,Link } from 'react-router-dom';
function Home() {
    const [users,setusers]=useState([]);
    const {id}=useParams();
    useEffect(()=>{
       loadusers();
    },[]);
    const loadusers=async ()=>{
        const result=await axios.get("http://localhost:8080/users");
        setusers(result.data);
    }
    const deleteuser=async(id)=>{
      toast.error("User Deleted Successfully")
      await axios.delete(`http://localhost:8080/user/${id}`)
      loadusers();
    }
  return (
    <div className='container'>
      <ToastContainer/>
        <div className='py-4'> 
        <table className="table border-1 shadow">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Actions</th>
    </tr>
  </thead>
  <tbody>
    {
    users.map((cur)=>
    (<tr key={cur.id}>
        <td>
            {cur.id}
        </td>
      <td>
        {cur.name}
      </td>
      <td>
        {cur.email}
      </td>
      <td>
        <Link
          className="btn btn-primary mx-2"
          to={`/viewuser/${cur.id}`}
          >
          View
          </Link>
          <Link
          className="btn btn-outline-primary mx-2"
          to={`/edituser/${cur.id}`}
          >
          Edit
          </Link>
          <button
            className="btn btn-danger mx-2"
            onClick={() => deleteuser(cur.id)}>
           Delete
          </button>
      </td>
    </tr>
    ))
    }
  </tbody>
</table>
</div>
    
   </div>
  )
}

export default Home;