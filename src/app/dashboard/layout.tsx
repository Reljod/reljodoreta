import { ReactNode } from "react";
import NavigationBar from "./_components/navbar";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <main>
      <NavigationBar></NavigationBar>
      {children}
    </main>
  );
}
