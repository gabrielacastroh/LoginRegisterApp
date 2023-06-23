import React, { useEffect, useState } from "react";
import { BsStars } from "react-icons/bs";
import "../../styles/login.css";
import { useNavigate } from 'react-router-dom';

const Login = (props) => {
  const [showAlert, setShowAlert] = useState(false);
  const [showAlertTimeout, setShowAlertTimeout] = useState(null);
  const [showTitleAlert, setShowTitleAlert] = useState(null);
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
      if (DataGet.password == props.password) {
        props.setLogged(true);
        props.setNombre(DataGet.nombre);
        props.setUser(DataGet)
        navigate('/task');
      } else if (DataGet.password !== props.password) {
        setShowAlert(true);
        setShowTitleAlert("Contraseña incorrecta, intentelo de nuevo.");
      }
    } else {
      setShowAlert(true);
      setShowTitleAlert("El usuario no existe, por favor registrate.");
    }
  };

  const handleCloseAlert = () => {
    // Cancelar el temporizador y ocultar la alerta
    clearTimeout(showAlertTimeout);
    setShowAlertTimeout(null);
    setShowAlert(false);
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
          {showTitleAlert}
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
        <div className="col-9" style={{ background: "" }}>
          <h3>Welcome back!</h3>
        </div>
      </div>
      <div className="row" style={{ background: "" }}>
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="mb-3 form-floating">
            <input
              type="email"
              className="form-control"
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
              className={
                showAlert
                  ? "form-control is-invalid inputForm"
                  : "form-control inputForm"
              }
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
              LOGIN
            </button>
          </div>
          <div className="row m-0 pt-3">
            <div className="col-6 p-0">
              <div className="form-text p-0 fs-6 m-0" id="basic-addon4">
                Dont have an account?
              </div>
            </div>
            <div className="col-4 ps-0 ">
              <button
                type="button"
                className="btn btn-link btn-sm fs-6 p-0"
                style={{ color: " #9553A0" }}
                onClick={() => props.setSelection("signup")}
              >
                Sign Up
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
