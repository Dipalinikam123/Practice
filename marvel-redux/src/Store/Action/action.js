
import axios from "axios"
const publicKey = 'caa605ac9607a904ac4277866f4bbb23'
const timeStamp = '1723536781813'
const hashKey = 'ab47f2dac9b62b45e88ef8605f5d3adb'

// ---------------Fetching All Data -------------------------
const fetchApiRequest = () => {
    return {
        type: 'FETCH_API_REQUEST'
    }
};

const fetchApiSuccess = (data) => {
    return {
        type: 'FETCH_API_SUCCESS',
        payload: data
    }
};

const fetchApiFailure = (error) => {
    return {
        type: 'FETCH_API_FAILURE',
        error
    }
};

export const fetchComicData = (offset,limit) => {
    return (dispatch) => {
        dispatch(fetchApiRequest());
        
        axios({
            method: "get",
            url: `https://gateway.marvel.com:443/v1/public/comics?limit=${limit}&offset=${offset}&apikey=${publicKey}&ts=${timeStamp}&hash=${hashKey}`,
        }).then((res) => {
            dispatch(fetchApiSuccess(res?.data?.data?.results))
        }).catch((err) => {
            dispatch(fetchApiFailure(err))
        })
    }
}

// -------Fetching single commic page API ----------------------

const fetchApiRequest2 = () => {
    return {
        type: 'SINGLE_PAGE_REQUEST'
    }
};

const fetchApiSuccess2 = (data) => {
    return {
        type: 'SINGLE_PAGE_SUCCESS',
        payload: data
    }
};

const fetchApiFailure2 = (error) => {
    return {
        type: 'SINGLE_PAGE_FAILURE',
        error
    }
};

export const fetchSingleData=(id)=>{
    console.log("----id,",id);
    return (dispatch) => {
        dispatch(fetchApiRequest2());
        axios({
            method:'get',
            url:`https://gateway.marvel.com:443/v1/public/comics/${id}?apikey=${publicKey}&ts=${timeStamp}&hash=${hashKey}`
        }).then((res) => {
            dispatch(fetchApiSuccess2(res?.data?.data?.results))
        }).catch((err) => {
            dispatch(fetchApiFailure2(err))
        })
    }
}

