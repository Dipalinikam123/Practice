import setupServer from 'msw/node'
import {handlers} from ".handlers";
export const server = setupServer(...handlers);

beforeAll(() => server.listen());

// Reset any request handlers that are declared in a test.
afterEach(() => server.resetHandlers());

// Clean up after the tests are finished.
afterAll(() => server.close());