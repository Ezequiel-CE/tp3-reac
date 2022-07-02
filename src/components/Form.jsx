import { useState } from "react";

const Form = ({ addTarea }) => {
  const [input, setInput] = useState("");

  const onChangeHandler = (e) => {
    setInput(e.target.value);
  };

  //accion de botones

  const addTareaOnClick = (e) => {
    e.preventDefault();
    if (input === "") {
      window.alert("Rellena  el formulario");
      return;
    }
    addTarea({ descripcion: input, lista: false });
    setInput("");
  };

  return (
    <form className="bg-slate-50 p-5 rounded-lg flex flex-col gap-3 shadow-lg w-11/12 md:max-w-lg mx-auto ">
      <div>
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="nombre"
        >
          Tarea
        </label>
        <input
          className="shadow  border rounded w-full py-2 px-3 text-gray-700  focus:outline focus:shadow-outline"
          name="nombre"
          type="text"
          placeholder="Nombre de la persona"
          onChange={onChangeHandler}
          value={input}
        />
      </div>

      <div className="flex items-center justify-center py-3 gap-3">
        <button
          className="bg-slate-300 hover:bg-slate-500 text-black font-bold py-2 px-4 rounded-full  "
          type="submit"
          onClick={addTareaOnClick}
        >
          Agregar
        </button>
      </div>
    </form>
  );
};

export default Form;
