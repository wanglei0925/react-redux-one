import React, { Component } from 'react'
import './header.css'
import logoImg from '../../static/img/logo.png'
export default class Header extends Component {
    render() {
        return (
            <div className="header-wrapper">
            <div className="header-nav">
            <a href="/" className="logo-wrapper">
               <img src={logoImg} alt="Nav logo" />
               </a>
            </div>
<div className="nav-center"></div>
<div className="nav-right">
<i class="iconfont">&#xe61d;</i>
</div>
               
            </div>
        )
    }
}
