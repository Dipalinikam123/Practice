import configureMockStore from 'redux-mock-store';
import {thunk} from 'redux-thunk'; // Ensure this is correctly imported
import fetchMock from 'fetch-mock';
import * as actions from '../Store/actions/action'  // Ensure correct path
import { marvelApi } from '../Constant/api-config';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares); // Correctly pass the middleware

describe('Marvel Actions', () => {
  afterEach(() => {
    fetchMock.restore();
  });

  test('dispatches FETCH_API_SUCCESS after successfully fetching data', () => {
    const mockResponse = {
      data: {
        results: ['Comic 1', 'Comic 2']
      }
    };

    fetchMock.getOnce(
      marvelApi,
      {
        body: mockResponse,
      }
    );

    const expectedActions = [
      { type: 'FETCH_API_REQUEST' },
      { type: 'FETCH_API_SUCCESS', payload: ['Comic 1', 'Comic 2'] }
    ];

    const store = mockStore({ data: [] }); // Correctly initialize mock store

    return store.dispatch(actions.fetchComicData(0, 8)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  test('dispatches FETCH_API_FAILURE when fetching data fails', () => {
    fetchMock.getOnce(
      marvelApi,
      {
        throws: new Error('Network response was not ok')
      }
    );

    const expectedActions = [
      { type: 'FETCH_API_REQUEST' },
      { type: 'FETCH_API_FAILURE', error: 'Network response was not ok' }
    ];

    const store = mockStore({ data: [] }); // Correctly initialize mock store

    return store.dispatch(actions.fetchComicData(0, 8)).then(() => {
      const actionsDispatched = store.getActions();
      expect(actionsDispatched[0]).toEqual(expectedActions[0]);
      expect(actionsDispatched[1].type).toEqual('FETCH_API_FAILURE');
      expect(actionsDispatched[1].error.message).toEqual('Network response was not ok');
    });
  });
});