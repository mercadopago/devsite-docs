# Integrate Checkout Pro for iOS with Swift

> WARNING
>
> Important
>
> Before you start integrating Checkout Pro for Mobile, you'll need to have a preference created in your backend. If you haven't already done so, go to [Preference Creation](/developers/en/docs/checkout-pro/integrate-preferences).

Safari View Controller integrates all of Safari within your app using an opaque view controller. That is, you can't design it, you can't interact with it, and you can't extract any private data from it. As a result, **SFSafariViewController** can take advantage of the user's secure web data.

In this step we are going to install and configure the necessary dependencies to implement **SFSafariViewController** in your project developed in Swift.

> CLIENT_SIDE
>
> h2
>
> Installing SFSafariViewController

SFSafariViewController is not part of the [UIKit](https://developer.apple.com/documentation/uikit) so to use it you **must import the Safari Services Framework** which contains the services needed to integrate Safari behaviors into your iOS app.

> Make sure the SafariServices framework is added to your project. If you don't already have it, go to "Build Phases" and add it under "Link Binary With Libraries".

To install it, go to the file where you want to use the Safari View Controller and import the SafariServices library.

```Main.swift
import SafariServices
```

When working with SFSafariViewController, you can open the preferred URL just by sending the URL or by adding some configuration settings. Here are some reference examples for the SFSafariViewController implementation.

[[[
```SwiftUI
import SwiftUI
import SafariServices

struct ContentView: View {
    var body: some View {
        VStack {
            Button("Open Preference" ) {
                if let url = URL(string:"YOUR-URL-PREFERENCE")
                {
                    if let windowScene = UIApplication.shared.connectedScenes.first as? UIWindowScene {
                        if let rootViewController = windowScene.windows.first?.rootViewController {
                            let safariVC = SFSafariViewController(url: url)
                            rootViewController.present(safariVC, animated: true, completion: nil)
                        }
                    }
                    
                }
                
            }
        }
        .padding()
    }

}

struct ContentView_Previews: PreviewProvider {
    static var previews: some View {
        ContentView()
    }
}
```

```UIKit
import SafariServices
import UIKit

class ViewController: UIViewController {

    override func viewDidLoad() {
        super.viewDidLoad()
        let button = UIButton()
        button.setTitle("Open Preference", for: .normal)
        button.backgroundColor = .systemBlue
        view.addSubview(button)
        button.frame = CGRect(x: 100, y: 100, width: 200, height: 50)
        button.layer.cornerRadius = 25
        button.addTarget(self, action: #selector(openSafariViewController)  , for: .touchDown)
    }
    
    @objc func openSafariViewController(_ sender: Any) {
        if let url = URL(string: "YOUR-URL-PREFERENCE") {
            let safariViewController = SFSafariViewController(url: url)
            present(safariViewController, animated: true, completion: nil)
        }
    }

}
```
]]]

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

To set up a native Deep Link on iOS, go to the `<appname>/Info.plist` file and add the code below as appropriate.

The following example applies to a deep link of the form _iosapp://_:

```
<dict>
     …

	<key>CFBundleURLTypes</key>
	<array>
		<dict>
			<key>CFBundleTypeRole</key>
			<string>Editor</string>
			<key>CFBundleURLName</key>
			<string>your_identifier_here</string>
			<key>CFBundleURLSchemes</key>
			<array>
				<string>iosapp</string>
			</array>
		</dict>
	</array>
    …
	
</dict>
```

The `CFBundleURLName` value corresponds to the application identifier (Identifier) and `CFBundleURLSchemes` to the scheme used in the Deep Link.

### Configure the Deep Link from Xcode

You can also **configure the Deep Link from Xcode**. For this, go to your project information and add a new `URL Type`.

![urltype_swift](/images/cow/urltype_swift.png)

Then, enter the `identifier` of your application and the `URL Schemes` of the Deep Link.

![deeplink-xcode-swift](/images/cow/deeplink-xcode-swift.png)

This will automatically generate the same code as above in the `<appname>/Info.plist` file.


> CLIENT_SIDE
>
> h2
>
> Deep Link reception and management

In iOS, when a deep link tries to redirect the user to the application from a Safari View Controller, it is necessary to configure a handler for this event to close it and load the corresponding view or scene.

[[[
```SwiftUI
===
From the application's ContentView you will receive a Deep Link of the form iosapp://congrat/success and after some time interval you will need to close Safari View Controller to load a view called SuccessView.
===
struct ContentView: View {
    @State private var showSuccessView = false
    
    var body: some View {
        VStack {
            Text("SwiftUI")
                .font(.system(size: 36, design: .rounded).weight(.bold)).foregroundColor(.black).padding(.bottom, 8)
            Text("POC")
                .font(.system(size: 24, design: .rounded)).foregroundColor(.gray).padding(.bottom)
            Button("Abrir Safari") {
                if let url = URL(string: "YOUR-URL-PREFERENCE") {
                    UIApplication.shared.windows.first?.rootViewController?.present(UIHostingController(rootView: SafariView(url: url)), animated: true, completion: nil)
                    }
                }.padding(.bottom)
            Button("Abrir Congrat") {
                showSuccessView = true
            }
        }
        .sheet(isPresented: $showSuccessView) {
            SuccessView(isPresented: $showSuccessView)
        }
        
        
// Here the deep link reception

.onOpenURL { url in
            if let components = URLComponents(url: url, resolvingAgainstBaseURL: false),
               components.scheme == "iosapp",
               components.host == "congrat",
               components.path.contains("success") {
                
                DispatchQueue.main.asyncAfter(deadline: .now() + 0.1) {
                    if let presenting = UIApplication.shared.windows.first?.rootViewController?.presentedViewController {
                        presenting.dismiss(animated: true, completion: nil)
                        showSuccessView = true
                    }
                }
            }
        }
        .padding()
    }
}

struct ContentView_Previews: PreviewProvider {
    static var previews: some View {
        ContentView()
    }
}
```
```UIKit
===
From the AppDelegate.swift or SceneDelegate.swift, depending on your case, you will receive a Deep Link in the form iosapp://congrat/success. You will then need to close Safari View Controller to load a view called SuccessViewController.
===
import UIKit

class SceneDelegate: UIResponder, UIWindowSceneDelegate {

    var window: UIWindow?

    func scene(_ scene: UIScene, willConnectTo session: UISceneSession, options connectionOptions: UIScene.ConnectionOptions) {
        guard let _ = (scene as? UIWindowScene) else { return }
    }

    func scene(_ scene: UIScene, openURLContexts URLContexts: Set<UIOpenURLContext>) {
        if let urlContext = URLContexts.first {
            let url = urlContext.url

            if let components = URLComponents(url: url, resolvingAgainstBaseURL: false),
               components.scheme == "iosapp",
               components.host == "congrat",
               components.path.contains("success") {
                
                if let rootViewController = window?.rootViewController {
                    let successViewController = SuccessViewController {
                        rootViewController.dismiss(animated: true, completion: nil)
                    }
                    
                    if let presentingViewController = rootViewController.presentedViewController {
                        presentingViewController.dismiss(animated: true) {
                            rootViewController.present(successViewController, animated: true, completion: nil)
                        }
                    } else {
                        rootViewController.present(successViewController, animated: true, completion: nil)
                    }
                }
            }
        }
    }
}
```
]]]

