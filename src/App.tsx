import React, {useState} from 'react'
import './App.css'
import Accordion from './components/Accordion'
import Add from './components/Add'
import { useTotal } from './hooks/useTotal'

function App(){
    // const [open, setOpen] = useState(false)
    const [numberOne, _setNumberOne] = useState(0)
    const [numberTwo, _setNumberTwo] = useState(0)
    // const [result, setResult] = useState(numberOne + numberTwo)
    const {  setNumberOne,  setNumberTwo, result} = useTotal()

    function addNumber() {
        setNumberOne(numberOne)
        setNumberTwo(numberTwo)
    }

    return (
        <div className="App">
            <div>
                <h3>Addition Component</h3>
                <label>Number 1: </label>
                <input 
                data-testid="iNumberOne"
                type="number"
                value={numberOne}
                onChange={(e) => _setNumberOne(+e.target.value)}
                />
                <br></br>
                <label>Number 2: </label>
                <input 
                data-testid="iNumberTwo"
                type="number"
                value={numberTwo}
                onChange={(e) => _setNumberTwo(+e.target.value)}
                />
                <br></br>
                <button data-testid="resultId"
                    onClick={addNumber}
                    > Total 
                </button>   
                <h2 className='result' role="h2">{result}</h2>             
            </div>
        </div>
    )
}


export default App
