import * as  actionTypes from '../actionTypes';

export const profiledata=(state={profiledata:[],isloading:true,err:null},action)=>{
    switch(action.type){
        case actionTypes.ADD_PROFILEDATA:
            return {...state,profiledata:action.payload,isloading:false,err:null}
        case actionTypes.ADD_PROFILEDATAFAILED:
            return {...state,profiledata:[],isloading:false,err:action.payload}
        case actionTypes.ADD_PROFILEDATA_LOADING:
            return {...state,profiledata:[],isloading:true,err:null}
        default:
            return state;
    }
}