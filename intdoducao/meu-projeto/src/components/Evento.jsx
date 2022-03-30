import Button from "./evento/Button"
function Evento({numero}){

    function meuEvento(){
        alert(`Evento: ${numero}` )
    }

    return(
        <div>
            <p>Clique para disparar um evento:</p>
            <Button event={meuEvento} text="Primeiro Botao" />
            <button onClick={meuEvento} >Ativar!</button>
        </div>
    )
}

export default Evento