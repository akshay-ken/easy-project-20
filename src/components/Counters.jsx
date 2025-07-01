import { useRef, useState } from "react";

export function Counters() {
  //   const [counter1, setCounter1] = useState(0);
  const counterRef1 = useRef(0);
  const counterRef = useRef(0);
  let counter2 = 0;

  function handleChangeCounters() {
    // setCounter1(1);
    counterRef1.current = 1;
    counter2 = 1;
    counterRef.current = 1;
  }
  return (
    <>
      <button onClick={handleChangeCounters}>Change Counters</button>
      <ul>
        <li>Counter 1: {counterRef1.current}</li>
        <li>Counter 2: {counter2}</li>
        <li>Counter 3: {counterRef.current}</li>
      </ul>
    </>
  );
}
