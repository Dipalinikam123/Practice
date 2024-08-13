
import axios from "axios"

// const apiKey = "caa605ac9607a904ac4277866f4bbb23"

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

export const fetchApiData = () => {
    const publicKey= 'caa605ac9607a904ac4277866f4bbb23'
    return (dispatch) => {
        dispatch(fetchApiRequest());
        axios({
            method:'get',
            url:`https://gateway.marvel.com:443/v1/public/comics?apikey=${publicKey}`,
            params: {
                apikey: 'caa605ac9607a904ac4277866f4bbb23'
             },
            headers:{
                "Accept": "application/json",
                'Referer': 'https://developer.marvel.com/',
                "Connection": "keep - alive",
                "Host":"gateway.marvel.com",
                "If-None-Match":"f4e807af5818a3d2fd82ef8571e8dc7ee1cad871",
                "Origin":"https://developer.marvel.com",
                "User-Agent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36",
                "sec-ch-ua-platform":"Windows",
                "Sec-Fetch-Site":"same-site"
            }
        }).then((res) => {
            dispatch(fetchApiSuccess(res))
        }).catch((err) => {
            dispatch(fetchApiFailure(err))
        })
    }
}
// const timeStamp= '1723536781813'
// const publicKey= 'caa605ac9607a904ac4277866f4bbb23'
// const hashKey= 'ab47f2dac9b62b45e88ef8605f5d3adb'

// export const fetchApiData = () => {
//     return  async (dispatch) => {
//         dispatch(fetchApiRequest());
//         try {
//             const response = await fetch(`https://gateway.marvel.com:443/v1/public/comics?ts=${timeStamp}&apikey=${publicKey}&hash=${hashKey}`);
//             const data = await response.json();
//             dispatch(fetchApiSuccess(data));

//         } catch (error) {
//             dispatch(fetchApiFailure(error))
//         }
//     }
// }




// export const fetchApiData = () => {
//     return async (dispatch) => {
//         dispatch(fetchApiRequest());
//         try {
//             const response = await fetch('https://gateway.marvel.com:443/v1/public/comics', {
//                 method: 'GET',
//                 headers: {
//                     'Accept': 'application/json',
//                     'Referer': 'https://developer.marvel.com/',
//                     "Content-Type": "application/json; charset=utf-8",
//                     "Connection": "keep - alive",
//                     "Host": "gateway.marvel.com",
//                 },
//                 // If you need to include parameters in the URL, add them here
//                 // The API key is included in the URL as a query parameter
//                 // The final URL will be 'https://gateway.marvel.com:443/v1/public/comics?apikey=caa605ac9607a904ac4277866f4bbb23'
//             });

//             if (!response.ok) {
//                 throw new Error(`HTTP error! Status: ${response.status}`);
//             }

//             const data = await response.json();
//             dispatch(fetchApiSuccess(data));
//         } catch (error) {
//             dispatch(fetchApiFailure(error.message));
//         }
//     }
// }