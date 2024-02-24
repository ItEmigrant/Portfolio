import React from 'react';
import styled from "styled-components";


export const TabMenu = (props: { value: string[] }) => {
    return (
        <StyledTabMenu>
            <ul>

                {props.value.map((el, index) => <StyledListItem key={index}>
                        <StyledTabLink href="#">{el}</StyledTabLink>
                    </StyledListItem>
                )}
            </ul>
        </StyledTabMenu>
    );
};

const StyledTabMenu = styled.nav`
    ul {
        display: flex;
        gap: 30px;
        justify-content: center;
    }
`


const StyledListItem = styled.li`

`

const StyledTabLink = styled.a`
    font-weight: 400;
    font-size: 14px;
    letter-spacing: 1px;
    text-transform: uppercase;

`