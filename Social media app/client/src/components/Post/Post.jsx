import React, { useContext, useState } from 'react'
import './Post.css'

import {format} from 'timeago.js'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEllipsisVertical, faHeart, faThumbsUp } from '@fortawesome/free-solid-svg-icons'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Post=({Post}) =>{
    const [like ,setlike]= useState(Post.likes.length)
    const [islike ,setislike]= useState(false)
    const[user,setuser]=useState("")
const navigate = useNavigate()


const PF = " http://localhost:8000/images/"


const handleclick = async()=>{
    
    
setlike(islike ? like-1:like+1)
setislike(!islike)
   
     
        }
     
    
    
    


useEffect(() => {
   const fetchdata = async()=>{
 const res = await fetch(`/api/user/${Post.userid}`,{
    method:"GET",
    headers:{
     Accept:"application/json",
     "content-Type":"application/json"
    },
credentials:"include"

 })
 const data =await res.json()

 setuser(data)


   }
   fetchdata()
}, [Post.userid])

const handlecover = ()=>{
    navigate(`/profile/${Post.userid}`)
}

   
  return (
   <>
   <div className='PostContainer'>
<div className='Postwrapper'>
        <div className='PostHead'>
           <div className='images'>
       <img src={user.profilepicture?PF+user.profilepicture:PF+"profile1.jpg"} alt="" className='ProfileImage' onClick={handlecover} />
            <h4>{user.username}</h4>
            <small>{format(Post.createdAt)}</small>
           </div>
           <FontAwesomeIcon icon={faEllipsisVertical}></FontAwesomeIcon>

        </div>
        <div>{Post.desc}</div>
        <div className='PostImage'>
            <img src={PF + Post.img} alt="" />
        </div>
        <div className='PostBottom'>
            <div className='LikeIcons'>
                <FontAwesomeIcon icon={faThumbsUp} color="blue" className='like' onClick={handleclick} />
                <FontAwesomeIcon icon={faHeart} color="red" className='heart'onClick={handleclick} />
                <div className='likes'><span>{like}</span>Peaple like it</div>
            </div>
           <div className='Comments'><span>{Post.comment || 7}</span>Comments</div>
        </div>
    </div>
   </div>
   


   
   
   
   </>
  )
}

export default Post
