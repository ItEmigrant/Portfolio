import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {Button} from "../../../components/Button";

export const Contact = () => {
    return (
        <StyledContacts>
            <SectionTitle>Contacts</SectionTitle>
            <StyledForm>
                <StyledField placeholder={'Name'}/>
                <StyledField placeholder={'Subject'}/>
                <StyledField placeholder={'Type message'} as={'textarea'}/>
                <Button type={'submit'}>SEND MESSAGE</Button>
            </StyledForm>
        </StyledContacts>
    );
};


const StyledContacts = styled.section`
    background-color: #f1a68b;
    min-height: 50vh;
`


const StyledForm = styled.form`
    max-width: 500px;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin: 0 auto;
    
`

const StyledField = styled.input`

`


