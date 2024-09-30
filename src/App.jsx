import Header from "./components/header";
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
    backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px), 
                      linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)`, // Lighter white with opacity
    backgroundSize: "80px 80px",
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
