import React from 'react';
import style from './Main.module.css'
import styleContainer from '../Common/Styles/Container.module.css'


export const Main = () => {
    return (
        <div className={style.mainBlock}>
            <div className={styleContainer.container}>
                <div className={style.mainGreeting}>
                    <span>Welcome</span>
                    <h1>I'm Bohdan Solomchak</h1>
                    <p>Frontend Developer</p>
                </div>
                <div className={style.mainPhoto}>
                </div>
            </div>
        </div>
    );
}

