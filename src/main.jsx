import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.scss";
import App from "./layouts/App";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import UserPage from "./pages/UserPage";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/" element={<Home />} />
          <Route path="login" element={<SignIn />} />
          <Route path="profile" element={<UserPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
