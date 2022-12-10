import React, { useState } from 'react'
import './Rightbar.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGift } from '@fortawesome/free-solid-svg-icons'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Rightbar=({User}) =>{
  const [friends ,setfriends]= useState([])
  const PF = "http://localhost:8000/images/"
  const navigate = useNavigate()
      console.log(User)

       useEffect(() => {
      
         const fetchfriends = async ()=>{
          
        try {
          const res = await fetch(`/api/user/friends/${User._id}`,{
            method:"GET",
            headers:{
             Accept:"application/json",
             "content-Type":"application/json"
            },
        credentials:"include"
          })
          const data = await res.json()
      
          setfriends(data)
          console.log(friends)
        }

         catch (error) {
          console.log(error)
        }



         }
         fetchfriends()


       }, [User])
 
        const handlefriend = ()=>{
          
          navigate(`/profile/${friends._id}`)

        }

  const Homerightbar = ()=>{
   return(
    <>
    <div className='Rightbaricons'>
          <FontAwesomeIcon icon={faGift} fontSize={50} color="#e73e8d"></FontAwesomeIcon>
          <div ><b>Pola foster</b> and <b>3 other friends </b>have birthday today</div>
          
        </div>
        <div className='RightbarImage'>
          <img src="https://quotedtext.com/wp-content/uploads/2020/04/motivational-status-on-going-far-1024x768.jpg" alt="" />
        </div>

        <h4 className='OnlineFriends'>Online Friends</h4>
        <div className='Friends'>
          <ul className='FriendList'>
          <li className='FriendListItem'>
            <div className='images'>
              <img src="https://th.bing.com/th/id/OIP.jryuUgIHWL-1FVD2ww8oWgHaHa?pid=ImgDet&rs=1" alt="" />
               <div className='GreenDot'></div>
            </div>
            <span className='FriendName'>
              Sonali Jagushte
            </span>
          </li>
          <li className='FriendListItem'>
            <div className='images'>
              <img src="https://th.bing.com/th/id/OIP.jryuUgIHWL-1FVD2ww8oWgHaHa?pid=ImgDet&rs=1" alt="" />
               <div className='GreenDot'></div>
            </div>
            <span className='FriendName'>
              Sonali Jagushte
            </span>
          </li>
          <li className='FriendListItem'>
            <div className='images'>
              <img src="https://th.bing.com/th/id/OIP.jryuUgIHWL-1FVD2ww8oWgHaHa?pid=ImgDet&rs=1" alt="" />
               <div className='GreenDot'></div>
            </div>
            <span className='FriendName'>
              Sonali Jagushte
            </span>
          </li>
          <li className='FriendListItem'>
            <div className='images'>
              <img src="https://th.bing.com/th/id/OIP.jryuUgIHWL-1FVD2ww8oWgHaHa?pid=ImgDet&rs=1" alt="" />
               <div className='GreenDot'></div>
            </div>
            <span className='FriendName'>
              Sonali Jagushte
            </span>
          </li>
          <li className='FriendListItem'>
            <div className='images'>
              <img src="https://th.bing.com/th/id/OIP.jryuUgIHWL-1FVD2ww8oWgHaHa?pid=ImgDet&rs=1" alt="" />
               <div className='GreenDot'></div>
            </div>
            <span className='FriendName'>
              Sonali Jagushte
            </span>
          </li>
          <li className='FriendListItem'>
            <div className='images'>
              <img src="https://th.bing.com/th/id/OIP.jryuUgIHWL-1FVD2ww8oWgHaHa?pid=ImgDet&rs=1" alt="" />
               <div className='GreenDot'></div>
            </div>
            <span className='FriendName'>
              Sonali Jagushte
            </span>
          </li>
          </ul>
        </div>

    </>
   )


  }

  const Profilerightbar = ()=>{
       
    return(

<>
<div className='PersonalInfo'>
  <h3>User Information</h3>
  <div className='infowrapper'>
  <span>City:</span>
  <span>{User.city}</span>
  </div>
  <div className='infowrapper'>
  <span>From:</span>
  <span>{User.from}</span>
  </div>
  <div className='infowrapper'>
  <span>Relationship:</span>
  <span>{User.relationship}</span>
  </div>
 

</div>
<div className='followingsfriend'>
<h3>User Friends </h3>
<div className='RightbarFollowings'>
 {friends.map((friend)=>{

return(
<>
<div className='following'>
    <img src={friend.profilepicture?PF+friend.profilepicture:PF+"user.jpg"} className='followingimage' alt="" onClick={handlefriend} />
    <span>{friend._id}</span>
  </div>
</>

)

 }) }
  
</div>
</div>


</>

    )
  }



  return (
    <>
    <div className='rightbarcontainer'>
      <div className='RightbarWrapper'>
       {User ? <Profilerightbar/>:<Homerightbar/>}
      </div>
    </div>
    
    
    </>
  )
}

export default Rightbar
