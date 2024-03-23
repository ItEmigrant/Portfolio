import React from 'react';
import {S} from './HeaderMenu_Styles'

export const Menu: React.FC<{ value: string[] }> = (props: { value: string[] }) => {
    return (
        <div>
            <ul>

                {props.value.map((el, index) => <S.ListItem key={index}>
                        <S.Link href="#">
                            {el}
                            <S.Mask>
                                <span>{el}</span>
                            </S.Mask>
                            <S.Mask>
                                <span>{el}</span>
                            </S.Mask>
                        </S.Link>
                    </S.ListItem>
                )}
            </ul>
        </div>
    );
};

