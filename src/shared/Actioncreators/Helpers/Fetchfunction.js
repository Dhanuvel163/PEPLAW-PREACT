import {load} from './Loading'

export function fetchFunc(url,option,dispatch){
    dispatch(load())
    return new Promise((resolve,reject)=>{
        fetch(url,option)
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
            .then(Response=>{
            if(Response.success){
                resolve(Response)
            }else{
                reject(Response.message)
            }
        })
        .catch((error)=>{
                reject(error.message)
        })
    })
    
}