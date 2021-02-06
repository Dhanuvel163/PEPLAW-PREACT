import React from 'react';
import {Control,Errors,LocalForm} from 'react-redux-form';
import {Link,useHistory
} from "react-router-dom";
import {successMessage,errorMessage,clearMessage,load,clearLoading,createlawyer} from '../../../shared/Actioncreators/actionCreators';
import {connect} from 'react-redux';
// import {actions} from 'react-redux-form';
import Formerror from '../../Partials/Formerror/Formerror';
import { useLawyerAuth } from "../../../Context/lawyerauth"
// import {Helmet} from 'react-helmet'

const mapStateToProps=state=>{
    return {
    }
}
const mapDispatchToProps=dispatch=>({
    successMessage:(msg)=>dispatch(successMessage(msg)),
    errorMessage:(msg)=>dispatch(errorMessage(msg)),
    clearMessage:()=>dispatch(clearMessage()),
    load:()=>dispatch(load()),
    clearLoading:()=>dispatch(clearLoading()),
    // lawyersignupformreset:()=>dispatch(actions.reset('lawyersignupform')),
    createlawyer:(name,email,password,mobile,picture,token,history)=>dispatch(createlawyer(name,email,password,mobile,picture,token,history)),
})
const required=(val)=>(val)&&(val.length)
const minLength=(len)=>(val)=>(val)&&(val.length>=len)
const maxLength=(len)=>(val)=>(val)&&(val.length<=len)
// const isNumber=(val)=>!isNaN(Number(val))
const isemail=(val)=>/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(val)

function Lawyersignup(props){
    let history = useHistory()
    const { signup } = useLawyerAuth()
    const handlesubmit=async(values)=>{
        if(values.password !== values.cpass){
            props.errorMessage('Passwords not matching !')
            setTimeout(()=>{props.clearMessage()},2000)
            return
        }
        props.load()
        try{
            const data = await signup(values.email,values.password)
            data.user.updateProfile({displayName:values.username})
            const token = await data.user.getIdToken()
            props.createlawyer(
                values.username,values.email,values.password,null,
                null,token,history
            )
            props.successMessage('Signed up successfully')
        }catch(e){
            props.errorMessage(e.message)
        }finally{
            props.clearLoading()
            setTimeout(()=>{props.clearMessage()},2000)
        }
        // props.lawyersignupformreset();
    }
    return(
            <div>
                {/* <Helmet>
                    <title>LAWYER SIGNUP | PEPLAW</title>
                    <meta name="description" content="lawyer signup page"/>
                </Helmet> */}
                {true && (document.title='LAWYER SIGNUP | PEPLAW')?null:null}
                <h5 className="text-center">
                        <svg style={{marginRight:10}}
                        width="22" height="22" fill="currentColor" className="bi bi-person-plus-fill" viewBox="0 0 16 16">
                        <path d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                        <path fillRule="evenodd" d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z"/>
                        </svg>
                    Lawyer Signup</h5>
                <div className="container" style={{marginTop:30}}>
                <hr></hr>
                <div className="d-flex justify-content-center align-items-center">
                    <div className="glass card-style card p-3 p-sm-5 pt-5 pb-5 four-box-shadow">
                        <div>
                        <LocalForm  onSubmit={(values)=>handlesubmit(values)}>
                                <div className='form-group'>
                                    <label htmlFor="username">Username</label>
                                    <Control.text model=".username" className='form-control' name="username" id="username"
                                     placeholder="Username"
                                     validators={{required,minLength:minLength(6),maxLength:maxLength(20)}}/>
                                    <Errors
                                     model='.username'
                                     show="touched"
                                     component={(props)=><Formerror props={props}/>}
                                     messages={{
                                         required:'\nusername is required !!',
                                         minLength:'\nusername should has minimum 6 characters !!',
                                         maxLength:'\nusername should has maximum 20 characters only !!'
                                     }}
                                     ></Errors>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleEmail">Email</label>
                                    <Control.text model=".email" className='form-control' name="email" id="exampleEmail"
                                     placeholder="Email"
                                     validators={{required,isemail}}/>
                                     <Errors
                                     model='.email'
                                     show="touched"
                                     component={(props)=><Formerror props={props}/>}
                                     messages={{
                                         required:'\nEmail is required !!',
                                         isemail:'\nEnter a valid email !!'
                                     }}
                                     ></Errors>
                                </div>
                                <div className="row">
                                    <div className="col-12 col-sm-6">
                                        <div className="form-group">
                                            <label htmlFor="examplePassword">Password</label>
                                            <Control.password model=".password" className='form-control' name="password" id="examplePassword" 
                                            placeholder="password"
                                            validators={{required,minLength:minLength(6),maxLength:maxLength(20)}}/>
                                            <Errors
                                            model='.password'
                                            show="touched"
                                            component={(props)=><Formerror props={props}/>}
                                            messages={{
                                                required:'\npassword is required !!',
                                                minLength:'\npassword should has minimum 6 characters !!',
                                                maxLength:'\npassword should has maximum 20 characters only !!'
                                            }}
                                            ></Errors>
                                        </div>
                                    </div>
                                    <div className="col-12 col-sm-6">
                                        <div className="form-group">
                                            <label htmlFor="cpass">Confirm Password</label>
                                            <Control.password model=".cpass" className='form-control' name="cpass" id="cpass"
                                            placeholder="Confirm password"
                                            validators={{
                                                required
                                            }}/>
                                            <Errors
                                            model='.cpass'
                                            show="touched"
                                            component={(props)=><Formerror props={props}/>}
                                            messages={{
                                                required:'\nConfirm password is required !!'
                                            }}
                                            ></Errors>
                                        </div>
                                    </div>
                                </div>
                                <Link to="/user/signup" className="nav-link">
                                    <p style={{color:'white'}}>
                                        <b>
                                        Are you a user ?
                                        </b>
                                    </p>
                                </Link>
                                <div className="d-flex justify-content-center mt-2">
                                    <button className="btn btn-secondary">Sign Up</button>
                                </div>
                            </LocalForm>
                        </div>
                    </div>
                </div>
                    <hr></hr>
                </div>
            </div>
        );
}

export default connect(mapStateToProps,mapDispatchToProps)(Lawyersignup);
