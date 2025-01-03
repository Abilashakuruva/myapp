import React from 'react'
import { useState } from 'react'

const ClickEvent = () => {
    const[number,setNumber]=useState(0)

    const Increament=()=>{
        setNumber(number+1)
    }
    const Decreament=()=>{
        if(number>0){
            setNumber(number-1)
        }        
    }
    const Reset=()=>{
        setNumber(0)
    }
  return (
    <div>
      <h1>{number}</h1>
      <button onClick={Increament}>Increament</button>
      <button onClick={Decreament}>Decreament</button>
      <button onClick={Reset}>Reset</button>
    </div>
  )
}

export default ClickEvent
