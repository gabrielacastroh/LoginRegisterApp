import React, { useState } from "react";
import AuthForm from "./components/container/AuthForm";

function App(props) {

  return (
    <>{!props.logged && <AuthForm setUser={props.setUser} setLogged={props.setLogged} />}</>
  );
}

export default App;
