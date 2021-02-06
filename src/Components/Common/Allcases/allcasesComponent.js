import React,{useEffect} from 'react';
import Cardprofile from './cardprofile'
import {connect} from 'react-redux';
import {fetchallcases,postapply
} from '../../../shared/Actioncreators/actionCreators'
import {useLawyerAuth} from '../../../Context/lawyerauth'

const mapStateToProps=state=>{
    return {
        allcases:state.allcases
    }
}
const mapDispatchToProps=dispatch=>({
    fetchallcases:(token)=>dispatch(fetchallcases(token)),
    postapply:(id,token)=>dispatch(postapply(id,token))
})
function Head(props){
    return(
        <>
        {
            (props.data.length>0)
            ?
            <h4 className="text-center">
                <svg style={{marginRight:11}}
                xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-layout-text-sidebar" viewBox="0 0 16 16">
                <path d="M3.5 3a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5zm0 3a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5zM3 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm.5 2.5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5z"/>
                <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm12-1v14h2a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1h-2zm-1 0H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h9V1z"/>
                </svg>
                All Cases!</h4>
            :
            <h4 className="text-center">
                <svg style={{marginRight:11}}
                xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-journal-x" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M6.146 6.146a.5.5 0 0 1 .708 0L8 7.293l1.146-1.147a.5.5 0 1 1 .708.708L8.707 8l1.147 1.146a.5.5 0 0 1-.708.708L8 8.707 6.854 9.854a.5.5 0 0 1-.708-.708L7.293 8 6.146 6.854a.5.5 0 0 1 0-.708z"/>
                <path d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2z"/>
                <path d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1z"/>
                </svg>
                No Results found!</h4>
        }
        </>
    )
}
let fetched = false
function Allcases(props){
    const { currentLawyer } = useLawyerAuth()
    const fetchAllcases=async()=>{
        if(!fetched){
            let token = await currentLawyer.getIdToken()
            props.fetchallcases(token)
            fetched=true
        }
    }
    useEffect(()=>{
        fetchAllcases()
        return ()=>{
        }
    })
    return(
        <>
        {
            (!props.allcases)
            ?
            <div className="d-flex justify-content-center align-items-center" style={{height:'100%',minHeight:500}}>            
            <div>Something went wrong !</div>
            </div>
            :
            (props.allcases.err)
            ?
            <div className="d-flex justify-content-center align-items-center" style={{height:'100%',minHeight:500}}>            
            <div>Something went wrong ! {props.allcases.err} !</div>
            </div>
            :
            (props.allcases.isloading)
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
            (props.allcases.allcases && props.allcases.allcases.length!==0)
            ?
            <div className="container cases" style={{marginTop:50,marginBottom:50,height:'100%'}}>
                {/* <Helmet>
                    <title>ALLCASES | PEPLAW</title>
                <meta name="description" content="Here you can see every registered cases"/>
                </Helmet> */}
                {( true && (document.title='ALLCASES | PEPLAW'))?null:null}
                    <Head data={props.allcases.allcases}/>
                    <div style={{marginTop:50}} className="row justify-content-lg-around">
                        {
                            props.allcases.allcases.map((data)=>{
                                return(
                                <div className="col-sm-12 col-md-6 col-lg-3" key={data.dispositioncode} >
                                <Cardprofile postapply={props.postapply} casedata={data} install={props.install}></Cardprofile>
                                </div>
                                )
                            })                        
                        }
                    </div>
            </div>
            :
            <div className="container cases" style={{marginTop:50,marginBottom:50,height:'100%'}}>
                <Head data={props.allcases.allcases}/>
                <div style={{marginTop:50}} className="row justify-content-lg-around">
                </div>
            </div>  
        }
        </>
    )
}


// export default memo(Allcases);
export default connect(mapStateToProps,mapDispatchToProps)(Allcases);
