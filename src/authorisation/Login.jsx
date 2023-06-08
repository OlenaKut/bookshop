import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  auth,
  logInWithEmailAndPassword,
  signInWithGoogle,
} from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import "../authorisation/Login.css";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
//import Form from "react-bootstrap/Form";


const Login = () => {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, loading] = useAuthState(auth);

  const [buttonClick, setButtonClick] = useState(0);
  const navigate = useNavigate();

  //const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

   const handleClick = () => {
    setShow(!show);
    setButtonClick(buttonClick + 1);
  };
  

  useEffect(() => {
    if (loading) {
      setShow(false);
      return;
   }
    if (user) {
      navigate("/");
      setShow(false);
    };

  }, [user, loading]);


  return (
     <>
      <Button variant="primary" onClick={handleShow}>
        LogIn
      </Button>
      <Modal show={show} onHide={handleClick}>
           <div className="login__container">
            <input
              type="text"
              className="login__textBox"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="E-mail Address"
            />
            <input
              type="password"
              className="login__textBox"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />
            <button
              className="login__btn"
              onClick={() => logInWithEmailAndPassword(email, password)}
              >
              Login
            </button>
            <button
              className="login__btn login__google"
              onClick={signInWithGoogle}
             >
              Login with Google
            </button>
            <div>
              <Link to="/reset">Forgot Password</Link>
            </div>
            <div>
              Don't have an account? <Link to="/register">Register</Link> now
            </div>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClick}>
                Close
              </Button>
            </Modal.Footer>
          </div>
        </Modal>
    </>
  );
};

export default Login;
