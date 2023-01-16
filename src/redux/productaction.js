import { ACTION_TYPE } from "./actiontype"

export const setQuote=(quotes)=>{
    return {
        type:ACTION_TYPE.SET_QUOTES,
        payload:quotes
    }
}
export const removeQuote=(quote)=>{
    return {
        type:ACTION_TYPE.REMOVE_QUOTES,
        payload:quote
    }
}
export const alreadyQuote=(quote)=>{
    return {
        type:ACTION_TYPE.alreadyDate,
        payload:quote
    }
}