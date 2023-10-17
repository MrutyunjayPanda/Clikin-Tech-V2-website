import "./App.css";
import Nav from "./components/Nav";
import Banner from "./components/Banner";
import Info from "./components/content/Info";
import ContactPage from "./components/ContactPage";
import Footer from "./components/Footer";
import Product from "./components/product/Product";
import About from "./components/Aboutus/About";

function App() {
  return (
    <div >
      <Nav />
      <Banner />
      <About />
      <Info />
      <Product />
      <ContactPage />
      <Footer />
    </div>
  );
}

export default App;
