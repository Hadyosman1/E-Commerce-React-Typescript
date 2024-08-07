import Footer from "@components/shared/layout/Footer/Footer";
import Header from "@components/shared/layout/Header/Header";
import { Outlet } from "react-router-dom";

//styles
import styles from "./styles.module.css";

const RootLayout = () => {
  return (
    <main className={styles["root-layout-wrapper"]}>
      <Header />
      <main className="py-5 outlet-wrapper">
        <Outlet />
      </main>
      <Footer />
    </main>
  );
};

export default RootLayout;
