import {put, take} from 'redux-saga/effects';
import {eventChannel} from 'redux-saga';
// import NetInfo from '@react-native-community/netinfo';

import {OFFLINE, ONLINE} from 'redux-offline-queue';

import {NavigationActions} from 'react-navigation';
import {navigatorRef} from '../../App';

export function* startWatchingNetworkConnectivity() {
  const nav = NavigationActions.navigate({
    routeName: 'semInternet',
  });
  const channel = eventChannel((emitter) => {
    // NetInfo.isConnected.addEventListener('connectionChange', emitter);
    // return () =>
    //   NetInfo.isConnected.removeEventListener('connectionChange', emitter);
  });
  try {
    for (;;) {
      const isConnected = yield take(channel);
      if (isConnected) {
        yield put({type: ONLINE});
      } else {
        //console.log('OFFILNE')

        navigatorRef.dispatch(nav);

        yield put({type: OFFLINE});
      }
    }
  } finally {
    channel.close();
  }
}
