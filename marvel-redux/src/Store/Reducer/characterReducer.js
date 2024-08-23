
 
  const initialState = {
    data:[],
    loading: false,
    error: null
  };
  
const fetchCharApiReducer=(state =initialState,action)=>{
    switch (action.type) {
        case 'CHAR_PAGE_REQUEST':
          return {
            ...state,
            loading: true,
            error: null
          };
        case 'CHAR_PAGE_SUCCESS':
          return {
            ...state,
            loading: false,
            data:[...state.data,...action.payload]
          };
        case 'CHAR_PAGE_FAILURE':
          return {
            ...state,
            loading: false,
            error: action.error
          };
        default:
          return state;
      }
}
export default fetchCharApiReducer;