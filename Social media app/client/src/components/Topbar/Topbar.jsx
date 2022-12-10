import { faBell, faMessage, faPerson, faSearch } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { Authcontext } from "../../Authcontext/Authcontext"
import './Topbar.css'
const Topbar = ()=>{
    const PF = "http://localhost:8000/images/"
    const navigate = useNavigate()

const {user}= useContext(Authcontext)

const image = JSON.stringify(user.details.profilepicture);

const handleclick = ()=>{

    navigate('/')
}





    return(

<>
<div className="topbar-container">
    <div className="topbar-left">
        <span className="logo" onClick={handleclick} >ChatBook </span>
    </div>
    <div className="topbar-center">
        <div className="searchbox">
          
            <input type="text" placeholder="Search Here" />
            <FontAwesomeIcon icon={faSearch} className="searchicon"></FontAwesomeIcon>
        </div>
    </div>
    <div className="topbar-right">
        <div className="topbarlinks">
            <span >Homepage</span>
            <span >Timeline</span>
        </div>
        <div className="topbar-icons">
            <div className="icon-item">
            <FontAwesomeIcon icon={faPerson}></FontAwesomeIcon>
            <span className="count">1</span>
            </div>
            <div className="icon-item">
            <FontAwesomeIcon icon={faMessage}></FontAwesomeIcon>
            <span className="count">6</span>
            </div>
            <div className="icon-item">
            <FontAwesomeIcon icon={faBell}></FontAwesomeIcon>
            <span className="count">3</span>
            </div>
        </div>
        <div className="profile">
        <img src={user.details.profilepicture ? PF+user.details.profilepicture:PF+"user.jpg"}alt="" />

        </div>
    </div>
</div>


</>

    )


}
export default Topbar