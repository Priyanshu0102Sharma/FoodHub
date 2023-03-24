import React from 'react'
import { Link,useNavigate } from 'react-router-dom'
// import Badge from "@material-ui/core/Badge";
// import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { useCart } from './ContextReducer';
import Modal from '../Modal';
// import Cart from '../screens/Cart';

function Navbar() {

  let navigate = useNavigate();
  const handleLogout = () => {
      localStorage.removeItem('authToken')

      navigate("/login")
  }

  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-warning">
  <div className="container-fluid">
    <Link className="navbar-brand fs-1 fst-italic" to="/">FoodHub</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav me-auto">
        <li className="nav-item">
          <Link className="nav-link active fs-5" aria-current="page" to="/">Home</Link>
        </li>
        {(localStorage.getItem("authToken")) ?
                                <li className="nav-item">
                                    <Link className="nav-link fs-5 mx-3 active" aria-current="page" to="/myorder" >My Orders</Link>  {/* index.css - nav-link color white */}
                                </li> : ""}
        
      </ul>
      
      {(!localStorage.getItem("authToken")) ?
<div className='d-flex'>
          <Link className="btn bg-dark mx-1" aria-current="page" to="/login">Login</Link>
      
          <Link className="btn bg-dark mx-1" aria-current="page" to="/createuser">SignUp</Link>

</div>:<button onClick={handleLogout} className="btn bg-white text-success" >Logout</button>}
   

    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar