import './App.css';
import { BrowserRouter as BR, Routes, Route } from 'react-router-dom';
import LandingPage from './components/landingPage';
import AdminLogin from './components/adminLogin';
import UserLogin from './components/userLogin';
import AdminPortal from './components/adminPortal';

function App() {
  return (
    <div className="App">
      <BR>
        <Routes>
          <Route path='/' element={<LandingPage/>}/>
          <Route path='/admin-login' element={<AdminLogin/>}/>
          <Route path='/user-login' element={<UserLogin/>}/>
          <Route path='/admin/*' element={<AdminPortal/>}/>
        </Routes>
      </BR>
    </div>
  );
}

export default App;
