import React, { useEffect, useState } from "react";

const ScrollIndicator = ({ percentage }) => {
  return (
    <div className="w-full bg-orange-200 h-1.5 ">
      <div
        className={`h-full bg-violet-700`}
        style={{ width: `${percentage}%` }}
      ></div>
    </div>
  );
};

export default ScrollIndicator;
