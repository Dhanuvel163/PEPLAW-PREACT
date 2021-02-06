import * as  actionTypes from '../actionTypes';

export const errors=(state={
    open:false,
    data:null,
    classN:null
},action)=>{
    switch(action.type){
        case actionTypes.ERROR_MESSAGE :
            return {...state,open:true,data:action.payload,classN:'error'}
        case actionTypes.SUCCESS_MESSAGE:
            return {...state,open:true,data:action.payload,classN:'success'}
        case actionTypes.CLEAR_MESSAGE:
            return {...state,open:false,data:' ',className:' '}
        default:
            return state;
    }
}