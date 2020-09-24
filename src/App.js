//importacion
import React, {useState} from 'react';
import Button from './components/Button/Button'
import Functions from './components/Functions';
import Number from './components/Number';
import MathOperation from './components/MathOperation';
import Result from './components/Result';
import './App.css';

//Generacion de la funcion del componente (funcion flecha)
const App = () => {

    //Uso de useState <<Hooks>> para el funcionamiento en el cambio del result
    //array destructuring
    //1er posicion: valor (que inicialmente es el valor por defecto)
    //2da posicion: funcion que se va a permitir modificar
    const [stack,setStack] = useState("");

    const arrayTextoFuncionModificaTexto = useState("");

    //Lo que ejecuta la funcion
    console.log("Renderización de App");
    return (
        <main className="react-calculator">

            <Result value={stack} />

            <Number onClickNumber = {number => {
                console.log("Click en el numero ", number)
                setStack(stack + number)
            }}></Number>
            
            <Functions 
                onContentClear={()=>console.log("Content Clear")}
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