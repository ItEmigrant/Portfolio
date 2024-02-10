import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../components/flexWrapper";
import {SectionTitle} from "../../../components/SectionTitle";
import {Skill} from "./skill/Skill";

export const Skills = () => {
    return (
        <StyledSkills>
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
                    iconId={'codeSuperman'}
                    title={'JS'}
                    text={'Lorem ipsum dolor sit amet ipsum dolor sit'}/>
            </FlexWrapper>
        </StyledSkills>
    );
};

const StyledSkills = styled.section`
    background-color: #a7c5a7;
    min-height: 100vh;
    
`