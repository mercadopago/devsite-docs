# Restrictions

To ensure the security and stability of the integration ecosystem, consider the restrictions for the use of the device and of Android system features.

## OAuth flow

To obtain information about payments, the user or to perform any operation on the seller's account, such as charges or refunds, generate a token through the [OAuth flow](/developers/en/docs/main-apps/additional-content/security/oauth/introduction) and use the [Mercado Pago public API](/developers/pt/reference).

## Ecosystem version

In the application configuration, check the version of the device's operating system. Point Smart uses Android 6, which implies a minimum API Level of 23.

SmartPOS devices have an AOSP operating system, and for this reason do not have many Google and Firebase services. Check which ones are available on the [official Firebase page](https://firebase.google.com/docs/android/android-play-services).

## Android Manifest permissions and settings

During development, some [permissions](https://developer.android.com/guide/topics/permissions/overview) must be specified in [Android Manifest](https://developer.android.com/guide/topics/manifest/manifest-intro) in order to access confidential information or certain system functions. The ones that can be declared are those that are essential for network communication, such as the Internet permission (`android.permission.INTERNET`).

If you need any additional functionality, please contact the Mercado Pago support team. 

## Security and use of third-party libraries

When building the application, do not use libraries that are obsolete or have security vulnerabilities.

Libraries that interact directly with the device's hardware, such as those from manufacturers, are for the exclusive use of the Mercado Pago team. Get in touch if you need any functionality of this kind.

## Issue with Build Tools

Then run this command in the terminal:

> If the message **"Installed Build Tools revision 32.0.0 is corrupted"** is displayed, delete the program and install it again using the SDK Manager.

```shell command
cd ~/Library/Android/sdk/build-tools/32.0.0 \
  && mv d8 dx \
  && cd lib  \
  && mv d8.jar dx.jar
```