import TareaItem from "./TareaItem";

const ListadoTareas = ({ tareas, updateTarea, deleteTarea }) => {
  return (
    <>
      {tareas.length > 1 && (
        <ul className="bg-slate-50 p-5 mt-8 rounded-lg flex flex-col gap-3 shadow-lg w-11/12 md:max-w-lg mx-auto ">
          {tareas.map((tarea) => (
            <TareaItem
              key={tarea.id}
              data={tarea}
              updateTarea={updateTarea}
              deleteTarea={deleteTarea}
            />
          ))}
        </ul>
      )}
    </>
  );
};

export default ListadoTareas;
