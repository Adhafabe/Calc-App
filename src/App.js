//importacion
import React from 'react';
import Button from './components/Button'
import Functions from './components/Functions';
import MathOperation from './components/MathOperation';
import Result from './components/Result';
import './App.css';

//Generacion de la funcion del componente (funcion flecha)
const App = () => {
    const clickHandlerFunction = text => {
        console.log("Button.clickHandler1", text);
    }
    //Lo que ejecuta la funcion
    console.log("Renderización de App");
    return (
        <main className="react-calculator">
            <Result value={undefined}></Result>
            <div className="numbers">
                <Button text="1" type="numbers" clickHandler={clickHandlerFunction}></Button>
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
            <Functions 
                oncContentClear={()=>console.log("Content Clear")}
                onDelete={() => console.log("onDelete")}
            />
            <MathOperation
                onClickOperation={operation => 
                    console.log("Operation:", operation)
                } 
                onClickEqual={equal => 
                    console.log("Equal:", equal)
                }
            />

        </main>
    )
}

//exportacion
export default App;