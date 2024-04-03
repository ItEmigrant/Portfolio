import React from 'react';
import {Link} from "../../../../components/Link";
import {Button} from "../../../../components/Button";
import {S} from '../Works_Style'

type WorkPropsType = {
    src: string
    title: string
    text: string
}

export const Work: React.FC<WorkPropsType> = (props: WorkPropsType) => {
    return (
        <S.StyledWork>
            <S.ImageWrapper>
                <S.Image src={props.src} alt={''}/>
                <Button>view project</Button>
            </S.ImageWrapper>
            <S.Description>
                <S.TitleWork>{props.title}</S.TitleWork>
                <S.TextWork>{props.text}</S.TextWork>
                <Link active href={'#'}>code</Link>
                <Link href={'#'}>demo</Link>
            </S.Description>
        </S.StyledWork>
    );
};


