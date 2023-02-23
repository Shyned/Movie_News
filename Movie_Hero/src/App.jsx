import { useState } from "react";
import "./App.css";

import Home from "./pages/Home/Home";
import Register from "./components/Register/Register";
import Sign_in from "./components/Sign_in/Sign_in";
import { motion } from "framer-motion";
import { Modal, Box, Button } from "@mui/material";
function App() {
  const [signInModalState, setSignInModalState] = useState(false);
  const [registerModalState, setRegisterModalState] = useState(false);

  const handleSignInModal = () => {
    if (signInModalState === false) {
      setSignInModalState(true);
    } else if (signInModalState === true) {
      setSignInModalState(false);
    }
  };

  const handleRegisterModal = () => {
    if (registerModalState === false) {
      setRegisterModalState(true);
    } else if (registerModalState === true) {
      setRegisterModalState(false);
    }
  };

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    height: 500,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };
  return (
    <div className=" bg-black">
      <div className="flex space-x-80">
        <div className="titleArea ml-auto mr-auto">
          <img
            src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/40
      /null/external-cape-circus-flaticons-lineal-color-flat-icons-2.png"
          />
          <h3 className="text-2xl">Movie Hero</h3>
        </div>
      </div>

      <Home />
    </div>
  );
}

export default App;
