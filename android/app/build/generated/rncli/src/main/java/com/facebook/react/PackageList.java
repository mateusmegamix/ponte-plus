
package com.facebook.react;

import android.app.Application;
import android.content.Context;
import android.content.res.Resources;

import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainPackageConfig;
import com.facebook.react.shell.MainReactPackage;
import java.util.Arrays;
import java.util.ArrayList;

// @react-native-community/async-storage
import com.reactnativecommunity.asyncstorage.AsyncStoragePackage;
// @react-native-community/netinfo
import com.reactnativecommunity.netinfo.NetInfoPackage;
// @react-native-community/picker
import com.reactnativecommunity.picker.RNCPickerPackage;
// lottie-react-native
import com.airbnb.android.react.lottie.LottiePackage;
// react-native-camera
import org.reactnative.camera.RNCameraPackage;
// react-native-device-info
import com.learnium.RNDeviceInfo.RNDeviceInfo;
// react-native-fbsdk
import com.facebook.reactnative.androidsdk.FBSDKPackage;
// react-native-gesture-handler
import com.swmansion.gesturehandler.react.RNGestureHandlerPackage;
// react-native-image-picker
import com.imagepicker.ImagePickerPackage;
// react-native-permissions
import com.reactnativecommunity.rnpermissions.RNPermissionsPackage;
// react-native-push-notification
import com.dieam.reactnativepushnotification.ReactNativePushNotificationPackage;
// react-native-vector-icons
import com.oblador.vectoricons.VectorIconsPackage;
// react-native-webview
import com.reactnativecommunity.webview.RNCWebViewPackage;

public class PackageList {
  private Application application;
  private ReactNativeHost reactNativeHost;
  private MainPackageConfig mConfig;

  public PackageList(ReactNativeHost reactNativeHost) {
    this(reactNativeHost, null);
  }

  public PackageList(Application application) {
    this(application, null);
  }

  public PackageList(ReactNativeHost reactNativeHost, MainPackageConfig config) {
    this.reactNativeHost = reactNativeHost;
    mConfig = config;
  }

  public PackageList(Application application, MainPackageConfig config) {
    this.reactNativeHost = null;
    this.application = application;
    mConfig = config;
  }

  private ReactNativeHost getReactNativeHost() {
    return this.reactNativeHost;
  }

  private Resources getResources() {
    return this.getApplication().getResources();
  }

  private Application getApplication() {
    if (this.reactNativeHost == null) return this.application;
    return this.reactNativeHost.getApplication();
  }

  private Context getApplicationContext() {
    return this.getApplication().getApplicationContext();
  }

  public ArrayList<ReactPackage> getPackages() {
    return new ArrayList<>(Arrays.<ReactPackage>asList(
      new MainReactPackage(mConfig),
      new AsyncStoragePackage(),
      new NetInfoPackage(),
      new RNCPickerPackage(),
      new LottiePackage(),
      new RNCameraPackage(),
      new RNDeviceInfo(),
      new FBSDKPackage(),
      new RNGestureHandlerPackage(),
      new ImagePickerPackage(),
      new RNPermissionsPackage(),
      new ReactNativePushNotificationPackage(),
      new VectorIconsPackage(),
      new RNCWebViewPackage()
    ));
  }
}