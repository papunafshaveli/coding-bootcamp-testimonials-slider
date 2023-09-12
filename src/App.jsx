import React, { useState } from "react";
import "./App.css";
import FirstPage from "./components/FirstPage/FirstPage";
import SecondPage from "./components/SecondPage/SecondPage";

function App() {
  const [showFirstPage, setShowFirstPage] = useState(true);

  const handleArrowClick = () => {
    // Toggle the visibility of pages when arrow is clicked
    setShowFirstPage(!showFirstPage);
  };

  return (
    <body>
      {showFirstPage ? (
        <FirstPage onArrowClick={handleArrowClick} />
      ) : (
        <SecondPage onArrowClick={handleArrowClick} />
      )}
    </body>
  );
}

export default App;
