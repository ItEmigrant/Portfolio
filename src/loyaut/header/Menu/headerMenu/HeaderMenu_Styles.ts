import styled, {css} from "styled-components";
import {theme} from "../../../../styles/Theme";
import {Link} from "react-scroll";

//menu
const Mask = styled.span`
    position: absolute;
    top: 0;
    left: 0;
    display: inline-block;
    height: 50%;
    overflow-y: hidden;
    //outline: 1px solid blue;
    color: ${theme.colors.MainColor};
    
    transition: ${theme.animations.transition};

    & + & {
        top: 50%;

        span {
            display: inline-block;
            transform: translateY(-50%);
        }
    }
`
const ListItem = styled.li`
    position: relative;
`

const NavLink = styled(Link)`
    color: transparent;
    font-family: 'Josefin Sans', sans-serif;
    font-weight: 400;
    font-size: 30px;
    text-align: center;

    &::before {
        content: "";
        display: inline-block;
        height: 2px;
        background-color: ${theme.colors.MainColor};

        position: absolute;
        top: 50%;
        left: -10px;
        right: -10px;
        z-index: 1;

        transform: scale(0);
        transition: ${theme.animations.transition};

    }

    &:hover, &.active {
        &::before {
            transform: scale(1);
        }

        ${Mask} {
            transform: skewX(12deg) translateX(4px);
            color: ${theme.colors.font};

            & + ${Mask} {
                transform: skewX(12deg) translateX(-4px);
            }
        }
    }
`



//MobileMenuStyles
const MobileMenu = styled.nav`
`

const MobileMenuPopup = styled.div<{ isOpen: boolean }>`
    position: fixed;
    background-color: rgba(31, 31, 32, 0.9);
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 99999;

    display: flex;
    justify-content: center;
    align-items: center;
    transform: translateY(-100%);

    transition: 1.1s ease-in-out;


    ul {
        display: flex;
        gap: 3px;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        transition: 1.1s ease-in-out;
    }

    ${props => props.isOpen && css<{ isOpen: boolean }>`
        transform: translateY(0);

        & ul {
            gap: 45px
        }
    `}
`

const BurgerButton = styled.button<{ isOpen: boolean }>`
    position: fixed;
    top: -100px;
    right: -100px;
    width: 200px;
    height: 200px;
    z-index: 999999;

    span {
        display: block;
        width: 36px;
        height: 2px;
        background-color: ${theme.colors.font};
        position: absolute;
        left: 40px;
        bottom: 50px;

        ${props => props.isOpen && css<{ isOpen: boolean }>`
            background-color: rgba(255, 255, 255, 0);
        `}
        &::before {
            content: '';
            display: block;
            width: 36px;
            height: 2px;
            background-color: ${theme.colors.font};
            position: absolute;
            transform: translateY(-10px);

            ${props => props.isOpen && css<{ isOpen: boolean }>`
                transform: rotate(-45deg) translateY(0);
            `}
        }

        &::after {
            content: '';
            display: block;
            width: 36px;
            height: 2px;
            background-color: ${theme.colors.font};
            position: absolute;
            transform: translateY(10px);

            ${props => props.isOpen && css<{ isOpen: boolean }>`
                transform: rotate(45deg) translateY(0);
            `}
        }
    }
`

//desktopMenu
const HeaderMenu = styled.nav`
    ul {
        display: flex;
        gap: 30px;
        justify-content: center;
    }
`

export const S = {
    NavLink,
    ListItem,
    Mask,
    MobileMenuPopup,
    BurgerButton,
    MobileMenu,
    HeaderMenu
}