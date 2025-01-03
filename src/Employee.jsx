
import React, {useState} from 'react'

const Employee = () => {
    const[name,setName]=useState("")
    const[role,setRole]=useState("")
    const[email,setEmail]=useState("")
    const[department,setDepartment]=useState("")    
    
    const empDetails={name,role,email,department}

    const empHandler=async(e)=>{
        e.preventDefault()
        console.log(empDetails)
        try{
            const response= await fetch("https://jsonplaceholder.typicode.com/posts",{
                method:"Post",
                heders:{
                    "Content-type":"Application/json"
                },
                body:Json.stringify(empDetails)
            })
            alert("Data posted successfully")
        }catch(error){
            console.log(error)
            alert("Sorry data failed to  post")
        }        
    }     
    

  return (
    <div className='empForm'>
        <div className='section'>
            <form onsubmit={empHandler}>
                <label>Employee Name</label><br/>
                <input type="text" onChange={(e)=>setName(e.target.value)}/><br/>
                <label>Employee Role</label><br/>
                <input type="text" onChange={(e)=>setRole(e.target.value)}/><br/>
                <label>Employee Email</label><br/>
                <input type="text" onChange={(e)=>setEmail(e.target.value)}/><br/>
                <label>Employee Department</label><br/>
                <input type="text" onChange={(e)=>setDepartment(e.target.value)}/><br/>
<button type="submit">Submit</button>
            </form>
        </div>
      
    </div>
  )
}

export default Employee
