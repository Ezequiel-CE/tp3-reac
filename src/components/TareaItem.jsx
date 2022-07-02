import { AiFillDelete } from "react-icons/ai";

const TareaItem = ({ data, deleteTarea, updateTarea }) => {
  const onClickDeleteHandler = () => {
    deleteTarea(data.id);
  };

  const onClickEditHandler = () => {
    updateTarea(data);
  };

  const style = data.lista
    ? "text-black text-sm font-bold line-through hover:cursor-pointer "
    : "text-black text-sm font-bold hover:cursor-pointer ";

  return (
    <li className="bg-slate-300 p-5 w-full  rounded-lg flex justify-between items-center shadow-lg  ">
      <div>
        <p className={style} onClick={onClickEditHandler}>
          {data.descripcion}
        </p>
      </div>

      <div className="flex gap-3">
        <AiFillDelete
          className="w-5 h-5 hover:cursor-pointer"
          onClick={onClickDeleteHandler}
        />
      </div>
    </li>
  );
};

export default TareaItem;
