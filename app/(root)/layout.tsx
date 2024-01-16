import LeftSidebar from "@/components/shared/LeftSidebar";
import RightSidebar from "@/components/shared/RightSidebar";
import Navbar from "@/components/shared/navbar/Navbar";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main>
      <Navbar />
      <div className="flex justify-between h-full">
        <LeftSidebar />
        <section>
          <div>{children}</div>
        </section>
        <RightSidebar />
      </div>
    </main>
  );
};

export default layout;
