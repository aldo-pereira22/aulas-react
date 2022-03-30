import './App.css';
import './components/helloWorld'
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';
import Frase from './components/Frase';




function App() {
  const nome = "João"
  return (
    <div className="App" >


      <Frase />
      <Frase />
      <Frase />

      < SayMyName nome="Aldo" />
      < SayMyName nome={nome} />

      <Pessoa
        nome="Aldo"
        idade="30"
        profissao = "Programador"
        foto ="https://via.placeholder.com/150"

      />


    </div>
  )

}

export default App;
