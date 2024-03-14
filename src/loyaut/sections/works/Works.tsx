import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {TabMenu} from "./tabmenu/TabMenu";
import {FlexWrapper} from "../../../components/flexWrapper";
import {Work} from "./itemWork/Work";
import imageSocialNetwork from '../../../assets/images/SocialNetwork.webp'
import imageTodolist from '../../../assets/images/Timer.webp'
import {Container} from "../../../components/Container";

const items = ['All', 'React', 'ReactToolkit', 'ReactQuery']
export const Works = () => {
    return (
        <StyledWorks>
            <Container>
                <SectionTitle>My works</SectionTitle>
                <TabMenu value={items}/>
                <FlexWrapper justify={'space-between'} align={'flex-start'} wrap={'wrap'}>
                    <Work title={'Social Network'}
                          text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo, odio!'}
                          src={imageSocialNetwork}/>
                    <Work title={'Todolist'} text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'}
                          src={imageTodolist}/>
                </FlexWrapper>
            </Container>
        </StyledWorks>
    );
};

const StyledWorks = styled.section`
    ${FlexWrapper} {
        gap: 30px;
    }
`

