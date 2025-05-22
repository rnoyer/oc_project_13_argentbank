import "./Header.scss";
import logo from "../assets/img/argentBankLogo.png";
import { NavLink, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { unsetToken } from "../features/userToken";
import { unsetUserInfos } from "../features/userInfos";

function Header() {
  let navigate = useNavigate();
  const isLogged = !!useSelector((state) => state.login.token);
  const firstName = useSelector((state) => state.user.value.userFirstName);

  const dispatch = useDispatch();

  function HandleLogin() {
    navigate("login");
  }

  function Disconnect() {
    dispatch(unsetToken());
    dispatch(unsetUserInfos());
    navigate("/");
  }

  function UserAvatar() {
    return (
      <NavLink to={"/profile"} className={"user-avatar"}>
        <i className="fa fa-user-circle"></i>
        <p>{firstName}</p>
      </NavLink>
    );
  }

  function ButtonSignIn() {
    return (
      <button className={"main-nav-item"} onClick={HandleLogin}>
        Sign in
      </button>
    );
  }

  function ButtonSignOut() {
    return (
      <button className={"main-nav-item"} onClick={Disconnect}>
        Sign out
      </button>
    );
  }

  return (
    <nav className="main-nav">
      <NavLink to={"/"} className={"main-nav-logo"}>
        <img
          className="main-nav-logo-image"
          src={logo}
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </NavLink>
      {isLogged && <UserAvatar />}
      {isLogged ? <ButtonSignOut /> : <ButtonSignIn />}
    </nav>
  );
}

export default Header;
