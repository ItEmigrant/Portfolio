import {Menu} from "./Menu";
import React from "react";
import {S} from './HeaderMenu_Styles';


export const MenuDesktop: React.FC = () => {
    return (
        <S.HeaderMenu>
            <Menu />
        </S.HeaderMenu>
    );
};

