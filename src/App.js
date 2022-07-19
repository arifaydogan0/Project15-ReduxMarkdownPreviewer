import "./App.css";
import Header from "./components/Header";
import Body from "./components/Body";

function App() {
  return (
    <div className="App">
      <div className="max-w-7xl bg-indigo-50 h-screen font-serif">
        <Header />
        <Body />
      </div>
    </div>
  );
}

export default App;
