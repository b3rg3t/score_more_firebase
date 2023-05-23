import React from "react";
import { FaUserAlt } from "react-icons/fa";

interface ProfilePicProps {
  width?: number | string;
  height?: number | string;
  openFullScreen?: boolean;
}

const ProfilePic = ({ width, height }: ProfilePicProps) => {
  return (
    <div
      className="rounded-circle bg-dark w-auto d-flex justify-content-center align-items-center overflow-hidden"
      style={{
        width,
        height,
      }}
    >
      <FaUserAlt
        color="white"
        width={typeof width === "number" ? width * 0.8 : undefined}
      />
    </div>
  );
};

export default ProfilePic;
