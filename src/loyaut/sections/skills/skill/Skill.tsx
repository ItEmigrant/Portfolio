import React from 'react';
import {Icon} from "../../../../components/icon/Icon";
import {FlexWrapper} from "../../../../components/flexWrapper";
import {S} from '../Skill_Style'

type SkillPropsType = {
    iconId: string
    title: string
    text: string
}
export const Skill = (props: SkillPropsType) => {
    return (
        <S.Skill>
            <FlexWrapper directions={'column'} align={'center'}>
                <S.IconWrapper>
                    <Icon iconId={props.iconId}/>
                </S.IconWrapper>
                <S.SkillTitle>{props.title}</S.SkillTitle>
                <S.SkillText>{props.text}</S.SkillText>
            </FlexWrapper>
        </S.Skill>
    );
};

