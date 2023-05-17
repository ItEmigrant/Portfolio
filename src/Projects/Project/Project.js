import React from 'react';
import style from './Project.module.css'

export const Project = () => {
    return (
        <div style={style.project}>
            <div>
                <img className={style.projectImg} alt={'Project photo'}>
                    <a href={}></a>
                </img>
                <div className={style.projectInfo}>
                    <h4 className={style.projectName}>ProjectName</h4>
                    <p className={style.description}>Description</p>
                </div>

            </div>

        </div>
    );
};

