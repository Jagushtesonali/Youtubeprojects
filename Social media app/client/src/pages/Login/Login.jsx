import { useContext, useState } from 'react'
import { useNavigate } from "react-router-dom";
import { Authcontext } from '../../Authcontext/Authcontext'
import './Login.css'

const Login=() =>{
 const [username,setusername]= useState(undefined)
 const[password ,setpassword]=useState(undefined)
 const [loginerror,setloginerror]= useState(false)
 
 const {user , error , dispatch} = useContext(Authcontext)
 const navigate = useNavigate()
 

 const handlelogin = async(e)=>{
      e.preventDefault();
    
      console.log(username,password)
      
   
      dispatch({type:"LOGIN_START"})
    
      try {
           
        const res = await fetch("api/auth/login",{

          method:"POST",
          headers:{
           Accept:"application/json",
           "content-Type":"application/json"
          },
          body:JSON.stringify({username:username,password:password})

        })


      const data = await res.json()
      console.log(data)

      
   
    dispatch({type:"LOGIN_SUCCESS",payload:data})
 
    
    navigate('/')

        
      } catch (err) {
        dispatch({type:"LOGIN_FAILURE" ,payload:err})

        
      }


 }



  return (
<>
<div className="LoginContainer">
    <div className="LoginWrapper">
        <div className="LoginText">
            <h2>ChatApp</h2>
            <h5>Login To ChatApp to chat with your  Friends and Family and enjoy the family</h5>
        </div>
        <div className="Logininputs">
            <input type="text" placeholder='Username' required  onChange={(e)=>setusername(e.target.value)} />
            <input type="password" placeholder='Password' required onChange={(e)=>setpassword(e.target.value)} />
            <button className='Loginbutton' onClick={handlelogin}>Login</button>
         {loginerror &&   <label className='errorlable'></label>}
            <a href="">Forgot Password ?</a>
            <button className='signup'>Create New Account</button>
        </div>
    </div>

</div>


</>
  )
}

export default Login
