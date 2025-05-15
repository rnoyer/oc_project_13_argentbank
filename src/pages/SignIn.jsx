import { useState } from "react";
import { useDispatch } from "react-redux";
import { setToken } from "../features/userToken";
import { setUserInfos } from "../features/userInfos";
import { useNavigate } from "react-router-dom";
import { getToken, getUser } from "../services/userServices";

function SignIn() {
  const [email, setEmail] = useState("tony@stark.com");
  const [password, setPassword] = useState("password123");
  const [errorMessage, setErrorMessage] = useState("");
  const [remember, setRemember] = useState();
  const dispatch = useDispatch();
  let navigate = useNavigate();

  async function submitForm(event) {
    event.preventDefault();
    const userAuth = await getToken(email, password);

    if (userAuth.status === 200) {
      // Delete error message
      setErrorMessage("");
      // set token in store and go to user page
      dispatch(setToken(userAuth.body.token));
      navigate("/profile");
      // Then Query user infos (firstName and lastName)
      const userInfos = await getUser(userAuth.body.token);
      dispatch(setUserInfos(userInfos));
    } else {
      // Display error message
      setErrorMessage(userAuth.message);
    }
  }

  function updateEmail(event) {
    setEmail(event.target.value);
  }

  function updatePassword(event) {
    setPassword(event.target.value);
  }

  return (
    <main className="main bg-dark">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <form id="login" onSubmit={submitForm} method="post">
          <div className="input-wrapper">
            <label htmlFor="email">Email</label>
            <input
              onChange={updateEmail}
              value={email}
              type="text"
              id="email"
              autoComplete="email"
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input
              onChange={updatePassword}
              value={password}
              type="password"
              id="password"
              autoComplete="current-password"
            />
          </div>
          <p>{errorMessage}</p>
          <div className="input-remember">
            <input type="checkbox" id="remember-me" />
            <label htmlFor="remember-me">Remember me</label>
          </div>
          <button className="sign-in-button">Sign In</button>
        </form>
      </section>
    </main>
  );
}

export default SignIn;
