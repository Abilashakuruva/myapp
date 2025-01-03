

import React from 'react'
import { useState,useEffect } from 'react'

const StateMgm = () => {
    const[city,setCity]=useState("Hyderabad");

    useEffect(()=>{
        if (city==="Goa"){
            setCity("Delhi")
        }else{
            setCity("Bangalore")
        }   
    },[city])    
    
  return (
    <div>
      <h1>I am live in {city}</h1>      
    </div>
  )
}

export default StateMgm
