import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { useParams, useNavigate, MemoryRouter } from 'react-router-dom';
import SinglePage from '../UI/Pages/SinglePage';
// import { useAppDispatch, useAppSelector } from '../mockServices/mock-hook/redux-hook';
import { fetchSingleData } from '../Store/actions/action';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

// Mock the hooks
jest.mock('react-router-dom', () => ({
    useParams: jest.fn(),
    useNavigate: jest.fn(),
    MemoryRouter: jest.requireActual('react-router-dom').MemoryRouter,
}));


jest.mock('react-redux', () => ({
    useDispatch: jest.fn(),
    useSelector: jest.fn(),
}));

jest.mock('../Store/actions/action', () => ({
    fetchSingleData: jest.fn(),
}));

describe('SinglePage Component', () => {
    const mockDispatch = jest.fn();
    // const mockNavigate = jest.fn();
    const mockParams = { id: '123' };

    beforeEach(() => {
        useDispatch.mockReturnValue(mockDispatch);
        useSelector.mockReturnValue({ data: [] });
        useParams.mockReturnValue(mockParams);
        // useNavigate.mockReturnValue(mockNavigate);
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    test('renders loading state initially', () => {
        render(
            <MemoryRouter>
                <SinglePage />
            </MemoryRouter>
        );
        expect(screen.getByText(/Loading../i)).toBeInTheDocument();
    });

    test('dispatches fetchSingleData on mount', () => {
        render(
            <MemoryRouter>
                <SinglePage />
            </MemoryRouter>
        );
        expect(mockDispatch).toHaveBeenCalledWith(fetchSingleData('123'));
    });

    test('renders data when available', () => {
        useSelector.mockReturnValue({
            data: [{
                title: 'Sample Comic',
                creators: { items: [{ name: 'Creator Name' }] },
                series: { name: 'Series Name' },
                stories: { available: 2, items: [{ name: 'Story 1', type: 'Type 1' }] },
                thumbnail: { path: 'path/to/image', extension: 'jpg' },
            }]
        });

        render(
            <MemoryRouter>
                <SinglePage />
            </MemoryRouter>
        );

        expect(screen.getByText(/Sample Comic/i)).toBeInTheDocument();
        expect(screen.getByText(/Creator : Creator Name/i)).toBeInTheDocument();
        expect(screen.getByText(/Series : Series Name/i)).toBeInTheDocument();
        expect(screen.getByText(/Available Stories : 2/i)).toBeInTheDocument();
        expect(screen.getByText(/Story 1 - Type:Type 1/i)).toBeInTheDocument();
    });
    
});
