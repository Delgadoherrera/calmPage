import React from "react";
import { MDBBtn, MDBContainer } from "mdb-react-ui-kit";
import Footer from "./components/Footer";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import SeparatorText from "./components/SeparatorText";
import CardServices from "./components/CardServices";
import CasaSegura from "./components/CasaSegura";
import QuienesSomos from "./components/QuienesSomos";
import Divisor from "./components/Divisor";
import FormPostulate from "./components/FormPostulate";

function App() {
  return (
    <MDBContainer fluid>
      <NavBar />
      <Header />
      <QuienesSomos />
      <Divisor
        url={
          "https://c.pxhere.com/images/b3/dd/5be747f89840a4c3c64db3d8fa23-1571981.jpg!d"
        }
        alto={300}
      />

      <SeparatorText tittle={"Servicios"} text={"Contactanos"} />
      <CardServices />
      <SeparatorText tittle={"Casa segura"} text={"Contactanos"} />
      <CasaSegura />

      <Divisor
        url={
          "https://c.pxhere.com/images/09/19/390170c640a9bac95fd19bcb68e7-1455425.jpg!d"
        }
        alto={300}
      />
      <SeparatorText tittle={"Postulate"} text={"Cargar solicitud"} />
      <FormPostulate />

      <Footer />
    </MDBContainer>
  );
}

export default App;
