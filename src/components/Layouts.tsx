import { FC, ReactNode } from "react";
import Sidebar from "./sidebar";
import AppWrapper from "./app-wrapper";
// import SidebarMini from "./sidebar-mini";

const Layout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className="w-full relative">
      <AppWrapper />
      
      <Sidebar />
      {/* <SidebarMini /> */}
      <main className="main-content relative left-64 -top-4 w-9/12 pb-8">{children}</main>
    </div>
  );
};

export default Layout;
