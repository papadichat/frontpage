import React from 'react'
import logo from '../../image/logo.jpg'

export const Navbar = () => {
    return (
        <div className="navbar">
            <div className="left-nav">
                <i className="fas fa-circle"></i>&nbsp;&nbsp;Logo
            </div> 
            <div className="middle-nav">
                <div className="middle-items">
                    <p>Dashboard</p>
                </div>
                <div className="middle-items">
                    <p>Find Experts</p>
                </div>
                <div className="middle-items">
                    <p>Discussion</p>
                </div>
            </div>
            <div className="right-nav">
                <div className="right-items">
                    <button>
                    <i className="far fa-bell 2x"></i>
                    </button>
                </div>
                <div className="right-items">
                    <button>
                    <i className="far fa-comment-alt"></i>
                    </button>
                
                </div>
                <div className="right-items">
                    <button>
                    <img src={logo} alt="users" id="logo"/>
                    </button>
                    
                </div>
                <div className="right-items">
                <div className="right-items">
                <i className="fas fa-angle-down"></i>
                </div>
                </div>
            </div>

            
        </div>
    )
}

export default Navbar
