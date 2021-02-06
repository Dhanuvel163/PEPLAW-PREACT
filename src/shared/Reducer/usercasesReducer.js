import * as  actionTypes from '../actionTypes';

export const usercases=(state={usercasedata:{},isloading:true,err:null},action)=>{
    switch(action.type){
        case actionTypes.ADD_USERCASES:
            return {...state,usercasedata:action.payload,isloading:false,err:null}
        case actionTypes.ADD_TO_USERCASES:
            return (state.isloading)?
            state
            :
            {
                ...state,
                usercasedata:{
                    ...state.usercasedata,
                    cases:state.usercasedata.cases.concat(action.payload),
                    pendingcases:state.usercasedata.pendingcases.concat(action.payload)
                },
                isloading:false,err:null
            }
        case actionTypes.ADD_USERCASESFAILED:
            return {...state,usercasedata:{},isloading:false,err:action.payload}
        case actionTypes.ADD_USERCASES_LOADING:
            return {...state,usercasedata:{},isloading:true,err:null}
        case actionTypes.ACCEPT_BY_USER:
            return (state.isloading)?
            state
            :
            {
                ...state,
                usercasedata:{
                    ...state.usercasedata,
                    cases:state.usercasedata.cases.map((d)=>{return (d._id===action.payload._id)?action.payload:d}),
                    pendingcases:state.usercasedata.pendingcases.filter((d)=>d._id !== action.payload._id),
                    acceptedcases:state.usercasedata.acceptedcases.concat(action.payload)
                },
                isloading:false,err:null
            }
        default:
            return state;
    }
}