/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import "./App.css";
import ModalForm from "./components/ModalForm";
import Navbar from "./components/Navbar";
import TaskTable from "./components/TaskTable";
import WeatherApi from "./components/WeatherApi";
import axios from "axios";
import Footer from "./components/Footer";
import PomodoroTimer from "./components/PomodoroTimer";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [modalMode, setModalMode] = useState("Add");
  const [searchTerm, setSearchTerm] = useState("");
  const [taskData, setTaskData] = useState(null);
  const [tableData, setTableData] = useState([]);

  const fetchClients = async () => {
    try {
      const response = await axios.get("http://localhost:3000/api/tasks");
      setTableData(response.data); // Set the fetched data
    } catch (err) {
      setError(err.message);
    }
  };

  useEffect(() => {
    fetchClients();
  }, []);

  const handleOpen = (mode) => {
    setModalMode(mode);
    setIsOpen(true);
  };

  const handleSubmit = async (newTaskData) => {
    if (modalMode === "Add") {
      try {
        const response = await axios.post(
          "http://localhost:3000/api/tasks",
          newTaskData
        ); // Replace with your actual API URL
        console.log("Task added:", response.data); // Log the response
        setTableData((prevData) => [...prevData, response.data]);
        // Optionally, update your state here to reflect the newly added client
      } catch (error) {
        console.error("Error adding client:", error); // Log any errors
      }
    }
  };

  return (
    <>
      <header className="w-11/12 mx-auto">
        <Navbar onSearch={setSearchTerm} />
        <hr className="opacity-5" />
      </header>
      <main className="w-11/12 mx-auto">
        <PomodoroTimer workMinutes={25} breakMinutes={5} />

        {/* Our Divider */}
        <div className="flex w-full flex-col lg:flex-row mt-10 p-5">
          {/* Table */}

          <div className="card bg-base-300 rounded-box grid w-9/12 h-max p-5 flex-grow place-items-center">
            <TaskTable
              onOpen={() => handleOpen(handleOpen)}
              searchTerm={searchTerm}
              setTableData={setTableData}
              tableData={tableData}
            />
          </div>
          {/* Table */}
          {/* Our Divider */}
          <div className="divider lg:divider-horizontal"></div>
          {/* Our Divider */}
          <div className="card bg-base-300 rounded-box grid w-3/12 h-72 flex-grow ">
            <div className="flex justify-center items-center">
              <WeatherApi />
            </div>
          </div>
        </div>
        {/* Our Divider */}
        <ModalForm
          isOpen={isOpen}
          onSubmit={handleSubmit}
          onClose={() => setIsOpen(false)}
          mode={modalMode}
          taskData={taskData}
        />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
