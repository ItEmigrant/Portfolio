import React from 'react';
import {Logo} from "../../components/logo/Logo";
import {Container} from "../../components/Container";
import {FlexWrapper} from "../../components/flexWrapper";
import {MenuDesktop} from "./MenuDesktop";
import {MenuMobile} from "./MenuMobile";
import {S} from './Header_Styles'


const value = ['Home', 'Skills', 'Works', 'Testimony', 'Contact']
export const Header:React.FC = () => {
    return (
        <S.StyledHeader>
            <Container>
                <FlexWrapper justify={'space-between'} align={'center'}>
                    <Logo/>
                    <MenuDesktop value={value}/>
                    <MenuMobile value={value}/>
                </FlexWrapper>
            </Container>
        </S.StyledHeader>
    );
};

