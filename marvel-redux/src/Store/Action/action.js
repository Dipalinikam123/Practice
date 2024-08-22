
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

export const fetchComicData = (offset, limit) => {
    return async (dispatch) => {
        dispatch(fetchApiRequest());

        const url = `https://gateway.marvel.com:443/v1/public/comics?limit=${limit}&offset=${offset}&apikey=${publicKey}&ts=${timeStamp}&hash=${hashKey}`;
        
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

// action.js
export const fetchSingleData = (id) => {
    return async (dispatch) => {
      dispatch(fetchApiRequest2());
      try {
        const response = await fetch(`https://gateway.marvel.com:443/v1/public/comics/${id}?apikey=${publicKey}&ts=${timeStamp}&hash=${hashKey}`);
        const data = await response.json();
        dispatch(fetchApiSuccess2(data.data.results));
      } catch (error) {
        dispatch(fetchApiFailure2(error));
      }
    };
  };
  

