import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import axios from 'axios';
//import {TextField, Button} from '@mui/material';
import '../style/SignUp.css';




export default function SignUp() {

    const [firstname, setfirstname] = useState("");
    const [lastname, setlastname] = useState("");
    const [age, setage] = useState(0);
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");

    const adduser = () => {
        axios.post('http://localhost:8080/adduser', {
            firstname: firstname,
            lastname: lastname,
            age: age,
            email: email,
            password: password
        }).then(() => {
            alert('user added');
            
        })
    };

    return (
        // <div className='SignUp'>
        //     <h1>Sign Up</h1>
        //     <div className='Name'>
        //     <TextField 
        //     id="outlined-basic" 
        //     label="First Name" 
        //     variant="outlined" 
        //     onChange={(event) => {
        //         setfirstname(event.target.value);
        //     }} 
        //     />
        //     <TextField 
        //     id="outlined-basic" 
        //     label="Last Name" 
        //     variant="outlined" 
        //     onChange={(event) => {
        //         setlastname(event.target.value);
        //     }} 
        //     />
        //     </div>
        //     <TextField 
        //     id="outlined-basic" 
        //     label="Age" 
        //     variant="outlined" 
        //     onChange={(event) => {
        //         setage(event.target.value);
        //     }} 
        //     />
        //     <div className='password'>
        //     <TextField 
        //     id="outlined-password-input" 
        //     label="Password" 
        //     type="password" 
        //     autoComplete="current-password" 
        //     onChange={(event) => {
        //         setpassword(event.target.value);
        //     }}
        //     />
        //     </div>
        //     <TextField 
        //     id="outlined-basic" 
        //     label="Email" 
        //     variant="outlined" 
        //     onChange={(event) => {
        //         setemail(event.target.value);
        //     }}
        //     />
        //     <div>
        //         {/* <Button variant="contained" onClick={adduser}>Submit</Button> */}
        //         <Link className='link' to='/dashboard'>
        //             <Button variant="contained" onClick={adduser}>Submit</Button>
        //         </Link>
        //     </div>

        // </div>

        <div className='content'>
            <div className='SignUp'>
                <h1>Sign Up</h1>
                <div className='Name'>
                <TextField 
                 id="outlined-basic" 
                 label="First Name" 
                 variant="outlined" 
                 onChange={(event) => {
                     setfirstname(event.target.value);
                 }} 
                 />
                 <TextField 
                 id="outlined-basic" 
                 label="Last Name" 
                 variant="outlined" 
                 onChange={(event) => {
                     setlastname(event.target.value);
                 }} 
                 />
                 </div>
                 <TextField 
                 id="outlined-basic" 
                 label="Age" 
                  variant="outlined" 
                 onChange={(event) => {
                      setage(event.target.value);
                 }} 
                 />
                 <div className='password'>
                 <TextField 
                  id="outlined-password-input" 
                 label="Password" 
                  type="password" 
                 autoComplete="current-password" 
                 onChange={(event) => {
                     setpassword(event.target.value);
                  }}
                 />
                 </div>
                 <TextField 
                 id="outlined-basic" 
                 label="Email" 
                 variant="outlined" 
                 onChange={(event) => {
                     setemail(event.target.value);
                 }}
                 />
                  <div>
                      {/* <Button variant="contained" onClick={adduser}>Submit</Button> */}
                    <Link className='link' to='/dashboard'>
                        <Button variant="contained" onClick={adduser}>Submit</Button>
                    </Link>
                  </div>
                </div>
            </div>
    );
}
