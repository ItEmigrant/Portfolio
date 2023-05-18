import React from 'react';
import style from './Projects.module.css'
import styleContainer from '../Common/Styles/Container.module.css'
import {Project} from "./Project/Project";
import PhotoForProject1 from './ProjectsPhoto/art4.png'

export const Projects = () => {
    return (
        <div>
            <div className={style.projectsBlock}>
                <div className={`${styleContainer.container} ${style.projectsContainer}`}>
                    <h2 className={style.ProjectsTitle}> My projects</h2>
                    <div className={style.projects}>
                        <Project name={'TodoList'}
                                 description={'It is a time management tool'}
                                 projectPhoto={PhotoForProject1}/>
                        <Project name={'Social Network'}
                                 description={'It is a Social Network'}
                                 projectPhoto={PhotoForProject1}/>

                    </div>
                </div>

            </div>

        </div>
    );
};

