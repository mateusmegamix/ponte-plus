import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Modal,
  TouchableOpacity,
  Text,
  ActivityIndicator
} from 'react-native';

const Loader = props => {
  const {
    loading,
    actionCancelar,
    ...attributes
  } = props;

  

  return (
    <Modal
      transparent={true}
      animationType={'none'}
      visible={loading}
      onRequestClose={actionCancelar}>
      <View style={styles.modalBackground}>
        <View style={styles.activityIndicatorWrapper}>
          <ActivityIndicator
            size="large"
            color='#fff'
            animating={loading} />
            {
              actionCancelar ?
              <TouchableOpacity onPress={ actionCancelar }>
                <Text style={{color: '#FFF'}}>Cancelar</Text>
              </TouchableOpacity>
              : null
            }
        </View>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-around',
    backgroundColor: '#00000040'
  },
  activityIndicatorWrapper: {
    backgroundColor: 'transparent',
    height: 100,
    width: 100,
    borderRadius: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around'
  }
});
export default Loader;