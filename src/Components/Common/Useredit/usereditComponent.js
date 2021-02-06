import React,{useState,useEffect} from "react";
import './useredit.scss'
import UsereditForm from './usereditForm'
import Usereditcard from './Usereditcard'
import {postprofiledata,fetchprofiledata} from '../../../shared/Actioncreators/actionCreators'
import {connect} from 'react-redux';
import {useLawyerAuth} from '../../../Context/lawyerauth'
import {useAuth} from '../../../Context/userauth'
const mapStateToProps=state=>{
    return {
        profiledata:state.profiledata,
    }
}
const mapDispatchToProps=dispatch=>({
    fetchprofiledata:(token,type)=>dispatch(fetchprofiledata(token,type)),
    postprofiledata:(name,email,country,city,addr1,state,postalCode,token,type)=>
    dispatch(postprofiledata(name,email,country,city,addr1,state,postalCode,token,type)),
})
let fetchedProfiledata = false
function Useredit(props){
  const { currentLawyer } = useLawyerAuth()
  const { currentUser } = useAuth()
  let [edit,setEdit]=useState(false)
  const clickEdit = () =>{
    setEdit(true)
  }
  const clearEdit = () =>{
    setEdit(false)
  }
  const fetchProfile = async() =>{
      if(currentUser || currentLawyer){
          let token,type
          if(currentUser){
              token = await currentUser.getIdToken()
              type='USER'
          }else if(currentLawyer){
              token =await currentLawyer.getIdToken()
              type = 'LAWYER'
          }
          props.fetchprofiledata(token,type)
          fetchedProfiledata=true
      }
  }
  useEffect(()=>{
      if(!fetchedProfiledata){
          fetchProfile()
      }
      return ()=>{
      }
  })
  return(
    <>
      {
        (! props.profiledata)
        ?
        <div className="d-flex justify-content-center align-items-center" style={{height:'100%',minHeight:500}}>            
        <div>Something went wrong !</div>
        </div>
        :
        props.profiledata.err
        ?
        <div className="d-flex justify-content-center align-items-center" style={{height:'100%',minHeight:500}}>            
        <div>Something went wrong ! {props.profiledata.err} !</div>
        </div>
        :
        props.profiledata.isloading
        ?
        <div style={{height:'90vh',overflow:'hidden'}} className="d-flex align-items-center justify-content-center">
                <div  style={{minWidth:'300px'}}> 
                  <div className="lzy_img__image loading"></div> 
                  <div className="lzy_img__title loading"></div> 
                  <div className="lzy_img__description loading"></div> 
                </div> 
        </div>
        :
        props.profiledata.profiledata
        ?
        <div>
          {true && (document.title=`PROFILE | PEPLAW`)?null:null}
          {
            (edit===true)
            ?
              <div className="container edit-form" style={{ marginTop: 50, marginBottom: 50, height: "100%" }} >
                <UsereditForm profiledata={props.profiledata} postprofiledata={props.postprofiledata} clearEdit={clearEdit}
                /> 
              </div>
            :
            <>
              <h4 className="text-center mt-5">
                <svg style={{marginRight:6}}
                xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16">
                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
                </svg>
                Your Profile !
              </h4>
              <div className="d-flex align-center justify-content-center cases Usereditcard" style={{ marginTop: 50 }} >
                <Usereditcard profiledata={props.profiledata} clickEdit={clickEdit}></Usereditcard>
              </div>
            </>
          }
        </div>
        :
        <div></div>
      }
    </>
  )
}

export default connect(mapStateToProps,mapDispatchToProps)(Useredit);
