//importacion
import React from 'react';
import Result from './components/Result';
import Button from './components/Button';
import './App.css';

//Generacion de la funcion del componente (funcion flecha)
const App = () => {
    const clickhandlerFunction = (text) => {
        console.log("Button.clickhandlerFunction", text);
    }
    //Lo que ejecuta la funcion
    return (
        <main className="react-calculator">
            <Result value={"0"}></Result>
            <div className="numbers">
                <Button text={1} class={"number"} clickHandler={(text)=>{console.log("text")}}></Button>
                <button>2</button>
                <button>3</button>
                <button>4</button>
                <button>5</button>
                <button>6</button>
                <button>7</button>
                <button>8</button>
                <button>9</button>
                <button>0</button>
            </div>
            <div className="functions">
                <button>
                    clear
                </button>
                <button>
                    r
                </button>
            </div>
            <div className="math-operations">
                <button>+</button>
                <button>-</button>
                <button>*</button>
                <button>/</button>
                <button>=</button>
            </div>

        </main>
    )
}

//exportacion
export default App;