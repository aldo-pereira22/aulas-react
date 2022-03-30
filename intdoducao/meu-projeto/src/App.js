import './App.css';

function App() {

  function confirmarUsodeCookie(){
    localStorage.setItem("cookies", "teste")
    const cookies = localStorage.getItem("cookies")
    alert(cookies)
    // localStorage.getItem("cookies") ? alert("Ja tem cookies"): alert("Não tem cookies")     
  }

  function recuperarLocalStorage(){
    const cookies = localStorage.getItem("cookies") ? alert(localStorage.getItem("cookies")): alert("FALSE")
    // return localStorage.getItem("cookies")
  }
  return (
    <div className="App">
      {confirmarUsodeCookie()}
      {/* <button onClick={confirmarUsodeCookie} > Aceitar</button> */}
    </div>
  );
}

export default App;
