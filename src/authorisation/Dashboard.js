import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import "../authorisation/Dashboard.css";
import { auth, db, logout } from "../authorisation/firebase";
import { query, collection, getDocs, where } from "firebase/firestore";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
//import { LinkContainer } from "react-router-bootstrap";

function Dashboard() {
  const [user, loading] = useAuthState(auth);
  const [name, setName] = useState("");
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const fetchUserName = async () => {
    try {
      const q = query(collection(db, "users"), where("uid", "==", user?.uid));
      const doc = await getDocs(q);
      const data = doc.docs[0].data();

      setName(data.name);
    } catch (err) {
    }
  };

  useEffect(() => {
    if (loading) return navigate("/");
    if (!user) return navigate("/");

    fetchUserName();
  }, [user, loading]);

  return (
    <>
      <Button variant="none" onClick={handleShow}>
        LogOut
      </Button>

      <Modal show={show} onHide={handleClose}>
        <div className="">
          <div className="dashboard__container">
            Logged in as
            <div>{name}</div>
            <div>{user?.email}</div>
            <button className="dashboard__btn" onClick={logout}>
              Logout
            </button>
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
}

export default Dashboard;
