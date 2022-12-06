import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import "animate.css";
import SignIn from "./Components/SignIn/Login";
import { UserProvider } from "./Contexts/UserContext";
import SearchInfo from "./Components/Trainee/SearchInfo"
import SearchName from "./Components/Trainee/SearchName"
import Trainee from "./Components/Trainee/Trainee";
import AddTrainee from "./Components/Trainee/AddTrainee";
import GetResult from "./Components/Trainee/GetResult";
const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);

root.render(
  <React.StrictMode>
    <UserProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignIn />}></Route>
          <Route path="trainee" element={<Trainee/>}></Route>
          <Route path="search/:id" element={<SearchInfo/>}> </Route>
          <Route path="searchName" element={<SearchName/>}> </Route>
          <Route path="add" element={<AddTrainee/>}></Route>
          <Route path="getResult" element={<GetResult/>}></Route>
        </Routes>
      </BrowserRouter>
    </UserProvider>
  </React.StrictMode>
);
