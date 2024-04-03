import LeftPanel from "@/components/LeftPanel";
import React from "react";

const layout = ({ children }) => {
  return (
    <main>
      <LeftPanel children={children} />
    </main>
  );
};

export default layout;
