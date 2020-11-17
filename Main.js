import React, { Component } from 'react';
import './Main.css';
import Logo from './Logo.png'
import Profile from './Profile.png'

class Main extends Component{
    
    render(){
        return(
            <div>
                <div className="header">
                    <div className="box1">
                        <img src={Logo} alt="logo-img" className="logo-pic"></img>
                    </div>
                    <div className="box">
                        <label>DASHBOARD</label>
                    </div>
                    <div className="box">
                        <label>ACADEMIC SYESTEM</label>
                    </div>
                    <div className="box">
                        <label>ADMIN SYSTEM</label>
                    </div>
                    <div className="box">
                        <label>RESULTS</label>
                    </div>
                    <div className="box">
                        <label>TRANSPORTATION</label>
                    </div>
                    <div className="box2">
                        <img src={Profile} alt="logo-img" className="profile-pic"></img>
                    </div>
                    
                </div>
            </div>

        );
    }
}
export default Main
