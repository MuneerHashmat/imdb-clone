import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer/Footer";
import SearchResults from "./pages/SearchResults/SearchResults";
import { Toaster } from "react-hot-toast";
import ContentDetail from "./pages/ContentDetail/ContentDetail";

function App() {
  return (
    <>
      <Toaster />
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<SearchResults />} />
          <Route path="/detail/:type/:id" element=<ContentDetail /> />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
