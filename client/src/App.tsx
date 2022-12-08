import { Global } from "@emotion/react";
import { FC } from "react";
import AppRouter from "./pages";
// import Cars from "./pages/Cars/Cars";
import { GLOBAL_STYLES } from "./styles/global.styles";
import "./styles/fonts.css";

const App: FC = () => {
  return (
    <div>
      <AppRouter />
      <Global styles={GLOBAL_STYLES} />
    </div>
  );
};

export default App;
