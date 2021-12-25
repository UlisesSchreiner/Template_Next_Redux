import { FETCHING_MAINDATA, FETCHING_MAINDATA_SUCCESS, FETCHING_MAINDATA_FALIURE } from '../constants';

const initialState = {
    object: {},
    isFetching: false
}   

// dataReducer =
export default (state = initialState, action) => {

    switch (action.type) {
        case FETCHING_MAINDATA:
            return {
                ...state,
                isFetching: true
            }
        case FETCHING_MAINDATA_SUCCESS:
            return {
                ...state,
               object: action,
                isFetching: false
            }
        case FETCHING_MAINDATA_FALIURE:
            return {
                ...state,
                isFetching: false
            }
        default:
            return state
    }
}