import React from "react";

export default function TechAnim({ children }) {
  return (
    <div className="relative w-16 z-10">
      {children}
      <div id="techanim" />
    </div>
  );
}
