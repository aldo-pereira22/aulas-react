import './App.css';
import './components/helloWorld'
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';



function App() {
  const nome = "João"
  return (
    <div className="App" >



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
