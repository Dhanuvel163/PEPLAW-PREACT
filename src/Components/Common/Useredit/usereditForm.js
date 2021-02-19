import React from "react";
import Formerror from '../../Partials/Formerror/Formerror';
import { Formik , FieldArray} from 'formik';

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
        props.postprofiledata(values,token,type);
        props.clearEdit()
    }
    return(
          <div className="container" style={{ marginTop: 50 }}>
            <h4 className="text-center mb-5"> 
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
                state:props.profiledata.profiledata.address ? props.profiledata.profiledata.address.state : '',

                experience:props.profiledata.profiledata.experience,
                j_practice_location:props.profiledata.profiledata.j_practice_location,
                biography:props.profiledata.profiledata.biography,
                practice_areas:props.profiledata.profiledata.practice_areas,
                languages:props.profiledata.profiledata.languages,
                education:props.profiledata.profiledata.education,
                p_associations:props.profiledata.profiledata.p_associations
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
                } else if (values.mobile.length !== 10) {
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

              <form onSubmit={handleSubmit}>
                <h5>Personal Details</h5>
                <hr></hr>

                <div className="row mt-1" style={{ marginTop: 50, marginBottom: 20 }}>
                  <div className="col-12 col-sm-6">
                    <div className="form-group">
                            <label htmlFor="username">Username</label>
                            <input
                                type="text"
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
                                      type="text"
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
                                      type="text"
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
                            type="text"
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
                                  type="text"
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
                                  type="text"
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
                                type="text"
                                name="pincode"
                                className="form-control"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.pincode}
                            />
                    </div>
                    {errors.pincode && touched.pincode && <Formerror>{errors.pincode}</Formerror>}
                  </div>
                  <div className="col container d-none d-md-flex justify-content-center align-items-center p-5">
                      <img alt="EDIT" style={{width:'inherit',height:'inherit'}}
                      src="/assets/edit.svg"/>
                  </div>

                </div>

                  <div>
                    {
                      currentLawyer &&
                      <>
                      <h5>Lawyer Details</h5>
                      <hr></hr>                    
                      <div className="row">
                          <div className="col-12 col-sm-6">
                            <FieldArray
                              name="practice_areas"
                              render={arrayHelpers => (
                                <div>
                                <label htmlFor="practice_areas">Practice Areas</label>
                                  {(
                                    values.practice_areas.map((friend, index) => (
                                      <div key={index}>
                                        <input name={`practice_areas.${index}`} className="form-control mt-2" placeholder="Ex : Divorce etc."
                                        onChange={handleChange} onBlur={handleBlur} value={values.practice_areas[index]}
                                        />
                                      </div>
                                    ))
                                  )}
                                  <div className="d-flex justify-content-around align-content-center mb-2 mt-2">
                                    <div>
                                      <div style={{borderRadius:'50%'}} className="btn-sm btn-secondary d-flex justify-content-center align-content-center" 
                                      onClick={() => arrayHelpers.insert(values.practice_areas.length, '')}>
                                        <div>
                                          <svg xmlns="http://www.w3.org/2000/svg" style={{margin:0}} width="27" height="25.2" fill="currentColor" className="bi bi-patch-plus-fill" viewBox="0 0 16 16">
                                            <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zM8.5 6v1.5H10a.5.5 0 0 1 0 1H8.5V10a.5.5 0 0 1-1 0V8.5H6a.5.5 0 0 1 0-1h1.5V6a.5.5 0 0 1 1 0z"/>
                                          </svg>
                                        </div>
                                      </div>
                                    </div>
                                    <div>
                                      <div style={{borderRadius:'50%'}} className="btn-sm btn-secondary d-flex justify-content-around align-content-center" 
                                      onClick={() => values.practice_areas.length===1?null:arrayHelpers.remove(values.practice_areas.length-1)}>
                                        <svg xmlns="http://www.w3.org/2000/svg" style={{margin:0}} width="27" height="25.2" fill="currentColor" className="bi bi-patch-minus-fill" viewBox="0 0 16 16">
                                          <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zM6 7.5h4a.5.5 0 0 1 0 1H6a.5.5 0 0 1 0-1z"/>
                                        </svg>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              )}
                            />
                          </div>
                          <div className="col-12 col-sm-6">
                            <FieldArray
                              name="languages"
                              render={arrayHelpers => (
                                <div>
                                <label htmlFor="languages">Languages</label>
                                  {(
                                    values.languages.map((friend, index) => (
                                      <div key={index}>
                                        <input name={`languages.${index}`} className="form-control mt-2" placeholder="Ex : English"
                                        onChange={handleChange} onBlur={handleBlur} value={values.languages[index]}
                                        />
                                      </div>
                                    ))
                                  )}
                                  <div className="d-flex justify-content-around align-content-center mb-2 mt-2">
                                    <div>
                                      <div style={{borderRadius:'50%'}} className="btn-sm  btn-secondary d-flex justify-content-center align-content-center" 
                                      onClick={() => arrayHelpers.insert(values.languages.length, '')}>
                                        <div>
                                          <svg xmlns="http://www.w3.org/2000/svg" style={{margin:0}} width="27" height="25.2" fill="currentColor" className="bi bi-patch-plus-fill" viewBox="0 0 16 16">
                                            <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zM8.5 6v1.5H10a.5.5 0 0 1 0 1H8.5V10a.5.5 0 0 1-1 0V8.5H6a.5.5 0 0 1 0-1h1.5V6a.5.5 0 0 1 1 0z"/>
                                          </svg>
                                        </div>
                                      </div>
                                    </div>
                                    <div>
                                      <div style={{borderRadius:'50%'}} className="btn-sm btn-secondary d-flex justify-content-around align-content-center" 
                                      onClick={() => values.languages.length===1?null:arrayHelpers.remove(values.languages.length-1)}>
                                        <svg xmlns="http://www.w3.org/2000/svg" style={{margin:0}} width="27" height="25.2" fill="currentColor" className="bi bi-patch-minus-fill" viewBox="0 0 16 16">
                                          <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zM6 7.5h4a.5.5 0 0 1 0 1H6a.5.5 0 0 1 0-1z"/>
                                        </svg>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              )}
                            />
                          </div>
                      </div>
                      <div className="row">
                          <div className="col-12 col-sm-6">
                            <div className="form-group">
                                    <label htmlFor="experience">Experience (In Years)</label>
                                    <input
                                        type="text"
                                        name="experience"
                                        className="form-control"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.experience}
                                    />
                            </div>
                            {errors.experience && touched.experience && <Formerror>{errors.experience}</Formerror>}
                          </div>
                          <div className="col-12 col-sm-6">
                            <div className="form-group">
                                    <label htmlFor="j_practice_location">Jurisdictions Admitted to Practice</label>
                                    <input
                                        type="text"
                                        name="j_practice_location"
                                        className="form-control"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.j_practice_location}
                                    />
                            </div>
                            {errors.j_practice_location && touched.j_practice_location && <Formerror>{errors.j_practice_location}</Formerror>}
                          </div>
                      </div>
                      <div className="form-group">
                              <label htmlFor="biography">Biography</label>
                              <textarea
                                  type="text"
                                  name="biography"
                                  className="form-control"
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  value={values.biography}
                              />
                      </div>
                      {errors.biography && touched.biography && <Formerror>{errors.biography}</Formerror>}  

                      <div className="row">
                          <div className="col-12 col-sm-6">
                            <FieldArray
                              name="education"
                              render={arrayHelpers => (
                                <div>
                                <label htmlFor="education">Education</label>
                                  {(
                                    values.education.map((friend, index) => (
                                      <div key={index}>
                                        <input name={`education.${index}`} className="form-control mt-2" placeholder="Ex : Madras University - B.Tech - IT"
                                        onChange={handleChange} onBlur={handleBlur} value={values.education[index]}
                                        />
                                      </div>
                                    ))
                                  )}
                                  <div className="d-flex justify-content-around align-content-center mb-2 mt-2">
                                    <div>
                                      <div style={{borderRadius:'50%'}} className="btn-sm btn-secondary d-flex justify-content-center align-content-center" 
                                      onClick={() => arrayHelpers.insert(values.education.length, '')}>
                                        <div>
                                          <svg xmlns="http://www.w3.org/2000/svg" style={{margin:0}} width="27" height="25.2" fill="currentColor" className="bi bi-patch-plus-fill" viewBox="0 0 16 16">
                                            <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zM8.5 6v1.5H10a.5.5 0 0 1 0 1H8.5V10a.5.5 0 0 1-1 0V8.5H6a.5.5 0 0 1 0-1h1.5V6a.5.5 0 0 1 1 0z"/>
                                          </svg>
                                        </div>
                                      </div>
                                    </div>
                                    <div>
                                      <div style={{borderRadius:'50%'}} className="btn-sm btn-secondary d-flex justify-content-around align-content-center" 
                                      onClick={() => values.education.length===1?null:arrayHelpers.remove(values.education.length-1)}>
                                        <svg xmlns="http://www.w3.org/2000/svg" style={{margin:0}} width="27" height="25.2" fill="currentColor" className="bi bi-patch-minus-fill" viewBox="0 0 16 16">
                                          <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zM6 7.5h4a.5.5 0 0 1 0 1H6a.5.5 0 0 1 0-1z"/>
                                        </svg>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              )}
                            />
                          </div>
                          <div className="col-12 col-sm-6">
                            <FieldArray
                              name="p_associations"
                              render={arrayHelpers => (
                                <div>
                                <label htmlFor="p_associations">Professional Associations</label>
                                  {(
                                    values.p_associations.map((friend, index) => (
                                      <div key={index}>
                                        <input name={`p_associations.${index}`} className="form-control mt-2" placeholder="Ex : American Bar Association"
                                        onChange={handleChange} onBlur={handleBlur} value={values.p_associations[index]}
                                        />
                                      </div>
                                    ))
                                  )}
                                  <div className="d-flex justify-content-around align-content-center mb-2 mt-2">
                                    <div>
                                      <div style={{borderRadius:'50%'}} className="btn-sm  btn-secondary d-flex justify-content-center align-content-center" 
                                      onClick={() => arrayHelpers.insert(values.p_associations.length, '')}>
                                        <div>
                                          <svg xmlns="http://www.w3.org/2000/svg" style={{margin:0}} width="27" height="25.2" fill="currentColor" className="bi bi-patch-plus-fill" viewBox="0 0 16 16">
                                            <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zM8.5 6v1.5H10a.5.5 0 0 1 0 1H8.5V10a.5.5 0 0 1-1 0V8.5H6a.5.5 0 0 1 0-1h1.5V6a.5.5 0 0 1 1 0z"/>
                                          </svg>
                                        </div>
                                      </div>
                                    </div>
                                    <div>
                                      <div style={{borderRadius:'50%'}} className="btn-sm btn-secondary d-flex justify-content-around align-content-center" 
                                      onClick={() => values.p_associations.length===1?null:arrayHelpers.remove(values.p_associations.length-1)}>
                                        <svg xmlns="http://www.w3.org/2000/svg" style={{margin:0}} width="27" height="25.2" fill="currentColor" className="bi bi-patch-minus-fill" viewBox="0 0 16 16">
                                          <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zM6 7.5h4a.5.5 0 0 1 0 1H6a.5.5 0 0 1 0-1z"/>
                                        </svg>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              )}
                            />
                          </div>
                      </div>

                      </>
                    }
                        <div  className="d-flex justify-content-center">
                          <button className="btn btn-secondary" type="submit" >
                            Edit
                          </button>
                        </div>
                  </div>

              </form>
            )}
            </Formik>
          </div>
    )
}

export default UsereditForm