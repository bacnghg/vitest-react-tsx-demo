import React, {useState} from 'react'
import './App.css'
import Accordion from './components/Accordion'
import Add from './components/Add'

// function App() {


//   type AppProps = {
//     title: string;
//     children: React.ReactNode;
//     number: number;
// };
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
                <form action="">
                    <label>Number 1: </label>
                    <input 
                    type="number"
                    required
                    value={numberOne}
                    onChange={(e) => setNumberOne(+e.target.value)}
                    />
                    <label>Number 1: </label>
                    <input 
                    type="number"
                    required
                    value={numberTwo}
                    onChange={(e) => setNumberTwo(+e.target.value)}
                    />
                    <button 
                        onClick={addNumber}
                        > Total
                    </button>                
                </form>
            </div>
            {/* {open && <div>{children}</div>} */}
        </div>
    )
}


export default App
