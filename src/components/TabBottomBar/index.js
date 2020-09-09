import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  Platform,
  TouchableOpacity,
} from 'react-native';
import colors from '../../styles/colors';
import metrics from '../../styles/metrics';
import {ifIphoneX} from 'react-native-iphone-x-helper';
import {NavigationActions, StackActions} from 'react-navigation';

const styles = StyleSheet.create({
  tabbar: {
    ...ifIphoneX(
      {
        height: 80,
        paddingBottom: 20,
      },
      {height: 60},
    ),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.tabbar.background,
    // shadowColor: colors.black,
    // shadowOffset: {
    //   width: 0,
    //   height: Platform.OS == 'ios' ? -1 : 10,
    // },
    // shadowOpacity: Platform.OS == 'ios' ? 0.2 : 1,
    // shadowRadius: Platform.OS == 'ios' ? 2 : 1,
    // elevation: Platform.OS == 'ios' ? null : 5,
    marginTop: -18,
  },
  tab: {
    alignSelf: 'stretch',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 5,
  },
  textBar: {
    textAlign: 'center',
    fontSize:
      Platform.OS == 'ios'
        ? metrics.tabBottom.fontTabBarIOS
        : metrics.tabBottom.fontTabBarAndroid,
    // color: colors.corSecundaria1,
    marginTop: 5,
  },
});

class TabBar extends React.Component {
  constructor(props) {
    super(props);
  }

  jump(key) {
    const nav = StackActions.reset({
      index: 0,
      actions: [
        NavigationActions.navigate({
          routeName: 'MainRoute',
          params: {},
          action: NavigationActions.navigate({routeName: key, params: {}}),
        }),
      ],
      key: null,
    });

    const {
      navigation,
      renderIcon,
      getLabelText,
      activeTintColor,
      inactiveTintColor,
      jumpTo,
    } = this.props;
    navigation.goBack(null);
    jumpTo(key);
  }

  render() {
    //console.log(this.props)
    const {
      navigation,
      renderIcon,
      getLabelText,
      activeTintColor,
      inactiveTintColor,
      jumpTo,
    } = this.props;

    const {routes} = navigation.state;

    return (
      <View style={styles.tabbar}>
        {routes &&
          routes.map((route, index) => {
            const focused = index === navigation.state.index;
            const tintColor = focused ? activeTintColor : inactiveTintColor;

            return (
              <TouchableOpacity
                key={route.key}
                onPress={() =>
                  route.key == 'Menulateral'
                    ? navigation.openDrawer()
                    : this.jump(route.key)
                }
                style={styles.tab}>
                <View style={styles.tab}>
                  {renderIcon({
                    route,
                    index,
                    focused,
                    tintColor,
                  })}
                  <Text style={[styles.textBar, {color: tintColor}]}>
                    {getLabelText({route: route})}
                  </Text>
                </View>
              </TouchableOpacity>
            );
          })}
      </View>
    );
  }
}

export default TabBar;
