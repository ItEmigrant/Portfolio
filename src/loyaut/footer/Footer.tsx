import React from 'react';
import {Icon} from "../../components/icon/Icon";
import {FlexWrapper} from "../../components/flexWrapper";
import {S} from './Footer_Styles'

const socialItemsData = [
    {
        iconId: 'codeInstagram'
    },
    {
        iconId: 'codeLinkedIn'
    },
    {
        iconId: 'codeTelegram'
    }
]
export const Footer: React.FC = () => {
    return (
        <S.StyledFooter>
            <FlexWrapper directions={'column'} align={'center'}>
                <S.Name>Bogdan</S.Name>
                <S.SocialList>
                    {socialItemsData.map((el, index) => {
                        return <S.SocialItem key={index}>
                            <S.SocialIconLink>
                                <Icon height={'21px'} width={'21px'} viewBox={'0 0 21px 21px'} iconId={el.iconId}/>
                            </S.SocialIconLink>
                        </S.SocialItem>
                    })}
                </S.SocialList>
                <S.Copyright> © 2024 Bohdan Solomchak, All Rights Reserved. </S.Copyright>
            </FlexWrapper>
        </S.StyledFooter>
    );
};


