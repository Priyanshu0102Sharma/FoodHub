import React from 'react'
import { Link ,useNavigate} from 'react-router-dom';

function Login() {

  const [credentials, setCredentials] = React.useState({
    email: "",
    password: "",

  })

  let navigate = useNavigate(); 
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:4500/api/loginuser", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email: credentials.email, password: credentials.password })

    })
    const json = await response.json();
    console.log(json);
    if (!json.success) {
      alert("NOt valid Credentials")
    }

    if(json.success){
      localStorage.setItem("authToken",json.authToken)
      console.log(localStorage.getItem("authToken"))
      navigate('/');
    }
  }


  const onchange = (event) => {
    setCredentials({ ...credentials, [event.target.name]: event.target.value })
  }

  return (
    <div className='container'>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" name="email" value={credentials.email} onChange={onchange} />
          <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input type="password" className="form-control" placeholder="Password" name='password' value={credentials.password} onChange={onchange} />
        </div>
        <div className="text-center">
          <button type="submit" className="btn btn-outline-warning">Submit</button>
          <Link to="/createuser" className="m-3 btn btn-outline-success">New User? SignUp</Link>
        </div>
      </form>

    </div>
  )
}

export default Login