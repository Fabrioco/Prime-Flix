import React, {Component} from "react";

class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            nome: '',
            email: '',
            senha:'',
            error:''
        }
        this.trocarNome = this.trocarNome.bind(this);
        this.trocarEmail = this.trocarEmail.bind(this);
        this.trocarSenha = this.trocarSenha.bind(this);
        this.cadastrar = this.cadastrar.bind(this)
    }
    trocarNome(e){
        let valorDigitado = e.target.value;
        this.setState({nome: valorDigitado});
    }
    trocarEmail(e){
        let valorDigitado = e.target.value;
        this.setState({email: valorDigitado});
    }
    trocarSenha(e){
        let valorDigitado = e.target.value;
        this.setState({senha: valorDigitado})
    }
    cadastrar(e){
        let {nome, email, senha} = this.state;
        if(nome !== '' && email !== '' && senha !== ''){
            alert(`Nome: ${nome} \nEmail: ${email} \nSenha ${senha}`)
        }else{
            this.setState({error: 'Vá com calma amigo esta faltando algo'})
        }
        e.preventDefault();
    }

    render(){
        return(
            <div>
                <h1>Novo usuário</h1>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.cadastrar}>
                    <label>Nome:</label> <br/>
                    <input type='text' value={this.state.nome} onChange={this.trocarNome} /> <br/>
                    <label>Email:</label> <br/>
                    <input type='email' value={this.state.email} onChange={this.trocarEmail} /> <br/>
                    <label>Senha:</label> <br/>
                    <input type='password' value={this.state.Senha} onChange={this.trocarSenha} /> <br/>
                    <button type="submit">Enviar</button>
                </form>
            </div>
        )
    }
}

export default App;