import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";

const Main = React.lazy(() => import("../routes/Main"));
const Editor = React.lazy(() => import("../routes/Editor"));
const NotFound = React.lazy(() => import("../routes/NotFound"));

const Router = () => (
  <>
    <Suspense fallback={<>Loading ...</>}>
      <Routes>
        <Route path={"/"} element={<Main />} />
        <Route path={"/editor"} element={<Editor />} />
        <Route path={"*"} element={<NotFound />} />
      </Routes>
    </Suspense>
  </>
);

export default Router;
