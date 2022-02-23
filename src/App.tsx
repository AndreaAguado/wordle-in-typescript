import "./App.scss";
import Wordle from "./components/Wordle";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { useState } from "react";

function App() {
  const [hidden, setHidden] = useState<boolean>(false);
  const [rulesHidden, setRulesHidden] = useState<boolean>(false);
  return (
    <div>
      <Header
        hidden={hidden}
        setHidden={setHidden}
        rulesHidden={rulesHidden}
        setRulesHidden={setRulesHidden}
      />
      <main className="main">
        <Wordle
          hidden={hidden}
          setHidden={setHidden}
          rulesHidden={rulesHidden}
          setRulesHidden={setRulesHidden}
        />
      </main>
      <Footer />
    </div>
  );
}

export default App;
