import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Home from "./pages/Home.tsx";
import Header from "@/components/Header.tsx";
import { BrowserRouter, Route, Routes } from "react-router";
import Course from "@/pages/Course.tsx";
import ScrollToTop from "@/components/ScrollToTop.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      {/* path 변경 시, 맨 위 스크롤 */}
      <ScrollToTop />
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path={"course"}>
          <Route path={":no"} element={<Course />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
