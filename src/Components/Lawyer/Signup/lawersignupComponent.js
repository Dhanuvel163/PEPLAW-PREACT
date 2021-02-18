import React from 'react';
import { Formik } from 'formik';
import {Link,useHistory} from "react-router-dom";
import {successMessage,errorMessage,clearMessage,load,clearLoading,createlawyer} from '../../../shared/Actioncreators/actionCreators';
import {connect} from 'react-redux';
import Formerror from '../../Partials/Formerror/Formerror';
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
})
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
                        <Formik
                        initialValues={{ email: '', password: '',username:'',cpassword:'' }}
                        validate={values => {
                            const errors = {};
                            if (!values.email) {
                            errors.email = 'Email is Required';
                            } else if (
                            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                            ) {
                            errors.email = 'Invalid email address';
                            }

                            if (!values.username) {
                            errors.username = 'Username is Required';
                            } else if (values.username.length<6 || values.username.length>20) {
                            errors.username = 'Username should has minimum 6 characters and maximum 20 characters';
                            }                                    
                            if (!values.password) {
                            errors.password = 'Password is Required';
                            } else if (values.password.length<6 || values.password.length>20) {
                            errors.password = 'Password should has minimum 6 characters and maximum 20 characters';
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
                                        <label htmlFor="username">Username</label>
                                        <input
                                            type="username"
                                            name="username"
                                            className="form-control"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.username}
                                        />
                                </div>
                                {errors.username && touched.username && <Formerror>{errors.username}</Formerror>}
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
                                <div className="row">
                                    <div className="col-12 col-sm-6">
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
                                    </div>
                                    <div className="col-12 col-sm-6">
                                        <div className="form-group">
                                            <label htmlFor="cpassword">Confirm Password</label>
                                            <input
                                                type="cpassword"
                                                name="cpassword"
                                                className="form-control"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.cpassword}
                                            />
                                        </div>
                                        {errors.cpassword && touched.cpassword && <Formerror>{errors.cpassword}</Formerror>}
                                    </div>
                                </div>
                                <div>
                                    <Link to="/user/signup" className="nav-link">
                                        <p style={{color:'white'}}>
                                            <b>
                                            Are you a user ?
                                            </b>
                                        </p>
                                    </Link>
                                    <div className="d-flex justify-content-center mt-2">
                                        <button type="submit" className="btn btn-secondary">Sign Up</button>
                                    </div>
                                </div>
                            </form>
                        )}
                        </Formik>
                    </div>
                </div>
                <hr></hr>
                </div>
            </div>
        );
}

export default connect(mapStateToProps,mapDispatchToProps)(Lawyersignup);
