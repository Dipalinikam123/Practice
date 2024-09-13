
 "use client"
  const initialState = {
    data:[],
    loading: false,
    error: null
  };
  
const fetchApiReducer=(state =initialState,action:any)=>{
    switch (action.type) {
        case 'FETCH_API_REQUEST':
          return {
            ...state,
            loading: true,
            error: null
          };
        case 'FETCH_API_SUCCESS':
          return {
            ...state,
            loading: false,
            data:[...state.data,action.payload]
          };
        case 'FETCH_API_FAILURE':
          return {
            ...state,
            loading: false,
            error: action.error
          };
        default:
          return state;
      }
}
export default fetchApiReducer;