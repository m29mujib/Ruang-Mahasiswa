import { Outlet } from "react-router";
import Sidebar from "../Sidebar/Sidebar";
import Navbar from "../Navbar/Navbar";
import styles from "./Layout.module.css"

const Layout = () => {
  return (
    <div className="flex">
      <div className={`fixed w-1/6 ${styles.side}`}>
        <Sidebar />
      </div>
      <div className={`w-5/6 ml-56 ${styles.nav}`}>
        <Navbar />
        <div className={` ${styles.outlite}`}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;