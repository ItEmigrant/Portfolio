import React from 'react';
import styled from "styled-components";
import {Link} from "../../../../components/Link";

export const TabMenu = (props: { value: string[] }) => {
    return (
        <StyledTabMenu>
            <ul>

                {props.value.map((el, index) => <StyledListItem key={index}>
                        <Link href="#">{el}</Link>
                    </StyledListItem>
                )}
            </ul>
        </StyledTabMenu>
    );
};

const StyledTabMenu = styled.nav`
    margin-bottom: 40px;

    ul {
        display: flex;
        gap: 20px;
        justify-content: center;
    }`


const StyledListItem = styled.li`
   
`

