import React from "react";
import "./Profile.css";
import BottomSidebar from "../../components/BottomSidebar/BottomSidebar";
import FriendSuggestions from "../../components/Widgets/FriendSuggestions/FriendSuggestions";
import Topics from "../../components/Widgets/Topics/Topics";
import SearchInput from "../../components/Widgets/SearchInput/SearchInput";
import Post from "../../components/Feed/Post/Post";

import BackIcon from "@material-ui/icons/KeyboardBackspace";
import ScheduleIcon from "@material-ui/icons/CalendarToday";
import { Avatar } from "@material-ui/core";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import Links from "../../components/Widgets/Links/Links";
import HomeBox from "../../components/HomeBox/HomeBox";
import Loading from "../../components/Loading/Loading";

const Profile = () => {
  const [category, setCategory] = React.useState(1);
  const { posts } = useSelector((state) => state.posts);

  const username =sessionStorage.getItem("username")
  const fullName=sessionStorage.getItem("firstName")+" "+sessionStorage.getItem("lastName")

  let history = useHistory();
  document.title = fullName+" (@"+username+") / Anyone";
  const [loading, setLoading] = React.useState(true);
  setTimeout(() => {
    setLoading(false);
  }, 2000);

  const isLogin = sessionStorage.getItem("firstName");
  if(isLogin == null){
    history.push("/login")
  }
  return (
    <HomeBox>
      <section className="feed">
        <div className="profileHeader">
          <div onClick={() => history.goBack()}>
            <BackIcon />
          </div>
          <div>
            <span>{fullName}</span>
            <span>1 Tweets</span>
          </div>
        </div>
        <div className="profile">
          <div className="backgroundImage"></div>
          <div className="profileTitle">
            <div className="profileImage">
              <Avatar src="https://avatars.githubusercontent.com/u/79963893?s=400&u=1c4628727238a10a4055584f750b1de99e2866f8&v=4" />
            </div>
            <div className="editProfile">
              <span>Edit Profile</span>
            </div>
          </div>
          <div className="profileBiography">
            <span>{fullName}</span>
            <span>{username}</span>
            <span>CSE Student</span>
            <span>
              <ScheduleIcon />
              Joined May 2022
            </span>
          </div>
          <div>
            <span>
              <span>87</span>
              <span>Following</span>
            </span>
            <span>
              <span>7854</span>
              <span>Followers</span>
            </span>
          </div>
          <div className="profileCategory">
            <div
              className={category === 1 && "profileCategoryActive"}
              onClick={() => setCategory(1)}
            >
              <span>Tweets</span>
            </div>
            <div
              className={category === 2 && "profileCategoryActive"}
              onClick={() => setCategory(2)}
            >
              <span>Tweets & replies</span>
            </div>
            <div
              className={category === 3 && "profileCategoryActive"}
              onClick={() => setCategory(3)}
            >
              <span>Media</span>
            </div>
            <div
              className={category === 4 && "profileCategoryActive"}
              onClick={() => setCategory(4)}
            >
              <span>Likes</span>
            </div>
          </div>
        </div>
        <article className="profilePosts">
          {!loading ? (
            posts.map((post) => (
              <Post
                key={post.id}
                username={post.username}
                userimage={post.userimage}
                date={post.date}
                displayName={post.displayName}
                text={post.text}
                shareImage={post.shareImage}
              />
            ))
          ) : (
            <Loading />
          )}
        </article>
        <BottomSidebar />
      </section>
      <div className="widgets">
        <SearchInput placeholder="Search Anyone" />
        <FriendSuggestions />
        <Topics />
        <Links />
      </div>
    </HomeBox>
  );
};

export default Profile;
