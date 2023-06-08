import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { auth, sendPasswordReset } from "./firebase";
import "./Reset.css";
import Col from "react-bootstrap/Col";



function Reset() {
  const [email, setEmail] = useState("");
  const [user, loading] = useAuthState(auth);
  
  const navigate = useNavigate();


    useEffect(() => {
    if (loading) return;
      if (user) navigate("/dashboard");
        // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user, loading]);


  return (
   <Col className="reset">
      <div className="reset__container">
        <input
          type="text"
          className="reset__textBox"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="E-mail Address"
        />
        <button className="reset__btn" onClick={() => sendPasswordReset(email)}>
          Send password reset email
        </button>

      <div>
          Don't have an account? <Link to="/register">Register</Link> now.
        </div>
      </div>
      </Col>
   
  );
}

export default Reset;
