import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";
import image from "../assets/image.svg";

function AppLayout() {
  return (
    <div className="grid h-screen grid-rows-[auto_1fr] ">
      <div className="   overflow-y-scroll      overflow-x-hidden   ">
 
   <Navbar/>

  
        <main className="">
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default AppLayout;
