import React from 'react';
import {FlexWrapper} from "../../../components/flexWrapper";
import {SectionTitle} from "../../../components/SectionTitle";
import {Skill} from "./skill/Skill";
import {Container} from "../../../components/Container";
import {S} from "./Skill_Style"
import {Fade} from "react-awesome-reveal";

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
        <S.Skills id={'skills'}>
            <Container>
                <SectionTitle>My skills</SectionTitle>
                <FlexWrapper wrap={'wrap'} justify={'space-between'}>
                    <Fade cascade={true} damping={.2}>
                        {skillData.map((s, index) => {
                            return <Skill
                                iconId={s.iconId}
                                key={index}
                                title={s.title}
                                text={s.text}/>
                        })}
                    </Fade>

                </FlexWrapper>
            </Container>
        </S.Skills>
    );
};

