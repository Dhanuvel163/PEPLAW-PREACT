import * as  actionTypes from '../actionTypes';

export const detailpage=(state={detailpage:{},isloading:true,err:null},action)=>{
    switch(action.type){
        case actionTypes.ADD_DETAILPAGE:
            return {...state,detailpage:action.payload,isloading:false,err:null}
        case actionTypes.ADD_DETAILPAGE_LOADING:
            return {...state,detailpage:{},isloading:true,err:action.payload}
        case actionTypes.ADD_DETAILPAGEFAILED:
            return {...state,detailpage:{},isloading:false,err:null}
        default:
            return state;
    }
}