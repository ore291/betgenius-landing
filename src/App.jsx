import Header from "./components/Header";
import Hero from "./components/Hero";
import "./App.css";
import Features from "./components/Features";
import Footer from "./components/Footer";

function App() {
  const mainStyle = {
    backgroundColor: "#101624",
    height: "100vh",
    width: "100vw",
    maxHeight: "100vh",
    overflowY: "scroll",
    backgroundImage: `url("bg.svg")`,
    backgroundSize: "cover",
    backgroundPosition: "center top",
  };
  return (
    <div
      className="font-inter flex justify-between flex-col overflow-x-clip !scroll-smooth relative"
      style={mainStyle}
    >
      <Header />
 
        <Hero />
        <Features />

        <Footer />
  
    </div>
  );
}

export default App;
