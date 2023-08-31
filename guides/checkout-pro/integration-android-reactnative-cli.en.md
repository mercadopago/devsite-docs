# Integrate Checkout Pro for Android with React Native CLI

> WARNING
>
> Important
>
> Before starting to integrate Checkout Pro for Mobile, you will need to have a preference created in your backend. If you haven't already, go to [Preference creation](/developers/en/docs/checkout-pro/integrate-preferences).

When developing mobile apps with React Native, the need to display web content within the app often arises. To achieve this, there are several options, among which the use of Custom Tabs (for Android) and Safari View Controller (for iOS) stand out. These technologies allow web pages to be opened in a native browser embedded within the application, providing a smoother and more consistent browsing experience for users.

In this step we are going to install and configure the necessary dependencies to implement **Custom Tabs** in your project developed in React Native.

> CLIENT_SIDE
>
> h2
>
> Use of InAppBrowser

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


### Android support

If you use Android Support, your **android/build.gradle** file should have the properties described below. If any are missing, add them. The versions can be the same or higher.

```
buildscript {
  ext {
    buildToolsVersion = "28.0.3"
    minSdkVersion = 16
    compileSdkVersion = 28
    targetSdkVersion = 28
    // Only using Android Support libraries
    supportLibVersion = "28.0.0"
  }
```

### AndroidX

If you use AndroidX, your file should have these properties. If any are missing, add them. The versions can be the same or higher.

```
buildscript {
  ext {
    buildToolsVersion = "30.0.2"
    minSdkVersion = 21
    compileSdkVersion = 30
    targetSdkVersion = 30
    ndkVersion = "21.4.7075529"
    // Remove 'supportLibVersion' property and put specific versions for AndroidX libraries
    androidXAnnotation = "1.2.0"
    androidXBrowser = "1.3.0"
    // Put here other AndroidX dependencies
  }
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
				openUrl('YOUR-URL-PREFERENCE')
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
> Application configuration for Deep Link management

In order to receive and manage the Deep Link, it is necessary to configure in the React Native project the scheme and path that make up the Deep Links that you receive to redirect to some part of your application.
To do this, add the deep link in the android **/app/src/main/AndroidManifest.xml** file between the "activity" tags.

In the example below, you'll set up a Deep Link of the form _myapp://checkout/congrats_.

```AndroidManifest.xml
<activity ....> ....
<intent-filter data-generated="true">
<action android:name="android.intent.action.VIEW"/>
<data android:scheme="myapp" android:host="checkout" android:pathPrefix="/congrats"/> <category android:name="android.intent.category.BROWSABLE"/>
<category android:name="android.intent.category.DEFAULT"/>
</intent-filter>
.... </activity>
```

The `pathPrefix` property is optional and can be added to direct a specific view of the application.


> CLIENT_SIDE
>
> h2
>
> Deep Link reception and management

Finally, we will see how we can configure our React Native application to receive and manage Deep Links. This will be addressed using the react-native-inappbrowser dependency.

In the case of Android, **the closing of the custom tab is done automatically** when redirecting to a valid Deep Link. In the event that the link is not valid, no redirection action will be executed from the custom tab..


