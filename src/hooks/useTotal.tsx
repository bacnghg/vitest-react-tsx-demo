import { useCallback, useEffect, useState } from "react";

export const useTotal = () => {
  const [numberOne, setNumberOne] = useState(1);
  const [numberTwo, setNumberTwo] = useState(2);
  const [result, setResult] = useState(0);

  useEffect(() => {
    if (numberOne != 1) {
        console.log('1111', { numberOne, numberTwo });
    }
  }, [numberOne]);

  useEffect(() => {
    if (numberTwo != 2) {
        console.log('2222',{ numberOne, numberTwo });
    }
  }, [numberTwo]);

  useEffect(() => {
    setResult(numberOne + numberTwo);
  }, [numberOne, numberTwo]);

  return { setNumberOne, setNumberTwo, result };
};
