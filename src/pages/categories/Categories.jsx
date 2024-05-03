import "./categories.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Widget from "../../components/widget/Widget";
import MyDatatable from "../../components/MyDatatable/MyDatatable";

const Categories = ({title}) => {
  return (
    <div className="categories">
      <Sidebar />
      <div className="categoriesContainer">
        <Navbar />
        <div className="widgets">
          <Widget type="user" />
          <Widget type="order"/>
          <Widget type="earning"/>
          <Widget type="balance"/>
        </div>
        <h1>{title}</h1>
        <MyDatatable />
      </div>
    </div>
  );
};

export default Categories;