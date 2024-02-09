import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../components/flexWrapper";
import {SectionTitle} from "../../../components/SectionTitle";
import {Skill} from "./skill/Skill";

export const Skills = () => {
    return (
        <StyledSkills>
            <SectionTitle>My skills</SectionTitle>
            <FlexWrapper>
                <Skill iconId={} title={} text={}/>
                <Skill iconId={} title={} text={}/>
                <Skill iconId={} title={} text={}/>


            </FlexWrapper>
        </StyledSkills>
    );
};

const StyledSkills = styled.section`
    background-color: #a7c5a7;
    min-height: 100vh;
`