import React,{useEffect,useCallback} from 'react'
import {fetchdetailpagedata} from '../../../shared/Actioncreators/actionCreators'
import {connect} from 'react-redux';
import { useParams} from 'react-router-dom'
import '../Useredit/useredit.scss'
import {useLawyerAuth} from '../../../Context/lawyerauth'
import {useAuth} from '../../../Context/userauth'
const mapStateToProps=state=>{
    return {
        detailpage:state.detailpage,
    }
}
const mapDispatchToProps=dispatch=>({
    fetchdetailpagedata:(id,token,type)=>dispatch(fetchdetailpagedata(id,token,type)),
})

function Userdetail({detailpage,fetchdetailpagedata}) {
    const { currentLawyer } = useLawyerAuth()
    const { currentUser } = useAuth()
    let params = useParams();
    /* eslint-disable */
    const fetchDetail = useCallback(
     async()=>{
        let token,type
        if(currentUser){
            token = await currentUser.getIdToken()
            type='USER'
        }else if(currentLawyer){
            token =await currentLawyer.getIdToken()
            type = 'LAWYER'
        }
        fetchdetailpagedata(params.id,token,type)
    },[params.id])
    /* eslint-enable */
    useEffect(()=>{
        fetchDetail()
        return ()=>{
        }
    },[fetchDetail])
    return (
        <>
            {
                (!detailpage)
                ?
                <div className="d-flex justify-content-center align-items-center" style={{height:'100%',minHeight:500}}>            
                <div>Something went wrong !</div>
                </div>
                :
               detailpage.err
                ?
                <div className="d-flex justify-content-center align-items-center" style={{height:'100%',minHeight:500}}>            
                <div>Something went wrong ! {detailpage.err} !</div>
                </div>
                :
               detailpage.isloading
                ?
                <div style={{height:'90vh',overflow:'hidden'}} className="d-flex align-items-center justify-content-center">
                        <div  style={{minWidth:'300px'}}> 
                        <div className="lzy_img__image loading"></div> 
                        <div className="lzy_img__title loading"></div> 
                        <div className="lzy_img__description loading"></div> 
                        </div> 
                </div>
                :
               (detailpage.detailpage && detailpage.detailpage.name)
                ?
                <div className="container" style={{marginTop:100}}>
                    <div className="card bg-danger card-style four-box-shadow">
                        {true && (document.title=`${detailpage.detailpage.name.toUpperCase()} | PEPLAW`)?null:null}
                        <div className="card-header">
                            <div className="mb-3">
                            <img  src={'https://t4.ftcdn.net/jpg/02/29/75/83/360_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg' || detailpage.detailpage.picture} className="profile-img" alt={detailpage.detailpage.name}/>
                            <span style={{marginLeft:'15px'}}>
                            {detailpage.detailpage.name}
                            </span>
                            </div>
                        </div>
                        <div className="card-body profile">
                        <h5>
                            <b>
                            PROFILE DETAILS
                            </b>
                        </h5>
                        <hr style={{backgroundColor:'white'}}/>

                            <p>
                            <span className="titleValue">Mail</span>:   {detailpage.detailpage.email}
                            </p>
                            <p>
                            <span className="titleValue">Mobile</span>:   {detailpage.detailpage.mobile || 'No Data !'}
                            </p>
                            <p>
                            <span className="titleValue">Address</span>:   {detailpage.detailpage.address ? detailpage.detailpage.address.addr1 : 'No Data !'}
                            </p>
                            <div className="row">
                                <div className="col-12 col-md-6">
                                    <p>
                                    <span className="titleValue">State</span>:   {detailpage.detailpage.address ? detailpage.detailpage.address.state ? detailpage.detailpage.address.state : 'No Data !' : 'No Data !'}
                                    </p>
                                    <p>
                                    <span className="titleValue">Country</span>:   {detailpage.detailpage.country || 'No Data !'}
                                    </p>
                                </div>
                                <div className="col-12 col-md-6">
                                    <pre>
                                    <span className="titleValue">Pincode</span>:   {detailpage.detailpage.address ? detailpage.detailpage.address.postalCode ? detailpage.detailpage.address.postalCode : 'No Data !': 'No Data !'}
                                    </pre> 
                                    <pre>
                                    <span className="titleValue">City</span>:   {detailpage.detailpage.city || 'No Data !'}
                                    </pre>               
                                </div>
                            </div>
                        {detailpage.detailpage.practice_areas &&
                            <>
                                <h5 style={{marginTop:40} }>
                                    <b>
                                    LAWYER DETAILS
                                    </b>
                                </h5>
                                <hr style={{backgroundColor:'white'}}/>
                            {
                                detailpage.detailpage.experience &&
                                <p>
                                <span className="titleValue">Experience</span>:   {detailpage.detailpage.experience}
                                </p>  
                            }
                            {
                                detailpage.detailpage.j_practice_location &&
                                <p>
                                <span className="titleValue" style={{width:'auto'}}>Jurisdictions Admitted to Practice</span> :   {detailpage.detailpage.j_practice_location}
                                </p>                                
                            }
                            {
                                detailpage.detailpage.practice_areas.length > 0 &&
                                <div>
                                    <pre><span>Practice Areas</span></pre>
                                    <ul>
                                        {
                                            detailpage.detailpage.practice_areas.map((d,i)=>(<li key={i}>{d}</li>))
                                        }
                                    </ul>
                                </div>                                
                            }
                            {
                                detailpage.detailpage.languages.length > 0 &&
                                <div>
                                    <pre><span>Languages</span></pre>
                                    <ul>
                                        {
                                            detailpage.detailpage.languages.map((d,i)=>(<li key={i}>{d}</li>))
                                        }
                                    </ul>
                                </div>                                
                            }
                            {
                                detailpage.detailpage.education.length > 0 &&
                                <div>
                                    <pre><span>Education</span></pre>
                                    <ul>
                                        {
                                            detailpage.detailpage.education.map((d,i)=>(<li key={i}>{d}</li>))
                                        }
                                    </ul>
                                </div>                                
                            }
                            {
                                detailpage.detailpage.p_associations.length > 0 &&
                                <div>
                                    <pre><span>Associations</span></pre>
                                    <ul>
                                        {
                                            detailpage.detailpage.p_associations.map((d,i)=>(<li key={i}>{d}</li>))
                                        }
                                    </ul>
                                </div>                                
                            }
                            {
                                detailpage.detailpage.summary &&
                                <div>
                                    <h5 style={{marginTop:40} }>
                                        <b>
                                        SUMMARY
                                        </b>
                                    </h5>
                                    <hr style={{backgroundColor:'white'}}/>
                                    <pre>{detailpage.detailpage.summary}</pre>                               
                                </div>
                            }
                            </>
                        }


                        </div>
                    </div>
                </div>
            :<div></div>
            }

        </>
    )
}
export default connect(mapStateToProps,mapDispatchToProps)(Userdetail);
