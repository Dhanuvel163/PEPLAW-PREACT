import * as  actionTypes from '../../actionTypes';


//LOADING
export const load=()=>({
   type:actionTypes.LOADING
})

export const clearLoading=(lawyers)=>({
    type:actionTypes.CLEAR_LOADING,
})