import "./App.css";
import Notes from "./Notes";
import Login from "./Login";
import { useState } from "react";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  return (
    <>
      {!isLoggedIn && <Login />}
      {isLoggedIn && <Notes />}
    </>
  );
};

export default App;
