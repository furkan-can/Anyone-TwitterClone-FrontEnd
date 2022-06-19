import React from "react";
import "./Links.css";
import { MoreHoriz } from "@material-ui/icons";

const Links = () => {
  return (
    <div className="links">
      <div>
        <span>Terms of Service</span>
        <span>Privacy Policy</span>
        <span>Cookie Policy</span>
      </div>
      <div>
        <span>Ads info</span>
        <span>
          More
          <MoreHoriz />
        </span>
        <span>2022 Anyone, Inc.</span>
      </div>
    </div>
  );
};

export default Links;
