import { useNavigate } from "react-router-dom";
import "../styles/userlogin.css";

const UserLogin = () => {
  let navigate = useNavigate();

  let login = (e) => {
    e.preventDefault();
    navigate('/user/');
  };

  return (
    <div className="userLogin">
      <div className="form">
        <h1>Login as User</h1>
        <div className="form_input">
          <form onSubmit={login}>
            <div className="email">
              <input type="email" required placeholder="Email Address" />
            </div>
            <div className="password">
              <input type="password" required placeholder="Enter Password" />
            </div>
            <button>Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UserLogin;
