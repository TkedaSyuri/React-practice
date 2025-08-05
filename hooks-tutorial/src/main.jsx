import React, { createContext } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

const syuriInfo = {
  name: "syuri",
  age: 23,
};

const SyuriContext = createContext(syuriInfo);




ReactDOM.createRoot(document.getElementById("root")).render(
  <SyuriContext.Provider value={syuriInfo}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </SyuriContext.Provider>
);
export default SyuriContext;
