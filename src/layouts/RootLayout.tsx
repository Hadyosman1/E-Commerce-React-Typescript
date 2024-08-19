import Footer from "@components/shared/layout/Footer/Footer";
import Header from "@components/shared/layout/Header/Header";
import { Outlet } from "react-router-dom";

//styles
import styles from "./styles.module.css";
const { root_layout_wrapper } = styles;

const RootLayout = () => {
  return (
    <div className={root_layout_wrapper}>
      <Header />
      <main className="py-4 outlet-wrapper">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default RootLayout;
