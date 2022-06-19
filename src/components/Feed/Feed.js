import React from "react";
import "./Feed.css";
import TweetBox from "./TweetBox/TweetBox";
import Post from "./Post/Post";
import HomeStars from "../icons/HomeStars";
import BottomSidebar from "../BottomSidebar/BottomSidebar";
import { useSelector } from "react-redux";
import Loading from "../Loading/Loading";
import { useLocation,useHistory  } from 'react-router-dom';
import { useState,useEffect } from "react";
import axios from 'axios';


function Feed() {
  const[count,setCount]=useState(10);
  const[BeforeId,setBeforeId]=useState(100);
  const jwtToken= sessionStorage.getItem("jwToken");
  const { posts } = useSelector((state) => state).posts;
  const [postsFromDatabase,setPostFromDatabase]=useState([]);
  const [isDrawerBar, setIsDrawerBar] = React.useState(false);
  const [loading, setLoading] = React.useState(true);
  const location = useLocation();

 const token=sessionStorage.getItem("jwToken")
 const intId=sessionStorage.getItem("intId")
  
 console.log(jwtToken)
 console.log(intId)

 const regenerateFeed=()=>{
    var result=axios({
      method: 'get',
      url: `https://anyone.azurewebsites.net/api/users/${intId}/posts?beforeId=${BeforeId}&count=${count}`,
      headers:{
        Authorization: `Bearer ${jwtToken}`
      },
    }).then((result)=>{

    setBeforeId(BeforeId+10);
    setCount(count+10);
    setPostFromDatabase(result['data'])
    console.log(result['data'])
    });

 }
 useEffect(()=>{
   regenerateFeed();
 },[]) 

 useEffect(()=>{},[])

  setTimeout(() => {
    setLoading(false);
  }, 2000);

  return (
    <section className="feed">
      <div className="feed-header">
        <div className="feed-headerText">
          <span>Home</span>
        </div>
        <div className="homeStarsCol">
          <HomeStars className="homeStars" width={22} height={22} />
        </div>
      </div>
      <TweetBox regenerate={regenerateFeed}/>
      {loading ? (
        <Loading />
      ) : (
        <article>

          {postsFromDatabase.map((post) => (
            <Post
              key={post.id}
              username={post.username}
              userimage={post.userimage}
              date={post.date}
              displayName={post.displayName}
              text={post.content}
              shareImage={post.shareImage}
            />
          ))}
        </article>
      )}
      <BottomSidebar />
    </section>
  );
}

export default Feed;
