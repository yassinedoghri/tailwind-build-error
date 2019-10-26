import React from "react";
import "./App.css";
import logo from "./logo.svg";

const App: React.FC = () => {
  return (
    <div className="text-center">
      <header className="bg-gray-900 min-h-screen flex flex-col align-center justify-center text-xl text-white">
        <img src={logo} className="h-48" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="text-teal-400 underline"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
};

export default App;
