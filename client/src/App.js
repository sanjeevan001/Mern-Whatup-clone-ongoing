import "./App.css";

import React, { useEffect, useState } from "react";
import { Login } from "./components/Login/Login";
import { useStateValue } from "./components/ContextApi/StateProvider";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Chat from "./components/Chat/Chat";

function App() {
  const [{ user }] = useStateValue();
  const [messages, setMessages] = useState([]);

  return (
    <div>
      {!user ? (
        <Login />
      ) : (
        <div className="app__body">
          <Router>
            <Routes>
              <Route path="/rooms/:roomId" element={<Chat />} />
              <Route exact path="/" element={<Chat />} />
            </Routes>
          </Router>
        </div>
      )}
    </div>
  );
}

export default App;
