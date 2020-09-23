import React from 'react';
import PropTypes from 'prop-types';

const Result = ({value}) =>{
    //const {value} = props
    console.log("Renderizacion de result: " + value);
    return(
        <div className="result">
            <span>{value}</span>
        </div>
    )
}

Result.propTypes = {
    value: PropTypes.string.isRequired
}

//Sa asignan valores por default por si los valores de props no estan definidas
Result.defaultProps = {
    value: "0"
}

export default Result;