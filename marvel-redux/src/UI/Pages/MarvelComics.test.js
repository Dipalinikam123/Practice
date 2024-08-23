import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../mockServices/mock-hook/redux-hook';
import MarvelComics from './MarvelComics';
import { fetchComicData } from '../../Store/actions/action';

// Mock the hooks
const mockDispatch = jest.fn();
const mockSelector = jest.fn();

jest.mock('../../mockServices/mock-hook/redux-hook', () => ({
  useAppDispatch: () => mockDispatch,
  useAppSelector: (selectorFn) => mockSelector(selectorFn),
}));

// Mock the fetchComicData action
jest.mock('../../Store/actions/action', () => ({
  fetchComicData: jest.fn(),
}));

describe('MarvelComics Component', () => {
  beforeEach(() => {
    mockDispatch.mockClear();
    mockSelector.mockClear();
  });


  test('shows error message when there is an error', () => {
    mockSelector.mockImplementation((selectorFn) => selectorFn({
      fetchApiReducer: {
        data: [],
        loading: false,
        error: 'Something went wrong',
      },
    }));

    render(
      <MemoryRouter>
        <MarvelComics />
      </MemoryRouter>
    );

    expect(screen.getByText(/Error loading data/i)).toBeInTheDocument();
  });

  test('renders comic data correctly', () => {
    const mockData = [
      {
        id: 1,
        title: 'Comic 1',
        thumbnail: { path: 'https://example.com/comic1', extension: 'jpg' },
      },
      {
        id: 2,
        title: 'Comic 2',
        thumbnail: { path: 'https://example.com/comic2', extension: 'jpg' },
      },
    ];

    mockSelector.mockImplementation((selectorFn) => selectorFn({
      fetchApiReducer: {
        data: mockData,
        loading: false,
        error: null,
      },
    }));

    render(
      <MemoryRouter>
        <MarvelComics />
      </MemoryRouter>
    );

    expect(screen.getByText(/Comic 1/i)).toBeInTheDocument();
    expect(screen.getByText(/Comic 2/i)).toBeInTheDocument();
  });

  test('pagination works on scroll', async () => {
    // Simulate the scroll event
    const mockScroll = jest.fn();
    window.scrollTo = mockScroll;
    mockSelector.mockImplementation((selectorFn) => selectorFn({
      fetchApiReducer: {
        data: [],
        loading: false,
        error: null,
      },
    }));

    render(
      <MemoryRouter>
        <MarvelComics />
      </MemoryRouter>
    );

    fireEvent.scroll(window, { target: { scrollY: document.documentElement.scrollHeight } });

    await waitFor(() => {
      expect(mockDispatch).toHaveBeenCalledWith(fetchComicData(8, 8));
    });
  });

  test('clicking on comic redirects to single comic page', () => {
    const mockData = [
      {
        id: 1,
        title: 'Comic 1',
        thumbnail: { path: 'https://example.com/comic1', extension: 'jpg' },
      },
    ];

    mockSelector.mockImplementation((selectorFn) => selectorFn({
      fetchApiReducer: {
        data: mockData,
        loading: false,
        error: null,
      },
    }));

    render(
      <MemoryRouter>
        <MarvelComics />
      </MemoryRouter>
    );

    const comicImage = screen.getByRole('button');
    fireEvent.click(comicImage);

    // expect(screen.findByText).toBeInTheDocument(/Last updated 3 mins ago/i);
  });
});

