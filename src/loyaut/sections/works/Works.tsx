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
        src: imageSocialNetwork,
        type: 'react'
    },
    {
        title: 'Todolist',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
        src: imageTodolist,
        type: 'reactToolkit'

    }
]
//const tabsItems = ['All', 'React', 'ReactToolkit', 'ReactQuery']

const tabsItems: Array<{ status: string, type: 'all' | 'react' | 'reactToolkit' | 'reactQuery' }> = [
    {status: 'All', type: 'all'},
    {status: 'React', type: 'react'},
    {status: 'ReactToolkit', type: 'reactToolkit'},
    {status: 'ReactQuery', type: 'reactQuery'}
]
export const Works = () => {
    return (
        <S.StyledWorks>
            <Container>
                <SectionTitle>My works</SectionTitle>
                <TabMenu value={tabsItems}/>
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



