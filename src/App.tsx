import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddNewUser from "./components/form_page/AddNewUser";
import EditUser from "./components/form_page/EditUser";
import AddMoreTravelPlace from "./components/table_page/AddMoreTravelPlace";
import TablePage from "./components/table_page/TablePage";

function App() {
  return (
    <div className="container-fluid">
      <div className="container ">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<TablePage />} />
            <Route path="/declaration" element={<AddNewUser />} />
            <Route path="/edit/:id" element={<EditUser />} />
            <Route path="/add-more" element={<AddMoreTravelPlace />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
