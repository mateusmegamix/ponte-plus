import React, {Component} from 'react';
import {View, Image, ActivityIndicator, Alert} from 'react-native';
import {StackActions, NavigationActions} from 'react-navigation';
import {navigatorRef} from '../../App';

import AsyncStorage from '@react-native-community/async-storage';
// import NetInfo from '@react-native-community/netinfo';
import PushController from '../../config/PushController';
//redux
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Creators as AssociadosActions} from '../../store/ducks/associado';
import {Creators as PushActions} from '../../store/ducks/push';
class Splash extends Component {
  state = {
    net: '',
  };
  doRouting = async () => {
    if (this.state.net == 'none') {
      const nav = StackActions.reset({
        index: 0,
        actions: [
          NavigationActions.navigate({
            routeName: 'semInternet',
          }),
        ],
        key: null,
      });
      navigatorRef.dispatch(nav);
    } else {
      let first = await AsyncStorage.getItem('getFirst');
      let user = await AsyncStorage.getItem('UserData');
      let routeName = 'MainRoute';
      if (!first) {
        routeName = 'tutorial';
      } else if (!user) {
        routeName = 'LoginStack';
      }
      // this.props.navigation.navigate(routeName);
      const nav = StackActions.reset({
        index: 0,
        actions: [
          NavigationActions.navigate({
            routeName: routeName,
          }),
        ],
        key: null,
      });
      navigatorRef.dispatch(nav);
    }
  };

  doCommonRoute = async () => {
    // NetInfo.getConnectionInfo().then((connectionInfo) => {
    //   //console.log('Initial, type: ' + connectionInfo.type + ', effectiveType: ' + connectionInfo.effectiveType);
    //   this.setState({
    //     net: connectionInfo.type,
    //   });
    //   // //console.log(this.state.net, 'NETTTT')
    //   if (connectionInfo.type == 'none') {
    //   } else {
    //     setTimeout(this.doRouting, 0);
    //     this.doRouting();
    //   }
    // });
    if (this.state.net == 'none') {
      // if(token==undefined){
      //   await AsyncStorage.setItem('UserData', '""');
      // }
      let params = {
        // token: await AsyncStorage.getItem("UserData"),
        SistemOp: await AsyncStorage.getItem('SistemaOp'),
        tokenHash: await AsyncStorage.getItem('HashToken'),
      };
      this.props.getPushRequest(params);
      setTimeout(this.doRouting, 0);
      this.doRouting();
    }
  };

  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#000',
        }}>
        <ActivityIndicator />
        <PushController
          onStart={() => this.doCommonRoute()}
          navigation={this.props.navigation}
        />
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  associado: state.associado,
  push: state.push,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      ...AssociadosActions,
      ...PushActions,
    },
    dispatch,
  );

export default connect(mapStateToProps, mapDispatchToProps)(Splash);
