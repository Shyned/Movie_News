import { useEffect } from "react";

export default function Sign_in() {
  //   <img src="https://img.icons8.com/stickers/30/null/hide.png" />;

  //   <img src="https://img.icons8.com/stickers/30/null/visible.png" />;

  const TogglePW = (event) => {
    event.preventDefault();
    var input_type = document.getElementById("SigninId");
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
        <label id="SignPW">Password</label>
        <input type="password" id="SigninId" placeholder="Password"></input>

        <button onClick={TogglePW}>see</button>
        <button>Submit</button>
      </form>
    </div>
  );
}
