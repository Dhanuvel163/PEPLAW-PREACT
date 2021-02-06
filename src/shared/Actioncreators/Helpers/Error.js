import * as  actionTypes from '../../actionTypes';

//ERROR Message

export const errorMessage=(msg)=>{
    navigator.vibrate([1500])
    return{
        type:actionTypes.ERROR_MESSAGE ,
        payload:msg
    }
}
export const successMessage=(msg)=>({
    type:actionTypes.SUCCESS_MESSAGE,
    payload:msg
})

export const clearMessage=()=>{
    return{
    type:actionTypes.CLEAR_MESSAGE,
    }
}


export function displaySuccess(dispatch,msg){
    dispatch(successMessage(msg))
    setTimeout(()=>{
        dispatch(clearMessage())
    },3000)
}
export function displayError(dispatch,msg){
    dispatch(errorMessage(msg))
    setTimeout(()=>{
        dispatch(clearMessage())
    },3000)
}