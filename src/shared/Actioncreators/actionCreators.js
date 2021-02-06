import * as  actionTypes from '../actionTypes';
import {baseUrl} from '../url';

import {fetchprofiledata,postprofiledata} from './Profiledata'
import {fetchallcases,fetchusercases,postapply,postusercase,postacceptbyuser} from './Cases'
import {fetchdetailpagedata} from './Detailpage'

import {clearLoading,load} from './Helpers/Loading'
import {clearMessage,successMessage,errorMessage} from './Helpers/Error'
import {fetchFunc} from './Helpers/Fetchfunction'

export {fetchprofiledata,postprofiledata,clearMessage,fetchdetailpagedata,
    fetchallcases,fetchusercases,postapply,postusercase,postacceptbyuser,successMessage,errorMessage,load,clearLoading}

export const createuser=(name,email,password,mobile,picture,token,history)=>(dispatch)=>{
    var newuser={
            name,email,password,mobile,picture
    }
    newuser.date = new Date().toISOString();
    return fetchFunc(baseUrl+'api/useraccounts/createUser',{
        method: "POST",
        body:JSON.stringify(newuser),
        headers: {
          "Content-Type": "application/json",
          "authorization":token
        },
        credentials: "same-origin"
    },dispatch)
    .then(Response=>{
        if(Response.success){
        }
    })
    .catch((error)=>{
    }).finally(()=>{dispatch(clearLoading())})
}

export const createlawyer=(name,email,password,mobile,picture,token,history)=>(dispatch)=>{
    var newlawyer={
            name,email,password,mobile,picture
    }
    newlawyer.date = new Date().toISOString();
    return fetchFunc(baseUrl+'api/lawyeraccounts/createLawyer',{
        method: "POST",
        body:JSON.stringify(newlawyer),
        headers: {
          "Content-Type": "application/json",
          "authorization":token
        },
        credentials: "same-origin"
    },dispatch)
    .then(Response=>{
        if(Response.success){
        }
    })
    .catch((error)=>{
        // displayError(dispatch,error)
    }).finally(()=>{dispatch(clearLoading())})
}








//Fetch Lawyers

export const fetchlawyers=()=>(dispatch)=>{
    dispatch(lawyersloading(true));

    return fetch(baseUrl+'lawyers')
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
            .then(lawyers=>{dispatch(addlawyers(lawyers))})
            .catch((error)=>{dispatch(lawyersfailed(error.message))})
}

export const lawyersloading=()=>({
   type:actionTypes.LAWYERS_LOADING 
})

export const lawyersfailed=(err)=>({
    type:actionTypes.LAWYERS_FAILED,
    payload:err
})

export const addlawyers=(lawyers)=>({
    type:actionTypes.ADD_LAWYERS,
    payload:lawyers
})
