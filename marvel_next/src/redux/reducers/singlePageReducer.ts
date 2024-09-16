// Define the structure of your state
interface FetchSinglePageState {
  data: Record<string, any>; // Assuming data is an object, you can refine the type based on your actual data structure
  loading: boolean;
  error: string | null;
}

// Define the initial state
const initialState: FetchSinglePageState = {
  data: {},
  loading: false,
  error: null,
};

// Define action types
interface FetchApiRequestIdAction {
  type: 'FETCH_API_REQUEST_ID';
}

interface FetchApiSuccessIdAction {
  type: 'FETCH_API_SUCCESS_ID';
  payload: Record<string, any>; // Define the structure of the payload based on actual data
}

interface FetchApiFailureIdAction {
  type: 'FETCH_API_FAILURE_ID';
  error: string; // Error message
}

// Union type for all actions
type FetchSinglePageAction =
  | FetchApiRequestIdAction
  | FetchApiSuccessIdAction
  | FetchApiFailureIdAction;

// Reducer with TypeScript
const fetchSinglePage = (
  state: FetchSinglePageState = initialState,
  action: FetchSinglePageAction
): FetchSinglePageState => {
  switch (action.type) {
    case 'FETCH_API_REQUEST_ID':
      return {
        ...state,
        loading: true,
        error: null,
      };
    case 'FETCH_API_SUCCESS_ID':
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case 'FETCH_API_FAILURE_ID':
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
};

export default fetchSinglePage;
