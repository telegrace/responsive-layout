import { BrowserRouter, Routes, Route } from "react-router-dom";
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
import DashboardLayout from "./components/layout/DashboardLayout";

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
        <Routes>
          <Route path="/" element={<DashboardLayout />} />
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
