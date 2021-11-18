import React from 'react';
import img9 from "../img/imageS9.png";

import s from "../scss/Section8.module.scss"

const Section8 = () => {
    return (
        <section>
            <div className={s.content_wrap}>
                <div>
                    <img className={s.img_item}
                         src={img9} alt={"img"}/>
                </div>
                <div className={s.text}>
                    <h2 className="header_text_left">
                        Tech Specs
                    </h2>
                    <h2 className="text">
                        Manufacturer Information
                    </h2>
                    <ul className="u-spacing-16 u-text u-text-3">
                        <li>Form Factor: On Ear</li>
                        <li>Connections: Bluetooth, Wireless</li>
                        <li>Batteries: Rechargeable lithium-ion</li>
                        <li>Height: 7.8 in / 19.8 cm</li>
                        <li>Weight: 7.58 oz / 215 g</li>
                        <li>Stereo Bluetooth</li>
                        <li>
                            Passive Playback via RemoteTalk cable
                            <br/>
                        </li>
                    </ul>
                </div>
                <div className={s.text + " " + s.item_right}>
                    <h2 className="text">
                        Other Features
                    </h2>
                    <ul>
                        <li>Bluetooth</li>
                        <li>On-Board Call and Music Controls</li>
                        <li>On-Board Volume Control</li>
                        <li>Beam-Forming Mic for Optimal Call Clarity</li>
                        <li>Noise Isolation</li>
                        <li>LED Fuel Gauge</li>
                        <li>Charge via Micro-USB cable</li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Section8;