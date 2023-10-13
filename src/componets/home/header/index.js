import React from 'react'
import './header.scss';
import logo from '../../../assets/logo/tL_v571NdZ0.svg';
import icon from '../../../assets/icon/bag.png';
import icons from '../../../assets/icon/profile.png';

export default function Header() {
    return (
        <header>
            <div className='header-flex'>
                <div className='logo'>
                    <img src={logo} alt="logo" />
                </div>
                <div className='items'>
                    <div>
                        <p>Meta Queast</p>
                    </div>
                    <div>
                        <p>Ray-Ban Stories</p>
                    </div>
                </div>
            </div>
            <div className='header-flex'>
                <div className='items'>
                    <div>
                        <p>About Meta</p>
                    </div>
                    <div>
                        <p>Support</p>
                    </div>
                </div>
                <input placeholder='Search meta store' type='search' />
                <img className="icon" src={icon} alt='bag' />
                <img className='icon' src={icons} alt="person" />
            </div>
        </header>
    )
}
