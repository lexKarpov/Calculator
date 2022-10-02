import './App.css';
import Header from "./components/Header/Header";
import Calculator from "./components/Calculator/Calculator";

function App() {
  return (
    <div className="App">
      <div className="body">
        <Header/>
        <main className="main">
            <Calculator/>
            {/*<div className="choice">*/}
            {/*  <p className="choice__description"></p>*/}
            {/*  <input type="text" className="choise__number"/>*/}
            {/*  <input type="range" className="choise__range"/>*/}
            {/*</div>*/}
        </main>
      </div>
    </div>
  );
}

export default App;
