import React from 'react';
import style from './Project.module.css'

export const Project = (props) => {
    return (
        <div className={style.project}>
            <div>
                <img className={style.projectImg} src={''} alt={'Project photo'}/>
                <a href={''}>To look</a>
                <div className={style.projectInfo}>
                    <h4 className={style.projectName}>{props.name}</h4>
                    <p className={style.description}>{props.description}</p>
                </div>

            </div>

        </div>

    );
};

