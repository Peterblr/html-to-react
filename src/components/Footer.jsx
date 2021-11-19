import React from 'react';
import LogoRed from "../img/logoRed.png"
import {AiFillCar, AiFillGithub, AiFillLinkedin} from 'react-icons/ai';
import s from "../scss/Footer.module.scss"

const Footer = () => {
    return (
        <footer>
            <div>
                <div className={s.footer}>
                    <div>
                        <img className="logo_red" src={LogoRed} alt="logoRed"/>
                    </div>
                    <div className={s.footer_text}>
                        <h1>
                            Training Project Piotr Sviryd
                        </h1>
                    </div>
                    <div className={"body_flex"}>
                        <div className={s.icons}>
                            <a href="https://google.com" target={"_blank"}>
                                <AiFillGithub size="3rem"/>
                            </a>
                        </div>
                        <div className={s.icons}>
                            <a href="https://google.com" target={"_blank"}>
                                <AiFillCar size="3rem"/>
                            </a>
                        </div>
                        <div className={s.icons}>
                            <a href="https://google.com" target={"_blank"}>
                                <AiFillLinkedin size="3rem"/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;