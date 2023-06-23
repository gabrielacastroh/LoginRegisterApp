import React, { useState, useEffect } from "react";
import { BsStars } from "react-icons/bs";
import "../../styles/login.css";
import { useNavigate } from "react-router-dom";

const Signup = (props) => {
  const [showAlert, setShowAlert] = useState(false);
  const [showAlertTimeout, setShowAlertTimeout] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (showAlert) {
      // Mostrar la alerta durante 5 segundos
      const timeoutId = setTimeout(() => {
        setShowAlert(false);
        setShowAlertTimeout(null);
      }, 5000);
      setShowAlertTimeout(timeoutId);
    }
    // Limpiar el temporizador cuando se desmonte el componente
    return () => clearTimeout(showAlertTimeout);
  }, [showAlert]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const DataGet = JSON.parse(localStorage.getItem(props.email));

    if (DataGet) {
      setShowAlert(true);
    } else {
      const userData = {
        nombre: props.nombre,
        email: props.email,
        password: props.password,
      };
      props.setUser(userData);

      localStorage.setItem(props.email, JSON.stringify(userData));
      props.setLogged(true);
      navigate("/task");

      resetState();
    }
  };

  const handleCloseAlert = () => {
    // Cancelar el temporizador y ocultar la alerta
    clearTimeout(showAlertTimeout);
    setShowAlertTimeout(null);
    setShowAlert(false);
  };

  const resetState = () => {
    props.setNombre("");
    props.setEmail("");
    props.setPassword("");
  };

  return (
    <div
      className="row"
      style={{
        background: "",
        width: "80%",
        height: "80%",
        justifyContent: "center",
        alignContent: "center",
      }}
    >
      {showAlert && (
        <div
          className="alert alert-warning alert-dismissible fade show"
          role="alert"
        >
          Ya existe un usuario con ese correo electrónico
          <button
            type="button"
            className="btn-close"
            aria-label="Close"
            onClick={handleCloseAlert}
          ></button>
        </div>
      )}
      <div
        className="row mb-4"
        style={{
          background: "",
          justifyContent: "center",
          alignContent: "center",
        }}
      >
        <div className="col-2" style={{ background: "", textAlign: "center" }}>
          <BsStars style={{ fontSize: "2rem" }} />
        </div>
        <div className="col-7" style={{ background: "" }}>
          <h3>Get started!</h3>
        </div>
      </div>
      <div className="row" style={{ background: "" }}>
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="mb-3 form-floating">
            <input
              type="text"
              className="form-control inputForm"
              id="inputName"
              aria-describedby="nameHelp"
              placeholder="Name"
              value={props.nombre}
              onChange={(e) => props.setNombre(e.target.value)}
              required
            />
            <label htmlFor="inputName" className="form-label">
              Name
            </label>
          </div>
          <div className="mb-3 form-floating">
            <input
              type="email"
              className={
                showAlert
                  ? "form-control is-invalid inputForm"
                  : "form-control inputForm"
              }
              id="inputEmail"
              aria-describedby="emailHelp"
              placeholder="Email"
              value={props.email}
              onChange={(e) => props.setEmail(e.target.value)}
              required
            />
            <label htmlFor="inputEmail" className="form-label">
              Email
            </label>
          </div>
          <div className="mb-3 form-floating">
            <input
              type="password"
              className="form-control inputForm"
              id="inputPassword"
              placeholder="Password"
              value={props.password}
              onChange={(e) => props.setPassword(e.target.value)}
              required
            />
            <label htmlFor="inputPassword" className="form-label">
              Password
            </label>
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="btn my-4 rounded-pill buttonLogin  "
            >
              SIGN UP
            </button>
          </div>
          <div className="row m-0 pt-3">
            <div className="col-5 p-0">
              <div className="form-text p-0 fs-6 m-0" id="basic-addon4">
                Have an account?
              </div>
            </div>
            <div className="col-3 ps-0 ">
              <button
                type="button"
                className="btn btn-link btn-sm fs-6 p-0"
                style={{ color: " #9553A0" }}
                onClick={() => props.setSelection("login")}
              >
                Login
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
