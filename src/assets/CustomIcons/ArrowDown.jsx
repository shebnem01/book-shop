import React from "react";

const ArrowDown = ({ className }) => {
  return (
    <svg className={className}
      width="20"
      height="20"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3 4.5L6 7.5L9 4.5"
        stroke="black"
        strokeWidth="0.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </svg>
  );
};

export default React.memo(ArrowDown);
