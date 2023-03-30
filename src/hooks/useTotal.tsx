import { useCallback, useState } from 'react'

export const useTotal = () => {
    const [numberOne, setNumberOne] = useState(0)
    const [numberTwo, setNumberTwo] = useState(0)
    const [result, setResult] = useState(numberOne + numberTwo)

    return {numberOne, setNumberOne, numberTwo, setNumberTwo, result, setResult}
}