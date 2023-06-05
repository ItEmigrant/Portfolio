import React from 'react';
import style from './Contacts.module.css'
import styleContainer from '../Common/Styles/Container.module.css'


export const Contacts = () => {
    return (
        <div className={style.contactsBlock}>
            <div className={styleContainer.container}>
                <div className={style.contactsContainer}>
                    <h3>CONTACTS</h3>
                <form className={style.FormContainer}>
                    <div className={style.form}>
                        <div className={style.MyInput}><input/></div>
                        <div className={style.MyInput}><input/></div>
                        <div className={style.MyTextarea}><textarea/></div>
                    </div>
                </form>
                    <div className={style.send}>SEND</div>
                </div>
            </div>

        </div>
    );
}

