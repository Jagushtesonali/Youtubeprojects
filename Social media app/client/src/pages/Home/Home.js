import React from 'react'
import Feed from '../../components/Feed/Feed'
import Rightbar from '../../components/Rightbar/Rightbar'
import Sidebar from '../../components/Sidebar/Sidebar'
import Topbar from '../../components/Topbar/Topbar'
import './Home.css'

function Home() {
  return (
<>
<Topbar/>
<div className='home-container'>
<Sidebar className="sidebar"/>
    <Feed className="feed"/>
    <Rightbar className="rightbar"/>

</div>
</>
  )
}

export default Home
