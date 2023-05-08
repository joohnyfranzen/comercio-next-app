import Sidebar from "../Sidebar";
import React from "react";

export default function Layout({ children }: { children?: React.ReactNode }) {
  return (
    <div className="flex">
      <Sidebar />
      <main className="p-4 flex-1">{children}</main>
    </div>
  );
}
