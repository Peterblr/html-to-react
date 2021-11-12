import React from 'react';
import classNames from "classnames";

const Button = ({ onClick, className, outline, children }) => {
    return (
        <button
            onClick={onClick}
            className={classNames("u-btn u-btn-round u-button-style u-radius-24 u-btn-1", className, {
                "button--outline": outline,
            })}
        >
            {children}
        </button>
    );
};

export default Button;