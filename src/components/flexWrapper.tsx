import styled from "styled-components";


type FlexWrapperPropsType = {
    directions?: string;
    justify?: string
    aling?: string
    wrap?: string
}
export const FlexWrapper = styled.div<FlexWrapperPropsType>`
    display: flex;
    flex-direction: ${props => props.directions || "row"};
    justify-content: ${props => props.justify || "flex-start"};
    align-items: ${props => props.aling || 'stretch'};
    flex-wrap: ${props => props.wrap || "no wrap"};

`
