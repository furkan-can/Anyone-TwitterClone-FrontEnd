import { Avatar } from "@material-ui/core";
import React from "react";
import { VerifiedIcon } from "../icons";
import "./ProfileCard.css";

const ProfileCard = ({ active }) => {
  const [isVisible, setIsVisible] = React.useState(false);
  const username =sessionStorage.getItem("username")
  const fullName=sessionStorage.getItem("firstName")+" "+sessionStorage.getItem("lastName")
  return (
    <div
      className={
        active || isVisible ? "profileDetailCard" : "profileDetailCardActive"
      }
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      <div>
        <Avatar src="https://avatars.githubusercontent.com/u/79963893?s=400&u=1c4628727238a10a4055584f750b1de99e2866f8&v=4" />
        <div>
          <span>Follow</span>
        </div>
      </div>
      <div>
        <span>{fullName}</span>
        <VerifiedIcon />
      </div>
      <div>
        <span>@{username}</span>
      </div>
      <div>
        <span>CSE Student</span>
      </div>
      <div>
        <span>
          <span>167</span>
          <span>Following</span>
        </span>
        <span>
          <span>167</span>
          <span>Followers</span>
        </span>
      </div>
    </div>
  );
};

export default ProfileCard;
