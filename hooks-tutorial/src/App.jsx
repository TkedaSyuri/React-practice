import { useEffect, useState, useContext, useRef, useReducer} from "react";
import "./App.css";
import SyuriContext from "./main";
import useLocalStorage from './Hooks/useLocalStorage';

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    default:
      return state;
  }
};

function App() {
  //useState
  const [count, setCount] = useState(0);
  //useContext
  const syuriInfo = useContext(SyuriContext);
  //useRef
  const ref = useRef();
  //useReducer
  const [state, dispatch] = useReducer(reducer, 0);
  //useMemo
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

      // const square = () => {
      //   let i = 0;
      //   while (i < 200) {
      //     i++;
      //   }
      //   return count2 * count2;
      // };
  

  const handleClick = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    console.log("hello");
  }, [count]);

  const handleRef = () => {
    console.log(ref);
  };

  //useCallback 

  // const showCount = () => {
  //   alert("これは重い処理です");
  // }


  //カスタムHooks
  const [age, setAge] = useLocalStorage("age", 24);

  return (
    <>
      <h1>useStat ,useEffect</h1>
      <button style={{ border: "solid" }} onClick={handleClick}>
        +ボタン
      </button>
      {count}
      <hr />

      <h1>useContext</h1>
      <p>{syuriInfo.name}</p>
      <p>{syuriInfo.age}</p>
      <hr />

      <h1>useRef</h1>
      <input type="text" ref={ref} />
      <button onClick={handleRef}>useRef</button>
      <hr />

      <h1>useReducer</h1>
      <p>カウント{state}</p>
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
      <hr />

      <h1>useMemo</h1>
      <div>カウント１:{count1}</div>
      <div>カウント２:{count2}</div>
      <button onClick={() => setCount1(count1 + 1)}>+</button>
      <button onClick={() => setCount2(count2 + 1)}>+</button>
      <hr />

      <h1>useMemo</h1>
      <hr />

      <h1>カスタムHooks</h1>
      <p>{age}</p>
      <button onClick={()=> setAge(80)}>年齢</button>
    </>
  );
}

export default App;
