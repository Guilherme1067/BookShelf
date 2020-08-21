import React, {Component} from 'react';


 const Thead = () =>{
   return (
    <thead>
    <tr>
      <th>Autores</th>
      <th>Livros</th>
      <th>Preços</th>
      <th>Remover</th>
    </tr>
    </thead>
   )
 }

 const Tbody = props => {
  const linhas = props.autores.map((autores,index) => {
    return (
        <tr key={index}>
          <td>{autores.nome}</td>
          <td>{autores.livro}</td>
          <td>{autores.preco}</td>
          <td><button className="waves-effect waves-light deep-purple accent-4 btn" onClick={() => props.removeAutor(index)}>Remover</button></td>
        </tr>
    );
     
  })
    return(
        <tbody>{linhas}</tbody>
    )
}
class Table extends Component{
  render (){
    const {autores, removeAutor} = this.props;
    return (
      <table className="centered highlight">
        <Thead/>
        <Tbody autores= {autores} removeAutor={removeAutor} /> 
    </table>

    )
  }
}
export default Table;