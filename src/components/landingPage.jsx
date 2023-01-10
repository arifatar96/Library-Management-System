import { Link } from "react-router-dom";
import '../styles/landingpage.css';
const LandingPage = () => {
  return (
    <div className="bg">
      <div className="landingPage">
        <h1>Library Management System</h1>
        <div className="selectLoginType">
          <div className="admin">
            <img src="images/adminlogo.png" alt="" />
            <br />
            <Link to="/admin-login">Admin Login</Link>
          </div>
          <div className="user">
            <img src="images/userlogo.png" alt="" />
            <br />
            <Link to="/user-login">User Login</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
