import {Menu} from "./Menu";
import React from "react";
import {S} from './HeaderMenu_Styles';


export const MenuDesktop: React.FC<{ value: string[] }> = (props: { value: string[] }) => {
    return (
        <S.HeaderMenu>
            <Menu value={props.value}/>
        </S.HeaderMenu>
    );
};

