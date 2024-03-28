import React from 'react';
import {SectionTitle} from "../../../components/SectionTitle";
import {TabMenu} from "./tabmenu/TabMenu";
import {FlexWrapper} from "../../../components/flexWrapper";
import {Work} from "./itemWork/Work";
import imageSocialNetwork from '../../../assets/images/SocialNetwork.webp'
import imageTodolist from '../../../assets/images/Timer.webp'
import {Container} from "../../../components/Container";
import {S} from './Works_Style'


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
        <S.StyledWorks>
            <Container>
                <SectionTitle>My works</SectionTitle>
                <TabMenu value={items}/>
                <FlexWrapper justify={'space-between'} align={'flex-start'} wrap={'wrap'}>
                    {WorkData.map((el, index) => {
                        return <Work title={el.title}
                                     key={index}
                                     text={el.text}
                                     src={el.src}/>
                    })}


                </FlexWrapper>
            </Container>
        </S.StyledWorks>
    );
};



