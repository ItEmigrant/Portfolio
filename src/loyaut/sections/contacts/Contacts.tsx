import React from 'react';
import {SectionTitle} from "../../../components/SectionTitle";
import {Button} from "../../../components/Button";
import {Container} from "../../../components/Container";
import {S} from './Contacts_Styles'

export const Contact: React.FC = () => {
    return (
        <S.Contacts id={'contact'}>
            <Container>
                <SectionTitle>Contacts</SectionTitle>
                <S.StyledForm>
                    <S.StyledField placeholder={'Name'}/>
                    <S.StyledField placeholder={'Subject'}/>
                    <S.StyledField placeholder={'Type message'} as={'textarea'}/>
                    <Button type={'submit'}>SEND MESSAGE</Button>
                </S.StyledForm>
            </Container>
        </S.Contacts>
    );
};





