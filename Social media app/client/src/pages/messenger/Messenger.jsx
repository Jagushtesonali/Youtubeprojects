import React from 'react'
import { useRef } from 'react'
import { useEffect } from 'react'
import { useContext } from 'react'
import { useState } from 'react'
import { Authcontext } from '../../Authcontext/Authcontext'
import Chatonline from '../../components/Chatonline/Chatonline'
import Conversation from '../../components/Conversation/Conversation'
import Message from '../../components/Message/Message'
import Topbar from '../../components/Topbar/Topbar'
import './Mesenger.css'


const Messenger=() =>{
  const[conversation ,setconversation]= useState([])
  const[currentchat,setcurrentchat]=useState(null)
  const[message,setmessage]=useState([])
  const[newmessage,setnewmessage]=useState("")

 
  const {user}= useContext(Authcontext)
const usescroll = useRef()




  useEffect(() => {
    
    const getuserdata = async()=>{

      try {
        const res = await fetch(`api/conversation/${user.details._id}`,{

          method:"GET",
          headers:{
           Accept:"application/json",
           "content-Type":"application/json"
          },
      credentials:"include"
  
         })
         const data = await res.json()
         setconversation(data)
          
      
        
      } catch (error) {
        console.log(error)
        
      }

    }
    getuserdata()
    

   
  }, [user.details._id])


useEffect(() => {

  const getmessage =async ()=>{
  
   try {
    const res = await fetch(`api/messages/${currentchat?._id}`,{
      method:"GET",
      headers:{
       Accept:"application/json",
       "content-Type":"application/json"
      },
  credentials:"include"
    })
    const data = await res.json()
     setmessage(data)
     console.log(message)
    
   } catch (error) {
    console.log(error)
   }
  
  }
  getmessage()
  
  
  
  }, [currentchat])
  
  const handleclick = async (e)=>{

    const savemessage = {
      sender: user.details._id,
      text:newmessage,
      conversationid:currentchat._id
    }
    const recievrid  = currentchat.members.find(member=>member !== user.details._id)
    try {
      const res = await fetch("api/messages",{
        method:"POST",
    headers:{
     "Content-Type":"application/json",
     "Clear-Site-Data": "*"
    },
    body: JSON.stringify(savemessage)

      })
      const data = await res.json()
      setmessage([...message,data])
      
      
    } catch (error) {
      console.log(error)
    }


  }
  
  useEffect(() => {
 
usescroll.current?.scrollIntoView({behavior:"smooth"})

  }, [message])


  return (
    <>
  <Topbar></Topbar>
  <div className='messenger '>
    <div className='ChatMenu'><div className='ChatMenuwrapper' >
      <input type="text" placeholder='Search here ....' className='inputarea'/>
{conversation.map((c)=>{

return(<>
<div onClick={()=>setcurrentchat(c)} key={c._id}>
<Conversation conversations={c} cuser={user}  />
</div>


</>)

})}
      </div></div>
    <div className='ChatBox'><div className='chatboxwrapper'>
      {currentchat ?(<>
        <div className='ChatBoxtop'>
     {message.map((m)=>{
      return(<>
      <div ref={usescroll}>
      <Message message={m} own={m.sender === user.details._id} />
      </div>
     
      </>)
     })}
     </div>
     <div className='ChatBoxbottom'>
      <textarea type="text" placeholder='type here....' className='chatinput'
      onChange={(e)=>{setnewmessage(e.target.value)}}  
      
      />
      <button className='chatbutton' onClick={handleclick}>Send</button>
     </div>
    
      
      </>):(<>
      
      <div className='openconversation'>Open a new conversation here</div>
      </>)}
      </div>
      </div>
    <div className='Chatonline'><div className='chatonlinewrapper'> <Chatonline/>
    <Chatonline/>
    <Chatonline/>
    <Chatonline/>
    </div></div>
  </div>
    
    
    </>
  )
}

export default Messenger
