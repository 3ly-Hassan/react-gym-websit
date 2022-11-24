import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Gallery from "./pages/gallery/Gallery";
import Contact from "./pages/contact/Contact";
import Plans from "./pages/plans/Plans";
import NotFound from "./pages/notFound/NotFound";
import Trainers from "./pages/trainers/Trainers";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
        <Route index element={<Home></Home>} />
        <Route path="about" element={<About></About>} />
        <Route path="contact" element={<Contact></Contact>} />
        <Route path="gallery" element={<Gallery></Gallery>} />
        <Route path="plans" element={<Plans></Plans>} />
        <Route path="trainers" element={<Trainers></Trainers>} />
        <Route path="*" element={<NotFound></NotFound>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
