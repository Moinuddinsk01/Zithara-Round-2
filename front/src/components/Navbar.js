import React from 'react';
import './navb.css';

const Navbar = () => {
  return (
    <>
    <nav className="navbar bg-dark">
        <div className="container-fluid" style={{ display: "flex", justifyContent: "space-between",alignItems: "center" }}>
            
              <h1 style={{ textAlign: "center", margin: "0 auto" }} > <b> Zithara </b>  </h1>  
           
           
        </div>
    </nav>
    
    </>
  )
}

export default Navbar