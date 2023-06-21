import React, { useState } from "react";
import AuthForm from "./components/container/AuthForm";

function App() {
  const [logged, setLogged] = useState(false);
  const [unlogged, setUnlogged] = useState(false);
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      {!logged ? (
        <AuthForm
          setLogged={setLogged}
          nombre={nombre}
          setNombre={setNombre}
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
        />
      ) : ''
        // (
        // <TaskListComponent nombre={nombre} />
        // )
      }
    </>
  );
}

export default App;
