import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";
import News from "./app/pages/News/news";
import About from "./app/pages/About/about";
import YouTube from "./app/pages/YouTube/youtube";
import Contact from "./app/pages/Contact/contact";
import Home from "./app/pages/Home/home";

function App() {
     return (
          <BrowserRouter>
               <Navbar />
               <Routes>
                    <Route element={<Home />} path="/" />
                    <Route element={<News />} path="/news" />
                    <Route element={<About />} path="/about" />
                    <Route element={<YouTube />} path="/youtube" />
                    <Route element={<Contact />} path="/contact" />
               </Routes>
               <Footer />
          </BrowserRouter>
     );
}

export default App;
