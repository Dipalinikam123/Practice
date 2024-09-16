
interface ApiState {
  data: any[]; // Replace `any` with a more specific type if possible
  loading: boolean;
  error: string | null;
}

const initialState: ApiState = {
  data: [],
  loading: false,
  error: null
};

interface FetchApiRequestAction {
  type: 'FETCH_API_REQUEST';
}

interface FetchApiSuccessAction {
  type: 'FETCH_API_SUCCESS';
  payload: any[]; // Replace `any` with a more specific type if possible
}

interface FetchApiFailureAction {
  type: 'FETCH_API_FAILURE';
  error: string;
}

type ApiAction =
  | FetchApiRequestAction
  | FetchApiSuccessAction
  | FetchApiFailureAction;

const fetchApiReducer = (state = initialState, action: ApiAction): ApiState => {
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
        data: [...state.data, ...action.payload]
      };
    case 'FETCH_API_FAILURE':
      return {
        ...state,
        loading: false,
        error: action.error
      };
      case 'CLEAR_COMIC_DATA':
      return {
        ...state,
        data: [], // Clear the data
      };
    default:
      return state;
  }
};

export default fetchApiReducer;
