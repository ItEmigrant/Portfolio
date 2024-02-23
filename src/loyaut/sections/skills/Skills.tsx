import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../components/flexWrapper";
import {SectionTitle} from "../../../components/SectionTitle";
import {Skill} from "./skill/Skill";
import {Container} from "../../../components/Container";

export const Skills = () => {
    return (
        <StyledSkills>
            <Container>
                <SectionTitle>My skills</SectionTitle>
                <FlexWrapper wrap={'wrap'} justify={'space-between'}>
                    <Skill
                        iconId={'codeHTML'}
                        title={'HTML'}
                        text={'Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet.'}/>
                    <Skill
                        iconId={'codeReact'}
                        title={'REACT'}
                        text={'Lorem ipsum dolor sit amet,  Dolor!'}/>
                    <Skill
                        iconId={'codeTs'}
                        title={'Type Scrypt'}
                        text={'Lorem ipsum dolor sit amet'}/>
                    <Skill
                        iconId={'codeStyledComponent'}
                        title={'Styled Component'}
                        text={'Lorem ipsum dolor sit amet'}/>
                    <Skill
                        iconId={'codeCss'}
                        title={'CSS'}
                        text={'Lorem ipsum dolor sit amet'}/>
                    <Skill
                        iconId={'codeHTML'}
                        title={'JS'}
                        text={'Lorem ipsum dolor sit amet ipsum dolor sit'}/>
                </FlexWrapper>
            </Container>
        </StyledSkills>
    );
};

const StyledSkills = styled.section`
`