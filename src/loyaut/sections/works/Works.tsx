import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {TabMenu} from "./tabmenu/TabMenu";
import {FlexWrapper} from "../../../components/flexWrapper";
import {Work} from "./itemWork/Work";
import imageSocialNetwork from '../../../assets/images/SocialNetwork.webp'
import imageTodolist from '../../../assets/images/Timer.webp'
import {Container} from "../../../components/Container";


const WorkData = [
    {
        title: 'Social Network',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo, odio!',
        src: imageSocialNetwork

    },
    {
        title: 'Todolist',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
        src: imageTodolist

    }
]
const items = ['All', 'React', 'ReactToolkit', 'ReactQuery']
export const Works = () => {
    return (
        <StyledWorks>
            <Container>
                <SectionTitle>My works</SectionTitle>
                <TabMenu value={items}/>
                <FlexWrapper justify={'space-between'} align={'flex-start'} wrap={'wrap'}>
                    {WorkData.map((el)=>{
                    return <Work title={el.title}
                                 text={el.text}
                                 src={el.src}/>
                    })}


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

