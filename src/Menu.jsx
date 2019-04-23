import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const ulStyle = {
  padding: '0'
}
const liStyle = {
  display: 'inline',
  marginRight: '10px'
}

class Menu extends Component {
  render() {
    return(
      <ul style={ulStyle}>
        <li style={liStyle}><Link to="/list">Listar Contatos</Link></li>
        <li style={liStyle}><Link to="/new">Adicionar novo contato</Link></li>
      </ul>
    )
  }
}

export default Menu;
