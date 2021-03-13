import React from "react";

const Controls = ({ icons }) => {
  const { MdRefresh, MdBrightness4 } = icons;
  return (
    <div className="control-btn-container">
      <button className="refresh-btn btn">
        <MdRefresh />
      </button>
      <button className="toggle-theme btn">
        <MdBrightness4 />
      </button>
    </div>
  );
};

export default Controls;
