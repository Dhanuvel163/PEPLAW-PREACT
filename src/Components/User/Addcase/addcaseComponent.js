import React from 'react';
import {Control,LocalForm,Errors} from 'react-redux-form';
import {postusercase} from '../../../shared/Actioncreators/actionCreators'
import {connect} from 'react-redux';
import Formerror from '../../Partials/Formerror/Formerror';
import {useAuth} from '../../../Context/userauth'

const mapStateToProps=state=>{
    return {
    }
}
const mapDispatchToProps=dispatch=>({
    postusercase:(dcode,ddate,stime,acharge,desc,token)=>dispatch(postusercase(dcode,ddate,stime,acharge,desc,token)),
})
const required=(val)=>(val)&&(val.length)

function Addcase(props){
    const { currentUser } = useAuth()
    const handlesubmit=async(values)=>{
        const token = await currentUser.getIdToken()
        props.postusercase(values['disposition-code'],values['disposition-date'],
        values['sentence-time'],values['amended-charge'],values['description'],token);
        // setTimeout(()=>{props.install();},2000)
    }
    return(
        <div className="container" style={{marginTop:50,marginBottom:50}}>
                {true && (document.title='ADD CASE | PEPLAW')?null:null}
            <h4 className="text-center">
                    <svg style={{marginRight:11}}
                    xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-journal-plus" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M8 5.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V10a.5.5 0 0 1-1 0V8.5H6a.5.5 0 0 1 0-1h1.5V6a.5.5 0 0 1 .5-.5z"/>
                    <path d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2z"/>
                    <path d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1z"/>
                    </svg> 
                 Add Case</h4>
            <div className="container" style={{marginTop:50}}>
            <hr></hr>
                <div className="row">
                    <div className="col-12 col-sm-6 d-flex align-items-center">
                        <LocalForm onSubmit={(values)=>handlesubmit(values)}>
                            <div className='form-group'>
                                <label htmlFor="disposition-code">Disposition code</label>
                                <Control.text model=".disposition-code" className='form-control'
                                    placeholder="Disposition code"
                                    validators={{
                                    required
                                    }}/>
                                <Errors
                                model='.disposition-code'
                                show="touched"
                                component={(props)=><Formerror props={props}/>}
                                messages={{
                                    required:'Disposition code is required !!',
                                }}
                                ></Errors>
                            </div>
                            <div className="row">
                                <div className="col-12 col-sm-6">
                                    <div className='form-group'>
                                    <label htmlFor="disposition-date">Disposition Date</label>
                                    <Control.text model=".disposition-date" className='form-control'
                                    placeholder="Disposition date"
                                    validators={{
                                        required
                                    }}/>
                                    <Errors
                                    model='.disposition-date'
                                    show="touched"
                                    component={(props)=><Formerror props={props}/>}
                                    messages={{
                                        required:'Disposition date is required !!',
                                    }}
                                    ></Errors>
                                    </div>
                                </div>
                                <div className="col-12 col-sm-6">
                                    <div className='form-group'>
                                    <label htmlFor="sentence-time">Sentence Time</label>
                                    <Control.text model=".sentence-time" className='form-control'
                                    placeholder="sentence-time"
                                    validators={{
                                        required
                                    }}/>
                                    <Errors
                                    model='.sentence-time'
                                    show="touched"
                                    component={(props)=><Formerror props={props}/>}
                                    messages={{
                                        required:'Sentence Time is required !!',
                                    }}
                                    ></Errors>
                                    </div>
                                </div>
                            </div>
                            <div className='form-group'>
                                <label htmlFor="sentence-time">Amended Charge</label>
                                <Control.text model=".amended-charge" className='form-control'
                                    placeholder="Amended Charge"
                                    validators={{
                                    required
                                    }}/>
                                <Errors
                                    model='.amennded-charge'
                                    show="touched"
                                    component={(props)=><Formerror props={props}/>}
                                    messages={{
                                        required:'Amended Charge is required !!',
                                    }}
                                    ></Errors>
                            </div>
                            <div className='form-group'>
                                <label htmlFor="sentence-time">Description</label>
                                <Control.textarea model=".description" className='form-control'
                                    placeholder="Description"
                                    />
                            </div>
                            <div className="d-flex justify-content-center">
                            <button className="btn btn-secondary">Add</button>
                            </div>
                        </LocalForm>        
                    </div>
                    <div className="col" >
                        <div className="container">
                        <img alt="PROFILE EDIT" style={{width:'inherit',marginTop:30}} 
                        src="/assets/add1.svg" />
                        </div>
                    </div>
                </div>
                <hr></hr>
            </div>
        </div>
    );
}
export default connect(mapStateToProps,mapDispatchToProps)(Addcase);
