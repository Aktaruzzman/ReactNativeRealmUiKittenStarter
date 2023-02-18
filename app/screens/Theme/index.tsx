
import React, { Fragment } from 'react'
import { useTheme } from '@ui-kitten/components';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { CommonProps } from '../../types';
import { Header } from './header';
import { Content } from './content';
import { Footer } from '../../comps/Footer';
import { Row } from '../../comps/Row';
import { RouteName } from '../../router';


export const ThemeScreen: React.FC<{ handleRoute: (p: RouteName) => void }> = ({ handleRoute }) => {

    const dispatch = useAppDispatch();
    const theme = useAppSelector((state) => state.theme.value)
    const palette = useAppSelector((state) => state.color.value)
    const color = useTheme()[`color-primary-500`];
    const border = theme === 'light' ? useTheme()['color-basic-400'] : useTheme()['color-basic-1100'];
    const props: CommonProps = { theme, color, border, dispatch }

    return (
        <Fragment>
            <Header {...props} handleRoute={handleRoute} />
            <Content {...props} palette={palette} />
            <Row {...props} height={30} level="2" borderPos='top'>
                <Footer border={border} color={color} />
            </Row>
        </Fragment>
    )
}
