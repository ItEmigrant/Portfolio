import React from 'react';
import styled from "styled-components";

type menuPropsTYpe = {
    value: string[]
}

export const Menu = (props: menuPropsTYpe) => {
    return (
        <StyledMenu>
            {props.value.map(el => <ul>
                <li><a href="">{el}</a></li>
            </ul>)}
        </StyledMenu>
    );
};

const StyledMenu = styled.nav`
    ul {
        display: flex;
        gap: 30px;
    }
`

