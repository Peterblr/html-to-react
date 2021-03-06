import React from 'react';
import LogoRed from '../img/logoRed.png'
import Button from "./Button";

const Section1 = () => {
    return (
        <section className="body_1" >
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
                            <a href="https://github.com/Peterblr/html-to-react"
                            target={"_blank"}>
                                View At Github
                            </a>
                        </Button>
                    </div>
                    <div className="bottom">
                        <div className="header_text">
                            <div className="text_red">
                                <h1>
                                    Beats Solo3
                                </h1>
                            </div>
                            <div className="text_white">
                                <h1>
                                    Wireless
                                </h1>
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
                            <a href="https://www.google.com/"
                               target={"_blank"}>
                                $299.95 Buy
                            </a>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Section1;