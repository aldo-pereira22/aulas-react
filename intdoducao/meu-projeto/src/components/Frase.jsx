import styles from './Frase.module.css'
function Frase() {
    return (
        <div className={styles.fraseContainer} >
            <p className={styles.fraseContent} >
                Olá, sou o componente FRASE

            </p>

        </div>

    )

}

export default Frase;