import React from "react";
import "./BottomSidebar.css";
import { Link, useLocation } from "react-router-dom";
import SidebarItem from "../Sidebar/SidebarItem/SidebarItem";
import {
  HomeIcon,
  MessagesIcon,
  ExploreIcon,
  NotificationsIcon,
} from "../icons/index";

const BottomSidebar = () => {
  const [location] = React.useState(useLocation().pathname);
  return (
    <footer className="bottomSidebar">
      <div>
        <Link to="/home" style={{ textDecoration: "none" }}>
          <SidebarItem
            text="Home"
            Icon={HomeIcon}
            active={location === "/home" && true}
          />
        </Link>
      </div>
      <div>
        <Link to="/explore" style={{ textDecoration: "none" }}>
          <SidebarItem
            text="Explore"
            Icon={ExploreIcon}
            active={location === "/explore" && true}
          />
        </Link>
      </div>
      <div>
        <Link to="/Profile" style={{ textDecoration: "none" }}>
          <SidebarItem
            text="Profile"
            Icon={NotificationsIcon}
            active={location === "/Profile" && true}
          />
        </Link>
      </div>
      <div>
        <Link to="/Messages" style={{ textDecoration: "none" }}>
          <SidebarItem
            text="Messages"
            Icon={MessagesIcon}
            active={location === "/Messages" && true}
          />
        </Link>
      </div>
    </footer>
  );
};

export default BottomSidebar;
