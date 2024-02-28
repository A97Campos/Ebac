import './perfil.css';

const Perfil = ({nome, endereco}) => {
    return (
        <div>
            <img className='perfil__avatar' src={endereco} />
            <h3 className='perfil__titulo'>{nome}</h3>
        </div>
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