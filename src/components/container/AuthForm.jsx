import React, { useEffect, useState } from "react";
import "../../styles/login.css";
import Login from "../pure/Login";
import Signup from "../pure/Signup";

const AuthForm = (props) => {
  const [selection, setSelection] = useState("login");
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    console.log(props.logged);
  }, []);

  return (
    <div className="container-fluid containerApp">
      <div className="row containerApp">
        {/* CONTENEDOR DE LA IZQUIERDA */}
        <div
          className="col-6"
          style={{
            background: "",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            className="row"
            style={{
              background: "",
              height: "73%",
              width: "80%",
              justifyContent: "center",
              alignContent: "center",
            }}
          >
            {selection == "login" ? (
              <Login
                setLogged={props.setLogged}
                setUser={props.setUser}
                setSelection={setSelection}
                nombre={nombre}
                setNombre={setNombre}
                email={email}
                setEmail={setEmail}
                password={password}
                setPassword={setPassword}
              />
            ) : selection == "signup" ? (
              <Signup
                setSelection={setSelection}
                  setLogged={props.setLogged}
                setUser={props.setUser}
                nombre={nombre}
                setNombre={setNombre}
                email={email}
                setEmail={setEmail}
                password={password}
                setPassword={setPassword}
              />
            ) : (
              ""
            )}
          </div>
        </div>
        {/* CONTENEDOR DE LA DERECHA */}
        <div className="col-6 p-0 containerRight">
          <div className="wave-container">
            <div className="container-fluid text-center containerTitleImg">
              {/* TITULO */}
              <div className="task-title">
                <h1>TASK LIST</h1>
                <h1>TASK LIST</h1>
              </div>
              {/* IMAGEN */}
              <img
                style={{ width: "75%" }}
                src="/src/assets/img/home_task.png"
                className="img-fluid"
                alt="imagen-login"
              ></img>
            </div>
            {/* WAVE */}
            <svg
              viewBox="0 0 500 150"
              preserveAspectRatio="none"
              style={{ height: "100%", width: "100%" }}
            >
              <path
                d="M501.41,0.52 C292.61,186.03 152.64,22.22 0.85,150.50 L500.00,150.00 L506.49,-79.42 Z"
                style={{ stroke: "none", fill: "#D0BAEA" }}
              ></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
