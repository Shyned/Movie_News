import { useEffect, useState } from "react";
import { supabase } from "../../supabaseClient";

export default function Sign_in() {
  const [passwordType, setPasswordType] = useState("password");
  const [user, setUser] = useState({});
  const input_type = document.getElementById("SigninId");

  const handleChange = (e) => {
    console.log(e.target.name);
    console.log(e.target.value);
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  async function signInWithEmail() {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: "example@email.com",
      password: "example-password",
    });
  }

  const TogglePW = (event) => {
    event.preventDefault();
    if (passwordType === "password") {
      setPasswordType("text");
    } else {
      setPasswordType("password");
    }
  };

  return (
    <div>
      <form action="submit">
        <label>Email</label>
        <input type="email" name="email" onChange={handleChange} />
        <label id="SignPW">Password</label>
        <input
          type={passwordType}
          id="SigninId"
          placeholder="Password"
          onChange={handleChange}
          name="password"
        />

        <button onClick={TogglePW}>
          {passwordType === "password" && (
            <img src="https://img.icons8.com/stickers/20/null/hide.png" />
          )}
          {passwordType === "text" && (
            <img src="https://img.icons8.com/stickers/20/null/visible.png" />
          )}
        </button>
        <button>Submit</button>
      </form>
    </div>
  );
}
