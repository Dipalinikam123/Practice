import { BaseUrl } from "@/utils/apis";
import { FETCH_API_REQUEST, FETCH_API_FAILURE, FETCH_API_SUCCESS } from './../types';
import { FETCH_API_REQUEST_ID, FETCH_API_FAILURE_ID, FETCH_API_SUCCESS_ID } from './../types';

const publicKey = process.env.NEXT_PUBLIC_PUBLIC_KEY;
const timeStamp = process.env.NEXT_PUBLIC_TIME_STAMP;
const hashKey = process.env.NEXT_PUBLIC_HASH_KEY;

console.log("Public Key:", publicKey);
console.log("Time Stamp:", timeStamp);
console.log("Hash Key:", hashKey);  // Ensure these variables are not undefined

// ---------------Fetching All Data -------------------------
const fetchApiRequest = () => ({
    type: FETCH_API_REQUEST
});

const fetchApiSuccess = (data: any) => ({
    type: FETCH_API_SUCCESS,
    payload: data
});

const fetchApiFailure = (error: any) => ({
    type: FETCH_API_FAILURE,
    error
});
export const clearComicData = () => ({
    type: 'CLEAR_COMIC_DATA',
  });

// -----------------------------------------------------------
const fetchIdApiRequest = () => ({
    type: FETCH_API_REQUEST_ID
});

const fetchIdApiSuccess = (data: any) => ({
    type: FETCH_API_SUCCESS_ID,
    payload: data
});

const fetchIdApiFailure = (error: any) => ({
    type: FETCH_API_FAILURE_ID,
    error
});

export const fetchComicData = (offset:any, limit:any) => {
    return async (dispatch: any) => {
        dispatch(fetchApiRequest());

        // Construct the API URL using the environment variables
        const url = `${BaseUrl}/comics?limit=${limit}&offset=${offset}&apikey=${publicKey}&ts=${timeStamp}&hash=${hashKey}`;

        try {
            const response = await fetch(url);
            const data = await response.json();
            dispatch(fetchApiSuccess(data?.data?.results));
        } catch (error: any) {
            dispatch(fetchApiFailure(error));
        }
    };
};

export const fetchSingleData = (id:number) => {
    return async (dispatch:any) => {
      dispatch(fetchIdApiRequest());
      try {
        const response = await fetch(`${BaseUrl}/comics/${id}?apikey=${publicKey}&ts=${timeStamp}&hash=${hashKey}`);
        const data = await response.json();
        dispatch(fetchIdApiSuccess(data.data.results[0]));
      } catch (error) {
        dispatch(fetchIdApiFailure(error));
      }
    };
  };
