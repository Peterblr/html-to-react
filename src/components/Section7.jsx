import React from 'react';
import imgS7 from "../img/imageS7.png";
import Button from "./Button";
import s from "../scss/Section7.module.scss"

const Section7 = () => {
    return (
        <section>
            <div className="body_7">
                <div className={s.content_wrap}>
                    <div >
                        <img className={s.img_item} src={imgS7} alt={"img"}/>
                    </div>
                    <div className={s.content_right}>
                        <div className={s.header_text}>
                            <h2 >
                                What’s in the Box
                            </h2>
                        </div>

                        <div className={"text_left"}>
                            <h2 >
                                Highlights
                            </h2>
                            <ul>
                                <li>Beats Solo3 Wireless headphones</li>
                                <li>Carrying case</li>
                                <li>3.5mm RemoteTalk cable</li>
                                <li>Universal USB charging cable (USB-A to USB Micro-B)</li>
                                <li>Quick Start Guide</li>
                                <li>Warranty Card</li>
                            </ul>
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

export default Section7;