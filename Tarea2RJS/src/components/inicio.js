import React from 'react';

import{
    View,
    Text,
    StyleSheet,
    TextInput,
    Button
} from 'react-native';

const Login = (props) =>{

    const { cambiarPantalla, usuario} = props;

    return(

        <View>
            <Text> Bienvenido A  {usuario} tu pagina Principal </Text>           
            <Button
                title = 'Regresar'
                color = 'orange'

                onPress = {
                    () =>{
                        cambiarPantalla('pantallalogin');
                    }
                }
            />
        </View>

    );
}

export default Login;