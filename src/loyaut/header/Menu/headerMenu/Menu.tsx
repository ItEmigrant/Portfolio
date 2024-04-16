import React from 'react';
import {S} from './HeaderMenu_Styles'


const value = [
    {
        title: 'Home',
        href: 'home'
    },
    {
        title: 'Skills',
        href: 'skills'
    },
    {
        title: 'Works',
        href: 'works'
    },
    {
        title: 'Testimony',
        href: 'testimony'
    },
    {
        title:  'Contact',
        href: 'contact'
    }
]

export const Menu: React.FC = () => {
    return (
        <div>
            <ul>

                {value.map((el, index) => <S.ListItem key={index}>
                        <S.Link href={`#${el.href}`}>
                            {el.title}
                            <S.Mask>
                                <span>{el.title}</span>
                            </S.Mask>
                            <S.Mask>
                                <span>{el.title}</span>
                            </S.Mask>
                        </S.Link>
                    </S.ListItem>
                )}
            </ul>
        </div>
    );
};

