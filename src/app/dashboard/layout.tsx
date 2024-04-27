import { ReactNode } from "react";
import NavigationBar from "./_components/navbar";
import { SideBar } from "./_components/sidebar";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <main className="drawer h-screen">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content h-full flex flex-col">
        <NavigationBar/>
        {children}
      </div>
      <SideBar/>
    </main>
  );
}
