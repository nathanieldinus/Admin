import "./sidebar.scss";
import { Link, useNavigate } from "react-router-dom";
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonIcon from '@mui/icons-material/Person';
import WarehouseIcon from '@mui/icons-material/Warehouse';
import StorefrontIcon from '@mui/icons-material/Storefront';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import LogoutIcon from '@mui/icons-material/Logout';
import CategoryIcon from '@mui/icons-material/Category';
import { useContext } from "react";
import { DarkModeContext } from "../../context/darkModeContext";
import { signOut } from "firebase/auth";
import {auth} from "../../firebase"
import { AuthContext } from "../../context/AuthContext";

const Sidebar = () => {
  const {dispatch} = useContext(DarkModeContext);

  const {dispatch: authDispatch} = useContext(AuthContext);
  const navigate = useNavigate();
  const handleLogout = () =>{
    signOut(auth)
      .then(() =>{
        authDispatch({type: "LOGOUT"});
        navigate("/login");
      })
      .catch((error) => {
        console.error("Logout error: ", error);
      });
    };
  return (
    <div className="sidebar">
    <div className="top">
      <Link to="/">
        <span className="logo">Store</span>
      </Link>
    </div>
    <hr />
    <div className="center">
      <ul>
        <p className="title">MAIN</p>
        <Link to="/">
        <li>
        <DashboardIcon className="icon"/>
          <span>Dashboard</span>
        </li>
        </Link>
        <p className="title">LIST</p>
        <Link to="/users">
          <li>
            <PersonIcon className="icon" />
            <span>Users</span>
          </li>
        </Link>
        <Link to="/products">
          <li>
            <WarehouseIcon className="icon" />
            <span>Products</span>
          </li>
        </Link>
        <li>
          <StorefrontIcon className="icon" />
          <span>Orders</span>
        </li>
        <Link to="/categories">
          <li>
            <CategoryIcon className="icon" />
            <span>Categories</span>
          </li>
        </Link>
        <p className="title">USER</p>
        <Link to="/login">
          <li>
            <PermIdentityIcon className="icon" />
            <span>Profile</span>
          </li>
        </Link>
        <li onClick={handleLogout}>
          <LogoutIcon className="icon" />
          <span>Logout</span>
        </li>
      </ul>
    </div>
    <div className="bottom">
      <div className="colorOption" onClick={()=>dispatch({type: "LIGHT"})}></div>
      <div className="colorOption" onClick={()=>dispatch({type: "DARK"})}></div>
    </div>
  </div>
  )
}

export default Sidebar