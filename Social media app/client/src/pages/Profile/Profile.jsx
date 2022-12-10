import React from 'react'
import { useLocation } from 'react-router-dom'
import Feed from '../../components/Feed/Feed'
import Rightbar from '../../components/Rightbar/Rightbar'
import Sidebar from '../../components/Sidebar/Sidebar'
import Topbar from '../../components/Topbar/Topbar'
import './Profile.css'
import { useEffect } from 'react'
import { useState } from 'react'

const  Profile=() =>{
const[user,setuser]=useState("")

  const location = useLocation()
  const PF = "http://localhost:8000/images/"
  const userid = location.pathname.split('/')[2]
  console.log(userid)
 useEffect(()=>{

  const fetchdata = async ()=>{
    try {
      const res = await fetch(`/api/user/${userid}`,{
        method:"GET",
        headers:{
         Accept:"application/json",
         "content-Type":"application/json"
        },
    credentials:"include"

      })
   const   data = await res.json()
      setuser(data)
     console.log(user)
          }
          
        
       
          catch (error) {
      
     }
  }

   fetchdata()

 },[userid])


  return (
    <>
    <Topbar/>
<div className='home-container'>
<Sidebar className="sidebar"/>
<div className='ProfileRight'>
    <div className='ProfileTop'>
      <div className='ProfileWrapper'>
        <img src={user.coverpicture?PF+user.coverpicture:PF+"nocover.jpg"} alt="" className='coverimage' />
        <img src={user.profilepicture?PF+user.profilepicture:PF+"user.jpg"} alt="" className='Profileimage' />
      </div>
      <div className='ProfileInfo'>
        <h2 className='UserName'>{user.username}</h2>
        <span className='Info'>
           {user.desc}
        </span>
      </div>

    </div>

    <div className='ProfileBottom'>
    <Feed  Userid={userid}/>
    <Rightbar User={user}/>

    </div>
</div>
   
</div>
    </>
  )
}

export default Profile
