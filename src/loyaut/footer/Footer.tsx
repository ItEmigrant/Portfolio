import React from 'react';
import styled from "styled-components";
import {Icon} from "../../components/icon/Icon";
import {FlexWrapper} from "../../components/flexWrapper";
import {theme} from "../../styles/Theme";
import {font} from "../../styles/Common";

export const Footer = () => {
    return (
        <StyledFooter>
            <FlexWrapper directions={'column'} align={'center'}>
                <Name>Bogdan</Name>
                <SocialList>
                    <SocialItem>
                        <SocialIconLink>
                            <Icon height={'21px'} width={'21px'} viewBox={'0 0 21px 21px'} iconId={'codeInstagram'}/>
                        </SocialIconLink>
                    </SocialItem>
                    <SocialItem>
                        <SocialIconLink>
                            <Icon height={'21px'} width={'21px'} viewBox={'0 0 21px 21px'} iconId={'codeLinkedIn'}/>
                        </SocialIconLink>
                    </SocialItem>
                    <SocialItem>
                        <SocialIconLink>
                            <Icon height={'21px'} width={'21px'} viewBox={'0 0 21px 21px'} iconId={'codeTelegram'}/>
                        </SocialIconLink>
                    </SocialItem>
                </SocialList>
                <Copyright> © 2024 Bohdan Solomchak, All Rights Reserved. </Copyright>
            </FlexWrapper>
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
    background-color: ${theme.colors.primaryBg};
    padding: 40px 0;


`
const Name = styled.span`
    ${font({family: "'Josefin Sans', sans-serif", weight: 700, FMax: 22, FMin: 16})}

    letter-spacing: 3px;

`
const SocialList = styled.ul`
    display: flex;
    gap: 20px;
    margin: 30px 0;

`
const SocialItem = styled.li``

const SocialIconLink = styled.footer`
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 50%;
    width: 35px;
    height: 35px;

    display: flex;
    justify-content: center;
    align-items: center;

    color: ${theme.colors.accent};

    &:hover {
        color: ${theme.colors.MainColor};
        transform: translateY(-4px);
    }
`
const Copyright = styled.small`
    font-weight: 400;
    font-size: 12px;
    text-align: center;
    opacity: 0.5;
`
