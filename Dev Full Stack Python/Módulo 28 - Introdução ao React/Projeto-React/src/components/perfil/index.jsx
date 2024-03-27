import styles from './Perfil.module.css'

const Perfil = ({idGitHub}) => {
    return (
        <header className={styles.header}>
            <img className={styles.avatar} src={`https://github.com/${idGitHub}.png`} />
            <h1 className={styles.titulo}>{idGitHub}</h1>
        </header>
    )
}
export default Perfil;

/*const Perfil = () => {
    const usuario = {
        nome: 'Andrew Campos',
        avatar: 'https://github.com/A97Campos.png'
    }

    return (
        <div>
            <img className='perfil__avatar' src={usuario.avatar} />
            <h3 className='perfil__titulo'>{usuario.nome}</h3>
        </div>
    )

}
export default Perfil;
*/


/* 
        ---- PODERIA SER FEITO TBM COMO ----
export default () => {
    const usuario = {
        nome: 'Andrew Campos',
        avatar: 'https://github.com/A97Campos.png'
    }

    return (
        <div>
            <img className='perfil__avatar' src={usuario.avatar} />
            <h3 className='perfil__titulo'>{usuario.nome}</h3>
        </div>
    )
}

*/