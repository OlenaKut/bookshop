import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import "./Subscribe.css";

const ContactFormNew = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_9193qoi",
        "template_064w2ej",
        form.current,
        "TzYovzw7_cod5ImXm"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Thank you for subscribing!");
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div>
      <h5>Sign up for our Newsletter</h5>
      <Form ref={form} onSubmit={sendEmail} className="w-75">
        <Form.Group as={Col}>
          <Form.Control
            type="text"
            name="user_name"
            placeholder="Your name"
            aria-describedby="inputGroupPrepend"
            required
            className="subscribe-input rounded-0 mb-1"
          />
        </Form.Group>
        <Form.Group as={Col}>
          <Form.Control
            type="email"
            name="user_email"
            placeholder="Email"
            aria-describedby="inputGroupPrepend"
            required
            className="subscribe-input rounded-0 mb-2"
          />
        </Form.Group>
        <Form.Group>
          <Button
            className="subscribe-button rounded-0 float-end border-0"
            variant="light"
            type="submit"
          >
            Submit
          </Button>
        </Form.Group>
      </Form>
    </div>
  );
};

export default ContactFormNew;
