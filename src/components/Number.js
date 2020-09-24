import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button/Button';

// DRY: Don't repeat yourself
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

const renderButtons = onClickNumber => {
    // var number = 0
    // iterar desde el botón 1 al 0 (while, for, foreach)
    // var ArrayComponentes += 
    //<Button text={number.toString()} clickHandler={onClickNumber} />
    const renderButton = number => (
        <Button key={number} text={number.toString()} clickHandler={onClickNumber} />
    )
    return numbers.map(renderButton)
}

const Number = ({ onClickNumber }) => (
    <section className="number">
        {
            renderButtons(onClickNumber)
        }
    </section>
)

Number.propTypes = {
    onClickNumber: PropTypes.func.isRequired
}

export default Number;