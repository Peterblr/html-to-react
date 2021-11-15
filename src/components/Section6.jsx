import React from 'react';
import imgBlack from "../img/imageS6Black.png";
import imgWhite from  "../img/imageS6White.png";
import imgBlue from  "../img/imageS6Blue.png";

const Section6 = () => {
    return (
        <section className="u-clearfix u-section-6" id="sec-a0c8">
            <div className="u-clearfix u-sheet u-sheet-1">
                <div className="u-align-center u-container-style u-group u-group-1">
                    <div className="u-container-layout u-valign-middle u-container-layout-1">
                        <h2 className="u-custom-font u-font-roboto-slab u-text u-text-1">
                            Available Colors
                        </h2>
                        <h6 className="u-text u-text-custom-color-2 u-text-2">
                            Find Your Color
                        </h6>
                    </div>
                </div>
                <div className="u-clearfix u-gutter-20 u-layout-wrap u-layout-wrap-1">
                    <div className="u-layout">
                        <div className="u-layout-row">
                            <div
                                className="u-container-style u-layout-cell u-left-cell u-size-20
                                u-size-20-md u-layout-cell-1">
                                <div className="u-container-layout u-container-layout-2">
                                    <img className="u-image u-image-1"
                                         src={imgBlack} alt={"black"}/>
                                        <h4 className="u-align-center u-text u-text-custom-color-2 u-text-3">
                                            Beats Solo3
                                            <br/>
                                            Wireless - black
                                        </h4>
                                        <p className="u-align-center u-text u-text-4">
                                            $299.95
                                        </p>
                                </div>
                            </div>
                            <div className="u-container-style u-layout-cell u-size-20 u-size-20-md u-layout-cell-2">
                                <div className="u-container-layout u-container-layout-3">
                                    <img className="u-image u-image-2"
                                         src={imgWhite} alt={"white"}/>
                                        <h4 className="u-align-center u-text u-text-custom-color-2 u-text-5">
                                            Beats Solo3
                                            <br/>
                                                Wireless - rose
                                        </h4>
                                        <p className="u-align-center u-text u-text-6">
                                            $259.95
                                        </p>
                                </div>
                            </div>
                            <div
                                className="u-container-style u-layout-cell u-right-cell u-size-20
                                u-size-20-md u-layout-cell-3">
                                <div className="u-container-layout u-container-layout-4">
                                    <img className="u-image u-image-3"
                                         src={imgBlue} alt={"blue"}/>
                                        <h4 className="u-align-center u-text u-text-custom-color-2 u-text-7">
                                            Beats Solo3
                                            <br/>
                                            Wireless - blue
                                        </h4>
                                        <p className="u-align-center u-text u-text-8">
                                            $289.99
                                        </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Section6;