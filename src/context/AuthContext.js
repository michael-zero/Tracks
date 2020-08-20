import { AsyncStorage } from 'react-native'
import createDataContext from './createDataContext'
import trackerApi from '../api/tracker'
import { createStackNavigator } from '@react-navigation/stack';
import {navigate} from '../navigationRef'

//ngrok http 3000

 export const Stack = createStackNavigator()

const authReducer = (state, action) => {
    switch(action.type){
       case 'add_error': 
        return {...state, errorMessage: action.payload}
       case 'signup':
           return {errorMessage: '' , token: action.payload}
       default: return state
    }
}

const signin = (dispatch) => {
    return ({email, password}) => {
        //fez a requisição
        //modifica o estado
        //erro

    }
}

const signup = (dispatch) => {
    return async ({email, password}) => {
       
       try {
            
            const response  = await trackerApi.post('/signup', {email, password})
           
            await AsyncStorage.setItem('token',response.data.token)
            dispatch({type: 'signup', payload: response.data.token})
            console.log('passou do dispatch')

            navigate('Account')
            

       } catch (error) {
        //    console.log(error.message)
            dispatch({type: 'add_error', payload: 'Something went wrong with sign up'})
       }
    }
}

const signout = (dispatch) => {
    return () => {

    }
}

export const {Context, Provider} = createDataContext(
    authReducer,
    {signin, signout, signup},
    {token: null, errorMessage: ''}
)