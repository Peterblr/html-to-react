import React from 'react';

import LogoGrey from "../img/logoGrey.png";
import Button from "./Button";
import imgS3 from "../img/imageS3.jpeg";
import s from "../scss/Section3.module.scss"

const Section3 = () => {
    return (
        <section >
            <div className="body_flex">
                <div>
                    <div className={s.content_text_left}>
                        <div className="header_text_left">
                            <h2>Apple W1 Chip</h2>
                        </div>
                        <div className={s.text}>
                            <h2>CUSTOM COMFORT</h2>
                            <p>
                                Beats Solo3 Wireless stays true to its predecessor
                                with bold styling and a streamlined design. The on-ear, cushioned ear cups
                                are adjustable so you can customize your fit for all-day listening comfort.
                                The headphone’s fast-flowing curves and pivoting ear cups complete this
                                natural fit, designed for optimal comfort and sound delivery.
                            </p>
                        </div>
                    </div>
                    <Button className={s.button}>
                        <a href="https://www.google.com/"
                           target={"_blank"}>
                            Read More
                        </a>
                    </Button>
                </div>
                <div>
                    <img className={s.image} src={imgS3} alt={"imgS3"}/>
                </div>
            </div>
        </section>
    );
};

export default Section3;