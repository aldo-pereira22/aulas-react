import { useState } from 'react'

function Form() {

    function cadastrarUsuario(event) {
        event.preventDefault()

        alert(`${name} - ${passowrd}`)
       

    }

    const [name, setName] = useState()
    const [passowrd, setPassowrd] = useState()

    return (
        <div>
            <h1>Meu Cadastro</h1>
            <form onSubmit={cadastrarUsuario} >
                <div>
                    <label htmlFor="name">Nome: </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Digite seu nome"
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                    />

                </div>
                <div>
                    <label htmlFor="password">Senha: </label>

                    <input
                        type="password"
                        id="password"
                        name="pasword"
                        placeholder="Digite Sua senha"
                        onChange={(e) => setPassowrd(e.target.value)}
                    />

                </div>
                <div>
                    <input type="submit" value="Cadastrar" />
                </div>
            </form>
        </div>
    )

}

export default Form