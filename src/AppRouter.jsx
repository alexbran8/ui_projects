import React from "react";
import Landingpage from "./components/LandingPage/LandingPage.jsx";
// import LoginError from "./components/common/LoginError/LoginError";
// import Homepage from "./components/Homepage/Homepage";
// import Timeline from "./components/Timeline/Timeline"
// import Database from "./components/Admin/Database"
// import Footer from "./components/Footer/Footer"
// import {Credits} from "./components/Credits/Credits"
// import {DevelopmentTasks} from "./components/devTasks/DevelopmentTasks"
// import ProjectsList from "./components/Projects/ProjectsList"
// import {Details} from "./components/Projects/Details"
// import {NewsFeed} from "./components/NewsFeed/NewsFeed"

// import {Header} from "./components/Header";
import { HashRouter, Route, Routes } from "react-router-dom";
// import { config } from "./config"
// import authGuard from "./HOCs/authGuard.js";



export const AppRouter = (props) => {
  return (
    <HashRouter  {...props} >
        <Routes>
      <Route exact path={"/"} element={<Landingpage />} />

      
</Routes>
      {/* <Route exact path={"/error"} component={LoginError} />
      <Route exact path={"/admin/database"} component={Database} />
      <Route exact path={"/projects/list"} component={ProjectsList} />
      <Route exact path={"/newsfeed"} component={(NewsFeed)} />
      <Route exact path={"/home"} component={Homepage} />
      <Route exact path={"/devtimeline"} component={Timeline} />
      <Route exact path={"/development-tasks"} component={DevelopmentTasks} />
      <Route exact path={"/credits"} component={Credits} />
      <Route exact path={"/timeline"} component={Timeline} />
      <Route exact path={"/details/:id/:title"} component={Details} /> */}

    </HashRouter>
  );
};
