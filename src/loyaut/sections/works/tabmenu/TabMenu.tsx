import React from 'react';
import styled from "styled-components";
import {Link} from "../../../../components/Link";

export const TabMenu = (props: {
                            value: Array<{ status: string, type: 'all' | 'react' | 'reactToolkit' | 'reactQuery' }>
                        }
    ) => {
        return (
            <StyledTabMenu>
                <ul>

                    {props.value.map((el, index) => <StyledListItem key={index}>
                            <Link href="#">{el.status}</Link>
                        </StyledListItem>
                    )}
                </ul>
            </StyledTabMenu>
        );
    }
;

const StyledTabMenu = styled.nav`

    ul {
        display: flex;
        justify-content: space-between;
        max-width: 352px;
        width: 100%;
        margin: 0 auto 40px;
    }`


const StyledListItem = styled.li`

`

