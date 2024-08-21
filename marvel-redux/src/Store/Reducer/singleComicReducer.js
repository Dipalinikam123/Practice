const initialState = {
    data:{},
    loading: false,
    error: null
  };
  
const fetchSinglePage=(state =initialState,action)=>{
    switch (action.type) {
        case 'SINGLE_PAGE_REQUEST':
          return {
            ...state,
            loading: true,
            error: null
          };
        case 'SINGLE_PAGE_SUCCESS':
          return {
            ...state,
            loading: false,
            data: action.payload
          };
        case 'SINGLE_PAGE_FAILURE':
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