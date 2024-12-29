import React from "react";
import {Link,useLocation, useNavigate} from "react-router-dom";

export default function Navbar() {
  let history=useNavigate();
  const handleLogout= ()=>{
    localStorage.removeItem('token');
    history('/login');
  }
  let location = useLocation();
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link className="navbar-brand" to="/">
      <h4>iNotebook</h4>
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarScroll"
        aria-controls="navbarScroll"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarScroll">
        <ul
          className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll"
          style={{ maxHeight: "100px", overflowY: "auto" }}
        >
          <li className="nav-item">
            <Link className={`nav-link ${location.pathname==="/"?"active":""}`} aria-current="page" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className={`nav-link ${location.pathname==="/about"?"active":""}`} to="/about">
              About
            </Link>
          </li>
          
            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
              
              <li>
                <a className="dropdown-item" href="#">
                  Another action
                </a>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
              </li>
            </ul>
        </ul>
        {!localStorage.getItem('token')?<form className="d-flex">
        <Link className="btn btn-primary mx-1" to="/login" role="button">Login</Link>
        <Link className="btn btn-primary mx-1" to="/signup" role="button">Signup</Link>
        </form>: <button onClick={handleLogout} className="btn btn-primary">Logout</button>}
      </div>
    </nav>
  );
}
