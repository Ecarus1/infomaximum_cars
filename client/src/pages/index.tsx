import {FC} from "react";
import {Routes, Route} from "react-router-dom";
import Cars from "./Cars/Cars";
import Favorites from "./Favorites/Favorites";
import useInit from "../hooks/useInit";

const AppRouter:FC = ():JSX.Element => {

  // useInit(async () => {
  //   // Здесь по идее нужно прописывать запрос на восстановление сессии
  // }, []);

  return(
    <Routes>
      <Route path={'/'} element={<Cars/>}/>
      <Route path={'/favorites'} element={<Favorites/>}/>
    </Routes>
  );
}

export default AppRouter;