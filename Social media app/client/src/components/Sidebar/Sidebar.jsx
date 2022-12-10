import React, { useContext } from 'react'
import './Sidebar.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBookBookmark, faBriefcase, faCalendar, faGraduationCap, faMessage, faQuestion, faUserGroup, faVideo, faWifi } from '@fortawesome/free-solid-svg-icons'
import { Authcontext } from '../../Authcontext/Authcontext'

const Sidebar=()=> {

const{dispatch} = useContext(Authcontext)

const handleclick = ()=>{
dispatch({type:"LOGOUT"})


}




  return (
    <div className='sidebar'>
      <div className='wrapper'>
       <ul className='SidebarList'>
        <li className='ListItem'>
         <FontAwesomeIcon icon={faWifi}></FontAwesomeIcon>
         <span className='ListTitle'>Feed</span>

        </li>
        <li className='ListItem'>
         <FontAwesomeIcon icon={faMessage}></FontAwesomeIcon>  
     <span className='ListTitle'>Chat</span>
        </li>
        <li className='ListItem'>
          <FontAwesomeIcon icon={faVideo}></FontAwesomeIcon>
  <span className='ListTitle'>Videos</span>
        </li>
        <li className='ListItem'>
         <FontAwesomeIcon icon={faUserGroup}></FontAwesomeIcon>  
     <span className='ListTitle'>Groups
          </span>
        </li>
        <li className='ListItem'>
        <FontAwesomeIcon icon={faBookBookmark}></FontAwesomeIcon>   
     <span className='ListTitle'>Bookmarks</span>
        </li>
        <li className='ListItem'>
          <FontAwesomeIcon icon={faQuestion}></FontAwesomeIcon>  
     <span className='ListTitle'>Questions</span>
        </li>
        <li className='ListItem'>
       <FontAwesomeIcon icon={faBriefcase}></FontAwesomeIcon>    
     <span className='ListTitle'>Jobs</span>
        </li>
        <li className='ListItem'>
       <FontAwesomeIcon icon={faCalendar}></FontAwesomeIcon> 
     <span className='ListTitle'>Events</span>
        </li>
        <li className='ListItem'>
         <FontAwesomeIcon icon={faGraduationCap}></FontAwesomeIcon>
          <span className='ListTitle'>Courses</span>
        </li>
       </ul>
       <button className='Showmore' onClick={handleclick}>Logout</button>
       <hr className='HrLine' />
       <div className='Friends'>
        <ul className='FriendList'>
          <li className='FriendListItem'>
            <div className='images'>
              <img src="https://th.bing.com/th/id/OIP.jryuUgIHWL-1FVD2ww8oWgHaHa?pid=ImgDet&rs=1" alt="" />
            </div>
            <span className='FriendName'>
              Sonali Jagushte
            </span>
          </li>
          <li className='FriendListItem'>
            <div className='images'>
              <img src="https://th.bing.com/th/id/OIP.jryuUgIHWL-1FVD2ww8oWgHaHa?pid=ImgDet&rs=1" alt="" />
            </div>
            <span className='FriendName'>
              Sonali Jagushte
            </span>
          </li>
          <li className='FriendListItem'>
            <div className='images'>
              <img src="https://th.bing.com/th/id/OIP.jryuUgIHWL-1FVD2ww8oWgHaHa?pid=ImgDet&rs=1" alt="" />
            </div>
            <span className='FriendName'>
              Sonali Jagushte
            </span>
          </li>
          <li className='FriendListItem'>
            <div className='images'>
              <img src="https://th.bing.com/th/id/OIP.jryuUgIHWL-1FVD2ww8oWgHaHa?pid=ImgDet&rs=1" alt="" />
            </div>
            <span className='FriendName'>
              Sonali Jagushte
            </span>
          </li>
          <li className='FriendListItem'>
            <div className='images'>
              <img src="https://th.bing.com/th/id/OIP.jryuUgIHWL-1FVD2ww8oWgHaHa?pid=ImgDet&rs=1" alt="" />
            </div>
            <span className='FriendName'>
              Sonali Jagushte
            </span>
          </li>
            <li className='FriendListItem'>
            <div className='images'>
              <img src="https://th.bing.com/th/id/OIP.jryuUgIHWL-1FVD2ww8oWgHaHa?pid=ImgDet&rs=1" alt="" />
            </div>
            <span className='FriendName'>
              Sonali Jagushte
            </span>
          </li>
        </ul>
       </div>
      </div>
   
    </div>
  )
}

export default Sidebar
