import * as  actionTypes from '../actionTypes';

export const loading=(state={
    loading:false,
},action)=>{
    switch(action.type){
        case actionTypes.LOADING :
            return {...state,loading:true}
        case actionTypes.CLEAR_LOADING:
            return {...state,loading:false}
        default:
            return state;
    }
}