import {Menu} from "./Menu";
import React, {useState} from "react";
import {S} from './HeaderMenu_Styles'

export const MenuMobile: React.FC<{ value: string[] }> = (props: { value: string[] }) => {
    const [isOpenMenu, setIsOpenMenu] = useState(false);
    const onClickButton = () => {
        setIsOpenMenu(!isOpenMenu)
    }
    return (
        <S.MobileMenu>
            <S.BurgerButton isOpen={isOpenMenu} onClick={onClickButton}>
                <span></span>
            </S.BurgerButton>
            <S.MobileMenuPopup isOpen={isOpenMenu}>
                <Menu value={props.value}/>
            </S.MobileMenuPopup>

        </S.MobileMenu>
    );
};



