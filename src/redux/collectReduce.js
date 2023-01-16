import { combineReducers } from "redux";
import { setQuote, setQuotes } from "./reduces";

 const reducers=combineReducers({
    quotes:setQuotes
})
export default reducers