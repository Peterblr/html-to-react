import React from 'react';

import imgS2 from "../img/imageS2.png";
import Button from "./Button";

const Section2 = () => {
    return (
        <section className="u-clearfix u-custom-color-1 u-section-2" id="sec-db7e">
            <div className="u-clearfix u-sheet u-sheet-1">
                <div className="u-clearfix u-expanded-width u-layout-wrap u-layout-wrap-1">
                    <div className="u-layout">
                        <div className="u-layout-row">
                            <div className="u-container-style u-layout-cell u-left-cell u-size-30 u-layout-cell-1">
                                <div
                                    className="u-container-layout u-valign-middle-lg u-valign-middle-md
                                    u-valign-middle-sm u-valign-middle-xl u-valign-top-xs u-container-layout-1">
                                    <h2 className="u-custom-font u-font-roboto-slab u-text u-text-1">
                                        Product Information
                                    </h2>
                                    <h6 className="u-text u-text-custom-color-2 u-text-2">
                                        Overview
                                    </h6>
                                    <p className="u-text u-text-3">
                                        With up to 40 hours of battery life, Beats Solo3
                                        Wireless is your perfect everyday headphone. With Fast Fuel, a 5-minute charge
                                        gives you 3 hours of playback. Enjoy award-winning Beats sound with Class 1
                                        Bluetooth® wireless
                                        listening freedom. The on-ear, cushioned ear cups are adjustable so you can
                                        customize your fit for all-day comfort.
                                        <br/>
                                            <br/>
                                        Beats Solo3 Wireless is ready to go when you are. They instantly set up –
                                        just power on and hold near your iPhone – and then simultaneously connect to
                                        your Apple Watch, iPad and Mac*
                                        <br/>
                                    </p>
                                    <Button>
                                        read more
                                    </Button>
                                    <a href="https://nicepage.com/website-mockup"
                                       className="u-btn u-btn-round u-button-style u-radius-24 u-btn-1">
                                        read more
                                    </a>
                                </div>
                            </div>
                            <div className="u-container-style u-layout-cell u-right-cell u-size-30 u-layout-cell-2">
                                <div className="u-container-layout">
                                    <img className="u-image u-image-1" src={imgS2} alt={"imgS2"}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Section2;