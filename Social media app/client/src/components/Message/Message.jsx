import './Message.css'
import {format} from 'timeago.js'

const Message=({message,own})=> {
    const PF = " http://localhost:8000/images/"
  return (
    
   <>
   <div className={own ?"message own":"message"}>
    <div className='messagewrapper'>
        <img src={PF+"profile1.jpg"} className='profileimg' alt="" />
        <p className='textbox'>
      {message.text}
        </p>
    </div>
    <div className='timetext'>{format(message.createdAt)}</div>
   </div>
   
   </>
  )
}

export default Message
