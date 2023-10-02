import React from 'react';
import appRoutes from "./routes";

function App() {
  return (
    <div className="App">
      {appRoutes()}
    </div>
  );
}

export default App;