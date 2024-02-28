import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {Icon} from "../../../components/icon/Icon";
import {Slider} from "../../../components/Slider/Slider";
import {FlexWrapper} from "../../../components/flexWrapper";
import {IconWrapper} from "../skills/skill/Skill";

export const Testimony = () => {
    return (
        <StyledTestimony>
            <SectionTitle>Testimony</SectionTitle>
            <FlexWrapper directions={'column'} align={'center'}>
                <IconWrapper>
                    <Icon iconId={'codeReact'}/>
                </IconWrapper>
                <Slider/>
            </FlexWrapper>
        </StyledTestimony>
    );
};

const StyledTestimony = styled.section`
    background-color: #d7cbcb;
    min-height: 40vh;


    ${IconWrapper} {
        margin: 40px 0 72px;
    }
`
