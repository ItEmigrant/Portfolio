import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../components/flexWrapper";
import {SectionTitle} from "../../../components/SectionTitle";
import {Skill} from "./skill/Skill";
import {Container} from "../../../components/Container";

const skillData = [
    {
        iconId: 'codeHTML',
        title: 'HTML',
        text: 'Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet.'
    },
    {
        iconId: 'codeReact',
        title: 'REACT',
        text: 'Lorem ipsum dolor sit amet,  Dolor!'
    },
    {
        iconId: 'codeTs',
        title: 'Type Scrypt',
        text: 'Lorem ipsum dolor sit amet Lorem ipsum dolor.'
    },
    {
        iconId: 'codeStyledComponent',
        title: 'Styled Component',
        text: 'Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet.'
    },
    {
        iconId: 'codeCss',
        title: 'CSS',
        text: 'Lorem ipsum dolor sit amet Lorem!!'
    },
    {
        iconId: 'codeHTML',
        title: 'JS',
        text: 'Lorem ipsum dolor sit amet!!! Lorem ipsum dolor sit!'
    }
]
export const Skills = () => {
    return (
        <StyledSkills>
            <Container>
                <SectionTitle>My skills</SectionTitle>
                <FlexWrapper wrap={'wrap'} justify={'space-between'}>
                    {skillData.map((s, index) => {
                        return <Skill
                            iconId={s.iconId}
                            key={index}
                            title={s.title}
                            text={s.text}/>
                    })}
                </FlexWrapper>
            </Container>
        </StyledSkills>
    );
};

const StyledSkills = styled.section`
`