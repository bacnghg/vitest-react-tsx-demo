import { useState } from "react";

type AddProps = {
    title: string;
    children: React.ReactNode;
    number: number;
};
function Add({title, children,number}: AddProps){

    const [open, setOpen] = useState(false)
    const [numberOne, setNumberOne] = useState(0)
    const [numberTwo, setNumberTwo] = useState(0)
    const [result, setResult] = useState(numberOne + numberTwo)

    function addNumber() {
        setResult(numberOne + numberTwo)
    }

    return (
        <div className="Add">
            <div>
                <h3>{title}</h3>
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

export default Add