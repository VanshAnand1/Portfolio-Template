import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Home } from "./pages/home";
import { NotFound } from "./pages/notfound";

// Handles GitHub Pages redirect on hard-refresh (from 404.html)
function RedirectHandler() {
  const navigate = useNavigate();

  useEffect(() => {
    const redirectPath = new URLSearchParams(window.location.search).get(
      "redirect"
    );
    if (redirectPath) {
      navigate(redirectPath, { replace: true });
    }
  }, [navigate]);

  return null;
}

function App() {
  return (
    <BrowserRouter basename="/Portfolio">
      <RedirectHandler />
      <Routes>
        <Route index element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
