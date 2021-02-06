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
                            {/* <p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="18" fill="currentColor" className="bi bi-telephone-fill" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
                            </svg>
                            {props.casedata.User[0].mobile}
                            </p> */}
                        </div>
                    </div>

                </div>
                <div className="allcases card-body">
                    <div className="card-text">
                        <span className="text-warning" style={{fontWeight:'bold'}}> Disposition Code : </span>
                        {/* <span className="chips"> */}
                        {props.casedata.dispositioncode}
                        {/* </span> */}
                    </div>
                    <div className="card-text">
                        <span className="text-warning" style={{fontWeight:'bold'}}> Amended Charge : </span>
                        {/* <span className="chips"> */}
                        {props.casedata.amendedcharge}
                        {/* </span> */}
                    </div>
                    <div className="card-text">
                        <span className="text-warning" style={{fontWeight:'bold'}}> Disposition date : </span>
                        {/* <span className="chips"> */}
                            {props.casedata.dispositiondate}
                        {/* </span> */}
                    </div>
                    <div className="card-text">
                        <span className="text-warning" style={{fontWeight:'bold'}}> Sentencetime : </span>
                        {/* <span className="chips"> */}
                            {props.casedata.sentencetime}
                        {/* </span> */}
                    </div>
                    <div className="card-text">
                        <span className="text-warning" style={{fontWeight:'bold'}}> Description : </span>
                        {/* <span className="chips"> */}
                            {props.casedata.description?`${props.casedata.description}`:'No Data !'}
                        {/* </span> */}
                    </div>
                    <button className="btn btn-primary mt-5" onClick={()=>acceptHandler(props.casedata._id)}>APPLY</button>
                </div>
            </div>
        )
}
