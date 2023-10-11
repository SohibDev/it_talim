import React, { Suspense, lazy } from "react";
import { Routes, Route, useParams } from "react-router-dom";
import { Loader } from "../components/Loader/Loader";
import Home from "../views/Home";
import About from "../views/About";
import Goal from "../views/Goal";
import Education from "../views/Education";
import Blog from "../views/Blog";
const View = lazy(() => import("../views"));

const Routers = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<View />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/goal" element={<Goal />} />
          <Route path="/education" element={<Education />} />
          <Route path="/news" element={<Blog />} />
          {/* <Route path="/goal" element={<Generic />} />
          <Route path="/goal" element={<Generic />} /> */}
        </Route>
      </Routes>
    </Suspense>
  );
};

export default Routers;
