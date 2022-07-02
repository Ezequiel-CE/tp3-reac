import Form from "./components/Form";
import { useState, useEffect } from "react";

import ListadoTareas from "./components/ListadoTareas";

const App = () => {
  const [tareas, setTareas] = useState([]);

  //agregar tareas

  const addTareaHandler = async (tarea) => {
    try {
      const response = await fetch("http://localhost:4000/tareas", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(tarea),
      });
      if (!response.ok) throw new Error();

      const nuevaTarea = await response.json();

      setTareas((prevState) => [...prevState, nuevaTarea]);
    } catch (error) {
      console.log("no se puedo agregar tarea");
    }
  };

  //borrar tareas

  const deleteTareaHandler = async (id) => {
    if (!window.confirm("¿Desea eliminar la tarea?")) return;

    try {
      const response = await fetch("http://localhost:4000/tareas/" + id, {
        method: "DELETE",
      });

      if (!response.ok) throw new Error();

      setTareas((prevState) => prevState.filter((tarea) => tarea.id !== id));
    } catch (error) {
      console.log("no se puedo borrar");
    }
  };

  //editar tareas

  const updateTareaHandler = async (tarea) => {
    const { id, lista } = tarea;

    try {
      const response = await fetch("http://localhost:4000/tareas/" + id, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...tarea, lista: !lista }),
      });
      if (!response.ok) throw new Error();

      setTareas((prevState) => {
        return prevState.map((tarea) => {
          if (tarea.id === id) {
            return { ...tarea, lista: !tarea.lista };
          }
          return tarea;
        });
      });
    } catch (error) {
      console.log("no se puedo editar tarea");
    }
  };

  //fetch tareas

  useEffect(() => {
    const fetchTareas = async () => {
      try {
        const response = await fetch("http://localhost:4000/tareas");

        if (!response.ok) throw new Error();

        const tareas = await response.json();
        setTareas(tareas);
      } catch (error) {
        console.log("no puede obtener tareas");
      }
    };

    fetchTareas();
  }, []);

  return (
    <div className="min-h-screen bg-cyan-400  ">
      <h1 className="text-center mb-12 font-bold leading-tight text-4xl bg-slate-50 p-6  shadow-lg md:text-5xl text-gray-700  ">
        Lista de tareas
      </h1>
      <Form addTarea={addTareaHandler} />
      <ListadoTareas
        tareas={tareas}
        deleteTarea={deleteTareaHandler}
        updateTarea={updateTareaHandler}
      />
    </div>
  );
};

export default App;
