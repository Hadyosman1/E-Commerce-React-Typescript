import ReactDOM from "react-dom/client";
import AppRouter from "@routes/AppRouter";

// Styles
import "bootstrap/dist/css/bootstrap.min.css";
import "@styles/global.styles.css";
import { Provider } from "react-redux";
import store from "@store/index";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <AppRouter />
  </Provider>
);
