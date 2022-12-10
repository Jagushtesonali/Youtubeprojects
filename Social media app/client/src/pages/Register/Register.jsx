import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const Register=() =>{

    const [user ,setuser] = useState({

        username:"",email:"",password:"",cpassword:""
    
     });
     let name , value;
     const navigate = useNavigate()

    const handleinput = (e) =>{

        name = e.target.name;
        value = e.target.value;
        setuser({...user ,[name]:value})
      }

const postdata = async(e)=>{
    e.preventDefault()

    const {username,email,password,cpassword} = user;


    const newuser = {

        username,email,password
      }

const res= await fetch("api/auth/register",{

    method:"POST",
    headers:{
     "Content-Type":"application/json",
     "Clear-Site-Data": "*"
    },
    body: JSON.stringify(newuser)


})
const data = await res.json()
console.log(data)
setuser({  username:"",email:"",password:"",cpassword:""})
navigate('/login')



}
const handlelogin = ()=>{

    navigate("/login")
}

  return (
   <>
   <div className="LoginContainer">
    <div className="LoginWrapper">
        <div className="LoginText">
            <h2>ChatApp</h2>
            <h5>Login To ChatApp to chat with your  Friends and Family and enjoy the family</h5>
        </div>
        <div className="Logininputs" type='submit'>
            <input type="text" required name='username'  placeholder='Username' onChange={handleinput} value={user.username} />
            <input type="text" required name='email' placeholder='Email' onChange={handleinput} value={user.email}/>
            <input type="password" required name='password' placeholder='Password' onChange={handleinput} value={user.password}/>
            <input type="password" required  name='cpassword'  placeholder='Confirm Password' onChange={handleinput} />
            <button className='Loginbutton' onClick={postdata} >Register</button>

            <button className='signup' onClick={handlelogin}>Login</button>
        </div>
    </div>

</div>


   
   </>
  )
}

export default Register
