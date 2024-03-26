import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {Icon} from "../../../components/icon/Icon";
import {Slider} from "../../../components/Slider/Slider";
import {FlexWrapper} from "../../../components/flexWrapper";
import {S} from "../skills/Skill_Style"
import {Container} from "../../../components/Container";

export const Testimony = () => {
    return (
        <StyledTestimony>
            <Container>
                <SectionTitle>Testimony</SectionTitle>
                <FlexWrapper directions={'column'} align={'center'}>
                    <S.IconWrapper>
                        <Icon iconId={'codeReact'}/>
                    </S.IconWrapper>
                    <Slider/>
                </FlexWrapper>
            </Container>
        </StyledTestimony>
    );
};

const StyledTestimony = styled.section`
    background-color: #d7cbcb;
    min-height: 40vh;


    ${S.IconWrapper} {
        margin: 28px 0 72px;
    }
`
