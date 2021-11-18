import React from 'react';
import imgBlack from "../img/imageS6Black.png";
import imgWhite from "../img/imageS6White.png";
import imgBlue from "../img/imageS6Blue.png";
import s from "../scss/Section6.module.scss";

const Section6 = () => {
    return (
        <section>
            <div className={"body_6"}>
                <div className={"header_text"}>
                    <h2>
                        Available Colors
                    </h2>
                    <h6>
                        Find Your Color
                    </h6>
                </div>
                <div className={s.content_wrap}>
                    <div>
                        <img className={s.img_item} src={imgBlack} alt={"black"}/>
                        <h4>
                            Beats Solo3
                            <br/>
                            Wireless - black
                        </h4>
                        <p>
                            $299.95
                        </p>
                    </div>
                    <div>
                        <img className={s.img_item} src={imgWhite} alt={"white"}/>
                        <h4>
                            Beats Solo3
                            <br/>
                            Wireless - rose
                        </h4>
                        <p>
                            $259.95
                        </p>

                    </div>
                    <div>
                        <img className={s.img_item} src={imgBlue} alt={"blue"}/>
                        <h4 c>
                            Beats Solo3
                            <br/>
                            Wireless - blue
                        </h4>
                        <p>
                            $289.99
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Section6;