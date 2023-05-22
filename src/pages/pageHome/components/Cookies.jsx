import React, { useState } from "react";
import posthog from "posthog-js";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const Cookies = () => {
  const [showBanner, setShowBanner] = useState(true);

  const acceptCookies = () => {
    posthog.opt_in_capturing();
    setShowBanner(false);
  };

  const declineCookies = () => {
    posthog.opt_out_capturing();
    setShowBanner(false);
  };

  return (
    <div>
      <Modal className="d-flex align-items-end" show={showBanner}>
        <Modal.Body>
          <p className="pt-3">
            We use cookies to enhance your browsing experience, serve
            personalized ads or content, and analyze our traffic. By clicking on
            the button "Accept Cookies", you consent to our use of cookies.{" "}
            <Button
              variant="link"
              target="_blank"
              rel="noopener noreferrer"
              href="https://securiti.ai/terms/#cookies-policy"
              className="m-0 p-0"
            >
              Cookie Policy
            </Button>
          </p>
        </Modal.Body>
        <Modal.Footer className="m-auto">
          <Button
            variant="primary"
            rel="noopener noreferrer"
            onClick={acceptCookies}
            className="mx-2 text-white"
          >
            Accept Cookies
          </Button>
          <Button
            variant="primary"
            rel="noopener noreferrer"
            onClick={declineCookies}
            className="mx-2 text-white"
          >
            Decline Cookies
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Cookies;
