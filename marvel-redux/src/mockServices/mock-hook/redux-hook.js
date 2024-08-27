import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export const useAppDispatch = () => useDispatch();
export const useAppSelector = useSelector;
