import styled from "styled-components";

type flexWrapperPropsType = {
    directions?: string
    justify?: string
    align?: string
    wrap?: string
}

export const FlexWrapper = styled.div<flexWrapperPropsType>`
    display: flex;
    flex-direction: ${props => props.directions || "row"};
    justify-content: ${props => props.justify || "flex-start"};
    align-items: ${props => props.align || 'stretch'};
    flex-wrap: ${props => props.wrap || "no wrap"};
    height: 100%;
`
