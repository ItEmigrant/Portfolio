import React from 'react';
import styled from "styled-components";


export const Menu = (props: { value: string[] }) => {
    return (
        <StyledMenu>
            <ul>
                {props.value.map((el, index) =>
                    <li key={index}><a href="">{el}</a></li>
                )}
            </ul>
        </StyledMenu>
    );
};

const StyledMenu = styled.nav`
    ul {
        display: flex;
        gap: 30px;

    }
`

