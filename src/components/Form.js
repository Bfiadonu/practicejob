import React from 'react'
import {useState} from "react"

export const Form = () => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [person, setPerson] = useState([]);


    const handleClick = (e) => {
        e.preventDefault();
       console.log(firstName, lastName)
        }
    
    
    

   

  return (
    <>
    <div className="container">
    <form>
    <div className="form-group">
      <label for="exampleInputEmail1">First Name: </label>
      <input type="text" className="form-control" name="First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
     
    </div>
    <div className="form-group">
      <label for="exampleInputPassword1">Last Name:</label>
      <input type="text" className="form-control" name="lastName" value={lastName} onChange={(e) => setLastName(e.target.value)} />
    </div>
    
    <button type="submit" className="btn btn-primary" onClick={handleClick} >Submit</button>
  </form>
  </div>

  <div>
    <h1>{firstName}</h1>
    <h1>{lastName}</h1>
  </div>
    </>

  )
}

export default Form;