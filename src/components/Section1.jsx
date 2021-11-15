import React from 'react';
import LogoRed from '../img/logoRed.png'
import Button from "./Button";

const Section1 = () => {
    return (
        <section className="body-1" >
            <div className="body_flex">
                <div >
                    <img src={LogoRed} alt="logoRed" className="logo_red" />
                </div>
                <div className="content">
                    <div className="top">
                        <div className="header_text">
                            <div className="text_red">
                                <h1>
                                    Training Project
                                </h1>
                            </div>
                            <div className="text_white">
                                <h1>
                                    Piotr Sviryd
                                </h1>
                            </div>
                        </div>
                        <div className="font_text">
                            My first project where i remade HTML website to React.
                        </div>
                        <Button>
                            Wiew At Github
                        </Button>
                    </div>
                    <div className="bottom">
                        <div className="header_text">
                            <div className="text_red">
                                <h1>
                                    Beats Solo3&nbsp;
                                </h1>
                            </div>
                            <div className="text_white">
                                <h2>
                                    Wireless
                                </h2>
                            </div>
                        </div>
                        <div className="font_text">
                            <p>
                                With up to 40 hours of battery life,
                                Beats Solo3 Wireless is your perfect everyday headphone.
                                With Fast Fuel, a 5-minute charge gives you 3 hours of playback.
                            </p>
                        </div>
                        <Button>
                            $299.95 Buy
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Section1;