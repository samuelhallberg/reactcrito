import './Header.css'
import React from 'react';

import NavSection from '../NavSection/NavSection';
import ShowcaseSection from '../ShowcaseSection/ShowcaseSection';
import img_backgroundlines from '../../assets/images/background-lines.svg'

const Header = () => {
  return (
    <header>
        {/* <img className="background-lines" src={img_backgroundlines} alt="" /> */}

        <NavSection />
        {/* <ShowcaseSection /> */}
    </header>
  )
}

export default Header;
