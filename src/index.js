import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import Blog from "./components/Blog/Blog";
import Home from "./components/Home/Home";
import Others from "./components/Others/Others";
import WebFramework from "./components/WebFramework/WebFramework";
import About from "./components/About/About";
import RouterNoMatch from "./components/RouterNoMatch";
import Welcome from "./components/Welcome/Welcome";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <Routes>
        <Route path="/" element={<Welcome />}></Route>
        <Route path="/ceblog" element={<App />}>
          <Route index element={<Home />} />
          <Route path=":blogId" element={<Blog />} />
          <Route path="otherblog" element={<Others />} />
          <Route path="webframework" element={<WebFramework />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<RouterNoMatch />} />
        </Route>
      </Routes>
    </React.StrictMode>
  </BrowserRouter>
);
//
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
