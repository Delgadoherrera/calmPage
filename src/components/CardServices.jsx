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
    <MDBFooter bgColor="white" className="text-center text-lg-start text-muted">
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

      <section>
        <MDBContainer className="text-center text-md-start mt-5 mx-auto">
          <MDBRow className="mt-3">
            <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-">
              <h6 className="text-uppercase fw-bold mb-4 ">
                <MDBIcon icon="gem" className="me-3" />
                Médicos
              </h6>
              <p>
                Especialistas de todas las áreas lo atenderán en forma
                presencial o por telemedicina; es el ofrecimiento de servicios
                médicos a distancia, utilizando para ello tecnologías de
                información y comunicación.
              </p>
            </MDBCol>

            <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                <MDBIcon icon="gem" className="me-3" />
                Enfermeros
              </h6>
              <p>
                Respondiendo a la complejidad de las prestaciones se asignará
                personal profesional o auxiliares según sea el caso, siempre
                previa visita de la Coordinadora quien chequeará que el
                domicilio o la institución donde esté alojado cuente con los
                medios adecuados para su atención segura.
              </p>
            </MDBCol>
            <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                <MDBIcon icon="gem" className="me-3" />
                Kinesiólogos
              </h6>
              <p>
                Además de dedicarse a rehabilitar pacientes con problemas
                motrices o de movimiento corporal, la necesidad del tratamientos
                por problemas respiratorios que estamos transitando colocan en
                un rol de relevancia a estos profesionales. La concertación de
                acciones en conjunto con otras del equipo es llevada a cabo por
                la Coordinadora, haciendo que la asistencia sea recibida en
                forma correcta y en el tiempo que requiera cada persona en
                particular.
              </p>
            </MDBCol>
            <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                <MDBIcon icon="gem" className="me-3" />
                Otros Profesionales
              </h6>
              <p>- Fonoaudiólogos</p>
              <p>- Psicólogos</p>
              <p>- Meditación presencial y a distancia</p>
              <p>- Terapista ocupacional</p>
              <p>- Asistente Social</p>
              <p>- Radiólogos</p>
              <p>- Laboratorio e Hisopados</p>
              <p>- Electrocardiogramas</p>
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
