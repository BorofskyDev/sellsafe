import React, { useState } from "react";
import { RiCloseLine, RiMenu3Line } from "react-icons/ri";
import "./Navbar.css";
import sellsafe3 from "../../assets/sellsafe3.png";
import { BsShieldFillCheck, BsShieldCheck } from 'react-icons/bs'

const Menu = () => (
    <>
        <p><a href='#home'>Home</a></p>
        <p><a href='#whatsell'>What is SellSafe?</a></p>
        <p><a href='#possibility'>AI Cash Flow</a></p>
        <p><a href='#features'>Features</a></p>
        {/* <p><a href='#blog'>Articles</a></p> */}
    </>
)

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);

    return (
        <div className="SellSafe__navbar">
            <div className="SellSafe__navbar-links">
                <div className="SellSafe__navbar-links_logo">
                    {/* <img src={sellsafe3} alt="logo" /> */}
                    <p className='SellSafe__navbar-links_logo2'><BsShieldCheck className='SellSafe__navbar-links_logo-icon' />SellSafe</p>
                </div>
                <div className="SellSafe__navbar-links_container">
                   <Menu />
                </div>
            </div>
            {/* <div className="SellSafe__navbar-sign">
                <p>Sign In</p>
                <button type="button">Sign Up</button>
            </div> */}
            <div className="SellSafe__navbar-menu">
                {toggleMenu ? (
                    <RiCloseLine color="#fff" onClick={() => setToggleMenu(false)} />
                ) : (
                    <RiMenu3Line color="#fff" onClick={() => setToggleMenu(true)} />
                )}
                {toggleMenu && (
                    <div className="SellSafe__navbar-menu_container scale-up-center">
                        <div className="SellSafe__navbar-menu_container-links">
                            <Menu />
                            {/* <div className="SellSafe__navbar-menu_container-links-sign">
                                <p>Sign In</p>
                                <button type="button">Sign Up</button>
                            </div> */}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Navbar;
