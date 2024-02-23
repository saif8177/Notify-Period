import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.Notifyperiod.app',
  appName: 'Notify Period',
  webDir: 'www',
  bundledWebRuntime: false,
  plugins: {
    AdMob: {
      adAppId: {
        ios: 'ca-app-pub-3940256099942544/6300978111',
        android: 'ca-app-pub-3940256099942544/6300978111'
      }
    }
  }
};

export default config;
