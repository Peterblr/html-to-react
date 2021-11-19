import React from 'react';

import imgS2 from "../img/imageS2.png";
import Button from "./Button";
import "../scss/Section2.scss"

const Section2 = () => {
    return (
        <section className="body_2">
            <div className="body_flex">
                <div className="content_text_left">
                    <div className="header_text_left">
                        <h2>Product Information</h2>
                    </div>
                    <div className="text_left">
                        <h2>Overview</h2>
                        <p>
                            With up to 40 hours of battery life, Beats Solo3
                            Wireless is your perfect everyday headphone. With Fast Fuel, a 5-minute charge
                            gives you 3 hours of playback. Enjoy award-winning Beats sound with Class 1
                            Bluetooth® wireless
                            listening freedom. The on-ear, cushioned ear cups are adjustable so you can
                            customize your fit for all-day comfort.
                            <br/>
                            Beats Solo3 Wireless is ready to go when you are. They instantly set up –
                            just power on and hold near your iPhone – and then simultaneously connect to
                            your Apple Watch, iPad and Mac*
                        </p>
                    </div>
                    <Button>
                        <a href="https://www.google.com/"
                           target={"_blank"}>
                            Read More
                        </a>
                    </Button>
                </div>
                <div>
                    <img className="imageS2" src={imgS2} alt={"imgS2"}/>
                </div>
            </div>
        </section>
    );
};

export default Section2;