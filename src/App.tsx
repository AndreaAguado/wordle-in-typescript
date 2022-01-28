import Wordle from "./components/Wordle";
import './App.scss';

function App() {
  return (
    <div className="body">  
      <header className="header">
        <h1>Wordle</h1>
      </header>
      <main className="main">
        <Wordle/>
      </main>
      <footer className="footer"></footer>
    </div>

  );
}

export default App;
