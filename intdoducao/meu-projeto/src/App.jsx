import './App.css';
import './components/helloWorld'
import HelloWrold from './components/helloWorld';

function App() {
  const name ="Aldo"
  const url = "https://via.placeholder.com/150"
  return (
    <div>
      <h2>Alterando o JSX</h2>
      Olá {name}
      < HelloWrold />

    <img src={url} alt="" />
    </div>
  )

}

export default App;
