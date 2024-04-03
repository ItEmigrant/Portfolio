import React from 'react';
import styled from "styled-components";
import {Link} from "../../../../components/Link";
import {tabsItemType} from "../Works";


type tabMenuPropsType = {
    value: Array<{ status: string, type: tabsItemType }>
    changeFilterStatus: (value: tabsItemType) => void
    currentFilterStatus: string
}

export const TabMenu = (props: tabMenuPropsType) => {
        return (
            <StyledTabMenu>
                <ul>

                    {props.value.map((el, index) => <StyledListItem key={index}>
                            <Link active={props.currentFilterStatus===el.type} as={'button'} onClick={() => {
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

