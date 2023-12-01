# Integrating Checkout Pro for Android with Flutter

> WARNING
>
> Important
>
> Before you start integrating Checkout Pro for Mobile, you need to have a preference created in your backend. If you haven't done it yet, go to [Create preference](/developers/en/docs/checkout-pro/integrate-preferences).

To integrate Checkout Pro into a mobile application developed with Flutter, you need to display the web checkout inside the application. To achieve this, there are several options, among which Custom Tabs stands out. This technology allows you to open web pages in a native browser integrated into the application, providing a smoother and more consistent browsing experience for users.

In this step, we are going to implement Custom Tabs in a Flutter application using **flutter_custom_tabs**. We will show you how to install the necessary libraries, how to configure the dependencies, and give you practical examples of how to open web pages using Custom Tabs.

> CLIENT_SIDE
>
> h2
>
> Installation of Flutter Custom Tabs Dependency

To install the Flutter Custom Tabs dependency, execute the following command in the root directory of your project:

```terminal
$ flutter pub add flutter_custom_tabs
```

This will add the line `dependencies:  flutter_custom_tabs: ^1.2.1` to the **pubspec.yaml** file of the package. It will also run an implicit command `flutter pub get`.

> NOTE
>
> Note
> 
> You can learn more in the [official documentation of Flutter Custom Tabs](https://pub.dev/packages/flutter_custom_tabs).

To make use of the dependency, you must first import it in the Dart code where you will need to display the Checkout. To import it, add the following line to your code:

```dart
import 'package:flutter_custom_tabs/flutter_custom_tabs.dart';
```

### Example of Flutter Custom Tabs Integration

Below, we share an example of Flutter integration using Custom Tabs:

```dart
import 'package:flutter/material.dart';
import 'package:flutter_custom_tabs/flutter_custom_tabs.dart';

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      theme: ThemeData(
        primarySwatch: Colors.blue,
      ),
      home: Scaffold(
        body: Center(
          child: TextButton(
            child: const Text('Show Flutter homepage'),
            onPressed: () => _launchURL(context),
          ),
        ),
      ),
    );
  }

  void _launchURL(BuildContext context) async {
    try {
      await launch(
        'https://flutter.dev',
        customTabsOption: CustomTabsOption(
          toolbarColor: Theme.of(context).primaryColor,
          enableDefaultShare: true,
          enableUrlBarHiding: true,
          showPageTitle: true,
          animation: CustomTabsAnimation.slideIn(),
          // or user defined animation.
          animation: const CustomTabsAnimation(
            startEnter: 'slide_up',
            startExit: 'android:anim/fade_out',
            endEnter: 'android:anim/fade_in',
            endExit: 'slide_down',
          ),
          extraCustomTabs: const <String>[
            // ref. https://play.google.com/store/apps/details?id=org.mozilla.firefox
            'org.mozilla.firefox',
            // ref. https://play.google.com/store/apps/details?id=com.microsoft.emmx
            'com.microsoft.emmx',
          ],
        ),                    
        safariVCOption: SafariViewControllerOption(
          preferredBarTintColor: Theme.of(context).primaryColor,
          preferredControlTintColor: Colors.white,
          barCollapsingEnabled: true,
          entersReaderIfAvailable: false,
          dismissButtonStyle: SafariViewControllerDismissButtonStyle.close,        
        ),
      );
    } catch (e) {
      // An exception is thrown if browser app is not installed on Android device.
      debugPrint(e.toString());
    }
  }
}
```

> NOTE
>
> Customize the Display per Platform
>
> It is possible to customize the look & feel of the screen that will be displayed by specifying options for each platform. To customize the appearance on Android, you must do it with CustomTabsOption. Learn more in the [official documentation](https://pub.dev/packages/flutter_custom_tabs).

> CLIENT_SIDE
>
> h2
>
> Returning to your App

**Deep Links** are a powerful way to enable direct navigation to specific screens or sections of a mobile application. In Flutter, setting up Deep Links correctly is essential to ensure a seamless and smooth user experience.

In this section of the documentation, you will find how to configure Deep Links in a Flutter application based on the [official Flutter documentation](https://docs.flutter.dev/ui/navigation/deep-linking?gclid=CjwKCAjwrranBhAEEiwAzbhNtSuZ4qnpJoRrs1AgJ8SzP80sc4EmZA3_VlFInWPQ-42suf1Wm31K9RoC0f4QAvD_BwE&gclsrc=aw.ds).

With the proper configuration of Deep Links in Flutter, you can offer users the ability to directly access specific content in your application, improving navigation and the overall user experience.


### Creating a Deep Link

From the checkout, it is possible to configure Deep Links to return to your application, either by clicking on a "Return" link, or automatically after completing a successful payment flow, and then being redirected to your App.

To do this, you must add the `back_urls` and `auto_return` properties to the payment preference creation as appropriate.

To learn more, you can access the documentation on [Return URLs](/developers/en/docs/checkout-pro/checkout-customization/user-interface/redirection).

> CLIENT_SIDE
>
> h2
>
> Configuring the App for Deep Link Handling

Flutter supports the use of Deep Links on Android and web browsers. When opening a URL, that screen will be displayed in your app. Below, we will show you how you can launch and display routes by creating **named routes** (either with the routes parameter or with onGenerateRoute), or with the **Router widget**.

> WARNING
>
> Important
>
> Named routes are no longer recommended for most applications.

If the application is run in a web browser, no additional configuration is needed. Routes are handled the same way as an Android Deep Link. By default, web applications read the Deep Link path from the URL fragment using the pattern `/#/path/to/app/screen`, but this can be changed by configuring the URL strategy for your app.

> To learn more, refer to the official documentation on [handling Deep Links for Flutter applications](https://medium.com/flutter-community/deep-links-and-flutter-applications-how-to-handle-them-properly-8c9865af9283) and [setting up App Link for Android](https://docs.flutter.dev/cookbook/navigation/set-up-app-links).