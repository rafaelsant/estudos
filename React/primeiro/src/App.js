import logo from "./logo.svg";
import "./App.css";
import CountProvider from "./context/Count";
import Count from "./components/Count";
import Mirror from "./components/Mirror";

function App() {
  return (
    <CountProvider>
      <Count />
      <hr />
      <Mirror />
    </CountProvider>
  );
}

export default App;
