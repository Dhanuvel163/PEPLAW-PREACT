import React from 'react';
import {postusercase} from '../../../shared/Actioncreators/actionCreators'
import {connect} from 'react-redux';
import Formerror from '../../Partials/Formerror/Formerror';
import {useAuth} from '../../../Context/userauth'
import { Formik } from 'formik';

const mapStateToProps=state=>{
    return {
    }
}
const mapDispatchToProps=dispatch=>({
    postusercase:(dcode,ddate,stime,acharge,desc,token)=>dispatch(postusercase(dcode,ddate,stime,acharge,desc,token)),
})
function Addcase(props){
    const { currentUser } = useAuth()
    const handlesubmit=async(values)=>{
        const token = await currentUser.getIdToken()
        props.postusercase(values['dcode'],values['ddate'],
        values['stime'],values['acharge'],values['description'],token);
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
                 Add Case
            </h4>
            <div className="container" style={{marginTop:50}}>
            <hr></hr>
                <div className="row">
                    <div className="col-12 col-sm-6 d-flex align-items-center">

                        <Formik
                        initialValues={{ stime: '', ddate: '',dcode:'',acharge:'',description:'' }}
                        validate={values => {
                            const errors = {};
                            if (!values.dcode) {
                            errors.dcode = 'Disposition Code is Required';
                            } 
                            if (!values.ddate) {
                            errors.ddate = 'Disposition Date is Required';
                            } 
                            if (!values.stime) {
                            errors.stime = 'Sentence Time is Required';
                            }
                            if (!values.acharge) {
                            errors.acharge = 'Amended Charge is Required';
                            } 
                            if (!values.description) {
                            errors.description = 'Description is Required';
                            } 
                            return errors;
                        }}
                        onSubmit={(values, { setSubmitting }) => {
                            handlesubmit(values)
                            setSubmitting(false);
                        }}
                        >
                        {({values,errors,touched,handleChange,handleBlur,handleSubmit,isSubmitting}) => (
                            <form onSubmit={handleSubmit} style={{width:'100%'}}>
                                <div className="form-group">
                                    <label htmlFor="dcode">Disposition Code</label>
                                    <input
                                        type="dcode"
                                        name="dcode"
                                        className="form-control"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.dcode}
                                    />
                                </div>
                                {errors.dcode && touched.dcode && <Formerror>{errors.dcode}</Formerror>}
                                <div className="row">
                                    <div className="col-12 col-sm-6">
                                        <div className="form-group">
                                            <label htmlFor="ddate">Disposition Date</label>
                                            <input
                                                type="ddate"
                                                name="ddate"
                                                className="form-control"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.ddate}
                                            />
                                        </div>
                                        {errors.ddate && touched.ddate && <Formerror>{errors.ddate}</Formerror>}
                                    </div>
                                    <div className="col-12 col-sm-6">
                                        <div className="form-group">
                                            <label htmlFor="stime">Sentence Time</label>
                                            <input
                                                type="stime"
                                                name="stime"
                                                className="form-control"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.stime}
                                            />
                                        </div>
                                        {errors.stime && touched.stime && <Formerror>{errors.stime}</Formerror>}
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="acharge">Amended Charge</label>
                                    <input
                                        type="acharge"
                                        name="acharge"
                                        className="form-control"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.acharge}
                                    />
                                </div>
                                {errors.acharge && touched.acharge && <Formerror>{errors.acharge}</Formerror>}
                                <div className="form-group">
                                    <label htmlFor="description">Description</label>
                                    <textarea
                                        type="description"
                                        name="description"
                                        className="form-control"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.description}
                                    />
                                </div>
                                {errors.description && touched.description && <Formerror>{errors.description}</Formerror>}
                                <div className="d-flex justify-content-center">
                                <button type="submit" className="btn btn-secondary">Add</button>
                                </div>
                            </form>
                        )}
                        </Formik>      
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
