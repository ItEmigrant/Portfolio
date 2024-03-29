import React from 'react';
import photo from "../../../assets/images/myPhoto.jpg"
import {FlexWrapper} from "../../../components/flexWrapper";
import {Container} from "../../../components/Container";
import {S} from './Main_Style'
export const Main: React.FC = () => {
    return (
        <S.Main>
            <Container>
                <FlexWrapper align={'center'} justify={'space-around'} wrap={'wrap'}>
                    <div>
                        <S.SmallText>Hi There</S.SmallText>
                        <S.MainName>I am <span>Bohdan Solomchak</span></S.MainName>
                        <S.MainTitle>Frontend developer</S.MainTitle>
                    </div>
                    <S.PhotoWrapper>
                        <S.Photo src={photo} alt={'main photo'}/>
                    </S.PhotoWrapper>

                </FlexWrapper>
            </Container>
        </S.Main>
    );
};


