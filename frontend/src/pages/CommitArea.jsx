import { useState, useEffect } from "react";


const Avatar1 = "/girl.png";
const Avatar2 = "/boy.png";

const CommitArea = () => {
  const [tasksUser1, setTasksUser1] = useState([]);
  const [taskInputUser1, setTaskInputUser1] = useState("");
  const [deadlineInputUser1, setDeadlineInputUser1] = useState(""); 

  const [tasksUser2, setTasksUser2] = useState([]);
  const [taskInputUser2, setTaskInputUser2] = useState("");
  const [deadlineInputUser2, setDeadlineInputUser2] = useState("");

  const addTaskUser1 = () => {
    if (taskInputUser1.trim() !== "" && deadlineInputUser1) {
      setTasksUser1([
        ...tasksUser1,
        { task: taskInputUser1, deadline: deadlineInputUser1 },
      ]);
      setTaskInputUser1("");
      setDeadlineInputUser1("");
    }
  };
  
  const addTaskUser2 = () => {
    if (taskInputUser2.trim() !== "" && deadlineInputUser2) {
      setTasksUser2([
        ...tasksUser2,
        { task: taskInputUser2, deadline: deadlineInputUser2 },
      ]);
      setTaskInputUser2("");
      setDeadlineInputUser2("");
    }
  };
  useEffect(() => {
    console.log("Tasks User 1:", tasksUser1);
    console.log("Tasks User 2:", tasksUser2);
  }, [tasksUser1, tasksUser2]);
  
  return (
  <div 
style={{ 
  minHeight: '100vh', 
  display: 'flex', 
  justifyContent: 'center', 
  alignItems: 'center', 
  backgroundColor: 'lightblue',
  width:"189vh",
}}
>
<div className="min-h-screen flex items-center justify-center bg-blue-100 p-6">
      {/* Two sections for User 1 and User 2 */}
      <div className="grid grid-cols-2 gap-12 w-full max-w-4xl">
        {/* User 1 Section */}
        <div className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center">
          <img
            src={Avatar1}
            width={350}
            height={350}
            alt="Charlotte"
            className="w-24 h-24 rounded-full shadow-lg"
          />
          <h2 className="text-lg font-bold mt-2 text-black-1000">Charlotte</h2>

          {/* Task Input */}
          <div className="flex gap-2 mt-4 w-full">
            <input
              type="text"
              value={taskInputUser1}
              onChange={(e) => setTaskInputUser1(e.target.value)}
              placeholder="Charlotte's task..."
              className="border p-2 flex-1 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="date"
              value={deadlineInputUser1}
              onChange={(e) => setDeadlineInputUser1(e.target.value)}
              className="border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              onClick={addTaskUser1}
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
            >
              Add Task
            </button>
          </div>

          {/* Task List */}
          <ul className="mt-4 bg-gray-50 p-4 rounded-md w-full">
            {tasksUser1.length === 0 ? (
              <p className="text-gray-500 text-center">No tasks yet.</p>
            ) : (
              tasksUser1.map((taskObj, index) => (
                <li key={index} className="p-2 border-b last:border-none">
                  <div className="flex justify-between items-center">
                    <p>{taskObj.task}</p>
                    <span className="text-gray-500 text-sm">{taskObj.deadline}</span>
                  </div>
                </li>
              ))
            )}
          </ul>
        </div>

        {/* User 2 Section */}
        <div className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center">
          <img
            src={Avatar2}
            width={350}
            height={350}
            alt="Grayson"
            className="w-24 h-24 rounded-full shadow-lg"
          />
          <h2 className="text-lg font-bold mt-2 text-regal-blue">Grayson</h2>

          {/* Task Input */}
          <div className="flex gap-2 mt-4 w-full">
            <input
              type="text"
              value={taskInputUser2}
              onChange={(e) => setTaskInputUser2(e.target.value)}
              placeholder="Grayson's task..."
              className="border p-2 flex-1 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="date"
              value={deadlineInputUser2}
              onChange={(e) => setDeadlineInputUser2(e.target.value)}
              className="border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              onClick={addTaskUser2}
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
            >
              Add Task
            </button>
          </div>

          {/* Task List */}
          <ul className="mt-4 bg-gray-50 p-4 rounded-md w-full">
            {tasksUser2.length === 0 ? (
              <p className="text-gray-500 text-center">No tasks yet.</p>
            ) : (
              tasksUser2.map((taskObj, index) => (
                <li key={index} className="p-2 border-b last:border-none">
                  <div className="flex justify-between items-center">
                    <p>{taskObj.task}</p>
                    <span className="text-gray-500 text-sm">{taskObj.deadline}</span>
                  </div>
                </li>
              ))
            )}
          </ul>
        </div>
      </div>
    </div>
</div>
  );
};

export default CommitArea;
