import "./Header.scss";
import logo from "../assets/img/argentBankLogo.png";
import { NavLink, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { userToken, unsetToken } from "../features/userToken";
import { unsetUserInfos } from "../features/userInfos";

function Header() {
  const navigate = useNavigate();
  const loginState = useSelector(userToken);
  const firstName = useSelector((state) => state.user.value.userFirstName);

  const dispatch = useDispatch();

  function handleClick() {
    if (!loginState.token) {
      navigate("login");
    } else {
      dispatch(unsetToken());
      dispatch(unsetUserInfos());
      navigate("/");
    }
  }

  function UserAvatar() {
    return (
      <div className="user-avatar">
        <i className="fa fa-user-circle"></i>
        <p>{firstName}</p>
      </div>
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
      {!!loginState.token && <UserAvatar />}
      <button className={"main-nav-item"} onClick={handleClick}>
        {!!loginState.token ? "Sign out" : "Sign in"}
      </button>
    </nav>
  );
}

export default Header;
