import React from "react";
import {
  MDBRow,
  MDBCol,
  MDBInput,
  MDBCheckbox,
  MDBBtn,
  MDBTextArea,
} from "mdb-react-ui-kit";
import { useState, useEffect } from "react";
import { formValue as dForm } from "./dataReducer/dataReducer";
import { useSelector, useDispatch } from "react-redux";
import Alert from "@mui/material/Alert";

export default function App() {
  const [formValue, setFormValue] = useState({
    fname: "",
    lname: "",
    email: "",
    file: "",
    phone: "",
    presentacion: "",
  });
  const [showSucces, setShowSucces] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (showSucces) {
      setTimeout(() => {
        setShowSucces(false);
      }, 3000); // 3000 ms = 3 segundos
    }
  }, [showSucces]);

  const onSubmitHandler = (event) => {
    event.preventDefault();
    console.log(event);
    console.log("formValueformValue", formValue);
    setShowSucces(true);

    dispatch(dForm(formValue));
  };
  const onChange = (e) => {
    setFormValue({ ...formValue, [e.target.name]: e.target.value });
  };

  return (
    <form id="form" onSubmit={(e) => onSubmitHandler(e)}>
      <MDBRow className="mb-4">
        <MDBCol>
          <MDBInput
            id="form6Example1"
            label="Nombre"
            required
            name="fname"
            onChange={onChange}
          />
        </MDBCol>
        <MDBCol>
          <MDBInput
            id="form6Example2"
            label="Apellido"
            name="lname"
            onChange={onChange}
            required
          />
        </MDBCol>
      </MDBRow>
      <MDBInput
        wrapperClass="mb-4"
        id="form6Example4"
        label="Ubicación"
        required
      />
      <MDBInput
        wrapperClass="mb-4"
        type="email"
        id="form6Example5"
        label="Email"
        onChange={onChange}
        name="email"
        required
      />
      <MDBInput
        wrapperClass="mb-4"
        type="tel"
        id="form6Example6"
        label="Teléfono"
        onChange={onChange}
        name="phone"
        required
      />
      <MDBTextArea
        wrapperClass="mb-4"
        id="form6Example7"
        rows={4}
        label="Presentación"
        name="presentacion"
        onChange={onChange}
        required
      />
      Adjuntar (PDF)
      <MDBInput
        wrapperClass="mb-4"
        type="file"
        id="form6Example6"
        label=""
        onChange={onChange}
        name="file"
      />
      <MDBCheckbox
        wrapperClass="d-flex justify-content-center mb-4"
        id="form6Example8"
        label="Acepto enviar mis datos"
        defaultChecked
        required
      />
      <MDBBtn
        className="mb-8"
        type="submit"
        form="form"
        block
        color="primary"
        outline
        size="lg"
      >
        Enviar potulación
      </MDBBtn>
      {showSucces ? (
        <Alert variant="filled" severity="success" color="success">
          Postulación enviada, muchas gracias!.
        </Alert>
      ) : null}
    </form>
  );
}
