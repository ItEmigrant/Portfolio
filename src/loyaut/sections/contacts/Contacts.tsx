import React, {ElementRef, useRef} from 'react';
import {SectionTitle} from "../../../components/SectionTitle";
import {Button} from "../../../components/Button";
import {Container} from "../../../components/Container";
import {S} from './Contacts_Styles'
import emailjs from '@emailjs/browser';

export const Contact: React.FC = () => {
    const form = useRef<ElementRef<'form'>>(null);

    const sendEmail = (e: any) => {
        e.preventDefault();
        if (!form.current) return;
        emailjs
            .sendForm('service_gt50yzm', 'template_r4fgb62', form.current, {
                publicKey: 'LeCwvPKLVn7x7pwZV',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
        e.target.reset()
    };

    return (
        <S.Contacts id={'contact'}>
            <Container>
                <SectionTitle>Contacts</SectionTitle>
                <S.StyledForm ref={form} onSubmit={sendEmail}>
                    <S.StyledField required placeholder={'Name'} name={'user_name'}/>
                    <S.StyledField required placeholder={'Subject'} name={'subject'}/>
                    <S.StyledField required placeholder={'Email'} name={'email'}/>
                    <S.StyledField required placeholder={'Type message'} as={'textarea'} name={'message'}/>
                    <Button type={'submit'}>SEND MESSAGE</Button>
                </S.StyledForm>
            </Container>
        </S.Contacts>
    );
};





