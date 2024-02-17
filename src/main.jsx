import React from "react";
import ReactDOM from "react-dom";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import ProjectPage from "./pages/projects/workflowAutomation";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/projects/:projectName",
    element: <ProjectPage />,
  },
]);

ReactDOM.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
  document.getElementById("root")
);
