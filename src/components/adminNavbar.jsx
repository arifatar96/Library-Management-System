import { Link } from "react-router-dom";
import '../styles/adminNavbar.css'

const AdminNavbar = () => {
    return ( 
        <div className="navbar">
            <h1>ADMIN PORTAL</h1>
            <div className="nav_links">
            <ul>
                <li><Link to='/admin/'>DASHBOARD</Link></li>
                <li><Link to='/admin/add-book'>ADD BOOKS</Link></li>
                <li><Link to='/admin/add-user'>ADD USERS</Link></li>
                <li><Link to='/admin/booklist'>BOOK LIST</Link></li>
                <li><Link to='/admin/userlist'>USER LIST</Link></li>
                <li><Link to='/'>LOGOUT</Link> </li>
            </ul>
            </div>
        </div>
     );
}
 
export default AdminNavbar;