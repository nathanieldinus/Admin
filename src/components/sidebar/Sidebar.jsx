import "./sidebar.scss";
import { Link } from "react-router-dom";
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonIcon from '@mui/icons-material/Person';
import WarehouseIcon from '@mui/icons-material/Warehouse';
import StorefrontIcon from '@mui/icons-material/Storefront';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import LogoutIcon from '@mui/icons-material/Logout';
import CategoryIcon from '@mui/icons-material/Category';
import { useContext } from "react";
import { DarkModeContext } from "../../context/darkModeContext";

const Sidebar = () => {
  const {dispatch} = useContext(DarkModeContext);
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
        <li>
          <PermIdentityIcon className="icon" />
          <span>Profile</span>
        </li>
        <li>
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