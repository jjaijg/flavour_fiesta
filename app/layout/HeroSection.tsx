"use client";
import React from "react";
import { CldVideoPlayer } from "next-cloudinary";

const HeroSection: () => React.JSX.Element = () => {
  return (
    // <CldVideoPlayer
    //   width="1920"
    //   height="1080"
    //   src={`process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME`}
    // />
    <CldVideoPlayer
      id="sea-turtle-color"
      width="1920"
      height="1080"
      src="samples/elephants"
    />
  );
};

export default HeroSection;
