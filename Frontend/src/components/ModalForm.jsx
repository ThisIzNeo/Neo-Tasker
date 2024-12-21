import { useState } from "react";

export default function ModalForm({
  isOpen,
  onClose,
  mode,
  onSubmit,
  taskData,
}) {
  const [task, setTask] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const taskData = { task, date };
      await onSubmit(taskData);
      onClose();
    } catch (err) {
      console.error("Error Adding New Task", err);
    }
  };

  return (
    <>
      {/* You can open the modal using document.getElementById('ID').showModal() method */}
      <dialog id="my_modal_3" className="modal" open={isOpen}>
        <div className="modal-box">
          <form method="dialog" onSubmit={handleSubmit}>
            {/* if there is a button in form, it will close the modal */}
            <button
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              onClick={onClose}
            >
              ✕
            </button>
            <h3 className="font-bold text-lg">Make Your New Task</h3>
            <label className="input input-bordered flex items-center gap-2 my-3">
              Task
              <input
                type="text"
                className="grow"
                placeholder="Doing My Home Work"
                required
                value={task}
                onChange={(e) => setTask(e.target.value)}
              />
            </label>
            <label className="input input-bordered flex items-center gap-2 my-3">
              Date
              <input
                type="date"
                className="grow"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                required
              />
            </label>
            <button type="submit" className="btn btn-success">
              {mode === "Edit" ? "Update" : "Save"}
            </button>
          </form>
        </div>
      </dialog>
    </>
  );
}
