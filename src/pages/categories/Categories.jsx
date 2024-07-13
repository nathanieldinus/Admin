import "./categories.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Widget from "../../components/widget/Widget";
import MyDatatable from "../../components/MyDatatable/MyDatatable";
import Datatable from "../../components/datatable/Datatable";

const Categories = ({columns}) => {
  return (
    <div className="categories">
      <Sidebar />
      <div className="categoriesContainer">
        <Navbar />
        <div className="widgets">
          <Widget type="user" />
          <Widget type="product"/>
          <Widget type="categories"/>
        </div>
        <Datatable columns={columns}/>
      </div>
    </div>
  );
};

export default Categories;