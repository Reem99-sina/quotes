import { ACTION_TYPE } from "./actiontype"

const initialState={
    quotes:[],
    quote:{}
}

export const setQuotes=(state=initialState,{type,payload})=>{
switch(type){
case ACTION_TYPE.SET_QUOTES:
    return {...state,quotes:payload}
case ACTION_TYPE.REMOVE_QUOTES:{
    if(initialState.quotes.length>0){
        let index=initialState.quotes.indexOf(payload)
        if(index>0){
           const newArr= initialState.quotes.filter((ele,i)=>{
                return i!==index
            })   
            return {...state,quotes:newArr}
        }else{
            return {...state,quotes:payload}
        }
    }
    else{
        return {...state,quotes:payload}
    }
}case ACTION_TYPE.alreadyDate:{
    return {...state,quote:payload}
}
default:
    return state
}
}
