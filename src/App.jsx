import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Users from "./components/Users";
import EditUser from "./components/EditUser";
import Navbar from "./components/Navbar";

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/users" element={<Users />} />
                <Route path="/edit/:id" element={<EditUser />} />
            </Routes>
        </Router>
    );
}

export default App;

