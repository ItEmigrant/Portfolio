import React from 'react';
import {Icon} from "../../../../components/icon/Icon";
import styled from "styled-components";


type SkillPropsType = {
    iconId:string
    title:string
    text: string
}
export const Skill = (props:SkillPropsType) => {
    return (
        <StyledSkill>
            <Icon iconId={props.iconId}/>
            <SkillTitle>{props.title}</SkillTitle>
            <SkillText>{props.text}</SkillText>
        </StyledSkill>
    );
};

const StyledSkill = styled.div`

`

const SkillTitle = styled.h3`

`

const SkillText = styled.p`

`