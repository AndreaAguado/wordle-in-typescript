import "./App.scss";
import Wordle from "./components/Wordle";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { useState } from "react";

function App() {
  const [hidden, setHidden] = useState<boolean>(false);
  return (
    <div>
      <Header hidden={hidden} setHidden={setHidden} />
      <main className="main">
        <Wordle hidden={hidden} setHidden={setHidden} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
