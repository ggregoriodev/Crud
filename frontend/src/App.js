import { BrowserRouter, Routes, Route } from "react-router-dom";
import Userlist from "./components/Userlist";
import AddUser from "./components/AddUser";
import EditUser from "./components/EditUser";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Userlist />} />
          <Route path="add" element={<AddUser />} />
          <Route path="edit/:id" element={<EditUser />} />
        </Routes>
      </BrowserRouter>
    </div>
  ); // chama o componente Userlist e o Adduser
}

export default App;
