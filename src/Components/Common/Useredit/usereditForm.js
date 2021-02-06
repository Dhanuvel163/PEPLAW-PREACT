import React from "react";
// import React,{useState,useEffect} from "react";
import { Control, Errors, LocalForm  } from "react-redux-form";
// import * as country_city from '../../../shared/city-country.json'
// import * as state_country from '../../../shared/state-country.json'
import Formerror from '../../Partials/Formerror/Formerror';
import {useLawyerAuth} from '../../../Context/lawyerauth'
import {useAuth} from '../../../Context/userauth'

const required = (val) => val && val.length;
const minLength = (len) => (val) => val && val.length >= len;
const maxLength = (len) => (val) => val && val.length <= len;
const isNumber = (val) => !isNaN(Number(val));
// let countryData = country_city.default.data
// let stateData = state_country.default.data
function UsereditForm(props){
    // let [country,setCountry]=useState(null)
    // let [stateCountry,setstateCountry]=useState(null)
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
    // const  handlechange=(values)=> {
    //     setCountry(countryData.findIndex((d)=>d.country===values.country))
    //     setstateCountry(stateData.findIndex((d)=>d.name===values.country))
    // }
    // useEffect(()=>{
    //     if(! country){
    //     if(islawyerloggedin() && props.profiledata.profiledata.lawyer){
    //         setCountry(countryData.findIndex((d)=>d.country===props.profiledata.profiledata.lawyer.country))
    //         setstateCountry(stateData.findIndex((d)=>d.name===props.profiledata.profiledata.lawyer.country))
    //     }else if(isuserloggedin() && props.profiledata.profiledata.user){
    //         setCountry(countryData.findIndex((d)=>d.country===props.profiledata.profiledata.user.country))
    //         setstateCountry(stateData.findIndex((d)=>d.name===props.profiledata.profiledata.user.country))
    //     }
    //     }
    // },[country,props,stateCountry])
    return(
          <div className="container" style={{ marginTop: 50 }}>
            <hr></hr>
                <h4 className="text-center"> 
                  <svg style={{marginRight:6}}
                  xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-pen" viewBox="0 0 16 16">
                    <path d="M13.498.795l.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001zm-.644.766a.5.5 0 0 0-.707 0L1.95 11.756l-.764 3.057 3.057-.764L14.44 3.854a.5.5 0 0 0 0-.708l-1.585-1.585z"/>
                  </svg>
                 Edit Here! </h4>
            <div className="row" style={{ marginTop: 50, marginBottom: 50 }}>
              <div className="col-12 col-sm-6 mb-5">
                <LocalForm
                  initialState={
                    {
                      username:props.profiledata.profiledata.name,
                      country:props.profiledata.profiledata.country,
                      city:props.profiledata.profiledata.city,
                      mobile:props.profiledata.profiledata.mobile,
                      address:props.profiledata.profiledata.address ? props.profiledata.profiledata.address.addr1 : '',
                      pincode:props.profiledata.profiledata.address ? props.profiledata.profiledata.address.postalCode : '',
                      state:props.profiledata.profiledata.address ? props.profiledata.profiledata.address.state : ''
                    }
                  }
                  onSubmit={(values) => handlesubmit(values)}
                  // onChange={(values) => handlechange(values)}
                >
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

                  <div className="row">
                      <div className="col-12 col-sm-6">
                        <div className="form-group">
                          <label htmlFor="mobile">Phone Number</label>
                          <Control.text
                            model=".mobile" className="form-control" name="mobile" id="mobile" placeholder="mobile"
                            validators={{required, minLength: minLength(10), maxLength: maxLength(10), isNumber, }}
                          />
                          <Errors
                            model=".mobile" show="touched" component={(props)=><Formerror props={props}/>} 
                            messages={{
                              required: "\nMobile Number is required !!",
                              minLength: "\nMobile Number should has 10 characters !!",
                              maxLength: "\nMobile Number should has 10 characters !!",
                              isNumber: "\nEnter a valid phone Number !!",
                            }}
                          ></Errors>
                        </div>
                      </div>
                      <div className="col-12 col-sm-6">
                        <div className="form-group">
                        <label htmlFor="country">Country</label>
                          <Control.text model=".country" list="countries" className="form-control" name="country" placeholder="Country"
                          />
                        <datalist id="countries">
                          {/* {
                            countryData.map((d)=>(
                              <option key={d.country} value={d.country}></option>
                            ))
                          } */}
                        </datalist>
                        </div>
                      </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="address">Address</label>
                    <Control.text
                      model=".address" className="form-control" name="address" id="address" placeholder="address"
                    />
                  </div>

                    <div className="row">
                        <div className="col-12 col-sm-6">
                          {
                            // (country && countryData[country] && countryData[country].cities)
                            // ?
                            <div className="form-group">
                            <label htmlFor="city">City</label>
                            <Control.text model=".city" list="cities" className="form-control" name="city" placeholder="City"
                            />
                            <datalist id="cities">
                              {/* {
                                countryData[country].cities.map((d,index)=>(
                                  <option key={index} value={d}></option>
                                ))
                              } */}
                            </datalist>
                            </div>
                            // :
                            // null
                          }
                        </div>
                        <div className="col-12 col-sm-6">
                          {
                            // (stateCountry && stateData[stateCountry] && stateData[stateCountry].states && stateData[stateCountry].states.length>0)
                            // ?
                            <div className="form-group">
                            <label htmlFor="state">State</label>
                            <Control.text model=".state" list="states" className="form-control" name="state" placeholder="State"
                            />
                            <datalist id="states">
                              {/* {
                                stateData[stateCountry].states.map((d,index)=>(
                                  <option key={index} value={d.name}></option>
                                ))
                              } */}
                            </datalist>
                            </div>
                            // :
                            // null
                          }
                        </div>
                    </div>

                  <div className="form-group">
                    <label htmlFor="pincode">Pincode</label>
                    <Control.text
                      model=".pincode" className="form-control" name="pincode" id="pincode" placeholder="Pincode"
                      validators={{minLength: minLength(6), maxLength: maxLength(6), isNumber, }}
                    />
                    <Errors
                      model=".pincode" show="touched" component={(props)=><Formerror props={props}/>} messages={{
                        minLength: "\npincode Number should has 6 characters !!",
                        maxLength: "\npincode Number should has 6 characters !!",
                        isNumber: "\nEnter a valid phone Number !!"
                      }}
                    ></Errors>
                  </div>

                  <div  className="d-flex justify-content-center">
                    <button className="btn btn-secondary" type="submit" >
                      Edit
                    </button>
                  </div>

                </LocalForm>
              </div>
              <div className="col container d-flex justify-content-center align-items-center mb-5 p-5">
                  <img alt="EDIT" style={{width:'inherit',height:'inherit'}} 
                  src="/assets/edit.svg"/>
              </div>
            </div>
            <hr></hr>
          </div>

    )
}

export default UsereditForm