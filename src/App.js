//importacion
import React, {useState} from 'react';
import words from 'lodash.words';
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

    //usasndo la libreria words, convertimos la variable stack 
    //en un array segun la exprexion regular (por los operadores)
    const items = words(stack, /[^-^+^*^/]+/g)
    // Es similar a un if
    // (esVerdadero) ? (resultadoPorVerdadero) : (resultadoPorFalso)
    const value = items.length > 0 ? items[items.length-1] : "0";

    //Lo que ejecuta la funcion
    console.log("Renderización de App", value);
    return (
        <main className="react-calculator">

            <Result value={value} />

            <Number onClickNumber = {number => {
                console.log("Click en el numero ", number)
                setStack(`${stack}${number}`)
            }}/>
            
            <Functions 
                onContentClear={()=> {
                    if(stack.length > 0){
                        console.log("Content Clear")
                        setStack("");
                    }                
                }}
                onDelete={() => {
                        if(stack.length > 0){
                            const newStack = stack.substring(0, stack.length-1);
                            console.log("onDelete " + newStack);
                            setStack(newStack);
                        }
                    }
                }
            />

            <MathOperation
                onClickOperation={operation => {
                    console.log("Operation:", operation)
                    setStack(`${stack}${operation}`)
                    }
                } 
                onClickEqual={equal => {
                    console.log("Equal:", equal)
                    setStack(eval(stack).toString())
                    }
                }
            />

        </main>
    )
}

//exportacion
export default App;