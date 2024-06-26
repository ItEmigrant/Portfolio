import React from 'react';
import photo from "../../../assets/images/myPhoto.jpg"
import {FlexWrapper} from "../../../components/flexWrapper";
import {Container} from "../../../components/Container";
import {S} from './Main_Style'
import Typewriter from 'typewriter-effect';
import Tilt from 'react-parallax-tilt';

export const Main: React.FC = () => {
    return (
        <S.Main id={'home'}>
            <Container>
                <FlexWrapper align={'center'} justify={'space-around'} wrap={'wrap'}>
                    <div>
                        <S.SmallText>Hi There</S.SmallText>
                        <S.MainName>I am <span>Bohdan Solomchak</span></S.MainName>

                        <S.MainTitle>
                            <p>Frontend developer, React developer</p>
                            <Typewriter
                                options={{
                                    strings: ['Frontend developer', 'React developer'],
                                    autoStart: true,
                                    loop: true,
                                    delay: 50
                                }}
                            />
                        </S.MainTitle>
                    </div>
                    <Tilt className="background-stripes parallax-effect" perspective={500}>
                        <S.PhotoWrapper>
                            <S.Photo src={photo} alt={'main photo'}/>
                        </S.PhotoWrapper>
                    </Tilt>
                </FlexWrapper>
            </Container>
        </S.Main>
    );
};


