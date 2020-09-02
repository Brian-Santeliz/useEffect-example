import React, { useState, useEffect } from "react";

export default function App() {
  const [show, setShow] = useState(true);
  return (
    <div>
      <button onClick={() => setShow(!show)}>
        {show ? "desmontar" : "montar"}
      </button>
      {show ? <MouseCompoment /> : null}
    </div>
  );
}

const MouseCompoment = () => {
  const [color, setColor] = useState("green");
  useEffect(() => {
    const mouseChange = (e) => {
      console.log("efecto creado");
      if (e.clientX < window.innerWidth / 2) {
        setColor("red");
      } else {
        setColor("blue");
      }
    };
    window.addEventListener("mousemove", mouseChange);
    //cunado el componente se demsonte,
    return () => {
      window.removeEventListener("mousemove", mouseChange);
    };
  }, []);
  return <div style={{ height: "100vh", background: color }}></div>;
};
