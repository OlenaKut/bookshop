import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import "../authorisation/Dashboard.css";
import { auth, db, logout } from "./firebase";
import { query, collection, getDocs, where } from "firebase/firestore";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";


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
      console.error(err);
    }
  };

  useEffect(() => {
    const fetchUserName = async () => {
    try {
      const q = query(collection(db, "users"), where("uid", "==", user?.uid));
      const doc = await getDocs(q);
      const data = doc.docs[0].data();

    setName(data.name);
    } catch (err) {
      console.error(err);
    }
  };



    if (loading) return;
    if (!user) return navigate("/");
    setShow(false);
    fetchUserName();
       // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user, loading]);

  return (
    <>
      {user && ` Hello, ${name}`}
      <Button variant="info" onClick={handleShow}>
        LogOut
      </Button>
      
      <Modal show={show} onHide={handleClose}>
        <div className="rounded">
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
