# Integrate Checkout Pro for iOS with React Native Expo Go

> WARNING
>
> Importante
>
> Before you start integrating Checkout Pro for Mobile, you'll need to have a preference created in your backend. If you haven't already done so, go to [Preference Creation](/developers/en/docs/checkout-pro/integrate-preferences).

In mobile application development, the need to display web content within the application often arises. For this, there are several options, among which the use of Custom Tabs (for Android) and Safari View Controller (for iOS) stand out. These technologies allow web pages to be opened in a native browser incorporated into the application, providing a smoother and more consistent browsing experience for users.

In this step we are going to install and configure the necessary dependencies to implement **Safari View Controller** in your project developed in React Native.

> CLIENT_SIDE
>
> h2
>
> Using Expo-Web-Browser

This dependency provides access to the browser, in this case the Safari View Controller for iOS. It also performs redirect handling.

To install it, run the following command in your terminal

```yarn
yarn add expo-web-browser
```

> CLIENT_SIDE
>
> h2
>
> Implementation of Expo-Web-Browser

To implement the Expo-Web-Browser dependency, follow the example below.

```JavaScript
import {
	StatusBar
} from "expo-status-bar";
import {
	StyleSheet,
	Button,
	View
} from "react-native";
import {
	openBrowserAsync
} from "expo-web-browser";
export default function ExpoWebBrowserExample(url) {
	return ( <
		View style = {
			styles.container
		} > < Button title = "Open Browser"
		onPress = {
			() => openBrowserAsync('https://url-to-open.com')
		}
		/> <StatusBar style="auto" / >
		<
		/View> );
	}
	const styles = StyleSheet.create({
		container: {
			flex: 1,
			backgroundColor: "#fff",
			alignItems: "center",
			justifyContent: "center",
		},
	});
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

In order to receive and manage the Deep Link, it is necessary to configure in our React Native project the scheme and path that make up the Deep Links that we receive to redirect to some part of your application.
To do this, check that your **app.json** file contains the name of the scheme:

```app.json
"expo": {
	"scheme": "myapp"
}
```
When you run `npx expo prebuild` your `ios/appname/Info.plist` file should contain something similar to the following code.

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

> CLIENT_SIDE
>
> h2
>
> Deep Link reception and management

Finally, we will see how we can configure our React Native application to receive and manage Deep Links. This will be addressed using the react-native-inappbrowser dependency.

In the case of iOS **it is necessary to close the Safari View Controller manually**. To do this, you'll need to listen for the url change event from the component that opens the window or application entry point, and then call the method to close the Safari View Controller.

### Use of Expo-Web-Browser

In the case of iOS it is necessary to close the Safari View Controller manually. To do this, you'll need to listen for the url change event from the component that opens the window or application entry point, and then call the method to close the Safari View Controller.

```JavaScript
import {
	StatusBar
} from "expo-status-bar";
import {
	StyleSheet,
	Button,
	View,
	Linking,
	Platform
} from "react-native";
import {
	openBrowserAsync
} from "expo-web-browser";
import * as WebBrowser from "expo-web-browser";
import {
	useEffect
} from "react";
export default function App() {
	useEffect(() => {
		Linking.addEventListener("url", (event) => {
			const {
				url
			} = event;
			if (url !== null && url.includes("myapp://")) {
				Platform.OS === "ios" && WebBrowser.dismissBrowser();
			}
		});
	}, []);
	const url = "https://url-to-open.com";
	return ( <
		View style = {
			styles.container
		} >
		<
		Button title = "Open Browser"
		onPress = {
			() => openBrowserAsync(url)
		}
		/> <
		StatusBar style = "auto" / > < /View>
	);
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});
```
