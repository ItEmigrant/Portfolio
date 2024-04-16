import {Menu} from "./Menu";
import React, {useState} from "react";
import {S} from './HeaderMenu_Styles'

export const MenuMobile: React.FC = () => {
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
                <Menu />
            </S.MobileMenuPopup>

        </S.MobileMenu>
    );
};



