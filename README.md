# react-native-navigation-bootstrap

## Bootstrap for a vanilla `react-native-navigation` based project

Clone this repository to start a project based on 

```
react@15.4.2
react-native@0.42.0
react-native-navigation@next
```


Check `react-native-navigation`'s [documentation](https://github.com/wix/react-native-navigation/wiki) for usage details.


### preparing your project

Download npm dependencies:

```sh
npm install
-or-
yarn
```

##### You would need to setup gradle to automatically download android dependencies
```sh
./scripts/android_licenses.sh
```



### Running your project

From project dir, run:

#### iOS
1. Build and run (this will start a simulator if not already started)

	```sh
	react-native run-ios
	```
	This would also start a packager if not already started

2. Set your Simulator to live reload changes `⌘`+`d`  (`cmd`+`d`) => `Enable Live Reload`



#### Android
1. Start an emulator
2. Build and run

	```sh
	react-native run-android
	```
	This would also start a packager if not already started


3. Set your Emulator to live reload changes `⌘`+`m`  (`cmd`+`m`) => `Enable Hot Reloading`

To open packager manually, from project dir run:

```sh
react-native start
```

