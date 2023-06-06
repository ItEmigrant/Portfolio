import React from 'react';
import style from './Footer.module.css'
import styleContainer from '../Common/Styles/Container.module.css'


export const Footer = () => {
    return (
        <div className={style.footerBlock}>
            <div className={styleContainer.container}>
                <div className={style.footerContainer}>
                    <h3>Bohdan Solomchak</h3>
                    <div className={style.FormContainer}>
                            <div className={style.element}></div>
                            <div className={style.element}></div>
                            <div className={style.element}></div>
                            <div className={style.element}></div>
                    </div>
                    <div className={style.end}><p> &#169; 2023 All rights reserved </p></div>
                </div>
            </div>

        </div>
    );
}

