import axios from 'axios';
import general from '../config/general';

import AsyncStorage from '@react-native-community/async-storage';
import {navigatorRef} from '../App';
import {NavigationActions, StackActions} from 'react-navigation';

console.log('Carregou API');
// Add a response interceptor

const api = axios.create({
  baseURL: general.baseURL,
});
api.interceptors.response.use(
  function (response) {
    // console.log("RESPONSE", response.data);
    return response;
  },
  function (error) {
    // Do something with response error

    if (error.response)
      if (error.response.status == 401) {
        // Deslogando
        AsyncStorage.removeItem('UserData', () => {
          const nav = StackActions.reset({
            index: 0,
            actions: [
              NavigationActions.navigate({
                routeName: 'LoginStack',
              }),
            ],
            key: null,
          });
          navigatorRef.dispatch(nav);
        });
      }
    return Promise.reject(error);
  },
);
export default api;
