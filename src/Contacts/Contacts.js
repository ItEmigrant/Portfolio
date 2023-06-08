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
                        <input type={"text"}/>
                        <input type={"text"}/>
                        <textarea></textarea>
                    </form>
                    <div className={style.send}>SEND</div>
                </div>
            </div>

        </div>
    );
}

