import React from 'react';
import img9 from "../img/imageS9.png";

import s from "../scss/Section8.module.scss"

const Section8 = () => {
    return (
        <section>
            <div className={s.content_wrap}>
                <div>
                    <div className="text">
                        <div className={s.header_text}>
                            <h2>
                                Tech Specs
                            </h2>
                        </div>
                        <h1>
                            Manufacturer Information
                        </h1>
                        <ul>
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
                <div>
                    <img className={s.img_item}
                         src={img9} alt={"img"}/>
                </div>
            </div>
        </section>
    );
};

export default Section8;