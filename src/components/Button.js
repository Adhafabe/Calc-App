import React from 'react';
import PropTypes from 'prop-types';

const Button = ({text, type, clickHandler}) => ( 

    <button className={type} onClick={ () => {
        clickHandler(text);
    }}>
        <span>{text}</span>
    </button>

)

Button.propTypes ={
    text: PropTypes.string,
    type: PropTypes.string.isRequired,
    clickHandler: PropTypes.func.isRequired
}

export default Button;