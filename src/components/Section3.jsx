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
                        <a href="https://www.google.com/">
                            Read More
                        </a>
                    </Button>
                </div>
                <div>
                    <img className={s.image} src={imgS3} alt={"imgS3"}/>
                </div>
            </div>
        </section>
        // <section className="u-clearfix u-section-3" id="sec-c58e">
        //     <div className="u-clearfix u-sheet u-sheet-1">
        //         <div className="u-clearfix u-expanded-width u-layout-wrap u-layout-wrap-1">
        //             <div className="u-layout">
        //                 <div className="u-layout-row">
        //                     <div className="u-container-style u-layout-cell u-left-cell u-size-30 u-layout-cell-1">
        //                         <div className="u-container-layout">
        //                             <img src={LogoGrey} alt="logoGray"
        //                                  className="u-expanded-width-lg u-expanded-width-md u-expanded-width-sm
        //                                   u-expanded-width-xl u-image u-image-default u-opacity u-opacity-10 u-image-1"
        //                                  data-image-width="1000" data-image-height="500"/>
        //                                 <h2 className="u-custom-font u-font-roboto-slab u-text u-text-1">
        //                                     Apple W1 Chip
        //                                 </h2>
        //                                 <h6 className="u-text u-text-custom-color-2 u-text-2">
        //                                     custom comfort
        //                                 </h6>
        //                                 <p className="u-text u-text-3">
        //                                     Beats Solo3 Wireless stays true to its predecessor
        //                                     with bold styling and a streamlined design. The on-ear, cushioned ear cups
        //                                     are adjustable so you can customize your fit for all-day listening comfort.
        //                                     The headphone’s fast-flowing curves and pivoting ear cups complete this
        //                                     natural fit, designed for optimal comfort and sound delivery.
        //                                 </p>
        //                             <Button>
        //                                 <a href="https://www.google.com/">
        //                                     Read More
        //                                 </a>
        //                             </Button>
        //                         </div>
        //                     </div>
        //                     <div className="u-container-style u-image u-layout-cell u-right-cell u-size-30 u-image-2">
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </section>
    );
};

export default Section3;