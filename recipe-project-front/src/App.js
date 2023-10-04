import React from 'react';
import appRoutes from "./routes.js";
import "./App.css";

function App() {
  return (
    <div className="App">
      {appRoutes()}
    </div>
  );
}

export default App;