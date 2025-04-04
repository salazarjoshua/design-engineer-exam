import React from "react";
import "./App.css";
import Square from "components/sizes/Square";
import Portrait from "components/sizes/Portrait";

function App() {
  return (
    <React.Fragment>
      {/* POTRAIT - 1080x1920 */}
      <div className="block max-w-[1080px] screen-square:hidden">
        <Portrait />
      </div>

      {/* SQUARE - 1080x1080 */}
      <div className="hidden max-w-[1080px] screen-square:block">
        <Square />
      </div>
    </React.Fragment>
  );
}

export default App;
