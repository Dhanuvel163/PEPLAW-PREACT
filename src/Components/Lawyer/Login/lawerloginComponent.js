import React from 'react';
import {Link,useHistory} from "react-router-dom";
import {connect} from 'react-redux';
import {successMessage,errorMessage,clearMessage,load,clearLoading,createlawyer,
    fetchprofiledata,fetchusercases,fetchallcases} from '../../../shared/Actioncreators/actionCreators'
import Formerror from '../../Partials/Formerror/Formerror';
import { Formik } from 'formik';
import '../../User/Login/googlebtn.scss'
import '../../User/Login/userlogin.scss'
import { useLawyerAuth } from "../../../Context/lawyerauth"
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
    createlawyer:(name,email,password,mobile,picture,token,history)=>dispatch(createlawyer(name,email,password,mobile,picture,token,history)),

    fetchprofiledata:(token,type)=>dispatch(fetchprofiledata(token,type)),
    fetchusercases:(token,type)=>dispatch(fetchusercases(token,type)),
    fetchallcases:(token)=>dispatch(fetchallcases(token)),
})
function Lawyerlogin(props){
    let history = useHistory()
    const { login,signInWithGoogle,signInWithFacebook,resetPassword } = useLawyerAuth()
    const handlesubmit=async(values)=>{
        props.load()
        try{
            const data = await login(values.email,values.password)
            let token =await data.user.getIdToken()
            props.fetchprofiledata(token,"LAWYER")
            props.fetchusercases(token,"LAWYER")
            props.fetchallcases(token)
            props.successMessage('Signed in successfully')
        }catch(e){
            props.errorMessage(e.message)
        }finally{
            setTimeout(()=>{props.clearMessage()},4000)
            props.clearLoading()
        }
    }
    const signInGoogle = async()=>{
        props.load()
        try{
            const data = await signInWithGoogle()
            const token = await data.user.getIdToken()
            props.createlawyer(
                data.user.displayName,data.user.email,null,data.user.phoneNumber,
                data.additionalUserInfo.profile.picture,token,history
            )
            props.fetchprofiledata(token,"LAWYER")
            props.fetchusercases(token,"LAWYER")
            props.fetchallcases(token)
            props.successMessage('Signed in successfully')
        }catch(e){
            props.errorMessage(e.message)
        }finally{
            props.clearLoading()
            setTimeout(()=>{props.clearMessage()},2000)
        }
    }
    const signInFb = async()=>{
        props.load()
        try{
            const data = await signInWithFacebook()
            const token = await data.user.getIdToken()
            props.createlawyer(
                data.user.displayName,data.user.email,null,data.user.phoneNumber,
                data.additionalUserInfo.profile.picture,token,history
            )
            props.fetchprofiledata(token,"LAWYER")
            props.fetchusercases(token,"LAWYER")
            props.fetchallcases(token)
            props.successMessage('Signed in successfully')
        }catch(e){
            props.errorMessage(e.message)
        }finally{
            props.clearLoading()
            setTimeout(()=>{props.clearMessage()},2000)
        }
    }
    const resetPass=async(email)=>{
        if(!email){
            props.errorMessage('Please enter the email to send reset link to mail')
            setTimeout(()=>{props.clearMessage()},4000)
            return
        }
        props.load()
        try{
            await resetPassword(email)
            props.successMessage('Password reset link sent successfully')
        }catch(e){
            props.errorMessage(e.message)
        }finally{
            props.clearLoading()
            setTimeout(()=>{props.clearMessage()},4000)
        }
    }
        return(
            <div className="login">
                {true && (document.title='LAWYER LOGIN | PEPLAW')?null:null}
                <h5 className="text-center">
                    <svg style={{marginRight:10}} width="22" height="22" fill="currentColor" className="bi bi-person" viewBox="0 0 16 16">
                    <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/>
                    </svg>
                    Lawyer Login</h5>
                <div className="container" style={{marginTop:30}}>
                <hr></hr>
                        <div className="d-flex justify-content-center align-items-center">
                            <div className="glass card-style card p-3 p-sm-5 pt-5 pb-5 four-box-shadow">

                            <Formik
                            initialValues={{ email: '', password: '' }}
                            validate={values => {
                                const errors = {};
                                if (!values.email) {
                                errors.email = 'Email is Required';
                                } else if (
                                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                                ) {
                                errors.email = 'Invalid email address';
                                }
                                return errors;
                            }}
                            onSubmit={(values, { setSubmitting }) => {
                                handlesubmit(values)
                                setSubmitting(false);
                            }}
                            >
                            {({values,errors,touched,handleChange,handleBlur,handleSubmit,isSubmitting}) => (
                                <form onSubmit={handleSubmit}>
                                    <div className="form-group">
                                            <label htmlFor="email">Email</label>
                                            <input
                                                type="email"
                                                name="email"
                                                className="form-control"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.email}
                                            />
                                    </div>
                                    {errors.email && touched.email && <Formerror>{errors.email}</Formerror>}
                                    <div className="form-group">
                                            <label htmlFor="password">Password</label>
                                            <input
                                                type="password"
                                                name="password"
                                                className="form-control"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.password}
                                            />
                                    </div>
                                    {errors.password && touched.password && <Formerror>{errors.password}</Formerror>}

                                    <div className="d-flex justify-content-between">
                                        <div>
                                            <Link to="/user/login" className="nav-link">
                                                <p style={{color:'white'}}>
                                                    <b className="foot-link">
                                                    Are you a user ?
                                                    </b>
                                                </p>
                                            </Link>
                                        </div>
                                        <div>
                                            <div onClick={()=>resetPass(values.email)} className="nav-link text-right">
                                                <p style={{color:'white'}}>
                                                    <b className="foot-link">
                                                    Forgot password ?
                                                    </b>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="d-flex justify-content-center mt-2">
                                    <button type="submit" className="btn btn-secondary">Sign in</button>
                                    </div>
                                </form>
                            )}
                            </Formik>

                                <div>
                                    <hr className="bg-light"/>
                                    <div className="container d-flex justify-content-center align-items-center">
                                        <div className="google-btn" onClick={signInGoogle}>
                                        <div className="google-icon-wrapper">
                                            <img className="google-icon" alt="google logo"
                                            src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"/>
                                        </div>
                                        <span className="btn-text"><b>Sign in with google</b></span>
                                        </div>
                                    </div>
                                    <div className="container d-flex justify-content-center align-items-center mt-2">
                                        <div onClick={signInFb} className="fb connect">
                                            <span className="btn-text">
                                                <b>
                                                    Sign in with Facebook
                                                </b>
                                            </span>
                                        </div>
                                    </div>
                                    <div  style={{display:'flex',justifyContent:'center'}}>
                                        <Link to="/lawyer/signup" className="nav-link">
                                        <button className="btn btn-warning text-white btn-text font-weight-bold">
                                            <svg style={{marginRight:10}}
                                            width="16" height="16" fill="currentColor" className="bi bi-person-plus-fill" viewBox="0 0 16 16">
                                            <path d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                                            <path fillRule="evenodd" d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z"/>
                                            </svg>
                                            Click here to Signup
                                            </button>
                                        </Link>
                                    </div>       
                                </div>

                            </div>
                        </div>
                    <hr></hr>
                </div>
            </div>
        );

}
export default connect(mapStateToProps,mapDispatchToProps)(Lawyerlogin);
