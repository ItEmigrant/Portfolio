import {Menu} from "./Menu";
import React from "react";
import {S} from './HeaderMenu_Styles'
export const MenuMobile: React.FC<{ value: string[] }> = (props: { value: string[] }) => {
    return (
        <S.MobileMenu>
            <S.BurgerButton isOpen={false}>
                <span></span>
            </S.BurgerButton>
            <S.MobileMenuPopup isOpen={false}>
                <Menu value={props.value}/>
            </S.MobileMenuPopup>

        </S.MobileMenu>
    );
};



