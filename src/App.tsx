import "./App.scss";
import Wordle from "./components/Wordle";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { useState } from "react";

function App() {
  const [hidden, setHidden] = useState<boolean>(false);
  const [rulesHidden, setRulesHidden] = useState<boolean>(false);
  const [optionsHidden, setOptionsHidden] = useState<boolean>(true);
  const [colorBlindMode, setColorBlindMode] = useState<boolean>(false);
  const [accessibilityMode, setAccessibilityMode] = useState<boolean>(false);

  return (
    <>
      <Header
        hidden={hidden}
        setHidden={setHidden}
        rulesHidden={rulesHidden}
        setRulesHidden={setRulesHidden}
        optionsHidden={optionsHidden}
        setOptionsHidden={setOptionsHidden}
      />
      <main className="main">
        <Wordle
          hidden={hidden}
          setHidden={setHidden}
          rulesHidden={rulesHidden}
          setRulesHidden={setRulesHidden}
          optionsHidden={optionsHidden}
          setOptionsHidden={setOptionsHidden}
          colorBlindMode={colorBlindMode}
          setColorBlindMode={setColorBlindMode}
          accessibilityMode={accessibilityMode}
          setAccessibilityMode={setAccessibilityMode}
        />
      </main>
      <Footer />
    </>
  );
}

export default App;
