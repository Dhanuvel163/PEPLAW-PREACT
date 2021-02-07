import React,{useEffect,useCallback} from 'react'
import {fetchdetailpagedata} from '../../../shared/Actioncreators/actionCreators'
import {connect} from 'react-redux';
import { useParams} from 'react-router-dom'
// import {Helmet} from 'react-helmet'
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
                        {/* <div className="spinner-border" style={{ width: '4rem', height: '4rem',color:'#a01ba7' }} role="status">           
                        </div> */}
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
                        {/* <Helmet>
                            <title>{detailpage.detailpage.name.toUpperCase()} | PEPLAW </title>
                        <meta name="description" content="Peplaw profile detail page"/>
                        </Helmet> */}
                        {true && (document.title=`${detailpage.detailpage.name.toUpperCase()} | PEPLAW`)?null:null}
                        <div className="card-header">
                            <div className="mb-3">
                            <img  src={detailpage.detailpage.picture} className="profile-img" alt={detailpage.detailpage.name}/>
                            <span style={{marginLeft:'15px'}}>
                            {detailpage.detailpage.name}
                            </span>
                            </div>
                        </div>
                        <div className="card-body profile">
                            <pre>
                            <span>Mail         : </span>   {detailpage.detailpage.email}
                            </pre>
                            <pre>
                            <span>Mobile     : </span>   {detailpage.detailpage.mobile || 'No Data !'}
                            </pre>
                            <pre>
                            <span>Address  : </span>   {detailpage.detailpage.address ? detailpage.detailpage.address.addr1 : 'No Data !'}
                            </pre>
                            <div className="row">
                                <div className="col-12 col-md-6">
                                    <pre>
                                    <span>State       : </span>   {detailpage.detailpage.address ? detailpage.detailpage.address.state ? detailpage.detailpage.address.state : 'No Data !' : 'No Data !'}
                                    </pre>
                                    <pre>
                                    <span>Country : </span>   {detailpage.detailpage.country || 'No Data !'}
                                    </pre>
                                </div>
                                <div className="col-12 col-md-6">
                                    <pre>
                                    <span>Pincode  : </span>   {detailpage.detailpage.address ? detailpage.detailpage.address.postalCode ? detailpage.detailpage.address.postalCode : 'No Data !': 'No Data !'}
                                    </pre> 
                                    <pre>
                                    <span>City         : </span>   {detailpage.detailpage.city || 'No Data !'}
                                    </pre>               
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            :<div></div>
            }

        </>
    )
}
export default connect(mapStateToProps,mapDispatchToProps)(Userdetail);
