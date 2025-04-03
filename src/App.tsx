import React from "react";
import "./App.css";

function App() {
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center gap-y-8">
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
  );
}

export default App;
