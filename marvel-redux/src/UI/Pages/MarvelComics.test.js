import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { combineReducers } from 'redux';
import MarvelComics from './MarvelComics';
import fetchApiReducer from '../../Store/Reducer/fetchApiReducer'; // Adjust the import as necessary

// Create a mock store
const mockStore = createStore(
  combineReducers({
    fetchApiReducer
  }),
  {
    fetchApiReducer: {
      data: [],
      loading: false,
      error: null
    }
  }
);

test('renders MarvelComics component', () => {
  render(
    <Provider store={mockStore}>
      <MarvelComics />
    </Provider>
  );
  const heading = screen.getByText(/hellooooo/i);
  expect(heading).toBeInTheDocument();
});
