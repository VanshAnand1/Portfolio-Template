// import { HashRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/home";
import { NotFound } from "./pages/notfound";

function App() {
  if (location.pathname == "/Portfolio/") {
    console.log("path: ", location.pathname);
    return <Home />;
  } else {
    console.log("path: ", location.pathname);
    return <NotFound />;
  }

  // return (
  // <HashRouter>
  //   <Routes>
  //     <Route index element={<Home />} />
  //     <Route path="*" element={<NotFound />} />
  //   </Routes>
  // </HashRouter>
  // );
}

export default App;
