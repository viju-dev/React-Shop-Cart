import React, { useState } from "react";
import Category from "./components/Category";
import Header from "./components/Header";
import "./App.css";
import data from "./data.json";

function App() {
  // maintaining counter of cart items
  const [counter, setCounter] = useState(0);

  return (
    <div className="App">
      <Header counter={counter} />
      <Category jsonData={data} setCounter={setCounter} />
    </div>
  );
}

export default App;
