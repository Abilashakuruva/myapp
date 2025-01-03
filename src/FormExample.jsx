import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';

const FormExample = () => {
  const[userName,setUserName]=useState("")

  const[newUserDetails,setNewUserDetails]=useState()
  const notify = () => toast("Your data is uploaded");


  const getUserName=(event)=>{
    setUserName(event.target.value)
  }

  const userDetails=(e)=>{
    e.preventDefault()
    setNewUserDetails(userName)
    notify()
  }

  return (
    <section className="formsection">
      <h2>Hello, {newUserDetails}</h2>
      <ToastContainer />
        <div className='inputDiv'>
          <form onSubmit={userDetails} >
            <input type="text" onChange={getUserName} placeholder='Enter your name'/><br/>
            <button className='submitbtn' type='submit' >Submit</button>
            </form>
        </div>
    </section>
  )
  
}

export default FormExample
