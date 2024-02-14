import React from 'react';
import styled from "styled-components";
import {Icon} from "../../components/icon/Icon";
import {FlexWrapper} from "../../components/flexWrapper";

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
    background-color: darksalmon;
    min-height: 20vh;
`
const Name = styled.span``
const SocialList = styled.ul`
    display: flex;
    gap: 30px;
`
const SocialItem = styled.li``
const SocialIconLink = styled.footer``
const Copyright = styled.small``
