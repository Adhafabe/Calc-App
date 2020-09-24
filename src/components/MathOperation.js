import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button/Button';


const MathOperation = ({onClickOperation, onClickEqual}) => (
    <section className="math-operations">
        <Button text="+" type="" clickHandler={onClickOperation}/>
        <Button text="-" type="" clickHandler={onClickOperation}/>
        <Button text="*" type="" clickHandler={onClickOperation}/>
        <Button text="/" type="" clickHandler={onClickOperation}/>
        <Button text="=" type="" clickHandler={onClickEqual}/>
    </section>                     
)

MathOperation.prototype = {
    onClickOperation: PropTypes.func.isRequired,
    onClickEqual: PropTypes.func.isRequired
}

export default MathOperation;