import React from 'react';
import { useState, useEffect } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import axios from 'axios';
import '../style/Dashboard.css';

export default function Dashboard() {

   const [useres, setuseres] = useState([]);

   const deleteuser = (id) => {
       axios.delete('http://localhost:8080/delete/'+ id ).then(() => {
           alert('user deleted');
           window.location.reload();
       })
   }

   


   useEffect(() => {
       axios.get('http://localhost:8080/read').then((res) => {
        setuseres(res.data);
        // console.log(res.data)
       }).catch(() => {
           console.log('ERR');
       })
    
   }, [])

    return (
        <div>
            <div className='navbar'>
                <h1>LOGO</h1>
                <div>
                    <Avatar className='Avatar'>H</Avatar>
                    <Button variant="contained">LOGOUT</Button>
                </div>
            </div>

            <div className='Content'>
                <div className='List'>
                    {useres.map((res) => {
                            return (
                                <div className='SinglList'>
                                    <h1>First Name : {res.firstname} </h1>
                                    <h1>Last Name : {res.lastname}</h1>
                                    <h1>Age : {res.age}</h1>
                                    <h1>Email : {res.email}</h1>

                                    <IconButton aria-label="delete">
                                        <DeleteIcon 
                                        onClick={() => {
                                            deleteuser(res._id);
                                        }} />
                                    </IconButton>
                                </div>
                            )
                        })}
                </div>
            </div>
        </div>
    )
}
