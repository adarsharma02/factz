import "../src/App.css";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <Sidebar />
    </div>
  );
}

export default App;
