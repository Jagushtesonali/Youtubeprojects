import { useEffect } from 'react'
import { useState } from 'react'
import './Conversation.css'

const  Conversation = ({conversations,cuser})=> {

  const [user , setuser]=useState("")

  useEffect(() => {

  const getuser = async()=>{
    const friendid = await conversations.members.find((m)=>m !== cuser.details._id)
    
    try {

      const res = await fetch(`api/user/${friendid}`,{

        method:"GET",
        headers:{
         Accept:"application/json",
         "content-Type":"application/json"
        },
    credentials:"include"
      })
      const data = await res.json()
      setuser(data)
      console.log(user)
    } catch (error) {
      console.log(error)
    }




  }
getuser()


   
  }, [conversations,cuser])
  
const PF = " http://localhost:8000/images/"
  return (
   <>
     <div className="conversation">
        <img src={user.profilepicture?PF+user.profilepicture:PF+"user.jpg"} className='profileimg' alt="" />
        <span>{user.username}</span>

     </div>

   </>
  )
}

export default Conversation
