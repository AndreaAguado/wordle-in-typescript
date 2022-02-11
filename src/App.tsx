import './App.scss';
import Wordle from "./components/Wordle";
import Footer from "./components/Footer";
import Header from './components/Header';

function App() {
  return (
    <div className="body">  
      <Header/>
      <main className="main">
        <Wordle/>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
