import React from 'react';
import {Icon} from "../../../../components/icon/Icon";
import styled from "styled-components";
import {FlexWrapper} from "../../../../components/flexWrapper";


type SkillPropsType = {
    iconId: string
    title: string
    text: string
}
export const Skill = (props: SkillPropsType) => {
    return (
        <StyledSkill>
            <FlexWrapper directions={'column'} align={'center'}>
                <Icon iconId={props.iconId}/>
                <SkillTitle>{props.title}</SkillTitle>
                <SkillText>{props.text}</SkillText>
            </FlexWrapper>
        </StyledSkill>
    );
};

const StyledSkill = styled.div`
    width: 380px;
    padding: 62px 20px 40px;


`

const SkillTitle = styled.h3`
margin: 70px 0 15px;
`

const SkillText = styled.p`
text-align: center;
`