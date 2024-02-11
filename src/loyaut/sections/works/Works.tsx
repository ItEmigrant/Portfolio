import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {Menu} from "../../../components/menu/Menu";

export const Works = () => {
    return (
        <StyledWorks>
            <SectionTitle>My works</SectionTitle>
            <Menu value={['1', '2']}/>
        </StyledWorks>
    );
};

const StyledWorks = styled.section `
min-height: 100vh;
    background-color: bisque;
`

