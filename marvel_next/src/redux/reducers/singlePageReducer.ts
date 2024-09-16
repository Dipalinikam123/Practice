const initialState = {
    data:{},
    loading: false,
    error: null
  };
  
const fetchSinglePage=(state =initialState,action:any)=>{
    switch (action.type) {
        case 'FETCH_API_REQUEST_ID':
          return {
            ...state,
            loading: true,
            error: null
          };
        case 'FETCH_API_SUCCESS_ID':
          return {
            ...state,
            loading: false,
            data: action.payload
          };
        case 'FETCH_API_FAILURE_ID':
          return {
            ...state,
            loading: false,
            error: action.error
          };
        default:
          return state;
      }
}
export default fetchSinglePage;