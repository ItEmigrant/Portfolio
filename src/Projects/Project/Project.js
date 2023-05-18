import React from 'react';
import style from './Project.module.css'

export const Project = (props) => {
    return (
        <div className={style.project}>
            <div className={style.imgHref}>
                <a href={''} title={'Click here'}> <img className={style.projectImg}
                                   src={props.projectPhoto}
                                   alt={'Project photo'}/></a>
            </div>
            <div className={style.containerName}>
                <h4 className={style.projectName}>{props.name}</h4>
                <p className={style.description}>{props.description}</p>
            </div>


        </div>

    );
};

