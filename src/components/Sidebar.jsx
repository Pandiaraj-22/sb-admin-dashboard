import React from 'react'
import { Link } from 'react-router-dom'
function Sidebar() {
  return <>
  <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

{/* <!-- Sidebar - Brand --> */}
<div className="sidebar-brand d-flex align-items-center justify-content-center">
    <div className="sidebar-brand-icon rotate-n-15">
        <i className="fas fa-laugh-wink"></i>
    </div>
    <div className="sidebar-brand-text mx-3">SB Admin <sup>2</sup></div>
</div>
 
{/* <!-- Divider --> */}
<hr className="sidebar-divider my-0"/>

{/* <!-- Nav Item - Dashboard --> */}
<li className="nav-item active">
    <div className="nav-link" >
       <Link to='/dashboard'>
       <i className="fas fa-fw fa-tachometer-alt"></i>
        <span style={{color:"white"}}>Dashboard</span>
       </Link>
       </div>
</li>

{/* <!-- Divider --> */}
<hr className="sidebar-divider"/>

{/* <!-- Heading --> */}
<div className="sidebar-heading">
    Interface
</div>

{/* <!-- Nav Item - Pages Collapse Menu --> */}
<li className="nav-item">
    <div className="nav-link">
        <Link to='/create'>
        <i className="fas fa-fw fa-cog"></i>
        <span style={{color:"white"}}>Add User</span>
        </Link>
    </div>
</li>

{/* <!-- Nav Item - Utilities Collapse Menu --> */}
<li className="nav-item">
    <div className="nav-link">
        <Link to='/nested-example'>
        <i className="fas fa-fw fa-wrench"></i>
        <span style={{color:"white"}}>Nested Example</span>
        </Link>
    </div> 
</li>

{/* <!-- Divider --> */}
<hr className="sidebar-divider"/>

{/* <!-- Heading --> */}
<div className="sidebar-heading">
    Hooks
</div>

{/* <!-- Nav Item - UseRef --> */}
<li className="nav-item">
    <div className="nav-link">
        <Link to='/useref'>
        <i className="fas fa-fw fa-wrench"></i>
        <span style={{color:"white"}}>UseRef</span>
        </Link>
    </div> 
</li>

{/* <!-- Nav Item - UseReducer --> */}
<li className="nav-item">
    <div className="nav-link">
        <Link to='/usereducer'>
        <i className="fas fa-fw fa-wrench"></i>
        <span style={{color:"white"}}>UseReducer</span>
        </Link>
    </div> 
</li>

{/* <!-- Divider --> */}
<hr className="sidebar-divider my-0"/>

</ul>
  </> 
}

export default Sidebar