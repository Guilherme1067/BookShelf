import React, {Component, useState} from 'react';
import Table from './components/Table/Table';

class App extends Component{

    removeAutor = (index) => {
      const {autores} = this.state;

      this.setState({
        autores: autores.filter((autor,posicaoAtual) => {
          return posicaoAtual != index;
        })
      })

    }

    state = {
      autores : [
        {
          nome: 'Paulo',
          livro: 'React',
          preco: '1000'
        },
        {
          nome: 'Daniel',
          livro: 'Java',
          preco: '99'
        },
        {
          nome: 'Marcos',
          livro: 'Design',
          preco: '150'
        },
        {
          nome: 'Bruno',
          livro: 'DevOps',
          preco: '100'
        },
       
      ],
    };
  render(){
    return (
      <div className="App">
          
        <Table autores={this.state.autores} removeAutor={this.removeAutor} />
      </div>
    );
  }
}

export default App;
