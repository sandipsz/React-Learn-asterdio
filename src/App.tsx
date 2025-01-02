import { BrowserRouter, Route, Routes } from "react-router";
import Login from "./components/Login";
import RootLayout from "./layout/RootLayout";
import About from "./pages/About";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<RootLayout />}>
          <Route index path="/" element={<Home />} />
          <Route path="about" element={<About />} />
        </Route>
        <Route path="login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
