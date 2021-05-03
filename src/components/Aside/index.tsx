import React, { useContext, useEffect, useMemo, useState } from 'react';

import { Link, useHistory } from 'react-router-dom';

import { Container, Header, LogoImg, MenuContainer, MenuItemLink, TitleMenuLink, ContainerSubMenu, Img } from './style';

import logoImg from '../../assets/logo.svg';

import { MdArrowDownward, MdArrowUpward, MdExitToApp, MdShoppingCart, MdInsertDriveFile, MdAddShoppingCart, MdShoppingBasket } from 'react-icons/md';
import { AiOutlineLineChart } from 'react-icons/ai';

import dataAside from '../../utils/dataAside';
import { DataContext } from '../../providers/DataContext';


const Aside: React.FC = () => {

    const themes = useContext(DataContext);

    const arrayImgMenuLink = [
        <AiOutlineLineChart />, <MdShoppingCart />, <MdArrowUpward />, <MdArrowDownward />, <MdExitToApp />
    ]
    const arrayImgSubMenuLink = [
        <MdInsertDriveFile />, <MdAddShoppingCart />, <MdShoppingBasket />
    ]

    useEffect(() => {
        console.log(window.location.pathname)
    }, [window.location.pathname]);

    const arrayStateButtons = useMemo(() => {
        return [
            themes.asideShowButtons.newList,
            themes.asideShowButtons.purchase,
            themes.asideShowButtons.buySingle
        ];
    }, [themes.asideShowButtons]);

    const analyzingPath = (href: string) => {
        if (window.location.pathname === href) {
            return true;
        } else {
            return false;
        }
    }
    return (
        <Container>
            <Header>
                <LogoImg src={logoImg} alt="Logo do App Managing Home" />
            </Header>

            <MenuContainer>
                {
                    dataAside.map((element, index) => {
                        console.log(element.href)
                        return (
                            <div className="div" key={element.id}>
                                <Link to={element.href} style={{ textDecoration: 'none' }} >
                                    <MenuItemLink href={element.href} pathIsEqual={analyzingPath(element.href)}>
                                        {arrayImgMenuLink[index]}
                                        <TitleMenuLink>{element.title}</TitleMenuLink>
                                    </MenuItemLink>
                                </Link>
                                <ContainerSubMenu>
                                    {
                                        themes.asideShowButtons.showModal ?
                                            element.sub ?
                                                element.submenu.map(menuItem => {
                                                    return (
                                                        <button key={menuItem.id} style={{
                                                            color: menuItem.bgColor, display: arrayStateButtons.filter((_, index) => {
                                                                return index === (menuItem.id - 1)
                                                            })[0] ? 'flex' : 'none'
                                                        }}
                                                            onClick={e => themes.setShowButton(e, (menuItem.id - 1))}
                                                        >
                                                            <Img>{arrayImgSubMenuLink[menuItem.id - 1]}</Img>
                                                            <TitleMenuLink>{menuItem.title}</TitleMenuLink>
                                                        </button>
                                                    );
                                                })
                                                : null
                                            : null
                                    }
                                </ContainerSubMenu>
                            </div>
                        );
                    })
                }
            </MenuContainer>
        </Container>
    );
}

export default Aside;