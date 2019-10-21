import React from 'react';

import{
    View,
    Text,
    StyleSheet,
    TextInput,
    Button
} from 'react-native';

const Login = (props) =>{

    const {
         cambiarPantalla,
         miOnChangeDeUsuario,
         datoUsario 
        } = props;

    return(

        <View>
            <Text>Pantallalogin</Text>

            <View>
                <TextInput
                   onChangeText={miOnChangeDeUsuario}
                    value={datoUsario}
                />
            </View>

            <Button
                title = 'Acceder'
                color = 'blue'

                onPress = {
                    () =>{
                        cambiarPantalla('pantallainicio');
                    }
                }
            />
        </View>

    );
}

export default Login;