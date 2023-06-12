import React, { useEffect, useState } from "react";
import Pregunta from "./components/Pregunta";
import Formulario from "./components/Formulario";
import Listado from "./components/Listado";
import ControlPresupuesto from "./components/ControlPresupuesto";

function App() {
  //States para la app
  const [presupuesto, setPresupuesto] = useState(0);

  const [restante, setRestante] = useState(0);

  const [mostrarPregunta, setMostrarPregunta] = useState(true);

  const [gastos, guardarGastos] = useState([]);

  const [gasto, setGasto] = useState({});

  const [crearGasto, setCrearGasto] = useState(false);
  useEffect(() => {
    if (crearGasto) {
      //Agrega el nuevo presupuesto
      guardarGastos([...gastos, gasto]);
      //Resta del presupuesto actual
      const presupuestoRestante = restante - gasto.cantidad;
      setRestante(presupuestoRestante);
    }
    //Reseat a false
    setCrearGasto(false);
  }, [gasto, crearGasto, guardarGastos, gastos, restante]);
  

  return (
    <div className="container">
      <header>
        <h1>Carlos Larios</h1>
        <div className="contenido-principal contenido">
          {mostrarPregunta ? (
            <Pregunta
              setPresupuesto={setPresupuesto}
              setRestante={setRestante}
              setMostrarPregunta={setMostrarPregunta}
            />
          ) : (
            <div className="row">
              <div className="one-half column">
                <Formulario setGasto={setGasto} setCrearGasto={setCrearGasto}/>
              </div>
              <div className="one-half column">
                <Listado gastos={gastos} />
                <ControlPresupuesto
                  presupuesto={presupuesto}
                  restante={restante}
                />
              </div>
            </div>
          )}
        </div>
      </header>
    </div>
  );
}

export default App;
