import React from 'react';
import style from './Main.module.css'
import styleContainer from '../Common/Styles/Container.module.css'


export const Main = () => {
    return (
        <div className={style.mainBlock}>
            <div className={styleContainer.container}>
                <div className={style.mainGreeting}>
                    <span>Hi There </span>
                    <h1>I am Bohdan Solomchak</h1>
                    <p>Front-end Developer</p>
                </div>
                <div className={style.mainPhoto}>
                </div>
            </div>
        </div>
    );
}

