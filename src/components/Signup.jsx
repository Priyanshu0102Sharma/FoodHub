import React from 'react'
import { Link } from 'react-router-dom'

function Signup() {

    const [credentials, setCredentials] = React.useState({
        name:"",
        email:"",
        password:"",
        geolocation:""

    })
const handleSubmit= async(e)=>{
e.preventDefault();
const response =await fetch("http://localhost:4500/api/createuser",{
    method:'POST',
    headers:{
        'Content-Type': 'application/json'
    },
    body:JSON.stringify({name:credentials.name, email:credentials.email, password:credentials.password, location:credentials.geolocation})
  
})
const json = await response.json();
console.log(json);
if(!json.success){
alert("NOt valid Credentials")
}
}


const onchange=(event)=>{
setCredentials({...credentials,[event.target.name]:event.target.value })
}

    return (



    <div className='container pt-3'>
        
        {/* sign up form */}
        <form onSubmit={handleSubmit}>
  <div className="form-group">
    <label htmlFor="exampleInputEmail1">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" name = "email" value={credentials.email} onChange={onchange}/>
    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div className="form-group">
    <label htmlFor="exampleInputPassword1">Password</label>
    <input type="password" className="form-control" placeholder="Password" name='password' value={credentials.password} onChange={onchange}/>
  </div>
  <div className="form-group">
    <label htmlFor="exampleInputPassword1">Name</label>
    <input type="text" className="form-control" placeholder="Password" name='name' value={credentials.name}onChange={onchange} />
  </div>
  <div className="form-group">
    <label htmlFor="exampleInputPassword1">location</label>
    <input type="location" className="form-control" name='geolocation' value={credentials.geolocation} placeholder="Password" onChange={onchange}/>
  </div>
 <div className="text-center">
  <button type="submit" className="btn btn-outline-warning">Submit</button>
  <Link to="/login" className = "m-3 btn btn-outline-success">Already a User? Login</Link>
 </div>
 </form>

    </div>
  )
}

export default Signup