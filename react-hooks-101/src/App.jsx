import React, { useState } from "react";
import "./App.css";

function App = props => {

  const [state, setState] = useState(props);

  return (
    <React.Fragment>
      <p>
        現在の名前は{state.name}、価格は{state.price}円です
      </p>
      <button onClick={() => setState({ ...state, price: state.price + 1 })}>
        +
      </button>
      <button onClick={() => setState({ ...state, price: state.price - 1 })}>
        -
      </button>
      <button onClick={setState(props)}>Reset</button>
      <p>名前</p>
      <input
        value={state.name}
        onChange={(e) => setState({ ...state, name: e.target.value })}
      />
    </React.Fragment>
  );
}
  App.defaultProps = {
    name: "",
    price: "1000",
  };


export default App;
