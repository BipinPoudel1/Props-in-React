import React from "react";
import Marvel from "./Marvel";
import NoMarvel from "./NoMarvel";

let favSeries = "youtube";

const App = () => {
  return (
    <>
      <h1 className="heading_style">Best Marvel Series </h1>
      {favSeries==="marvel"?<Marvel/>:<NoMarvel/>}
    </>
  );
};

export default App;
