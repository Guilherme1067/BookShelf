import React, {Component, Fragment} from 'react';
import Table from './components/Table/Table';
import Form from './components/Form'
import 'materialize-css/dist/css/materialize.min.css'
import Header from './components/Header';

class App extends Component{

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

    removeAutor = (index) => {
      const {autores} = this.state;

      this.setState({
        autores: autores.filter((autor,posicaoAtual) => {
          return posicaoAtual !== index;
        })
      })
    }

  
  addAutor = autor => {
    this.setState({autores: [...this.state.autores, autor]})
  }

  render(){
    return (
        <Fragment>
        <Header/>
          <div className="container">
            <Table autores={this.state.autores} removeAutor={this.removeAutor} />
            <Form addAutor={this.addAutor}/>
          </div>
        </Fragment>
    );
  }
}

export default App;
