import React, { useContext } from 'react'
import Share from '../Share/Share'
import Post from '../Post/Post'

import { useState,useEffect} from 'react';
import './Feed.css'
import { Authcontext } from '../../Authcontext/Authcontext';

const Feed = ({Userid}) =>{
  const [post ,setpost] = useState([])
  const [loading ,setloading] = useState(false)

  const {user} = useContext(Authcontext)  
  useEffect(() => {
   
    const fetchdata = async()=>{
        setloading(true)

        try {
            const res =Userid ? await fetch("/api/posts/profile/"+Userid, {
                method:"GET",
                headers:{
                 Accept:"application/json",
                 "content-Type":"application/json"
                },
            credentials:"include"
        }):await fetch(`api/posts/timeline/${user.details._id}`, {
          method:"GET",
          headers:{
           Accept:"application/json",
           "content-Type":"application/json"
          },
      credentials:"include"
  })

        const newdata = await res.json()
 
           setpost(newdata.sort((p1,p2)=>{
            return new Date(p2.createdAt)-new Date(p1.createdAt)
           }))
    
           setloading(false)

        } catch (error) {
          console.log(error)

        }
       
      }
    
    fetchdata()
}, [])
    
    

  return (
  <>
  <div className='feed'>

    <Share></Share>
    {loading?("Loading please wait..."): (post.map((p)=>{
    
    return(<Post key={p._id} Post={p}/>
    )
    }))}
  

  </div>
  
  </>
  )
}

export default Feed
