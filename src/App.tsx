import React, {useState} from 'react'
import './App.css'
import Accordion from './components/Accordion'
import Add from './components/Add'

function App(){
    // const [open, setOpen] = useState(false)
    const [numberOne, setNumberOne] = useState(0)
    const [numberTwo, setNumberTwo] = useState(0)
    const [result, setResult] = useState(numberOne + numberTwo)

    function addNumber() {
        setResult(numberOne + numberTwo)
    }

    return (
        <div className="App">
            <div>
                <h3>Addition Component</h3>
                <label>Number 1: </label>
                <input 
                data-testid="iNumberOne"
                type="number"
                required
                value={numberOne}
                onChange={(e) => setNumberOne(+e.target.value)}
                />
                <br></br>
                <label>Number 2: </label>
                <input 
                data-testid="iNumberTwo"
                type="number"
                required
                value={numberTwo}
                onChange={(e) => setNumberTwo(+e.target.value)}
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
