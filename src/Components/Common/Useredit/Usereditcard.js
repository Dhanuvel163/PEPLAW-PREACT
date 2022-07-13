import React from "react";
export default function Usereditcard(props) {
  return(
    <>
    {
      // <div className="card-style glass four-box-shadow" inverse>
      <div className="card bg-danger card-style four-box-shadow">
        <div className="card-header" style={{ textTransform: "uppercase" }}>
          <div className="d-flex justify-content-end">
            <div onClick={props.clickEdit} style={{cursor:'pointer'}}>
              <svg 
                xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-pen" viewBox="0 0 16 16">
                <path d="M13.498.795l.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001zm-.644.766a.5.5 0 0 0-.707 0L1.95 11.756l-.764 3.057 3.057-.764L14.44 3.854a.5.5 0 0 0 0-.708l-1.585-1.585z"/>
              </svg>
            </div>
          </div>
        </div>
        <div className="card-body profile">
            <h5>
                <b>
                PROFILE DETAILS
                </b>
            </h5>
            <hr style={{backgroundColor:'white'}}/>
            <div className="mb-3">
              <img  src={'https://t4.ftcdn.net/jpg/02/29/75/83/360_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg' || props.profiledata.profiledata.picture} className="profile-img" alt={props.profiledata.profiledata.name}/>
              <span style={{marginLeft:'15px'}}>
                {props.profiledata.profiledata.name}
              </span>
            </div>
            <p>
            <span className="titleValue">Mail</span>: {props.profiledata.profiledata.email}
            </p>
            <p>
            <span className="titleValue">Mobile</span>: {props.profiledata.profiledata.mobile || 'No Data !'}
            </p>
            <p>
            <span className="titleValue">Address</span>: {props.profiledata.profiledata.address ? props.profiledata.profiledata.address.addr1 : 'No Data !'}
            </p>
            <div className="row">
                <div className="col-12 col-md-6">
                    <p>
                    <span className="titleValue">State</span>: {props.profiledata.profiledata.address ? props.profiledata.profiledata.address.state ? props.profiledata.profiledata.address.state : 'No Data !' : 'No Data !'}
                    </p>
                    <p>
                    <span className="titleValue">Country</span>: {props.profiledata.profiledata.country || 'No Data !'}
                    </p>
                </div>
                <div className="col-12 col-md-6">
                    <p>
                    <span className="titleValue">Pincode</span>: {props.profiledata.profiledata.address ? props.profiledata.profiledata.address.postalCode ? props.profiledata.profiledata.address.postalCode : 'No Data !': 'No Data !'}
                    </p> 
                    <p>
                    <span className="titleValue">City</span>: {props.profiledata.profiledata.city || 'No Data !'}
                    </p>               
                </div>
            </div>


                        {props.profiledata.profiledata.practice_areas &&
                            <>
                                <h5 style={{marginTop:40} }>
                                    <b>
                                    LAWYER DETAILS
                                    </b>
                                </h5>
                                <hr style={{backgroundColor:'white'}}/>
                            {
                                props.profiledata.profiledata.experience &&
                                <p>
                                <span className="titleValue">Experience</span>: {props.profiledata.profiledata.experience}
                                </p>  
                            }
                            {
                                props.profiledata.profiledata.j_practice_location &&
                                <p>
                                <span className="titleValue" style={{width:'auto'}}>Jurisdictions Admitted to Practice</span> : {props.profiledata.profiledata.j_practice_location}
                                </p>                                
                            }
                            {
                                props.profiledata.profiledata.practice_areas.length > 0 &&
                                <div>
                                    <pre><span>Practice Areas</span></pre>
                                    <ul>
                                        {
                                            props.profiledata.profiledata.practice_areas.map((d,i)=>(<li key={i}>{d}</li>))
                                        }
                                    </ul>
                                </div>                                
                            }
                            {
                                props.profiledata.profiledata.languages.length > 0 &&
                                <div>
                                    <pre><span>Languages</span></pre>
                                    <ul>
                                        {
                                            props.profiledata.profiledata.languages.map((d,i)=>(<li key={i}>{d}</li>))
                                        }
                                    </ul>
                                </div>                                
                            }
                            {
                                props.profiledata.profiledata.education.length > 0 &&
                                <div>
                                    <pre><span>Education</span></pre>
                                    <ul>
                                        {
                                            props.profiledata.profiledata.education.map((d,i)=>(<li key={i}>{d}</li>))
                                        }
                                    </ul>
                                </div>                                
                            }
                            {
                                props.profiledata.profiledata.p_associations.length > 0 &&
                                <div>
                                    <pre><span>Associations</span></pre>
                                    <ul>
                                        {
                                            props.profiledata.profiledata.p_associations.map((d,i)=>(<li key={i}>{d}</li>))
                                        }
                                    </ul>
                                </div>                                
                            }
                            {
                                props.profiledata.profiledata.summary &&
                                <div>
                                    <h5 style={{marginTop:40} }>
                                        <b>
                                        SUMMARY
                                        </b>
                                    </h5>
                                    <hr style={{backgroundColor:'white'}}/>
                                    <pre>{props.profiledata.profiledata.summary}</pre>                               
                                </div>
                            }
                            </>
                        }




        </div>
      </div>
     }
    </>
  )
}
