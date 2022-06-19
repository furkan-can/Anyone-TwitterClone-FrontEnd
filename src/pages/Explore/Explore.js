import React from "react";
import "./Explore.css";
import { useHistory } from "react-router-dom";
import FriendSuggestions from "../../components/Widgets/FriendSuggestions/FriendSuggestions";
import SearchInput from "../../components/Widgets/SearchInput/SearchInput";
import { SettingsIcon } from "../../components/icons";
import Topics from "../../components/Widgets/Topics/Topics";
import BottomSidebar from "../../components/BottomSidebar/BottomSidebar";
import Links from "../../components/Widgets/Links/Links";
import HomeBox from "../../components/HomeBox/HomeBox";
import Loading from "../../components/Loading/Loading";

function Explore() {
  const [isDrawerBar, setIsDrawerBar] = React.useState(false);
  const [loading, setLoading] = React.useState(true);
  setTimeout(() => {
    setLoading(false);
  }, 2000);
  document.title = "Anonymous / Anyone";

  const isLogin = sessionStorage.getItem("firstName");
  const history=useHistory();
  if(isLogin == null){
    history.push("/login")
  }
  return (
    <HomeBox>
      <div className="feed">
        {isDrawerBar && (
          <div
            onClick={() => setIsDrawerBar(false)}
            className="drawerBarPanel"
          />
        )}
        <div className="explore-header">
          <SearchInput placeholder="Search Anyone" />
          <SettingsIcon />
        </div>
        <div className="exploreContent">
          {loading ? <Loading /> : <Topics />}
        </div>
        <BottomSidebar />
      </div>
      <div className="widgets">
        <FriendSuggestions />
        <Links />
      </div>
    </HomeBox>
  );
}

export default Explore;
