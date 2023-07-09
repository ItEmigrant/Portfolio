import React from 'react';
import style from './Skills.module.css'
import styleContainer from '../Common/Styles/Container.module.css'
import {Skill} from "./Skill/Skill";


// ray use Skills with Map later

export const Skills = () => {
    return (
        <div className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.SkillsContainer}`}>
                <h2 className={style.SkillsTitle}>My technologies</h2>
                <div className={style.skills}>
                    <Skill title={'React'} description={'It is a library'}/>
                    <Skill title={'JS'} description={'It is a programming language'}/>
                    <Skill title={'HTML5'} description={'It is marking'}/>
                    <Skill title={'CSS3'} description={'It is a styles'}/>
                    <Skill title={'TypeScript'} description={'It is...'}/>
                    <Skill title={'Redux'} description={'It is a styles'}/>
                    <Skill title={'Storybook'} description={'It is a styles'}/>
                    <Skill title={'Git'} description={'It is a styles'}/>
                    <Skill title={'REST API'} description={'It is a styles'}/>
                    <Skill title={'Axios'} description={'It is a styles'}/>
                    <Skill title={'Postman'} description={'It is a styles'}/>
                    <Skill title={'Material UA'} description={'It is a styles'}/>
                    <Skill title={'Unit Testing'} description={'It is a styles'}/>
                </div>
            </div>
        </div>
    );
};

