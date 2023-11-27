# Integrating Checkout Pro for iOS with Flutter

> WARNING
>
> Important
>
> Before you start integrating Checkout Pro for Mobile, you need to have a preference created in your backend. If you haven't done it yet, go to [Preference creation](/developers/en/docs/checkout-pro/integrate-preferences).

To integrate Checkout Pro into a mobile application developed with Flutter, you need to display the web checkout within the application. To achieve this, there are several options, among which the use of Custom Tabs stands out. This technology allows you to open web pages in a native browser integrated into the application, providing a smoother and more consistent browsing experience for users.

In this step, we will implement Custom Tabs in a Flutter application using **flutter_custom_tabs**. We will show you how to install the required libraries, how to configure dependencies, and we will give you practical examples of how to open web pages using Custom Tabs.

> CLIENT_SIDE
>
> h2
>
> Installing the Flutter Custom Tabs dependency

To install the Flutter Custom Tabs dependency, you can run the following command in the root directory of your project:

```terminal
$ flutter pub add flutter_custom_tabs
```

This will add the line `dependencies:  flutter_custom_tabs: ^1.2.1` to the **pubspec.yaml** file of the package. It will also run an implicit command `flutter pub get`.


> NOTE
> 
> Note
>
> Learn more about Flutter Custom Tabs in the [official documentation](https://pub.dev/packages/flutter_custom_tabs).

To make use of the dependency, you must first import it in the Dart code where you will need to display the Checkout. To import it, add the following line to your code:

```dart
import 'package:flutter_custom_tabs/flutter_custom_tabs.dart';
```

### Example of Flutter Custom Tabs integration

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
> Customizing the display based on the platform
>
> It is possible to customize the look & feel of the screen that will be displayed by specifying options for each platform. To customize the appearance on iOS, you will need to use SFSSafariViewController. Learn more in the [official documentation](https://pub.dev/packages/flutter_custom_tabs).

> CLIENT_SIDE
>
> h2
>
> How to return to your App

Deep links are a powerful way to allow direct navigation to specific screens or sections of a mobile application. In Flutter, correctly configuring deep links is essential to ensure a smooth and seamless user experience.

In this section of the documentation, you will find how to configure deep links in a Flutter application based on the [official Flutter documentation](https://docs.flutter.dev/ui/navigation/deep-linking?gclid=CjwKCAjwrranBhAEEiwAzbhNtSuZ4qnpJoRrs1AgJ8SzP80sc4EmZA3_VlFInWPQ-42suf1Wm31K9RoC0f4QAvD_BwE&gclsrc=aw.ds).

With the proper configuration of deep links in Flutter, you can offer users the ability to directly access specific content in your application, improving navigation and the overall user experience.


### Creating a Deep Link
From the checkout, it is possible to configure deep links to return to your application, either by clicking on a "Return" link, or automatically after completing a successful payment flow, and then be redirected to your App.

To do this, we must add the `back_urls` and `auto_return` properties in the payment preference creation, according to the corresponding requirements.

To learn more, you can access the documentation on [Return URLs](/developers/en/docs/checkout-pro/checkout-customization/user-interface/redirection).

> CLIENT_SIDE
>
> h2
>
> Configuring the application for Deep Link handling

Flutter supports deep linking on iOS and web browsers. Opening a URL will display that screen in your app. Below, we will show you how you can launch and display routes by creating named routes (either with the routes parameter or with onGenerateRoute), or using the Router widget.

> WARNING
>
> Important
>
> Named routes are no longer recommended for most applications.

If the application is running in a web browser, no additional configuration is required. The routes are handled in the same way as an iOS deep link. By default, web applications read the deep link route from the URL fragment using the pattern `/#/path/to/app/screen`, but this can be changed by configuring the URL strategy for your app.

> To learn more, refer to the official documentation on [handling Deep Links for Flutter applications](https://medium.com/flutter-community/deep-links-and-flutter-applications-how-to-handle-them-properly-8c9865af9283) and [setting up Universal Link for iOS](https://docs.flutter.dev/cookbook/navigation/set-up-universal-links).