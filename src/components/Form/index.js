import React, {Component} from 'react';


class Form extends Component {
                 constructor(props){
                    super(props);

                  this.initalState = {
                        nome:"",
                        livro:"",
                        preco:"",
                    }
                    this.state = this.initalState
                 }   

                addInput = event => {
                    const {name, value} = event.target;

                        this.setState({
                            [name]: value})
                    }
                
                sendAuthor = () =>{
                    this.props.addAutor(this.state)
                    this.setState(this.initalState)
                }

        render(){

            const {nome,livro,preco} = this.state
            return(
                <form>
                    <label htmlFor="nome">nome</label>
                    <input 
                    type="text"
                    id="nome"
                    name="nome"
                    value={nome}
                    onChange={this.addInput}
                    />

                    <label htmlFor="livro">Livro</label>
                    <input
                     name="livro"
                     type="text"
                     id="livro"
                     value={livro}
                    onChange={this.addInput}
                    />

                    <label htmlFor="preco">Preço</label>
                    <input
                     name="preco"
                     type="text"
                     id="preco"
                     value={preco}
                     onChange={this.addInput}
                    />
                    <button onClick={this.sendAuthor}type="button">Salvar</button>
                    </form>
            )
        }
}
export default Form;