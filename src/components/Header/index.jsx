import './header.css';

function Header({title}){
    return(
        <header>
            <a href="#">Usuarios</a>
            <a href="#">Cadastrar usuario</a>
            <a href="#">Cadastrar endereco</a>
            <h1>{title}</h1>
        </header>
    );
};

export default Header;