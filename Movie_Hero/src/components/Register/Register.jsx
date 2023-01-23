import { useState } from "react";
// import { supabase } from "../../supabaseClient";

export default function Register() {
  const [passwordType, setPasswordType] = useState("password");
  const [confirmedPasswordType, setConfirmedPasswordTyped] =
    useState("password");
  const [passwordInput, setPasswordInput] = useState("");
  const [confirmedPasswordInput, setConfirmedPasswordInput] = useState("");
  const [emaiInput, setEmailInput] = useState("");
  const [loading, setLoading] = useState(false);

  // supabase Register

  // async function signUp(e) {
  //   e.preventDefault();
  //   if (passwordInput === confirmedPasswordInput) {
  //     try {
  //       setLoading(true);
  //       let { error } = await supabase.auth.signUp({
  //         email: { emaiInput },
  //         password: { passwordInput },
  //       });
  //       if (error) throw error;
  //       alert("You are registered. Please sign in.");
  //     } catch {
  //       alert(error.messsage);
  //     } finally {
  //       setLoading(false);
  //     }
  //   } else {
  //     alert("Password and confirmed password do not match");
  //   }
  // }

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

  return (
    <div>
      <form action="submit" onSubmit={signUp}>
        <label>Email</label>
        <input
          type="email"
          onChange={(e) => {
            setEmailInput(e.target.event);
          }}
        ></input>
        <label>Password</label>
        <input
          id="RegisterPW"
          type={passwordType}
          placeholder="Password"
          onChange={(e) => {
            setPasswordInput(e.target.value);
          }}
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
          onChange={(e) => {
            setConfirmedPasswordInput(e.target.value);
          }}
        ></input>
        <button onClick={ToggleComfirmPW}>
          {confirmedPasswordType === "password" && (
            <img src="https://img.icons8.com/stickers/20/null/hide.png" />
          )}
          {confirmedPasswordType === "text" && (
            <img src="https://img.icons8.com/stickers/20/null/visible.png" />
          )}
        </button>
        <input type="submit" />
      </form>
    </div>
  );
}
