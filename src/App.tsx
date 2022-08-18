import React from "react";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Navigation from "./components/layout/Navigation";
import LandingPage from "./components/pages/LandingPage";
import PageNotFoundPage from "./components/pages/PageNotFound";
import sidebarLinks from "./data/sidebarLinks.json";
import {
  OverviewPage,
  VenturesPage,
  VentureCustomersPage,
  ProjectCustomersPage,
  ProjectsPage,
  AssetsPage,
  DevicesPage,
  EventsPage,
  NotificationsPage,
  SettingsPage,
  HelpSupportPage,
} from "./components/utils/importPages";
import ContentLayout from "./components/layout/Content";
import SidebarPage from "./components/layout/Sidebar";

const components = {
  "/overview": OverviewPage,
  "/ventures": VenturesPage,
  "/venture-customers": VentureCustomersPage,
  "/projects": ProjectsPage,
  "/project-customers": ProjectCustomersPage,
  "/assets": AssetsPage,
  "/devices": DevicesPage,
  "/events": EventsPage,
  "/notifications": NotificationsPage,
  "/settings": SettingsPage,
  "/help": HelpSupportPage,
};

function App() {
  return (
    <>
      <BrowserRouter>
        <Navigation />
        <SidebarPage />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          {sidebarLinks.map((link, i) => {
            const Component = components[link.link as keyof typeof components];
            console.log("component", Component, "link", link.link);
            return <Route path={link.link} element={<Component />} key={i} />;
          })}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
