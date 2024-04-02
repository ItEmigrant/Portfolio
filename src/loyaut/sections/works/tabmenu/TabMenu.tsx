import React from 'react';
import styled from "styled-components";
import {Link} from "../../../../components/Link";


type tabMenuPropsType = {
    value: Array<{ status: string, type: 'all' | 'react' | 'reactToolkit' | 'reactQuery' }>
    changeFilterStatus: (value: 'all' | 'react' | 'reactToolkit' | 'reactQuery') => void
}

export const TabMenu = (props: tabMenuPropsType) => {
        return (
            <StyledTabMenu>
                <ul>

                    {props.value.map((el, index) => <StyledListItem key={index}>
                            <Link as={'button'} onClick={() => {
                                props.changeFilterStatus(el.type)
                            }}>{el.status}</Link>
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

