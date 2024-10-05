import Header from "./components/Header";
import Features from "./components/Features";
import Footer from "./components/Footer";


function App() {
  const mainStyle = {
    backgroundColor: "#101624",
    height: "100vh",
    width: "100vw",
    overflowY: "scroll",
    backgroundImage: `url("bg.svg")`,
    backgroundSize: "cover",
    backgroundPosition: "center top",
  };

 
  return (
    <div className="font-inter   !scroll-smooth relative" style={mainStyle}>
      <Header />
      <Features />
      <Footer />
    </div>
  );
}

export default App;
