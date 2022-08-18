import { Link } from "react-router-dom";
import sidebarLinks from "./../../data/sidebarLinks.json";

interface NavigationProps {}

const Navigation: React.FC<NavigationProps> = (props) => {
  return (
    <nav>
      <ul>
        {sidebarLinks.map((link, i) => {
          return (
            <li key={i}>
              <Link to={link.link}>{link.title}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navigation;
