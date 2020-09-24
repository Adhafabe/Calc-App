import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button/Button';


const Functions = ({onContentClear, onDelete}) => (
    <section className="functions">
        <Button type="button-log-text" text="clear" clickHandler={onContentClear}></Button>
        <Button text="&larr;" clickHandler={onDelete}></Button>
    </section>
)

Functions.prototype = {
    onContentClear: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired
}

export default Functions;