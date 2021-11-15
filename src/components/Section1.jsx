import React from 'react';
import LogoRed from '../img/logoRed.png'
import Button from "./Button";

const Section1 = () => {
    return (
        <section className="body-1" >
            <div className="body_flex">
                <div >
                    <img src={LogoRed} alt="logoRed" className="logo_red" />
                </div>
                <div className="content">
                    <div className="top">
                        <div className="header_text">
                            <div className="text_red">
                                <h1>
                                    Training Project
                                </h1>
                            </div>
                            <div className="text_white">
                                <h1>
                                    Piotr Sviryd
                                </h1>
                            </div>
                        </div>
                        <div className="font_text">
                            My first project where i remade HTML website to React.
                        </div>
                        <Button>
                            Wiew At Github
                        </Button>
                    </div>
                    <div className="bottom">
                        <div className="header_text">
                            <div className="text_red">
                                <h1>
                                    Beats Solo3&nbsp;
                                </h1>
                            </div>
                            <div className="text_white">
                                <h2>
                                    Wireless
                                </h2>
                            </div>
                        </div>
                        <div className="font_text">
                            <p>
                                With up to 40 hours of battery life,
                                Beats Solo3 Wireless is your perfect everyday headphone.
                                With Fast Fuel, a 5-minute charge gives you 3 hours of playback.
                            </p>
                        </div>
                        <Button>
                            $299.95 Buy
                        </Button>
                    </div>
                </div>
            </div>
        </section>
        // <section className="u-clearfix u-image u-section-1" id="sec-8eca">
        //     <div className="u-clearfix u-sheet u-sheet-1">
        //         <div className="u-align-right u-container-style u-expanded-width-xs u-group u-group-1">
        //             <div className="u-container-layout u-valign-middle-lg u-valign-middle-md u-container-layout-1">
        //                 <h1 className="u-custom-font u-font-roboto-slab u-text u-text-palette-1-base u-title u-text-1">
        //                     Training Project
        //                 </h1>
        //                 <h1 className="u-custom-font u-font-roboto-slab u-text u-text-body-alt-color u-title u-text-2">
        //                     Piotr Sviryd
        //                 </h1>
        //                 <p className="u-text u-text-body-alt-color u-text-3">
        //                     My first project where i remade HTML website to React.
        //                 </p>
        //                 <Button>
        //                     wiew on github
        //                 </Button>
        //                 {/*<a href="https://nicepage.com/k/youtube-website-templates"*/}
        //                 {/*   className="u-btn u-btn-round u-button-style u-radius-24 u-btn-1">*/}
        //                 {/*    wiew on github*/}
        //                 {/*</a>*/}
        //             </div>
        //         </div>
        //         <img src={LogoRed} alt="logoRed"
        //              className="u-image u-image-default u-image-1"/>
        //             <div
        //                 className="u-align-right u-container-style u-expanded-width-md u-expanded-width-xs
        //                  u-group u-group-2">
        //                 <div
        //                     className="u-container-layout u-valign-middle-lg u-valign-middle-md u-valign-middle-sm
        //                      u-valign-middle-xs u-container-layout-2">
        //                     <h1 className="u-custom-font u-font-roboto-slab u-text u-text-palette-1-base
        //                      u-title u-text-4">
        //                         Beats Solo3&nbsp;
        //                     </h1>
        //                     <h1 className="u-custom-font u-font-roboto-slab u-text u-text-body-alt-color
        //                      u-title u-text-5">
        //                         Wireless
        //                     </h1>
        //                     <p className="u-text u-text-body-alt-color u-text-6">
        //                         With up to 40 hours of battery life,
        //                         Beats Solo3 Wireless is your perfect everyday headphone.
        //                         With Fast Fuel, a 5-minute charge gives you 3 hours of playback.
        //                     </p>
        //                     <Button>
        //                         $299.95 Buy
        //                     </Button>
        //                     {/*<a href="https://nicepage.com/k/youtube-website-templates"*/}
        //                     {/*   className="u-btn u-btn-round u-button-style u-radius-24 u-btn-2">*/}
        //                     {/*    $299.95 Buy*/}
        //                     {/*</a>*/}
        //                 </div>
        //             </div>
        //     </div>
        // </section>
    );
};

export default Section1;