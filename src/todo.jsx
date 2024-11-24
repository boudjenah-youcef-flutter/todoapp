import { useState } from "react";
import React from "react";

export default function Todoapp() {
  const [tasks, setTasks] = useState(["Task One", "Task Two", "Task Three"]);
  const [newTask, setNewTask] = useState("");

  function handleOnChange(event) {
    setNewTask(event.target.value);
  }

  function addTask() {
    
      setTasks([...tasks, newTask]);
    setNewTask("")
  }

  function deleteTask(index) {
    const updatedTasks = tasks.filter((_ , i) => i !== index);
    setTasks(updatedTasks);
  }

  function moveTaskUp(index) {
    if (index > 0) {
      const updatedTasks = [...tasks];
      [updatedTasks[index - 1], updatedTasks[index]] = [
        updatedTasks[index],
        updatedTasks[index - 1],
      ];
      setTasks(updatedTasks);
    }
  }

  function moveTaskDown(index) {
    if (index < tasks.length - 1) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index + 1]] = [
        updatedTasks[index + 1],
        updatedTasks[index],
      ];
      setTasks(updatedTasks);
    }
  }

  function editetask(index) {

    const editnewtask = [...tasks];
  editnewtask[index] = newTask;
  setTasks(editnewtask);
  setNewTask("");
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 p-6">
      <h1 className="text-4xl font-extrabold text-white mb-6 drop-shadow-lg">
        🚀 Todo List
      </h1>

      <div className="flex gap-2 mb-4 w-full max-w-md">
        <input
          className="flex-grow px-4 py-3 text-lg border rounded-lg shadow focus:ring-2 focus:ring-purple-400"
          placeholder="Add a new task..."
          type="text"
          value={newTask}
          onChange={handleOnChange}
        />
        <button
          className="px-6 py-3 text-white bg-purple-600 rounded-lg shadow-md hover:bg-purple-700 transition-transform transform hover:scale-105"
          onClick={addTask}
        >
          Add 🔥
        </button>
      </div>

      <div className="w-full max-w-lg bg-white rounded-lg shadow-md p-4">
        <ol className="space-y-3">
          {tasks.map((task, index) => (
            <li
              key={index}
              className="flex items-center justify-between bg-gray-100 p-3 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <span className="text-gray-800 font-medium">{task}</span>
              <div className="flex items-center gap-2">
                <button
                  className="text-white bg-red-500 px-3 py-1 rounded-lg hover:bg-red-600 transition"
                  onClick={() => deleteTask(index)}
                >
                  🗑️
                </button>
                <button
                  className="text-white bg-blue-500 px-3 py-1 rounded-lg hover:bg-blue-600 transition"
                  onClick={() => editetask(index)}
                >
                  Edit 💭
                </button>
                <button
                  className="text-white bg-gray-500 px-3 py-1 rounded-lg hover:bg-gray-600 transition"
                  onClick={() => moveTaskUp(index)}
                >
                  👆
                </button>
                <button
                  className="text-white bg-gray-500 px-3 py-1 rounded-lg hover:bg-gray-600 transition"
                  onClick={() => moveTaskDown(index)}
                >
                  👇
                </button>
               
              </div>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
