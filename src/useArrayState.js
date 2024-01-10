import { useState } from 'react';

function useArrayState(initialValue) {
  const [array, setArray] = useState(initialValue);

  const modifyAtIndex = (index, newValue) => {
    const newArray = [...array];
    newArray[index] = newValue;
    setArray(newArray);
  };

  return [array, modifyAtIndex];
}

export default useArrayState;