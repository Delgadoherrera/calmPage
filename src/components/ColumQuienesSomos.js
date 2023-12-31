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
        {/*        <div className="me-5 d-none d-lg-block">
          <span>Get connected with us on social networks:</span>
        </div> */}
        {/* 
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
 */}{" "}
      </section>

      <section className="mb-5">
        <MDBContainer className="text-center text-md-start mt-5">
          <MDBRow className="mt-3">
            <MDBCol
              md="3"
              lg="4"
              xl="3"
              className="mx-auto mb-4"
              onMouseEnter={() => console.log("over")}
            >
              <h6 className="text-uppercase fw-bold mb-4">
                <MDBIcon icon="gem" className="me-3" />
                Misión
              </h6>
              <p>
                Brindar atención personalizada, continua y eficiente, haciendo
                foco en la persona, proponiendo un espacio de mutuo respeto y
                colaboración. Queremos acompañarlo a transitar diferentes etapas
                de la vida, porque sentimos pasión por lo que hacemos.
              </p>
            </MDBCol>

            <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                <MDBIcon icon="gem" className="me-3" />
                Visión
              </h6>
              <p>
                Ser el grupo humano de profesionales que elija para usted o su
                familia y brindar un servicio de alta calidad mediante mejora
                continua de técnicas y conocimientos en en el área de salud. Ser
                una empresa boutique, donde solo importe la calidad de servicios
                y cuidados aportados.
              </p>
            </MDBCol>
            <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                <MDBIcon icon="gem" className="me-3" />
                Valores
              </h6>
              <p>
                Valoramos la predisposición a brindar un servicio de cuidado
                como estilo de vida. Aún los problemas sencillos los
                incorporamos para ser resueltos, por eso la capacitación
                continua de los profesionales y del familiar (incorporado al
                equipo de atención) lo consideramos imprescindibles para un
                servicio de excelencia.
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>
      {/* 
      <div
        className="text-center p-4"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
      >
        © 2021 Copyright:
        <a className="text-reset fw-bold" href="https://mdbootstrap.com/">
          MDBootstrap.com
        </a>
      </div> */}
    </MDBFooter>
  );
}
