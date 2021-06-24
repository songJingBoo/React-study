import React, { Component } from 'react';
import Layout from './Layout';
import './index.css';
import HocFormPage from '../HocFormPage';
import Game from '../game';
import HookPage from '../hook';
import HocPage from '../HocPage';

const navList = [
    { icon: '', text: '主页', comp: <HocFormPage/> },
    { icon: '', text: '用户', comp: <Game/> },
    { icon: '', text: '订单', comp: <HookPage/> },
    { icon: '', text: '购物车', comp: <HocPage /> },
]

export default class NavPage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="navPage-box">
                <Layout navItems={navList}></Layout>
            </div>
        )
    }
}