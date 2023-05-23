import React from "react";
import { FaUserAlt } from "react-icons/fa";

interface ProfilePicProps {
  size?: number | string;
  className?: string;
  wrapperStyle?: string;
  iconStyle?: string;
  openFullScreen?: boolean;
}

const ProfilePic = ({ size, wrapperStyle, iconStyle }: ProfilePicProps) => {
  return (
    <div
      className={`rounded-circle bg-dark d-flex justify-content-center align-items-center overflow-hidden ${wrapperStyle}`}
      style={{
        width: size ? size : undefined,
        height: "auto",
      }}
    >
      <FaUserAlt
        className={`${iconStyle}`}
        color="white"
        size={typeof size === "number" ? size * 1 : undefined}
      />
    </div>
  );
};

export default ProfilePic;
