import React, {useState} from 'react';
import {SectionTitle} from "../../../components/SectionTitle";
import {TabMenu} from "./tabmenu/TabMenu";
import {FlexWrapper} from "../../../components/flexWrapper";
import {Work} from "./itemWork/Work";
import imageSocialNetwork from '../../../assets/images/SocialNetwork.webp'
import imageTodolist from '../../../assets/images/Timer.webp'
import {Container} from "../../../components/Container";
import {S} from './Works_Style'
import {AnimatePresence, motion} from "framer-motion"

export type tabsItemType = 'all' | 'react' | 'reactToolkit' | 'reactQuery'

const WorkData = [
    {
        title: 'Social Network',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo, odio!',
        src: imageSocialNetwork,
        type: 'react',
        id: 1
    },
    {
        title: 'Todolist',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
        src: imageTodolist,
        type: 'reactToolkit',
        id: 2

    }
]
//const tabsItems = ['All', 'React', 'ReactToolkit', 'ReactQuery']

const tabsItems: Array<{ status: string, type: tabsItemType }> = [
    {status: 'All', type: 'all'},
    {status: 'React', type: 'react'},
    {status: 'ReactToolkit', type: 'reactToolkit'},
    {status: 'ReactQuery', type: 'reactQuery'}
]
export const Works = () => {

    const [currentFilterStatus, setCurrentFilterStatus] = useState('all');
    let filteredWorks = WorkData;

    if (currentFilterStatus === 'react') {
        filteredWorks = WorkData.filter(work => work.type === 'react')
    }

    if (currentFilterStatus === 'reactToolkit') {
        filteredWorks = WorkData.filter(work => work.type === 'reactToolkit')
    }

    if (currentFilterStatus === 'reactQuery') {
        filteredWorks = WorkData.filter(work => work.type === 'reactQuery')
    }


    const changeFilterStatus = (value: tabsItemType) => {
        setCurrentFilterStatus(value)
    }
    return (
        <S.StyledWorks id={'works'}>
            <Container>
                <SectionTitle>My works</SectionTitle>
                <TabMenu value={tabsItems} changeFilterStatus={changeFilterStatus}
                         currentFilterStatus={currentFilterStatus}
                />
                <FlexWrapper justify={'space-between'} align={'flex-start'} wrap={'wrap'}>

                    <AnimatePresence>
                        {filteredWorks.map((el) => {
                            return (
                                <motion.div style={{width: '400px', flexGrow: '1', maxWidth: '540px'}}
                                            layout={true}
                                            initial={{opacity: 0}}
                                            animate={{opacity: 1}}
                                            exit={{opacity: 0}}
                                            key={el.id}
                                >
                                    <Work title={el.title}
                                          key={el.id}
                                          text={el.text}
                                          src={el.src}
                                    />
                                </motion.div>

                            )
                        })}
                    </AnimatePresence>


                </FlexWrapper>
            </Container>
        </S.StyledWorks>
    );
};



