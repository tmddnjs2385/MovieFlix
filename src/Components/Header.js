/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Header = styled.header``;

const List = styled.ul`
    display: flex;
    &:hover{
        background-color:blue;
    }
    `;

const Item = styled.li``;

const SLink = styled(Link)``;

export default () => (

    <Header>
        <List>
            <Item>
                <SLink to="/">Home</SLink>
            </Item>
            <Item>
                <SLink to="/Detail">Detail</SLink>
            </Item>
            <Item>
                <SLink to="/Search">Search</SLink>
            </Item>
        </List>
    </Header>



);