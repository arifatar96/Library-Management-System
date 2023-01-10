import AdminNavbar from '../components/adminNavbar';
import { Routes, Route } from 'react-router-dom';
import AdminDashboard from './adminDashboard';
import BookList from './bookList';
import UserList from './userList';
import ReadBook from './readBook';
import AddBook from './addBook';
import AddUser from './addUser';

const AdminPortal = () => {
    return ( 
        <div className="adminPortal">
            <AdminNavbar/>
            <Routes>
                <Route path='/' element={<AdminDashboard/>}/>
                <Route path='/booklist' element={<BookList/>}/>
                <Route path='/userlist' element={<UserList/>}/>
                <Route path='/booklist/:id' element={<ReadBook/>}/>
                <Route path='/add-book' element={<AddBook/>}/>
                <Route path='/add-user' element={<AddUser/>}/>
            </Routes>
        </div>
     );
}
 
export default AdminPortal;