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
  MDBCol,
} from "mdb-react-ui-kit";
import ColumQuienesSomos from "./ColumQuienesSomos";

export default function App() {
  const [showBasic, setShowBasic] = useState(false);

  return (
    <>
      <ColumQuienesSomos />
    </>
  );
}
