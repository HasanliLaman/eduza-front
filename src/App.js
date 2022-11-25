import Homepage from "./pages/Homepage";
import Events from "./pages/Events";
import Courses from "./pages/Courses";
import FooterContainer from "./components/Footer/FooterContainer";
import NavbarContainer from "./components/Navbar/NavbarContainer";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <NavbarContainer />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/events" element={<Events />} />
      </Routes>
      <FooterContainer />
    </div>
  );
}

export default App;
