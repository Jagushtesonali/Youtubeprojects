import react, { useContext } from 'react'
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import Profile from './pages/Profile/Profile'
import Register from './pages/Register/Register'
import { Route, Routes,BrowserRouter  } from "react-router-dom";
import { Authcontext } from './Authcontext/Authcontext'
import Messenger from './pages/messenger/Messenger'


const App = ()=>{

  const {user}= useContext(Authcontext)

  return(

<>
<BrowserRouter>
<Routes>
<Route path='/' element={user ?<Home/>:<Register/>} exact></Route>
<Route path='/login' element={<Login/>}/>
<Route path='/register' element={user?<Home/>:  <Register/>}/>
<Route path='/messenger' element={user?<Messenger/>:<Register/>}/>
<Route path='/profile/:id' element={<Profile/>}/>

</Routes>


</BrowserRouter>




</>

  )

}
export default App