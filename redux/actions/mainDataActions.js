import { FETCHING_MAINDATA, FETCHING_MAINDATA_SUCCESS, FETCHING_MAINDATA_FALIURE } from '../constants';


export const getData = () => {
    return {
        type: FETCHING_MAINDATA
    }
}

export const getDataSuccess = data => {
    return {
        type: FETCHING_MAINDATA_SUCCESS,
        data
    }
}

export const getDataFailure = data => {
    return {
        type: FETCHING_MAINDATA_FALIURE,
        data
    }
}


export const fetchInformation = (data) => {
    return (dsipatch) => {
        dsipatch(getData())
        dsipatch(getDataSuccess(data))
    }
}