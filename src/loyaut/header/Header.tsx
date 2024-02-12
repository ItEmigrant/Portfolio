import React from 'react';
import styled from "styled-components";
import {Logo} from "../../components/logo/Logo";
import {Menu} from "../../components/menu/Menu";


const value = ['Home', 'Skills', 'Works', 'Testimony', 'Contact']
export const Header = () => {
    return (
        <StyledHeader>
            <Logo/>
            <Menu value={value}/>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
    background-color: #ecec31;
    display: flex;
    justify-content: space-between;
`