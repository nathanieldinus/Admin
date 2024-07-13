import "./login.scss"; 
import { useContext, useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import { DarkModeContext } from "../../context/darkModeContext";

const Login = () => { 
  const { darkMode, dispatch } = useContext(DarkModeContext);
  const [error, setError] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const { dispatch: authDispatch } = useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        authDispatch({ type: "LOGIN", payload: user });
        navigate("/");
        console.log(user);
      })
      .catch((error) => {
        setError(true);
      });
  };

  return (
    <div className={darkMode ? "login dark" : "login"}>
      <form data-testid="form" onSubmit={handleLogin}>
        <input
          id="email"
          type="email"
          placeholder="Enter your email" 
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          id="password"
          type="password"
          placeholder="Enter your password" 
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" data-testid="submit">Login</button>
        {error && <span>Wrong email or password!</span>}
      </form>
      <div className="item">
        {darkMode ? (
          <LightModeOutlinedIcon
            className="icon"
            onClick={() => dispatch({ type: "TOGGLE" })}
          />
        ) : (
          <DarkModeOutlinedIcon
            className="icon"
            onClick={() => dispatch({ type: "TOGGLE" })}
          />
        )}
      </div>
    </div>
  );
};

export default Login;
