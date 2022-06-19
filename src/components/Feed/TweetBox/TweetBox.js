import React, { useState } from "react";
import "./TweetBox.css";
import { Avatar } from "@material-ui/core";
import PhotoIcon from "../../icons/PhotoIcon";
import GifIcon from "../../icons/GifIcon";
import SurveyIcon from "../../icons/SurveyIcon";
import EmojiIcon from "../../icons/EmojiIcon";
import PlanIcon from "../../icons/PlanIcon";
import { useDispatch } from "react-redux";
import { addTweetAction } from "../../../store/actions/postActions";
import axios from 'axios';
function TweetBox({regenerate}) {

  const username = sessionStorage.getItem("username")
  const fullname = sessionStorage.getItem("firstName") + " " + sessionStorage.getItem("lastName")
  const [tweet, setTweet] = useState({
    id: Date.now(),
    userimage:
      "https://avatars.githubusercontent.com/u/79963893?s=400&u=1c4628727238a10a4055584f750b1de99e2866f8&v=4",
    username: { username },
    displayName: { fullname },
    text: "",
    shareImage: "",
    date: Date.now(),
  });

  const dispatch = useDispatch();
  const jwtToken= sessionStorage.getItem("jwToken");

  const tweetSubmit = (e) => {
    e.preventDefault();
    if (tweet.text.trim() === "") return;
    console.log(tweet);
    dispatch(addTweetAction(tweet));
    setTweet({ ...tweet, text: "" });


    //Send database
    axios({
      method: 'post',
      url: 'https://anyone.azurewebsites.net/api/v1/Post/Create',
      data: {
      "content": tweet.text 
      },
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }).then(()=>{regenerate()});

  };
  return (
    <>
      <form className="tweetbox" onSubmit={(e) => tweetSubmit(e)}>
        <div className="tweetboxRow">
          <div className="tweetboxUserIcon">
            <Avatar src="https://avatars.githubusercontent.com/u/79963893?s=400&u=1c4628727238a10a4055584f750b1de99e2866f8&v=4" />
          </div>
          <div className="tweetbox-input-row">
            <input
              value={tweet.text}
              onChange={(e) => setTweet({ ...tweet, text: e.target.value })}
              className="tweetbox-input"
              placeholder="What's happening?"
              type="text"
            />
          </div>
        </div>

        <div className="tweetboxRow">
          <div style={{ flex: 0.1 }}></div>
          <div className="tweetboxOptions">
            <PhotoIcon className="tweetboxOptionIcon" width={22} height={22} />
            <GifIcon className="tweetboxOptionIcon" width={22} height={22} />
            <SurveyIcon className="tweetboxOptionIcon" width={22} height={22} />
            <EmojiIcon className="tweetboxOptionIcon" width={22} height={22} />
            <PlanIcon className="tweetboxOptionIcon" width={22} height={22} />
            <button type="submit" className="tweetbox-button" >
              Tweet
            </button>
          </div>
        </div>
      </form>
      <div className="bottomBorder"></div>
    </>
  );
}

export default TweetBox;
