import React, {Component} from 'react';

import Login from '../components/login';
import Profile from '../components/inicio';

class LoginContainer extends Component{

    constructor(props){
        super(props)

        this.state = {
            vista:'pantallalogin',
            usuario: '',
        }
    }

    miEventoDeUsuario = (text)=>{
        this.setState({usuario:text,})
    }

    cambiarPantalla  = ( pantalla)=> {

        this.setState({
            vista: pantalla
        })

    };

    render(){
        
        const {vista} = this.state;

        if(vista === 'pantallalogin'){
            return(
                <Login
                   miOnChangeDeUsuario = {this.miEventoDeUsuario}
                   datoUsuario={this.usuario}
                   cambiarPantalla = {this.cambiarPantalla}
                />
            );
        }

        if(vista === 'pantallainicio'){
            return(
                <Profile
                    cambiarPantalla = {this.cambiarPantalla}
                    usuario = {this.state.usuario}
                />
            );
        }
    }
}

export default LoginContainer;