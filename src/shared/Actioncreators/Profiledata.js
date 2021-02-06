import * as  actionTypes from '../actionTypes';
import {baseUrl} from '../url';
import {displayError,displaySuccess} from './Helpers/Error'

//Fetch Profile Data

export const fetchprofiledata=(token,type)=>(dispatch)=>{
    dispatch(addprofileloading(true))
    if(type==='LAWYER'){
        return fetch(baseUrl+'api/lawyeraccounts/profile',{headers: {'authorization':token}})
        .then((res)=>{
            if(res.ok){
                return res;
            }else{
                var error=new Error('Error'+res.status+res.statusText)
                error.res=res;
                throw error;
            }
        },
        (error)=>{
        throw new Error(error.message)
        })
        .then(res=> res.json())
        .then(res=>{dispatch(addprofiledata(res.lawyer))})
        .catch((error)=>{dispatch(addprofilefailed(error.message))})
    }else if(type==="USER"){
        return fetch(baseUrl+'api/useraccounts/profile',{headers: {'authorization':token}})
        .then((res)=>{
            if(res.ok){
                return res;
            }else{
                var error=new Error('Error'+res.status+res.statusText)
                error.res=res;
                throw error;
            }
        },
        (error)=>{
        throw new Error(error.message)
        })
        .then(res=> res.json())
        .then(res=>{dispatch(addprofiledata(res.user))})
        .catch((error)=>{dispatch(addprofilefailed(error.message))})
    }
}

export const addprofiledata=(data)=>({
    type:actionTypes.ADD_PROFILEDATA,
    payload:data
})
export const addprofilefailed=(err)=>({
    type:actionTypes.ADD_PROFILEDATAFAILED,
    payload:err
})
export const addprofileloading=()=>({
    type:actionTypes.ADD_PROFILEDATA_LOADING,
})

//post edited profile data

export const postprofiledata=(name,mobile,country,city,addr1,state,postalCode,token,type)=>(dispatch)=>{
    dispatch(addprofileloading(true))
    if(type==="LAWYER"){
        return fetch(baseUrl+'api/lawyeraccounts/profile',{
            method: "POST",
            body:JSON.stringify({name,mobile,country,city,addr1,state,postalCode}),
            credentials: "same-origin",
            headers: {
              "Content-Type": "application/json",
              "authorization":token
            },
        })
            .then((res)=>{
                if(res.ok){
                    return res;
                }else{
                    var error=new Error('Error'+res.status+res.statusText)
                    error.res=res;
                    throw error;
                }
            },
            (error)=>{
                throw new Error(error.message)
            })
            .then(res=> res.json())
            .then(res=>{
                displaySuccess(dispatch,'Edited Successfully!!')
                dispatch(addprofiledata(res.profile))
            })
            .catch((error)=>{
                displayError(dispatch,'Something went wrong:'+error.message)
            })
    }else if(type==="USER"){
        return fetch(baseUrl+'api/useraccounts/profile',{
            method: "POST",
            body:JSON.stringify({name,mobile,country,city,addr1,state,postalCode}),
            credentials: "same-origin",
            headers: {
              "Content-Type": "application/json",
              "authorization":token
            },
        })
            .then((res)=>{
                if(res.ok){
                    return res;
                }else{
                    var error=new Error('Error'+res.status+res.statusText)
                    error.res=res;
                    throw error;
                }
            },
            (error)=>{
                throw new Error(error.message)
            })
            .then(res=> res.json())
            .then(res=>{
                displaySuccess(dispatch,'Edited Successfully!!')
                dispatch(addprofiledata(res.profile))
            })
            .catch((error)=>{
                displayError(dispatch,'Something went wrong:'+error.message)
            })
    }
}
