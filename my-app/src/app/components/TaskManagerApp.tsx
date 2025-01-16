'use client';
import React, { useState } from 'react';
import { Code, Trash2 } from 'lucide-react';

const codeSnippets = [
  {
    title: 'Functional Components',
    code: `import React, { useState } from "react";

const TaskManager = () => {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");

  const addTask = () => {
    if (task) {
      setTasks([...tasks, task]);
      setTask("");
    }
  };

  const removeTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Task Manager</h1>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter a task"
      />
      <button onClick={addTask}>Add Task</button>
      <ul>
        {tasks.map((t, index) => (
          <li key={index}>
            {t} <button onClick={() => removeTask(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskManager;
`,
  },
  {
    title: 'Class Component',
    code: `import React, { Component } from "react";

class TaskManagerClass extends Component {
  state = {
    tasks: [],
    task: "",
  };

  addTask = () => {
    const { task, tasks } = this.state;
    if (task) {
      this.setState({ tasks: [...tasks, task], task: "" });
    }
  };

  removeTask = (index) => {
    const { tasks } = this.state;
    this.setState({ tasks: tasks.filter((_, i) => i !== index) });
  };

  render() {
    const { tasks, task } = this.state;

    return (
      <div style={{ padding: "20px" }}>
        <h1>Task Manager</h1>
        <input
          type="text"
          value={task}
          onChange={(e) => this.setState({ task: e.target.value })}
          placeholder="Enter a task"
        />
        <button onClick={this.addTask}>Add Task</button>
        <ul>
          {tasks.map((t, index) => (
            <li key={index}>
              {t} <button onClick={() => this.removeTask(index)}>Remove</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default TaskManagerClass;
`,
  },
];

const TaskManager = () => {
  const [tasks, setTasks] = useState<string[]>([]);
  const [task, setTask] = useState('');

  const addTask = () => {
    if (task) {
      setTasks([...tasks, task]);
      setTask('');
    }
  };

  const removeTask = (index: number) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const handleKeyPress = (e: { key: string }) => {
    if (e.key === 'Enter') {
      addTask();
    }
  };

  return (
    <div className="h-100vh bg-gray-900 text-white overflow-hidden">
      <div className="h-full container mx-auto p-4">
        <h1 className="text-3xl font-bold text-center text-yellow-300 mb-4">
          Travel Planning & Code Showcase
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 h-[calc(100vh-100px)]">
          {/* Task Manager Section */}
          <div className="bg-gray-800 rounded-xl p-6 shadow-xl flex flex-col">
            <h2 className="text-2xl font-semibold mb-4">Task Manager</h2>
            <div className="flex flex-col h-full">
              <div className="flex gap-2 mb-4">
                <input
                  type="text"
                  value={task}
                  onChange={(e) => setTask(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Add a new task..."
                  className="flex-1 p-2 rounded bg-gray-700 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
                <button
                  onClick={addTask}
                  className="px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded transition duration-200"
                >
                  Add
                </button>
              </div>

              <div className="flex-1 overflow-y-auto space-y-2 pr-2">
                {tasks.map((t, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-3 bg-gray-700 rounded group hover:bg-gray-600 transition duration-200"
                  >
                    <span className="truncate">{t}</span>
                    <button
                      onClick={() => removeTask(index)}
                      className="text-red-400 hover:text-red-300"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Code Showcase Section */}
          <div className="space-y-4 overflow-y-auto pr-2">
            {codeSnippets.map((snippet, index) => (
              <div key={index} className="bg-gray-800 rounded-xl p-6 shadow-xl">
                <div className="flex items-center gap-2 mb-3">
                  <Code size={20} className="text-yellow-300" />
                  <h3 className="text-xl font-semibold">{snippet.title}</h3>
                </div>
                <pre className="bg-gray-900 p-4 rounded overflow-x-auto">
                  <code className="text-sm text-gray-300 whitespace-pre">
                    {snippet.code}
                  </code>
                </pre>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskManager;
