import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {Icon} from "../../../components/icon/Icon";
import {Slider} from "../../../components/Slider/Slider";

export const Testimony = () => {
    return (
        <StyledTestimony>
            <SectionTitle>Testimony</SectionTitle>
            <Icon iconId={'codeReact'}/>
            <Slider/>
        </StyledTestimony>
    );
};

const StyledTestimony =styled.section `
min-height: 100vh;
    background-color: darkgray;
`