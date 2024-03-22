import styled from "styled-components";
import {theme} from "../../styles/Theme";
import {Menu} from "./Menu/Menu";
import React from "react";

export const MenuDesktop: React.FC<{ value: string[] }> = (props: { value: string[] }) => {
    return (
        <StyledHeaderMenu>
            <Menu value={props.value}/>
        </StyledHeaderMenu>
    );
};

const StyledHeaderMenu = styled.nav`
    ul {
        display: flex;
        gap: 30px;
        justify-content: center;
    }

    @media ${theme.media.tablet} {
        display: none;
    }

`
