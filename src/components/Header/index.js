import React from 'react';

const Header = () => {

    return(
        <nav>
        <div className="nav-wrapper deep-purple accent-4">
          <a href="/" className="brand-logo">React Table</a>
          <ul className="right hide-on-med-and-down">
            <li><a href="/autores">Autores</a></li>
            <li><a href="/livros">Livros</a></li>
            <li><a href="/sobre">Sobre</a></li>
          </ul>
        </div>
      </nav>
    )
}

export default Header;