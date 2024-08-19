import ReactDOM from "react-dom/client";
import AppRouter from "@routes/AppRouter";

//axios
import "./services/axios.global";

//redux
import { Provider } from "react-redux";
import store, { persistor } from "@store";
import { PersistGate } from "redux-persist/integration/react";

// Styles
import "bootstrap/dist/css/bootstrap.min.css";
import "@styles/global.styles.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <AppRouter />
    </PersistGate>
  </Provider>
);
