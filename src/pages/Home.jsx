import React,{useContext} from 'react'
import { CustomContext } from './utils/Context'
import { Navigate } from 'react-router-dom'

function Home() {

  const {user} =useContext(CustomContext)
if(user.email.length===0){
  return <Navigate to="/login"/>
}

  return (
    <div>Home</div>
  )
}

export default Home