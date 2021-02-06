import * as  actionTypes from '../actionTypes';

export const lawyers=(state={
    isloading:true,
    err:null,
    lawyers:[]
},action)=>{
    switch(action.type){
        case actionTypes.ADD_LAWYERS :
            return {...state,lawyers:action.payload,isloading:false,err:null}
        case actionTypes.LAWYERS_LOADING:
            return {...state,lawyers:[],isloading:true,err:null}
        case actionTypes.LAWYERS_FAILED:
            return {...state,lawyers:null,isloading:false,err:action.payload}
        default:
            return state;
    }
}