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
                Casa sin riesgo. Elementos que brindan seguridad
              </h6>
              <p>
                Las personas mayores requerirán para su vida cotidiana,
                equipamiento fijo especialmente indicado para la protección
                (duchadores, silla de baño, barral agarradera, modificación de
                bañeras, escalones, alfombras, etc) Las personas con
                discapacidad, además de lo mencionado, se les ofrecen
                sujetadores- camilla, barras de apoyo y soportes de seguridad,
                realización de rampas, escaleras y ángulos para su
                desplazamiento, pisos especiales.
              </p>
            </MDBCol>

            <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                <MDBIcon icon="gem" className="me-3" />
                Remodelaciones
              </h6>
              <p>
                Asesoramiento Médico Especializado para adecuar la vivienda de
                las personas mayores para su comodidad y Seguridad. Realizamos
                cada una de las recomendaciones e implementaciones, aplicando un
                análisis previo de las necesidades específicas de cada persona
                y/o familia, con el fin de brindarle a nuestro usuario, la mayor
                independencia y autonomía posible, diseñando cada espacio de
                forma totalmente personalizada y adaptado a su estilo de vida.
                Nuestros médicos especializados visitaran el domicilio y
                realizaran una evaluación funcional del paciente, presentándole
                un informe, detallando las necesidades específicas a realizar
                para la seguridad, comodidad, y el desplazamiento del mismo.
              </p>
            </MDBCol>
            <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                <MDBIcon icon="gem" className="me-3" />
                Área contratista
              </h6>
              <p>
                Personal que ejecuta la remodelación de casas o departamentos ,
                adecuándolas a las necesidades del paciente en tratamiento.
                Materiales seguros y de excelente calidad , profesionales
                especializados en el área en concordancia con el personal médico
                le aseguran desde el inicio, diseño, construcción y equipamiento
                según necesidades personalizadas , realizando en el menor tiempo
                posible y con la mejor calidad, las mejoras solicitadas
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
