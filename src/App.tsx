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
        <div className="Add">
            <div>
                <h3>Addition</h3>
                    <label>Number 1: </label>
                    <input 
                    type="number"
                    required
                    value={numberOne}
                    onChange={(e) => setNumberOne(+e.target.value)}
                    />
                    <br></br>
                    <label>Number 2: </label>
                    <input 
                    type="number"
                    required
                    value={numberTwo}
                    onChange={(e) => setNumberTwo(+e.target.value)}
                    />
                    <br></br>
                    <button 
                        onClick={addNumber}
                        > Total 
                    </button>   
                    <h2>{result}</h2>             
            </div>
        </div>
    )
}


export default App
