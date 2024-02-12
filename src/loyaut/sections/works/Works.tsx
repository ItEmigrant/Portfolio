import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {Menu} from "../../../components/menu/Menu";
import {FlexWrapper} from "../../../components/flexWrapper";
import {Work} from "./itemWork/Work";
import imageSocialNetwork from '../../../assets/images/SocialNetwork.webp'
import imageTodolist from '../../../assets/images/Timer.webp'

const items = ['All', 'ReactRtk', 'ReactQuery']
export const Works = () => {
    return (
        <StyledWorks>
            <SectionTitle>My works</SectionTitle>
            <Menu value={items}/>
            <FlexWrapper justify={'space-around'}>
                <Work title={'Social Network'}
                      text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo, odio!'} src={imageSocialNetwork}/>
                <Work title={'Todolist'} text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'} src={imageTodolist}/>
            </FlexWrapper>
        </StyledWorks>
    );
};

const StyledWorks = styled.section`
    min-height: 100vh;
    background-color: bisque;
`

