import { useEffect, useState } from "react";
// import { supabase } from "../../supabaseClient";

export default function Sign_in() {
  const [passwordType, setPasswordType] = useState("password");
  const [user, setUser] = useState({});
  const input_type = document.getElementById("SigninId");
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // Supabase Login

  // const handleLogin = async (e) => {
  //   e.preventDefault();

  //   try {
  //     setLoading(true);
  //     const { error } = await supabase.auth.signInWithPassword({
  //       email,
  //       password,
  //     });
  //     if (error) throw error;
  //     alert("Check your email for the login link!");
  //   } catch (error) {
  //     alert(error.error_description || error.message);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  // const TogglePW = (event) => {
  //   event.preventDefault();
  //   if (passwordType === "password") {
  //     setPasswordType("text");
  //   } else {
  //     setPasswordType("password");
  //   }
  // };

  return (
    <div>
      <form action="submit" onSubmit={handleLogin}>
        <label>Email</label>
        <input
          type="email"
          name="email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <label id="SignPW">Password</label>
        <input
          type={passwordType}
          id="SigninId"
          placeholder="Password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
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

        <button typeof="submit">Submit</button>
      </form>
    </div>
  );
}
