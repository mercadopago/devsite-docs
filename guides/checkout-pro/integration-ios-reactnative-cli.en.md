# Integrate Checkout Pro for iOS with React Native CLI

> WARNING
>
> Important
>
> Before you start integrating Checkout Pro for Mobile, you'll need to have a preference created in your backend. If you haven't already done so, go to [Preference Creation](/developers/en/docs/checkout-pro/integrate-preferences).

In mobile application development, the need to display web content within the application often arises. For this, there are several options, among which the use of Custom Tabs (for Android) and Safari View Controller (for iOS) stand out. These technologies allow web pages to be opened in a native browser incorporated into the application, providing a smoother and more consistent browsing experience for users.

In this step we are going to install and configure the necessary dependencies to implement **Safari View Controller** in your project developed in React Native.

> CLIENT_SIDE
>
> h2
>
> Using InAppBrowser

With the React Native CLI, we suggest using [React-Native-InAppBrowser](https://www.npmjs.com/package/react-native-inappbrowser-reborn), a highly flexible dependency that provides a comprehensive solution for integrating a browser web inside your React Native app. When considering the use of React-Native-InAppBrowser-Reborn the following aspects were taken into account:

* It is a dependency that allows to provide an integrated and fluid web browsing experience within the application.
* It has a wide variety of customizable functions to adapt to the specific needs of the application.
* Keeps users within the context of the application, increasing retention and consistency of the experience.

To install it, run the following command in your terminal.

[[[
```npm
npm install react-native-inappbrowser-reborn --save
```
```yarn
yarn add react-native-inappbrowser-reborn
```
]]]

Then run the following command to install the dependency.

```
cd ios && pod install && cd ..
```

> CLIENT_SIDE
>
> h2
>
> Implementation of React-Native-Inappbrowser

To implement the React-Native-Inappbrowser dependency, follow the example below.

```JavaScript
import {
	Button,
	Linking
} from 'react-native';
import InAppBrowser from 'react-native-inappbrowser-reborn';
const ButtonCustomTabs = () => {
		const openUrl = async (url) => {
			if (await InAppBrowser.isAvailable()) {
				InAppBrowser.open(url, {
					// iOS Properties
					dismissButtonStyle: 'cancel',
					preferredBarTintColor: '#453AA4',
					preferredControlTintColor: 'white',
					readerMode: false,
					animated: true,
					modalEnabled: true,
					// Android Properties
					showTitle: true,
					toolbarColor: '#6200EE',
					secondaryToolbarColor: 'black',
					enableUrlBarHiding: true,
					enableDefaultShare: true,
					forceCloseOnRedirection: false, // Animation
					animations: {
						startEnter: 'slide_in_right',
						startExit: 'slide_out_left',
						endEnter: 'slide_in_left',
						endExit: 'slide_out_right',
					},
				});
			} else {
				Linking.openURL(url);
			}
		};
		return ( < Button title = "Press Me"
			onPress = {
				() =>
				openUrl('https://url-to-open.com')
			}
			/> );
		};
		export default ButtonCustomTabs;
```

> CLIENT_SIDE
>
> h2
>
> How to return to your app

**Deep Links** are a powerful way to allow direct navigation to specific screens or sections of a mobile application.

### Create a Deep Link

From our checkout, you can configure Deep Links to return to your application, either by clicking a "Back" link or automatically after completing a successful payment flow, redirecting you back to your application.

For this, we must add the back_urls and auto_return properties when creating the payment preference, as needed.

To learn more, you can visit the documentation on [Return URLs](/developers/es/docs/checkout-pro/checkout-customization/user-interface/redirection).

> CLIENT_SIDE
>
> h2
>
> Application configuration to manage Deep Link

In order to receive and manage the Deep Link, you must configure in your React Native project the scheme and path that make up the Deep Links you received to redirect to some part of your application.
To do this, from Xcode locate your project information and add a new "URL Types".

![xcode-paso1](/images/cow/xcode-paso1.png)

Enter the **identifier** of your application and the **URL Schemes** of the Deep Link.

![xcode-paso2](/images/cow/xcode-paso2.png)

This will generate the following code in the **ios/<appname>/Info.plist** file:

```info.plist
<key>CFBundleURLTypes</key>
    <array>
        <dict> <key>CFBundleURLSchemes
            </key>
            <array>
                <string>myapp</string>
                <string>com.test.TestExpoBrowser</string>
            </array>
        </dict> 
    </array>
```

Add the following code to the **ios/<appname>/AppDelegate.mm** file

```AppDelegate.mm
// iOS 9.x or newer
#import < React / RCTLinkingManager.h >
	-(BOOL) application: (UIApplication * ) application
openURL: (NSURL * ) url options: (NSDictionary < UIApplicationOpenURLOptionsKey, id > * ) options {
	return [RCTLinkingManager application: application openURL: url options: options];
}
```

> CLIENT_SIDE
>
> h2
>
> Deep Link reception and management

Finally, we will see how we can configure our React Native application to receive and manage Deep Links. This will be addressed using the react-native-inappbrowser dependency.

In the case of iOS **it is necessary to close the Safari View Controller manually**. To do this, you'll need to listen for the url change event from the component that opens the window or application entry point, and then call the method to close the Safari View Controller.


### Use of react-native-inappbrowser-reborn

Follow the example below to close Safari View Controller manually using **react-native-inappbrowser-reborn**.

```JavaScript
import {
	useEffect
} from 'react';
import React from 'react';
import MainStack from './navigation/MainStack';
import {
	Linking
} from 'react-native';
import InAppBrowser from 'react-native-inappbrowser-reborn';
import * as RootNavigation from './RootNavigation';

function App(): JSX.Element {
	useEffect(() => {
		Linking.addEventListener('url', event => {
			const {
				url
			} = event;
			if (url !== null && url.includes('myapp://')) {
				InAppBrowser.close();
				RootNavigation.navigate('Congrats');
			}
		});
	}, []);
	return <MainStack / > ;
}
export default App;
```

