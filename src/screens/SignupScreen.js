import React, {useState, useContext} from 'react'
import { StyleSheet, View} from 'react-native'
import {Text, Button, Input} from 'react-native-elements'
import Spacer from '../components/Spacer'
import {Context as AuthContext} from '../context/AuthContext'
const SignupScreen = () => {
    const {state, signup} = useContext(AuthContext)
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

   

    return (
        <View style={styles.container}>
          <Spacer>
            <Text h3>Sign Up for Tracker</Text>
          </Spacer>  
            <Input label='Email' 
            autoCapitalize="none"
            autoCorrect={false}
            value={email} 
            onChangeText={setEmail}/>

          <Spacer/>
            <Input label='Password' 
            secureTextEntry={true}
            autoCapitalize="none"
            autoCorrect={false}
            value={password} 
            onChangeText={setPassword}/>

          {state.errorMessage ? <Text style={styles.errorMessage}>{state.errorMessage}</Text> : null}  
          <Spacer>

            <Button title='Sign Up'
            onPress={() =>{ signup({email, password})}}/>
               {/* onPress={() =>{ aux('account') }}/>   */}
          </Spacer>  
        </View>
    )
}

export default SignupScreen  

const styles = StyleSheet.create({
    container: {  
       flex: 1,
       justifyContent: 'center',
       marginBottom: 250

    },

    errorMessage: {
      fontSize: 16,
      color: 'red',
      marginLeft: 15,
    }
})
