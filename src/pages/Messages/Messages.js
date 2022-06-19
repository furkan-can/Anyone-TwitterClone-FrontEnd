import React from "react";
import { useLocation } from "react-router";
import { useHistory } from "react-router-dom";
import BottomSidebar from "../../components/BottomSidebar/BottomSidebar";
import HomeBox from "../../components/HomeBox/HomeBox";
import { MessagesIcon } from "../../components/icons";
import SearchInput from "../../components/Widgets/SearchInput/SearchInput";
import "./Messages.css";

const Messages = () => {
  let path = useLocation().pathname;
  document.title = "Messages / Anyone";

  const isLogin = sessionStorage.getItem("firstName");
  const history=useHistory();
  if(isLogin == null){
    history.push("/login")
  }
  return (
    <HomeBox>
      <div className={`messages ${path !== "/Messages" && "messagesNone"}`}>
        <div className="messagesHeader">
          <span>Messages</span>
          <MessagesIcon />
        </div>
        <div className="messagesSearchInput">
          <SearchInput placeholder="Search for people and groups" />
        </div>
        <BottomSidebar />
      </div>
    </HomeBox>
  );
};

export default Messages;
