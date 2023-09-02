import { AllRoutes } from "./routes/AllRoutes";
import { Header, Footer } from "./component";
import "./index.css";

function App() {
  return (
    <div className="App">
      <Header />
      <AllRoutes />
      <Footer />
    </div>
  );
}

export default App;