import "./mydatatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "Name", headerName: "Name", width: 130 },
];

const rows = [
  { id: 1, Name: "Jon" },
  { id: 2, Name: "Cersei"},
  { id: 3, Name: "Jaime"},
  { id: 4, Name: "Arya"},
  { id: 5, Name: "Daenerys"},
  { id: 6, Name: "Nathan"},
  { id: 7, Name: "Ferrara"},
  { id: 8, Name: "Rossini"},
  { id: 9, Name: "Harvey"},
];


const MyDatatable = () => {
  return (
    <div className="datatable">
      <div className="datatableTitle">
        All Data
      </div>
      <DataGrid
        rows={rows}
        columns={columns.concat(rows)}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  );
};

export default MyDatatable;
