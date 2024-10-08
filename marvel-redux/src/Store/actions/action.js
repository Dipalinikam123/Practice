import { BaseUrl, fetchApi } from "../../api-config";

const publicKey = 'caa605ac9607a904ac4277866f4bbb23'
const timeStamp = '1723536781813'
const hashKey = 'ab47f2dac9b62b45e88ef8605f5d3adb'

// ---------------Fetching All Data -------------------------
const fetchApiRequest = () => {
    return {type:'FETCH_API_REQUEST'}
};

const fetchApiSuccess = (data) => {
    return { 
        type:'FETCH_API_SUCCESS',
        payload: data
    }
};

const fetchApiFailure = (error) => {
    return {
        type: 'FETCH_API_FAILURE',
        error
    }
};
// -------Fetching single commic page API ----------------------

const fetchApiRequest2 = () => {
    return {type: 'SINGLE_PAGE_REQUEST'}
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
// -------Character page API ----------------------

const fetchApiRequest3 = () => {
    return {type: 'CHAR_PAGE_REQUEST'}
};

const fetchApiSuccess3 = (data) => {
    return {
        type: 'CHAR_PAGE_SUCCESS',
        payload: data
    }
};

const fetchApiFailure3 = (error) => {
    return {
        type: 'CHAR_PAGE_FAILURE',
        error
    }
};

export const fetchComicData = (offset, limit) => {
    return async (dispatch) => {
        dispatch(fetchApiRequest());

        const url = `${BaseUrl}/comics?limit=${limit}&offset=${offset}&apikey=${publicKey}&ts=${timeStamp}&hash=${hashKey}`;
        
        try {
            const response = await fetch(url);

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            dispatch(fetchApiSuccess(data?.data?.results));
        } catch (error) {
            dispatch(fetchApiFailure(error));
        }
    };
};

// -------Fetching single commic page API ----------------------

// action.js
export const fetchSingleData = (id) => {
    return async (dispatch) => {
      dispatch(fetchApiRequest2());
      try {
        const response = await fetch(`${BaseUrl}/comics/${id}?apikey=${publicKey}&ts=${timeStamp}&hash=${hashKey}`);
        const data = await response.json();
        dispatch(fetchApiSuccess2(data.data.results));
      } catch (error) {
        dispatch(fetchApiFailure2(error));
      }
    };
  };


// -------character
  export const fetchCharacterData = (offset,limit) => {
    return async (dispatch) => {
        dispatch(fetchApiRequest3());
        const url = `${BaseUrl}/characters?limit=${limit}&offset=${offset}&apikey=${publicKey}&ts=${timeStamp}&hash=${hashKey}`;
        
        try {
            const response = await fetch(url);

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            dispatch(fetchApiSuccess3(data?.data?.results));
        } catch (error) {
            dispatch(fetchApiFailure3(error));
        }
    };
};
