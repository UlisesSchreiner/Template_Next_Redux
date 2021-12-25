import { combineReducers } from "redux";
import mainDataReducer from './mainDataReducer';

// este es el nombre que despues toma el state del de redux en useSelector
export default combineReducers({
    mainDataReducer
})