import React from "react";

const Footer = () => {
  return (
    <footer className="d-flex flex-wrap justify-content-between align-items-center p-4 border-top">
      <div className="col-md-4 d-flex align-items-center">
        <span className="mb-3 mb-md-0 text-body-secondary">
          Все права защищены
        </span>
      </div>

      <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
        <li className="ms-3">
          <a className="text-body-secondary" href="#">
            vk
          </a>
        </li>
        <li className="ms-3">
          <a className="text-body-secondary" href="#">
            tg
          </a>
        </li>
        <li className="ms-3">
          <a className="text-body-secondary" href="#">
            github
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
