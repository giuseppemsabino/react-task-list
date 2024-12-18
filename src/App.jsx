import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const tasks = [
    {
      id: 1,
      title: "Implementare la homepage",
      priority: 1,
      estimatedTime: 120,
      state: "completed",
    },
    {
      id: 2,
      title: "Sviluppare il menu di navigazione",
      priority: 2,
      estimatedTime: 60,
      state: "completed",
    },
    {
      id: 3,
      title: "Creare il footer del sito",
      priority: 3,
      estimatedTime: 30,
      state: "completed",
    },
    {
      id: 4,
      title: "Ottimizzare le performance",
      priority: 1,
      estimatedTime: 180,
      state: "completed",
    },
    {
      id: 5,
      title: "Scrivere test per i componenti",
      priority: 2,
      estimatedTime: 90,
      state: "completed",
    },
    {
      id: 6,
      title: "Implementare la pagina dei contatti",
      priority: 3,
      estimatedTime: 60,
      state: "completed",
    },
    {
      id: 7,
      title: "Aggiungere animazioni CSS",
      priority: 2,
      estimatedTime: 30,
      state: "backlog",
    },
    {
      id: 8,
      title: "Integrare l'API di autenticazione",
      priority: 1,
      estimatedTime: 120,
      state: "in_progress",
    },
    {
      id: 9,
      title: "Aggiornare la documentazione",
      priority: 3,
      estimatedTime: 60,
      state: "backlog",
    },
    {
      id: 10,
      title: "Rifattorizzare il codice CSS",
      priority: 2,
      estimatedTime: 90,
      state: "in_progress",
    },
  ];

  // console.log(tasks);

  const completeTask = tasks.filter((task) => task.state == "completed");
  // console.log(completeTask);

  const inProgressTask = tasks.filter(
    (task) => task.state == "in_progress" || task.state == "backlog"
  );
  // console.log(inProgressTask);

  return (
    <>
      <div className="App">
        <header>
          <h1>Task Manager</h1>
        </header>
        <div className="container">
          <h2>Current Tasks ({inProgressTask.length})</h2>
          <ul>
            {inProgressTask.map((task) => (
              <li key={task.id} className="item-task-incomplete">
                <strong>{task.title}</strong> <span className="state-tag">{task.state}</span> <br />
                Priority: {task.priority} <br />
                Est. Time: {task.estimatedTime}
              </li>
            ))}
          </ul>
          <hr />

          <h2>Completed Task ({completeTask.length})</h2>
          <ul>
            {completeTask.map((task) => (
              <li key={task.id} className="item-task-complete">
                <strong>{task.title}</strong> <span className="state-tag">{task.state}</span>
                <br />
                Priority: {task.priority} <br />
                Est. Time: {task.estimatedTime}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default App;
