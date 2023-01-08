import { useState } from "react";

export default function Register() {
  const [inputId, setInputId] = useState("");

  const TogglePW = (event) => {
    event.preventDefault();

    var input_type = document.getElementById("RegisterPW");
    if (input_type.type === "password") {
      input_type.type = "text";
    } else {
      input_type.type = "password";
    }
  };
  const ToggleComfirmPW = (event) => {
    event.preventDefault();

    var input_type = document.getElementById("RegisterConfirmPW");
    if (input_type.type === "password") {
      input_type.type = "text";
    } else {
      input_type.type = "password";
    }
  };
  return (
    <div>
      <form action="submit">
        <label>Email</label>
        <input type="email"></input>
        <label>Password</label>
        <input id="RegisterPW" type="password" placeholder="Password"></input>
        <button type="checkbox" onClick={TogglePW}>
          button
        </button>
        <label>Confirm Password</label>
        <input
          id="RegisterConfirmPW"
          type="password"
          placeholder="Confirm Password"
        ></input>
        <button onClick={ToggleComfirmPW}>button</button>
        <button>Submit</button>
      </form>
    </div>
  );
}
