import React from 'react';
import classNames from "classnames";
import "../scss/Button.scss"

const Button = ({onClick, className, outline, children}) => {
    return (
        <button
            onClick={onClick}
            className={classNames("button_style btn", className, {
                "button--outline": outline,
            })}
        >
            {children}
        </button>
    );
};

export default Button;