import "./sidebar.scss";
import { Link } from "react-router-dom";
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonIcon from '@mui/icons-material/Person';
import WarehouseIcon from '@mui/icons-material/Warehouse';
import StorefrontIcon from '@mui/icons-material/Storefront';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import LogoutIcon from '@mui/icons-material/Logout';

const Sidebar = () => {
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
        <li>
        <DashboardIcon className="icon"/>
          <span>Dashboard</span>
        </li>
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
      <div className="colorOption"></div>
      <div className="colorOption"></div>
    </div>
  </div>
  )
}

export default Sidebar