import React from 'react';
import Button from "./Button";
import s from "../scss/Section5.module.scss";
import imgS5 from "../img/imageS5.png";

const Section5 = () => {
    return (
        <section>
            <div className={s.body_5}>
                <div>
                    <div className={s.content_text_right}>
                        <div className="header_text_left">
                            <h2>Feel Your Music</h2>
                        </div>
                        <div className={s.text}>
                            <h2>overview</h2>
                            <p>
                                At the heart of Beats Solo3 Wireless is award-winning Beats sound.
                                This headphone delivers premium playback with fine-tuned acoustics that maximize
                                clarity,
                                breadth and balance. The comfort-cushion ear cups buffer outside noise for
                                immersive sound so you can experience music the way it was meant to be heard.&nbsp;
                                Beats Solo3
                                Wireless delivers up to 40 hours of battery life driven by the efficiency of the Apple
                                W1
                                chip.&nbsp;
                            </p>
                        </div>
                    </div>
                    <Button>
                        <a href="https://www.google.com/"
                           target={"_blank"}>
                            Read More
                        </a>
                    </Button>
                </div>
            </div>
        </section>
        // <section>
        //
        //     <div className="u-clearfix u-sheet u-sheet-1">
        //         <div className="u-align-right u-container-style u-group u-group-1">
        //             <div className="u-container-layout">
        //                 <h2 className="u-custom-font u-font-roboto-slab u-text u-text-1">
        //                     Feel Your Music
        //                 </h2>
        //                 <h6 className="u-text u-text-custom-color-2 u-text-2">
        //                     overview
        //                 </h6>
        //                 <p className="u-text u-text-3">
        //                     At the heart of Beats Solo3 Wireless is award-winning Beats sound.
        //                     This headphone delivers premium playback with fine-tuned acoustics that maximize clarity,
        //                     breadth and balance. The comfort-cushion ear cups buffer outside noise for
        //                     immersive sound so you can experience music the way it was meant to be heard.&nbsp;
        //                     Beats Solo3
        //                     Wireless delivers up to 40 hours of battery life driven by the efficiency of the Apple W1
        //                     chip.&nbsp;
        //                 </p>
        //                 <Button>
        //                     read more
        //                 </Button>
        //             </div>
        //         </div>
        //     </div>
        // </section>
    );
};

export default Section5;