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
                <div className="row">
                    <div className="input-field col s4">
                        <label className="input-field" htmlFor="nome">nome</label>
                        <input 
                        className="validated"
                        type="text"
                        id="nome"
                        name="nome"
                        value={nome}
                        onChange={this.addInput}
                        />
                    </div>

                    <div className="input-field col s4">
                        <label className="input-field" htmlFor="livro">Livro</label>
                        <input
                         className="validated"
                         name="livro"
                         type="text"
                         id="livro"
                         value={livro}
                        onChange={this.addInput}
                        />
                    </div>

                        <div className="input-field col s4">
                            <label className="input-field" htmlFor="preco">Preço</label>
                            <input
                             className="validated"
                             name="preco"
                             type="text"
                             id="preco"
                             value={preco}
                             onChange={this.addInput}
                            />
                        </div>
                    </div>
                    <button className="waves-effect waves-light deep-purple accent-4 btn" onClick={this.sendAuthor}type="button" >Salvar</button>
                    </form>
            )
        }
}
export default Form;