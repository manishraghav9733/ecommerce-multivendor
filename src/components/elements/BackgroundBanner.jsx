import React from "react";
import { backGroundLogo } from "../../assets/IconAssets";

const BackgroundBanner = (props) => {
  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${backGroundLogo})`,
          backgroundSize: "100% 100%",
          backgroundRepeat: "no-repeat",
          width: "100%",
          height: "200px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div className="banner__name">{props.title}</div>
      </div>
    </div>
  );
};

export default BackgroundBanner;
