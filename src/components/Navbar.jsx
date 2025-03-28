import { Link } from "react-router-dom";

const Navbar = () => (
    <nav style={{display:"flex",justifyContent:"space-between"}}>
        <Link to="/">Login</Link>
        <Link to="/users">Users</Link>
    </nav>
);

export default Navbar;
