import {TypedUseSelectorHook, useSelector, useDispatch} from 'react-redux';
import {RootState, AppDispatch} from './store';
const useAppDispatch = () => useDispatch<AppDispatch>();
const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export {useAppDispatch, useAppSelector};
