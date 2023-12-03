import { Link } from "react-router-dom";
import "./topbar.css";
import { useContext } from "react";
import { Context } from "../../context/Context";

export default function Topbar() {
  const {user,dispatch} = useContext(Context);
  const PF = "https://blog-app-api-83i6.onrender.com/api/images/"

  const handleLogout = () =>{
    // agar user hai toh logout dikhega
    dispatch({type:"LOGOUT" });
  };
  return (
    <div className="top">
      <div className="topLeft">
        <a href="https://www.facebook.com/abhishek.tongale.319"><i className="topIcon fab fa-facebook-square" src=""></i></a>
        <a href="https://www.instagram.com/its_abhi_1704_/"><i className="topIcon fab fa-instagram-square"></i></a>
        <a href="https://www.linkedin.com/in/abhishek-tongale-2a454a228/"><i className="topIcon fa-brands fa-linkedin"></i></a>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link className="link" to="/">
              HOME
            </Link>
          </li>
          <li className="topListItem"><Link to='/diet' className="link">DIET</Link></li>
          <li className="topListItem"><Link to='/lecture' className="link">LECTURE</Link></li>
          <li className="topListItem">
            <Link className="link" to="/write">
              WRITE
            </Link>
          </li>
           <li className="topListItem" onClick={handleLogout}> {user && "LOGOUT"}</li>
        </ul>
      </div>
      <div className="topRight">
        {user ? (
          <Link to="/settings">
            <img
              className="topImg"
              src={PF+user.profilePic}
              alt=""
            />
          </Link>
        ) : (
          <ul className="topList">
            <li className="topListItem">
              <Link className="link" to="/login">
                LOGIN
              </Link>
            </li>
            <li className="topListItem">
              <Link className="link" to="/register">
                REGISTER
              </Link>
            </li>
          </ul>
        )}
        <i className="topSearchIcon fas fa-search"></i>
      </div>
    </div>
  );
}



