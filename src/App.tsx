import { Routes, Route } from "react-router-dom";
import {
  AssetsPage,
  ClientsPage,
  CustomersPage,
  DevicesPage,
  HelpSupportPage,
  NotificationsPage,
  OverviewPage,
  ProjectsPage,
  SettingsPage,
} from "./components/utils/importPages";
import sidebarLinks from "./data/sidebar-links.json";
import DashboardLayout from "./components/layout/DashboardLayout";
import PageNotFoundPage from "./components/pages/PageNotFound";

const components = {
  "/overview": OverviewPage,
  "/assets": AssetsPage,
  "/devices": DevicesPage,
  "/notifications": NotificationsPage,
  "/projects": ProjectsPage,
  "/customers": CustomersPage,
  "/clients": ClientsPage,
  "/settings": SettingsPage,
  "/help": HelpSupportPage,
};

function App() {
  return (
    <DashboardLayout>
      <Routes>
        {sidebarLinks.map((link, i) => {
          const Component = components[link.link as keyof typeof components];
          return <Route path={link.link} element={<Component />} key={i} />;
        })}
        <Route path="/*" element={<PageNotFoundPage />} />
      </Routes>
    </DashboardLayout>
  );
}

export default App;
