import React from 'react'
import './Share.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {  faLocationDot, faPhotoFilm, faSmile, faTags } from '@fortawesome/free-solid-svg-icons'
import { useContext } from 'react'
import { Authcontext } from '../../Authcontext/Authcontext'
import { useRef } from 'react'
import { useState } from 'react'
import axios from 'axios'
const Share=()=> {
    const PF = "http://localhost:8000/images/"
    const[desc ,setdesc]= useState("")

    const [file ,setfile]=useState(null)

   const {user}= useContext(Authcontext)
   const submithandler= async(e)=>{
  e.preventDefault()
  
 const newpost = {
    userid:user.details._id,
    desc:desc
 }

if (file) {
    const data = new FormData();
  
    data.append("file",file)
    data.append("name",file.name)
    const fileName = Date.now() + file.name;
    newpost.img= fileName
    console.log(file.name)
    setfile(fileName)
    try {
        const res = await fetch("api/upload",{

            method:"POST",
            headers:{
             "Content-Type":"application/json",
             "Clear-Site-Data": "*"
            },
            body:JSON.stringify(file)
        
        
        })
        const data = await res.json()
        console.log(data)
        
    } catch (error) {
        
    }
}

    try {
        const res = await fetch("api/posts",{

            method:"POST",
            headers:{
             "Content-Type":"application/json",
             "Clear-Site-Data": "*"
            },
            body: JSON.stringify(newpost)
        
        
        })
        const data = await res.json()
        console.log(data)
        window.location.reload();
    } catch (error) {
        
    }

   }

  return (
    <>
    <div className='ShareContainer'>
        <div className='ShareWrapper'>
        <div className='ImageInput'>
        <img src={user.details.profilepicture ? PF+user.details.profilepicture:PF+"user.jpg"}alt="" />
            <input type="text" placeholder='What is in your mind safak' onChange={(e)=>{setdesc(e.target.value)}} />
        </div>
        <hr />
        <form className='TagItems' onSubmit={submithandler} method="post">
            <label className='icons' htmlFor='file'>
                <FontAwesomeIcon  icon={faPhotoFilm} color="red"></FontAwesomeIcon>
                <span>Photos</span>
                <input style={{display:"none"}} type="file" id='file'  onChange={(e)=>{setfile(e.target.files[0])}} />
            </label>
            <div className='icons'>
                <FontAwesomeIcon icon={faTags} color="blue"></FontAwesomeIcon>
                <span>Photos</span>
                
            </div>
            <div className='icons'>
                <FontAwesomeIcon icon={faLocationDot} color="green"></FontAwesomeIcon>
                <span>Location</span>
                
            </div>
            <div className='icons'>
                <FontAwesomeIcon icon={faSmile} color="#fad014"></FontAwesomeIcon>
                <span>Feelings</span>
                
            </div>
            <button className='ShareButton' type='submit'>Share</button>
        </form>

        </div>
      
    </div>
    </>
  )
}

export default Share
