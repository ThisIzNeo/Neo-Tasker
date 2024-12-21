import { useEffect, useState } from "react";
import axios from "axios";

/* eslint-disable react/jsx-key */
export default function TaskTable({
  onOpen,
  searchTerm,
  setTableData,
  tableData,
}) {
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/tasks");
        setTableData(response.data);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchData();
  }, []);

  const filteredData = tableData.filter((task) =>
    task.task.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const addOneDay = (date) => {
    const newDate = new Date(date);
    newDate.setDate(newDate.getDate() + 1); // Add 1 day
    return newDate.toISOString().split("T")[0]; // Return the date part only
  };

  return (
    <>
      {error && <div className="absolute right-1 alert alert-success"></div>}
      <div className="overflow-hidden">
        <button className="btn btn-primary" onClick={onOpen}>
          Create Task
        </button>
        <table className="table w-auto">
          {/* head */}
          <thead className="w-auto">
            <tr>
              <th>N°</th>
              <th>Task</th>
              <th>Status</th>
              <th>Date</th>
              <th>Control</th>
            </tr>
          </thead>
          <tbody className="w-full">
            {filteredData.map((task) => (
              <tr>
                <th>
                  <label>
                    <input
                      type="checkbox"
                      className="checkbox"
                      checked={task.status === true}
                    />
                  </label>
                </th>
                <td>
                  <div className="flex text-center items-center gap-3">
                    <div>
                      <div className="font-bold">{task.task}</div>
                    </div>
                  </div>
                </td>
                <td>{addOneDay(task.date)}</td>
                <td
                  className={` w-24 btn-sm ${
                    task.status ? `text-teal-600` : `text-yellow-500`
                  }`}
                >
                  {task.status ? "Completed" : "Pending"}
                </td>
                <th>
                  <button className="btn bg-rose-700 ml-2 ">Delete</button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
