import React from 'react';
import {Logo} from "../../components/logo/Logo";
import {Container} from "../../components/Container";
import {FlexWrapper} from "../../components/flexWrapper";
import {MenuDesktop} from "./Menu/headerMenu/MenuDesktop";
import {MenuMobile} from "./Menu/headerMenu/MenuMobile";
import {S} from './Header_Styles'


export const Header: React.FC = () => {
    const [width, setWidth] = React.useState(window.innerWidth);
    const breakpoint = 768;

    React.useEffect(() => {
        const handleWindowResize = () => setWidth(window.innerWidth);
        window.addEventListener('resize', handleWindowResize);
        return () => window.removeEventListener('resize', handleWindowResize);
    }, []);

    return (
        <S.StyledHeader>
            <Container>
                <FlexWrapper justify={'space-between'} align={'center'}>
                    <Logo/>
                    {width < breakpoint ? <MenuMobile/> : <MenuDesktop/>}
                </FlexWrapper>
            </Container>
        </S.StyledHeader>
    );
};

