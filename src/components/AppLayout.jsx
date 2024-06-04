import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";
import image from "../assets/image.svg";
import Modal from "./common/Modal";

function AppLayout() {
  return (
    <div className="grid h-screen grid-rows-[auto_1fr] ">
    <Modal isOpen={true} >
    This is the content of the modal.
  </Modal>

      <div className="   overflow-y-scroll      overflow-x-hidden   ">
 


  
        <main className="">
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default AppLayout;
