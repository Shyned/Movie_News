import { useState } from "react";

export default function Register() {
  const [passwordType, setPasswordType] = useState("password");
  const [confirmedPasswordType, setConfirmedPasswordTyped] =
    useState("password");
  const [passwordInput, setPasswordinput] = useState("");
  const [confirmedPasswordInput, setConfirmedPasswordinput] = useState("");
  const [emaiInput, setEmailInput] = useState("");
  const [id, setId] = useState("");
  const TogglePW = (event) => {
    event.preventDefault();
    const input_type = document.getElementById("RegisterPW");
    if (passwordType === "password") {
      setPasswordType("text");
    } else {
      setPasswordType("password");
    }
  };

  const ToggleComfirmPW = (event) => {
    event.preventDefault();

    var input_type = document.getElementById("RegisterConfirmPW");
    if (confirmedPasswordType === "password") {
      setConfirmedPasswordTyped("text");
    } else {
      setConfirmedPasswordTyped("password");
    }
  };

  addEventListener("mouseover", (event) => {});

  onmouseover = (event) => {};

  return (
    <div>
      <form action="submit">
        <label>Email</label>
        <input type="email"></input>
        <label>Password</label>
        <input
          id="RegisterPW"
          type={passwordType}
          placeholder="Password"
        ></input>
        <button type="checkbox" onClick={TogglePW}>
          {passwordType === "password" && (
            <img src="https://img.icons8.com/stickers/20/null/hide.png" />
          )}
          {passwordType === "text" && (
            <img src="https://img.icons8.com/stickers/20/null/visible.png" />
          )}
        </button>
        <label>Confirm Password</label>
        <input
          id="RegisterConfirmPW"
          type={confirmedPasswordType}
          placeholder="Confirm Password"
        ></input>
        <button onClick={ToggleComfirmPW}>
          {" "}
          {confirmedPasswordType === "password" && (
            <img src="https://img.icons8.com/stickers/20/null/hide.png" />
          )}
          {confirmedPasswordType === "text" && (
            <img src="https://img.icons8.com/stickers/20/null/visible.png" />
          )}
        </button>
        <button>Submit</button>
      </form>
    </div>
  );
}
