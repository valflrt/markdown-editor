import React from "react";
import { Route, Routes } from "react-router-dom";

import Main from "../routes/Main";
import Editor from "../routes/Editor";
import NotFound from "../routes/NotFound";

const Router = () => (
  <>
    <Routes>
      <Route path={"/"} element={<Main />} />
      <Route path={"/editor"} element={<Editor />} />
      <Route path={"*"} element={<NotFound />} />
    </Routes>
  </>
);

export default Router;
