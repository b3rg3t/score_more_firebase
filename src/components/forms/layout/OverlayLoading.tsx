import React from "react";
import LoadingSpinner from "../../utils/LoadingSpinner";

const OverlayLoading = () => {
  return (
    <div
      className="position-absolute h-100 w-100 d-flex justify-content-center align-items-center"
      style={{
        top: 0,
        left: 0,
        backgroundColor: "rgba(0, 0, 0, 0.3)",
        zIndex: 1,
      }}
    >
      <div className="d-flex flex-column justify-content-center align-items-center">
        <span className="mb-1">Loading...</span>
        <LoadingSpinner />
      </div>
    </div>
  );
};

export default OverlayLoading;
