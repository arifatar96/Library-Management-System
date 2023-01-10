import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/adminlogin.css";
const AdminLogin = () => {
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");

  let navigate = useNavigate();

  let login = (e) => {
    e.preventDefault();
    // let data = { email, password }; //data from input

    //admin validation
    if (email == "arifatar96@gmail.com" && password == 55062977)
      navigate("/admin/");
    else alert("Invalid Credentials");
  };

  return (
    <div className="adminLogin">
      <div className="form1">
        <h1>Login as Admin</h1>
        <div className="form_input1">
          <form onSubmit={login}>
            <div className="email">
              <input
                type="email"
                required
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="password">
              <input
                type="password"
                required
                placeholder="Enter Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button>Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
