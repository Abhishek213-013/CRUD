import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function CreateStudent() {
    const[name, setName] = useState('')
    const[email, setEmail] = useState('')
    const navigate = useNavigate();

    function handleSubmit(event){
        event.preventDefault();
        axios.post('http://localhost:8081/create',{name, email})
        .then(res => {
            console.log(res);
            // Update the state in the Student component to include the new student
            // Fetch the updated data from the server and set it in the state
            navigate('/');
        }).catch(err => console.log(err));

    }
    return (
        <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
            <div className='w-50 bg-white rounded p-3'>
            <form onSubmit={handleSubmit}>
                <h2>Add Student</h2>
                <div className='mb-2'>
                    <label htmlFor=''>Name</label>
                    <input type='text' placeholder='Enter Name' className='form-control' id='name' 
                    onChange={e => setName(e.target.value)}/>
                </div>
                <div className='mb-2'>
                    <label htmlFor=''>Email</label>
                    <input type='text' placeholder='Enter E-Mail' className='form-control'
                    onChange={e => setEmail(e.target.value)}/>
                </div>
                <button className='btn btn-success'>Submit</button>
            </form>
            </div>
        </div>
    )
}

export default CreateStudent;
