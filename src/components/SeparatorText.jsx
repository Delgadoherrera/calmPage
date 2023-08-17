import React, { useState } from "react";
import {
  MDBNavbar,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBNavbarToggler,
  MDBContainer,
  MDBIcon,
  MDBCollapse,
  MDBBtn,
} from "mdb-react-ui-kit";
import CardServices from "./CardServices";

export default function App({ text, tittle }) {
  const [showBasic, setShowBasic] = useState(false);

  return (
    <header>
      <div className="d-flex" style={{ height: 1 }} id={tittle}>
        <div className="vr"></div>
      </div>

      <div
        className="p-5 text-center bg-white"
        style={{
          // backgroundImage:
          //   "url('https://c.pxhere.com/images/89/e1/f1a5c6ac526cef8efc9c1aaed949-1446749.jpg!d')",
          minHeight: "150px",
        }}
      >
        <div className="d-flex justify-content-center align-items-center h-100">
          <div className="text-black">
            <h1 className="mb-3">{tittle}</h1>
            {/*   <MDBBtn tag="a" outline size="lg">
              {text}
            </MDBBtn> */}
          </div>
        </div>
      </div>
    </header>
  );
}
