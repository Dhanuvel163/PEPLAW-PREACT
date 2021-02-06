import React,{useEffect,useState} from 'react';
import {Collapse,UncontrolledDropdown,DropdownToggle,DropdownMenu} from 'reactstrap';
import {Link} from "react-router-dom";
import {debounce} from '../../../service/debounce'
import { useLawyerAuth } from "../../../Context/lawyerauth"
import { useAuth } from "../../../Context/userauth"

import './header.scss'
function Logout(props){
    const { lawyerlogout } = useLawyerAuth()
    const { logout } = useAuth()
    return(
        (props.currentUser || props.currentLawyer)
        ?
            <div className="nav-item" onClick={()=>props.currentUser?logout():lawyerlogout()} style={{marginRight:10}}>
                <Link onMouseOver={()=>props.componentsPreload.Home.preload()} onClick={props.mobileToggle} 
                to="/" className="nav-link">
                    <svg style={{marginRight:3}}
                     xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-lock-fill" viewBox="0 0 16 16">
                    <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"/>
                    </svg>
                    Logout
                </Link>
            </div>    
        :
        <div></div>
    )
}

function Mycases(props){
    return(
        (props.currentUser || props.currentLawyer)
        ?
        <div className="nav-item">
            <Link onMouseOver={()=>props.componentsPreload.Mycases.preload()} onClick={props.mobileToggle}
            to="/user/mycases" className="nav-link">
                <svg style={{marginRight:6}} 
                xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-journal-text" viewBox="0 0 16 16">
                <path d="M5 10.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5zm0-2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0-2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0-2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z"/>
                <path d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2z"/>
                <path d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1z"/>
                </svg>
                My Cases
            </Link>
        </div>
        :
        <div></div>
    )
}

function USERDATA(props){
    return(
        (props.currentUser || props.currentLawyer)
        ?
        <div className="nav-item">
            <Link onMouseOver={()=>props.componentsPreload.Useredit.preload()} onClick={props.mobileToggle}
            to="/user/edit" className="nav-link">
                <svg 
                xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16">
                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
                </svg> {props.currentLawyer?props.currentLawyer.displayName:props.currentUser.displayName}
            </Link>
        </div>
        :
        <div></div>
    )
}

function ADDCASEDATA(props){
    return(
        (props.currentUser)
        ?
        <div className="nav-item">
            <Link onMouseOver={()=>props.componentsPreload.Addcase.preload()} onClick={props.mobileToggle}
            to="/user/case" className="nav-link">
                <svg style={{marginRight:6}}
                xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-journal-plus" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M8 5.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V10a.5.5 0 0 1-1 0V8.5H6a.5.5 0 0 1 0-1h1.5V6a.5.5 0 0 1 .5-.5z"/>
                <path d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2z"/>
                <path d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1z"/>
                </svg> 
                Add Case
            </Link>
        </div>
        :
        (props.currentLawyer)
        ?
        <div className="nav-item">
            <Link onMouseOver={()=>props.componentsPreload.Allcases.preload()} onClick={props.mobileToggle}
            to="/search/case" className="nav-link">
                <svg style={{marginRight:6}}
                xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-layout-text-sidebar" viewBox="0 0 16 16">
                <path d="M3.5 3a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5zm0 3a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5zM3 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm.5 2.5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5z"/>
                <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm12-1v14h2a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1h-2zm-1 0H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h9V1z"/>
                </svg>
                See Cases
            </Link>
        </div>
        :
        <div></div>
    )
}


function Header (props){
    const { currentLawyer } = useLawyerAuth()
    const { currentUser } = useAuth()
    const [state,setState]=useState(false)
    const toggle=()=>{
        setState({...state,isOpen:!state.isOpen});
    }
    const mobileToggle=()=>{
        if(window.innerWidth <= 767){
            toggle()
        }
    }
    const preload=(compnt)=>{
            props.componentsPreload[compnt].preload()
    }

    useEffect(()=>{
        var body = document.body;
        var html = document.documentElement;
        var height = 0;
        var h = 0;
        var initiateHeights = function () {
        height = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
        h = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
        }
        var resize = function (e) {
        initiateHeights();
        var scrolled = Math.max(document.body.scrollTop, document.documentElement.scrollTop);
        // height > 0 ? e[0].style.width = scrolled / (height - h) * 100 + "%" : e.style.width = 0 + "%";
        document.getElementById("myBar").style.width = scrolled / (height - h) * 100 + "%"
        }
        document.onscroll = debounce(function () {resize(document.getElementsByClassName("progress-bar"));},15)
        // window.onresize = function () {initiateHeights();}
    })

    return(
            <div className="fixed-top header-footer four-box-shadow-real">
                <div className="navbar navbar-expand-md navbar-dark bg-dark">
                    <div className="navbar-brand">
                        <Link to="/" style={{color:'white'}} className="nav-link">
                        <img src="/assets/lawlogo192.jpg" alt="logo'" height="30" style={{marginRight:10,borderRadius:'50%'}}/>
                        <b >PEP-LAW</b>
                        </Link>
                    </div>
                    <div className="navbar-toggler" onClick={toggle} >
                        <div className="navbar-toggler-icon"></div>
                    </div>
                    <Collapse isOpen={state.isOpen} navbar>
                    {
                        (currentLawyer || currentUser) ?
                        <ul className="ml-auto navbar-nav">
                            <li>
                            <ADDCASEDATA componentsPreload={props.componentsPreload} mobileToggle={mobileToggle}
                            currentLawyer={currentLawyer} currentUser={currentUser}/>
                            </li>
                            <li>
                            <USERDATA componentsPreload={props.componentsPreload} mobileToggle={mobileToggle}
                            currentLawyer={currentLawyer} currentUser={currentUser}/>
                            </li>
                            <li>
                            <Mycases componentsPreload={props.componentsPreload} mobileToggle={mobileToggle}
                            currentLawyer={currentLawyer} currentUser={currentUser}/>
                            </li>
                            <li>
                            <Logout componentsPreload={props.componentsPreload}
                            mobileToggle={mobileToggle} currentLawyer={currentLawyer} currentUser={currentUser}/>
                            </li>
                        </ul>
                        :
                        <ul className="ml-auto navbar-nav">
                            <UncontrolledDropdown nav inNavbar>
                                <DropdownToggle nav caret>
                                <svg style={{marginRight:4}}
                                xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-key-fill" viewBox="0 0 16 16">
                                <path d="M3.5 11.5a3.5 3.5 0 1 1 3.163-5H14L15.5 8 14 9.5l-1-1-1 1-1-1-1 1-1-1-1 1H6.663a3.5 3.5 0 0 1-3.163 2zM2.5 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
                                </svg>
                                Login
                                </DropdownToggle>
                                <DropdownMenu right>
                                    <Link onClick={mobileToggle}
                                     onMouseOver={()=>preload('Lawyerlogin')}  to="/lawyer/login" className="dropdown-item">
                                        Lawyer Login
                                    </Link>
                                    <Link onClick={mobileToggle}
                                    onMouseOver={()=>preload('Userlogin')}  to="/user/login" className="dropdown-item">
                                        User Login
                                    </Link>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                            <UncontrolledDropdown nav inNavbar >
                                <DropdownToggle nav caret>
                                    <svg style={{marginRight:4}}
                                    width="16" height="16" fill="currentColor" className="bi bi-person-plus-fill" viewBox="0 0 16 16">
                                    <path d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                                    <path fillRule="evenodd" d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z"/>
                                    </svg>
                                    Signup
                                </DropdownToggle>
                                <DropdownMenu right>
                                    <Link onClick={mobileToggle}
                                    onMouseOver={()=>preload('Lawersignup')}  to="/lawyer/signup" className="dropdown-item">
                                        Lawyer Signup
                                    </Link>
                                    <Link onClick={mobileToggle}
                                    onMouseOver={()=>preload('Lawyerlogin')}  to="/user/signup" className="dropdown-item">
                                        User Signup
                                    </Link>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                        </ul>
                    }
                    </Collapse>
                </div>
                <div className="progress-container">
                <div className="progress-bar" id="myBar"></div>
                </div>
       </div>
    )
}
export default Header;