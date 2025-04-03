import React from "react";
import "./App.css";
import Square from "components/sizes/Square";
import Portrait from "components/sizes/Portrait";

function App() {
  return (
    <>
      <div className="screen-square:hidden block">
        <Portrait />
      </div>

      <div className="screen-square:block hidden">
        <Square />
      </div>

      <div className="mt-40 hidden h-screen w-screen flex-col items-center justify-center gap-y-8">
        <img src="assets/images/exam/colors.png" alt="Sesimi colors" />
        <div className={`flex gap-x-8`}>
          <img
            src="assets/images/exam/1080x1080.png"
            alt="Social Post"
            className={`h-88 h-96`}
          />
          <img
            src="assets/images/exam/1080x1920.png"
            alt="Social Story"
            className={`h-88 h-96`}
          />
        </div>
      </div>
    </>
  );
}

export default App;
