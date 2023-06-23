import React from "react";
import { useNavigate } from "react-router-dom";

const Signed = ({ user: { nombre, email }, setLogged }) => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/");
    setLogged(false);
  };

  return (
    <div className="d-flex flex-column align-items-center justify-content-center vh-100">
      <h1 className="text-center" style={{ fontSize: "5rem" }}>
        ¡Welcome {nombre}!
      </h1>
      <p className="fst-italic text-black-50">{email}</p>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="text-center">
          <button type="submit" className="btn my-4 rounded-pill buttonLogin  ">
            LOGOUT
          </button>
        </div>
      </form>
    </div>
  );
};

export default Signed;
