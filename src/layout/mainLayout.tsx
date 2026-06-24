import CustomFooter from "@/components/CustomFooter";
import CustomHeader from "@/components/CustomHeader";
import CustomNavBar from "@/components/CustomNavBar";
import { Outlet } from "react-router";

export default function MainLayout() {
  return (
    <>
      <CustomHeader />
      <CustomNavBar />
      <main>
        <Outlet />
      </main>
      <CustomFooter />
    </>
  );
}
