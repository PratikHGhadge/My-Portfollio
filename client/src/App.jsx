import Navbar from "./components/Common_components/Navbar";
import Home from "./pages/Home";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Qualification from "./pages/Qualification";
import Blog from "./pages/Blog";
import ContactMe from "./pages/ContactMe";
import Footer from "./components/Common_components/Footer";
import About from "./pages/About";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <div className="py-10 bg-secondarylight">
        <About />
      </div>
      <Skills />
      <Projects />
      <Qualification />
      <Blog />
      <ContactMe />
      <Footer />
    </>
  );
}

export default App;
