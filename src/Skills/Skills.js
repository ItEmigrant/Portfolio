import React from 'react';
import style from './Skills.module.css'
import styleContainer from '../Common/Styles/Container.module.css'

{/*ray use Skills with Map later*/
}
export const Skills = () => {
    return (
        <div className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.SkillsContainer}`}>
                <h2 className={style.SkillsTitle}>My technologies</h2>
                <div className={style.skills}>
                    <p>border</p>
                </div>
            </div>
        </div>
    );
};

