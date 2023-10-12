import "./App.css";
import Flavanoids from "./Component/Flavanoids";
import Gamma from "./Component/Gamma";
import { data } from "./Data/Wine-Data";

function App() {
  return (
    <div className="App">
      <Flavanoids wineData={data} />
      <Gamma wineData={data} />
    </div>
  );
}

export default App;
