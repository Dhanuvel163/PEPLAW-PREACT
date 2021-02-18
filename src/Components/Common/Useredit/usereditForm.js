import React from "react";
import Formerror from '../../Partials/Formerror/Formerror';
import { Formik } from 'formik';

import {useLawyerAuth} from '../../../Context/lawyerauth'
import {useAuth} from '../../../Context/userauth'

function UsereditForm(props){
    const { currentLawyer } = useLawyerAuth()
    const { currentUser } = useAuth()
    const  handlesubmit=async(values)=> {
        let token,type
        if(currentUser){
            token = await currentUser.getIdToken()
            type='USER'
        }else if(currentLawyer){
            token =await currentLawyer.getIdToken()
            type = 'LAWYER'
        }
        props.postprofiledata(values.username,values.mobile,values.country,values.city,values.address,
          values.state,values.pincode,token,type);
        props.clearEdit()
    }
    return(
          <div className="container" style={{ marginTop: 50 }}>
            <hr></hr>
            <h4 className="text-center"> 
              <svg style={{marginRight:6}}
              xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-pen" viewBox="0 0 16 16">
                <path d="M13.498.795l.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001zm-.644.766a.5.5 0 0 0-.707 0L1.95 11.756l-.764 3.057 3.057-.764L14.44 3.854a.5.5 0 0 0 0-.708l-1.585-1.585z"/>
              </svg>
              Edit Here! 
            </h4>

            <Formik
            initialValues={
              {
                username:props.profiledata.profiledata.name,
                mobile:props.profiledata.profiledata.mobile,
                country:props.profiledata.profiledata.country,
                city:props.profiledata.profiledata.city,
                address:props.profiledata.profiledata.address ? props.profiledata.profiledata.address.addr1 : '',
                pincode:props.profiledata.profiledata.address ? props.profiledata.profiledata.address.postalCode : '',
                state:props.profiledata.profiledata.address ? props.profiledata.profiledata.address.state : ''
              }
            }
            validate={values => {
                const errors = {};
                if (!values.username) {
                errors.username = 'Username is Required';
                } else if (values.username.length<6 || values.username.length>20) {
                errors.username = 'Username should has minimum 6 characters and maximum 20 characters';
                }
                if (!values.mobile) {
                errors.mobile = 'Phone Number is Required';
                } else if (values.mobile.length !== 20) {
                errors.mobile = 'Phone Number should has 10 characters';
                } 
                if (values.pincode && values.pincode.length !== 6) {
                errors.pincode = 'Pincode should be 6 characters';
                }    
                return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
                handlesubmit(values)
                setSubmitting(false);
            }}
            >
            {({values,errors,touched,handleChange,handleBlur,handleSubmit,isSubmitting}) => (
            <div className="row" style={{ marginTop: 50, marginBottom: 20 }}>
              <div className="col-12 col-sm-6">
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
                    <div className="row">
                        <div className="col-12 col-sm-6">
                          <div className="form-group">
                                  <label htmlFor="mobile">Phone Number</label>
                                  <input
                                      type="mobile"
                                      name="mobile"
                                      className="form-control"
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      value={values.mobile}
                                  />
                          </div>
                          {errors.mobile && touched.mobile && <Formerror>{errors.mobile}</Formerror>}
                        </div>
                        <div className="col-12 col-sm-6">
                          <div className="form-group">
                                  <label htmlFor="country">Country</label>
                                  <input
                                      type="country"
                                      name="country"
                                      className="form-control"
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      value={values.country}
                                  />
                          </div>
                          {errors.country && touched.country && <Formerror>{errors.country}</Formerror>}
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="address">Address</label>
                        <input
                            type="address"
                            name="address"
                            className="form-control"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.address}
                        />
                    </div>
                    {errors.address && touched.address && <Formerror>{errors.address}</Formerror>}
                    <div className="row">
                        <div className="col-12 col-sm-6">
                          <div className="form-group">
                              <label htmlFor="city">City</label>
                              <input
                                  type="city"
                                  name="city"
                                  className="form-control"
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  value={values.city}
                              />
                          </div>
                          {errors.city && touched.city && <Formerror>{errors.city}</Formerror>}
                        </div>
                        <div className="col-12 col-sm-6">
                          <div className="form-group">
                              <label htmlFor="state">State</label>
                              <input
                                  type="state"
                                  name="state"
                                  className="form-control"
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  value={values.state}
                              />
                          </div>
                          {errors.state && touched.state && <Formerror>{errors.state}</Formerror>}
                        </div>
                    </div>
                    <div className="form-group">
                            <label htmlFor="pincode">Pincode</label>
                            <input
                                type="pincode"
                                name="pincode"
                                className="form-control"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.pincode}
                            />
                    </div>
                    {errors.pincode && touched.pincode && <Formerror>{errors.pincode}</Formerror>}
                    </form>
              </div>
              <div className="col container d-none d-md-flex justify-content-center align-items-center p-5">
                  <img alt="EDIT" style={{width:'inherit',height:'inherit'}}
                  src="/assets/edit.svg"/>
              </div>
            </div>
            )}
            </Formik>


            <hr></hr>
            {/* <div>
                  <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <Control.text model=".username" className="form-control" name="username" id="username" placeholder="Username"
                      validators={{required, minLength: minLength(6), maxLength: maxLength(20),}}
                    />
                    <Errors
                      model=".username" show="touched" component={(props)=><Formerror props={props}/>}
                      messages={{
                        required: "\nusername is required !!", minLength: "\nusername should has minimum 6 characters !!",
                        maxLength: "\nusername should has maximum 20 characters only !!",
                      }}
                    ></Errors>
                  </div>

                  <div  className="d-flex justify-content-center">
                    <button className="btn btn-secondary" type="submit" >
                      Edit
                    </button>
                  </div>

            </div> */}
          </div>
    )
}

export default UsereditForm