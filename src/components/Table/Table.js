import React, {Component} from 'react';

 const Tbody = props => {
    const linhas = props.autores.map((autores,index) => {
      return (
          <tr key={index}>
            <th>{autores.nome}</th>
            <th>{autores.livro}</th>
            <th>{autores.preco}</th>
            <th><button onClick={() => props.removeAutor(index)}>Remover</button></th>
          </tr>
      );
       
    })
      return(
          <tbody>{linhas}</tbody>
      )
  }
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
class Table extends Component{
  render (){
    const {autores, removeAutor} = this.props;
    return (
      <table>
        <Thead/>
        <Tbody autores= {autores} removeAutor={removeAutor} /> 
    </table>
    )
  }
}
export default Table;