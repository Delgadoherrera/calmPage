import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";

export default function App() {
  return (
    <MDBFooter bgColor="light" className="text-center text-lg-start text-muted">
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        <div className="me-5 d-none d-lg-block">
          <span>Nuestras redes:</span>
        </div>

        <div>
          <a href="" className="me-4 text-reset">
            <MDBIcon fab icon="facebook-f" />
          </a>
          <a href="" className="me-4 text-reset">
            <MDBIcon fab icon="twitter" />
          </a>
          <a href="" className="me-4 text-reset">
            <MDBIcon fab icon="google" />
          </a>
          <a href="" className="me-4 text-reset">
            <MDBIcon fab icon="instagram" />
          </a>
          <a href="" className="me-4 text-reset">
            <MDBIcon fab icon="linkedin" />
          </a>
          <a href="" className="me-4 text-reset">
            <MDBIcon fab icon="github" />
          </a>
        </div>
      </section>

      <section className="">
        <MDBContainer className="text-center text-md-start mt-5">
          <MDBRow className="mt-3">
            <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                <MDBIcon icon="gem" className="me-3" />
                Calm atencion domiciliaria SRL
              </h6>
              <p>
                Mas de 30 años de experiencia en el area de salud. Estamos
                preparados para cuidarte.
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Servicios</h6>
              <p>
                <a href="#Servicios" className="text-reset">
                  Servicios
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Quienes somos?
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Empresas
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Cuidadores
                </a>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Postulaciones</h6>
              <p>
                <a href="#!" className="text-reset">
                  Aplicar
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Recomendar
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Contactar
                </a>
              </p>
              {/*    <p>
                <a href="#!" className="text-reset">
                  Help
                </a>
              </p> */}
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Contacto</h6>
              <p>
                <MDBIcon icon="home" className="me-2" />
                Direccion 12 A
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-3" />
                contacto@calmhc.com
              </p>
              <p>
                <MDBIcon icon="phone" className="me-3" /> +54 11 3095-0404
              </p>
              <p>
                <MDBIcon icon="print" className="me-3" /> @CalmHC
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div
        className="text-center p-4"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
      >
        © 2023 Copyright:
        <a className="text-reset fw-bold" href="https://calmhc.com/">
          calmhc.com
        </a>
      </div>
    </MDBFooter>
  );
}
