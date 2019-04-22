import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Menu extends Component {
  render() {
    return(
      <ul>
        <li><Link to="/list">Listar Contatos</Link></li>
        <li><Link to="/new">Adicionar novo contato</Link></li>
      </ul>
    )
  }
}

export default Menu;
