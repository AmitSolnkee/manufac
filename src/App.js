import "./App.css";
import Flavanoids from "./Component/Flavanoids";
import Gamma from "./Component/Gamma";
import { data } from "./Data/Wine-Data";

// winesetdata is imported from data and passed as props for Flavanoids and Gamma component
function App() {
  return (
    <div className="App">
      <Flavanoids wineData={data} />
      <Gamma wineData={data} />
    </div>
  );
}

export default App;
