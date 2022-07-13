import React,{useRef} from 'react';
import './cardprofile.scss'
import {Link} from 'react-router-dom'
import {useLawyerAuth} from '../../../Context/lawyerauth'

export default function Cardprofile(props){
    const { currentLawyer } = useLawyerAuth()
    const acceptHandler=async(id)=>{
        let token = await currentLawyer.getIdToken()
        props.postapply(id,token);
        // setTimeout(() => {props.install()}, 2000);
    }
    const toggleIn = () => {
    profile.current.style.display = 'block'
    }
    const toggleOut = () => {
    profile.current.style.display = 'none'
    }
    let profile =useRef(null)
        return(
            <div className="card bg-danger card-style four-box-shadow"style={{marginTop:'45px'}}>
                <div className="card-header">
                    <div onMouseEnter={toggleIn} onMouseLeave={toggleOut}>
                        <Link to={`/profile/${props.casedata.User[0]._id}`} style={{color:'white'}}>
                        <svg  xmlns="http://www.w3.org/2000/svg" width="20" height="18" fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16">
                        <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                        <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
                        </svg>
                        <span style={{textTransform:'uppercase'}}>
                        {props.casedata.User[0].name}                        
                        </span>                                                  
                        </Link>

                        <div className="User-view four-box-shadow" ref={profile}>
                            <p>
                            <svg  xmlns="http://www.w3.org/2000/svg" width="20" height="18" fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16">
                            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                            <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
                            </svg>     
                            {props.casedata.User[0].name}
                            </p>                            <p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="18" fill="currentColor" className="bi bi-mailbox" viewBox="0 0 16 16">
                            <path d="M4 4a3 3 0 0 0-3 3v6h6V7a3 3 0 0 0-3-3zm0-1h8a4 4 0 0 1 4 4v6a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V7a4 4 0 0 1 4-4zm2.646 1A3.99 3.99 0 0 1 8 7v6h7V7a3 3 0 0 0-3-3H6.646z"/>
                            <path d="M11.793 8.5H9v-1h5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.354-.146l-.853-.854zM5 7c0 .552-.448 0-1 0s-1 .552-1 0a1 1 0 0 1 2 0z"/>
                            </svg>
                            {props.casedata.User[0].email}
                            </p>
                        </div>
                    </div>

                </div>
                <div className="allcases card-body">
                    <div className="card-text text-warning font-weight-bold">
                        Disposition Code
                    </div>
                    <div className="m-35">
                        {props.casedata.dispositioncode}
                    </div>
                    <div className="card-text text-warning font-weight-bold mt-2">
                        Amended Charge
                    </div>
                    <div className="m-35">
                        {props.casedata.amendedcharge}
                    </div>
                    <div className="card-text text-warning font-weight-bold mt-2">
                        Disposition date
                    </div>
                    <div className="m-35">
                        {props.casedata.dispositiondate}
                    </div>
                    <div className="card-text text-warning font-weight-bold mt-2">
                        Sentencetime
                    </div>
                    <div className="m-35">
                        {props.casedata.sentencetime}
                    </div>
                    <div className="card-text text-warning font-weight-bold mt-2">
                        Description
                    </div>
                    <div className="m-35">
                        {props.casedata.description}
                    </div>
                </div>  
                <div className="card-footer">
                    <button className="btn btn-primary" onClick={()=>acceptHandler(props.casedata._id)}>APPLY</button>
                </div>
            </div>
        )
}
