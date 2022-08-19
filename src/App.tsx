import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/layout/Navigation";
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
import LandingPage from "./components/pages/LandingPage";
import GridLayoutContainer from "./components/layout/GridLayoutContainer";
import Sidebar from "./components/layout/Sidebar";
import DashboardPage from "./components/layout/Dashboard";

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
      {/* <Sidebar /> */}
      <BrowserRouter>
        {/* <Navigation /> */}
        <Routes>
          <Route path="/" element={<DashboardPage />} />
          {/* {sidebarLinks.map((link, i) => {
            const Component = components[link.link as keyof typeof components];
            console.log("component", Component, "link", link.link);
            return <Route path={link.link} element={<Component />} key={i} />;
          })}
          <Route path="/*" element={<PageNotFoundPage />} /> */}
        </Routes>
      </BrowserRouter>
      {/* <GridLayoutContainer /> */}
    </>
  );
}

export default App;
