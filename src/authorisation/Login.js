import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  auth,
  logInWithEmailAndPassword,
  signInWithGoogle,
} from "../authorisation/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import "../authorisation/Login.css";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const Login = () => {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, loading] = useAuthState(auth);
  //const navigate = useNavigate();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const onHide = () => handleClose();

  useEffect(() => {
    if (loading) {
        return;
    }
    /*if (user) {
      navigate("/");
    }*/
    onHide();
  }, [user, loading]);

  return (
    <>
      <Button
        variant="info text-white"
        onClick={handleShow}
        className="login-button py-0 px-2 rounded-1"
      >
        LogIn
      </Button>
      <Modal show={show} onHide={handleClose}>
        <div className="">
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
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
            </Modal.Footer>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default Login;
