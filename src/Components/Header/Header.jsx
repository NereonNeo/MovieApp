import React, { useState } from 'react';
import logo from '../assets/LogoPlace.svg';
import './header.css';
import Search from './Search';
import BurgerMenu from './BurgerMenu';
import DesktopNav from './DesktopNav';
import MobileNav from './MobileNav';
const Header = () => {
    const [state, setState] = useState(true);
    return (
        <div>
            <div className="wrapp">
                <div className="logo">
                    <div className="logo_img">
                        <img src={logo} alt="logo" />
                    </div>
                    <div className="logo_desc">
                        <p>Movies</p>
                    </div>
                </div>
                <DesktopNav />
                <Search />
                <BurgerMenu change={() => setState(!state)} />
            </div>
            <MobileNav state={state} />
        </div>
    );
};

export default Header;
