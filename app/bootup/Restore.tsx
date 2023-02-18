import React from 'react';
import { useAppDispatch } from '../redux/hooks';
import { IconRegistry } from '@ui-kitten/components';
import { AppIconsPack, EvaIconsPack, IonIconsPack, MatComIconsPack } from '../icons/Package';
import { getColor, getTheme } from '../redux/features/services';

export const Restore = ({ children }: { children: () => React.ReactNode }): React.ReactElement => {
    
    const dispatch = useAppDispatch();

    React.useEffect(() => {
        dispatch(getTheme());
        dispatch(getColor());
    }, [])

    return (
        <>
            <IconRegistry icons={[EvaIconsPack, IonIconsPack, MatComIconsPack, AppIconsPack]} />
            {children()}
        </>
    )
};

