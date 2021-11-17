import React from 'react';
import s from "../scss/Section4.module.scss"

const Section4 = () => {
    return (
        <section>
            <div className={s.video}>
                <div>
                    <iframe width="100%"
                            height="100%"
                            title="This is a unique title"
                            src="https://www.youtube.com/embed/MlCqfK09u7A?loop=0&amp;showinfo=0&amp;
                            controls=0&amp;start=0"
                            frameBorder="0" allowFullScreen/>
                </div>

            </div>
        </section>
    );
};

export default Section4;