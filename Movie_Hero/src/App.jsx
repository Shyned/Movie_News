import { useState } from "react";
import "./App.css";
import Home from "./pages/Home/Home";
import Register from "./components/Register/Register";
import Sign_in from "./components/Sign_in/Sign_in";
import { Drawer, ButtonToolbar, Button, Placeholder } from "rsuite";

function App() {
  const [openSignIn, setOpenSignIn] = useState(false);
  const [openRegister, setOpenRegister] = useState(false);

  return (
    <div className="App">
      <ButtonToolbar>
        <Button onClick={() => setOpenSignIn(true)}>Sign In</Button>
        <Button onClick={() => setOpenRegister(true)}>Register</Button>
      </ButtonToolbar>
      <Drawer
        placement="top"
        open={openSignIn}
        onClose={() => setOpenSignIn(false)}
      >
        <Drawer.Body>
          <Sign_in />
        </Drawer.Body>
      </Drawer>
      <Drawer
        placement="top"
        open={openRegister}
        onClose={() => setOpenRegister(false)}
      >
        <Drawer.Body>
          <Register />
        </Drawer.Body>
      </Drawer>

      <Home />
    </div>
  );
}

export default App;
