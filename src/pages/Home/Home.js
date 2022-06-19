import React from "react";
import { useHistory } from "react-router-dom";
import Feed from "../../components/Feed/Feed";
import HomeBox from "../../components/HomeBox/HomeBox";
import Widgets from "../../components/Widgets/Widgets";

function Home() {
  const history=useHistory();
  const isLogin = sessionStorage.getItem("firstName");
  console.log(isLogin)
  document.title = "Home / Anyone";
  if(isLogin == null){
    history.push("/login")
  }
  return (
    <HomeBox>
      <Feed />
      <Widgets />
    </HomeBox>
  );
}

export default Home;
