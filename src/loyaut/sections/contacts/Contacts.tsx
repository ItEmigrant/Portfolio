import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {Button} from "../../../components/Button";
import {Container} from "../../../components/Container";
import {theme} from "../../../styles/Theme";

export const Contact = () => {
    return (
        <StyledContacts>
            <Container>
                <SectionTitle>Contacts</SectionTitle>
                <StyledForm>
                    <StyledField placeholder={'Name'}/>
                    <StyledField placeholder={'Subject'}/>
                    <StyledField placeholder={'Type message'} as={'textarea'}/>
                    <Button type={'submit'}>SEND MESSAGE</Button>
                </StyledForm>
            </Container>
        </StyledContacts>
    );
};


const StyledContacts = styled.section`

`


const StyledForm = styled.form`
    max-width: 540px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
    margin: 0 auto;

`

const StyledField = styled.input`
    width: 100%;
    background-color: ${theme.colors.secondaryBg};
    border: 1px solid ${theme.colors.borderColor};
`


