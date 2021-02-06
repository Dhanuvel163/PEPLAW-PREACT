import React,{useRef,useState} from 'react';
import {Link} from 'react-router-dom'
import {debounce} from '../../../service/debounce'
import {useLawyerAuth} from '../../../Context/lawyerauth'
import {useAuth} from '../../../Context/userauth'
export default function Cardprofile(props){
    const { currentLawyer } = useLawyerAuth()
    const { currentUser } = useAuth()
    const [activeTab, setActiveTab] = useState('1');
    const toggleTab = tab => {
        if(activeTab !== tab) setActiveTab(tab);
    }

    const toggleIn = () => {
    profile.current.style.display = 'block'
    }
    const toggleOut = () => {
    profile.current.style.display = 'none'
    }
    let profile =useRef(null)
    return(
        <>
        {
            (currentLawyer)
            ?
            <div className="card bg-danger card-style four-box-shadow" style={{marginTop:50}} >
                <div className="card-header">
                    <div onMouseEnter={toggleIn} onMouseLeave={toggleOut}>
                        <Link to={`/profile/${props.casedata.User._id}`} style={{color:'white'}}>
                        <svg width="20" height="18" fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16">
                        <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                        <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
                        </svg>            
                        <span style={{textTransform:'uppercase'}}>
                        {props.casedata.User[0].name}                        
                        </span>  
                        </Link>         
                        <div className="User-view four-box-shadow" ref={profile}>
                            <p>
                            <svg  width="20" height="18" fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16">
                            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                            <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
                            </svg>     
                            {props.casedata.User[0].name}
                            </p>                            <p>
                            <svg width="20" height="18" fill="currentColor" className="bi bi-mailbox" viewBox="0 0 16 16">
                            <path d="M4 4a3 3 0 0 0-3 3v6h6V7a3 3 0 0 0-3-3zm0-1h8a4 4 0 0 1 4 4v6a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V7a4 4 0 0 1 4-4zm2.646 1A3.99 3.99 0 0 1 8 7v6h7V7a3 3 0 0 0-3-3H6.646z"/>
                            <path d="M11.793 8.5H9v-1h5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.354-.146l-.853-.854zM5 7c0 .552-.448 0-1 0s-1 .552-1 0a1 1 0 0 1 2 0z"/>
                            </svg>
                            {props.casedata.User[0].email}
                            </p>
                            {/* <p>
                            <svg width="20" height="18" fill="currentColor" className="bi bi-telephone-fill" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
                            </svg>
                            {props.casedata.User.mobile}
                            </p> */}
                        </div>
                    </div>
                </div>
                <div className="card-body mycases">
                    <DetailPart casedata={props.casedata}/>
                </div>
            </div>
            :
            (currentUser)
            ?
            <div className="card bg-danger card-style four-box-shadow"style={{marginTop:50}} >
                <div className="card-header" style={{textTransform:'uppercase'}}>
                <span className="text-warning" style={{fontWeight:'bold'}}> Disposition Code : </span>
                 {props.casedata.dispositioncode}
                </div>
                <div className="card-body mycases">

                    <div>
                    <ul className="nav nav-tabs">
                        <div className="nav-item">
                            <div className={activeTab === '1'?"nav-link active":"nav-link"} onClick={() => { toggleTab('1'); }}> 
                                Detail
                            </div>
                        </div>
                        <div className="nav-item">
                            <div className={activeTab === '2'?"nav-link active":"nav-link"} onClick={() => { toggleTab('2'); }}> 
                                Requests
                            </div>
                        </div>
                    </ul>
                    <div className="tab-content">
                        <div className={activeTab === '1'?"tab-pane active":"tab-pane"}>
                            <div className="mt-3"></div>
                            <DetailPart casedata={props.casedata}/>
                        </div>
                        <div className={activeTab === '2'?"tab-pane active font-weight-bold":"tab-pane "}>
                            <div style={{height:15}}></div>
                            {
                                props.casedata.lawyerRequests.length === 0 ?
                                <div className="text-center">No Requests Yet !</div>:
                                props.casedata.lawyerRequests.map((lawyer,index)=>
                                    <RequestCardLawyerDetail key={index} id={props.casedata._id} 
                                    lawyer={lawyer} locked={props.casedata.locked} postacceptbyuser={props.postacceptbyuser}
                                    />
                                )
                            }
                        </div>
                    </div>
                    </div>
                </div>
            </div>
            :
            null
        }
        </>
    )
}










function DetailPart(props){
    return(
        <>
        <div className="card-text">
            <span className="text-warning" style={{fontWeight:'bold'}}> Disposition Code : </span>
            {props.casedata.dispositioncode}
        </div>
        <div className="card-text">
            <span className="text-warning" style={{fontWeight:'bold'}}> Amended Charge : </span>
            {props.casedata.amendedcharge}
        </div>
        <div className="card-text">
            <span className="text-warning" style={{fontWeight:'bold'}}> Disposition date : </span>
            {props.casedata.dispositiondate}
        </div>
        <div className="card-text">
            <span className="text-warning" style={{fontWeight:'bold'}}> Sentencetime : </span>
            {props.casedata.sentencetime}
        </div>
        <div className="card-text">
            <span className="text-warning" style={{fontWeight:'bold'}}> Description : </span>
            {props.casedata.description}
        </div>
        </>
    )
}

function RequestCardLawyerDetail({lawyer,locked,id,postacceptbyuser}){
    const toggleIn = (e) => {
        e.persist()
        // var x = e.clientX+"px",y = e.clientY+"px";
        // profile.current.style.top = y;
        // profile.current.style.left = x;
        profile.current.style.display = 'block'
    }
    const toggleOut = () => {
        profile.current.style.display = 'none'
    }
    let profile =useRef(null)
    const { currentUser } = useAuth()
    const postaccept = async() => {
        let token = await currentUser.getIdToken()
        postacceptbyuser(id,lawyer.email,token,"USER")
    }
    return(
        <>
            <div style={{marginTop:20}}>
                <Link to={`/profile/${lawyer._id}`} style={{color:'white'}}>
                {lawyer.name.substring(0,10)}                
                </Link>
                <svg style={{marginLeft:10}} onMouseEnter={(e)=>debounce(toggleIn(e),200)} onMouseLeave={toggleOut}
                width="20" height="18" fill="currentColor" className="bi bi-info-circle-fill" viewBox="0 0 16 16">
                <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412l-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"/>
                </svg>
                    
                <span style={{float:'right'}}>
                    <button className="btn btn-sm btn-primary" onClick={postaccept} disabled={locked}>
                    Accept
                    </button>
                </span>
            </div>
            
            <div className="User-view four-box-shadow" ref={profile}>
                <p>
                <svg  width="20" height="18" fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16">
                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
                </svg>     
                {lawyer.name}
                </p>                            <p>
                <svg width="20" height="18" fill="currentColor" className="bi bi-mailbox" viewBox="0 0 16 16">
                <path d="M4 4a3 3 0 0 0-3 3v6h6V7a3 3 0 0 0-3-3zm0-1h8a4 4 0 0 1 4 4v6a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V7a4 4 0 0 1 4-4zm2.646 1A3.99 3.99 0 0 1 8 7v6h7V7a3 3 0 0 0-3-3H6.646z"/>
                <path d="M11.793 8.5H9v-1h5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.354-.146l-.853-.854zM5 7c0 .552-.448 0-1 0s-1 .552-1 0a1 1 0 0 1 2 0z"/>
                </svg>
                {lawyer.email}
                </p>
                {/* <p>
                <svg width="20" height="18" fill="currentColor" className="bi bi-telephone-fill" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
                </svg>
                {lawyer.mobile}
                </p> */}
            </div>
        </>
    )
}