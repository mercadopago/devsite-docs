# MercadoPago iOS (Swift 2.0 & iOS 9.0) SDK
The MercadoPago iOS SDK make it easy to collect your users' credit card details inside your iOS app. By creating tokens, MercadoPago handles the bulk of PCI compliance by preventing sensitive card data from hitting your server.

![MercadoPagoSDK: Examples](https://raw.githubusercontent.com/mercadopago/sdk-ios/master/Screenshots/mercadopagosdk.png)

## Installation

There are two ways to add MercadoPago to your project:

### CocoaPods (iOS 8.0 or later)

#### Step 1: Download CocoaPods

[CocoaPods](http://cocoapods.org) is a dependency manager for Objective-C and Swift, which automates and simplifies the process of using 3rd-party libraries like MercadoPagoSDK in your projects.

CocoaPods is distributed as a ruby gem, and is installed by running the following commands in Terminal.app:

    $ sudo gem install cocoapods
    $ pod setup

> Depending on your Ruby installation, you may not have to run as `sudo` to install the cocoapods gem.

#### Step 2: Create a Podfile

Project dependencies to be managed by CocoaPods are specified in a file called `Podfile`. Create this file in the same directory as your Xcode project (`.xcodeproj`) file:

    $ touch Podfile
    $ open -a Xcode Podfile

You just created the pod file and opened it using Xcode! Ready to add some content to the empty pod file?

Copy and paste the following lines into the TextEdit window:  
    
    source 'https://github.com/CocoaPods/Specs.git'
    use_frameworks!
    platform :ios, '8.0'
    pod 'MercadoPagoSDK', '~> 0.3.0'

> You shouldn’t use TextEdit to edit the pod file because TextEdit likes to replace standard quotes with more graphically appealing quotes. This can cause CocoaPods to get confused and display errors, so it’s best to just use Xcode or another programming text editor.

#### Step 3: Install Dependencies

Now you can install the dependencies in your project:

    $ pod install

From now on, be sure to always open the generated Xcode workspace (`.xcworkspace`) instead of the project file when building your project:

    $ open <YourProjectName>.xcworkspace

### Copy manually (iOS 7.0 or later)

- Open the MercadoPagoSDK folder, and drag MercadoPagoSDK.xcodeproj into the file navigator of your app project.
- In Xcode, navigate to the target configuration window by clicking on the blue project icon, and selecting the application target under the "Targets" heading in the sidebar.
- Ensure that the deployment target of MercadoPagoSDK.framework matches that of the application target.
- In the tab bar at the top of that window, open the "Build Phases" panel.
- Expand the "Target Dependencies" group, and add MercadoPagoSDK.framework.
- Click on the + button at the top left of the panel and select "New Copy Files Phase". Rename this new phase to "Copy Frameworks", set the "Destination" to "Frameworks", and add MercadoPagoSDK.framework.

##Usage
-----
- Swift 
```swift
        import MercadoPagoSDK
        func initMercadoPagoVault() {
                let supportedPaymentTypes = ["credit_card", "debit_card", "prepaid_card", "ticket", "atm"]
		
		let vaultViewController = MercadoPago.startVaultViewController("444a9ef5-8a6b-429f-abdf-587639155d88",
			merchantBaseUrl: "https://www.mercadopago.com", 
			merchantGetCustomerUri: "/checkout/examples/getCustomer", 
			merchantAccessToken: "mla-cards-data", 
			amount: 10.0, 
			supportedPaymentTypes: supportedPaymentTypes) { 
			(paymentMethod, tokenId, issuerId, installments) -> Void in
                        	let alert = UIAlertController()
                        	alert.title = "Payment Info"
                
                        	var msg = "Token = \(token?._id!). \n Payment method = \(paymentMethod.name!). \n"
                        	msg = msg + " Installments = \(installments!)."
                        	msg = msg + " CardIssuer ID = \(cardIssuerId != nil ? cardIssuerId! : cardIssuerId)"
                
                        	alert.message = msg
                        	alert.addAction(UIAlertAction(title: "Finish", style: .Default, handler: { action in
                          	switch action.style{
                            	case .Default:
                              		self.nav!.popToRootViewControllerAnimated(true)
                              		self.nav!.popViewControllerAnimated(true)
                              		self.initViewController()
                            	case .Cancel:
                              		println("cancel")
                            	case .Destructive:
                              		println("destructive")
                          	}
                        	}))
                        	self.nav!.presentViewController(alert, animated: true, completion: nil)
                    	}
                // Put vaultController at the top of navigator.
                self.nav!.pushViewController(vaultViewController, animated: false)
        }
```
- Objective-C

	**IMPORTANT: "Embedded Content Contains Swift Code" flag in the Build Settings that needs to be set to YES**
```objc
	#import "MercadoPagoSDK/MercadoPagoSDK-Swift.h"
	- (void) getCardToken() {
		MercadoPago *mp = [[MercadoPago alloc] initWithPublicKey:@"444a9ef5-8a6b-429f-abdf-587639155d88"];
	
		Identification *identification = [[Identification alloc] init];
		identification.type = @"DNI";
		identification.number = @"12345678";
	
		Cardholder *cardholder = [[Cardholder alloc] init];
		cardholder.identification = identification;
		cardholder.name = @"APRO";
	
		CardToken *cardToken = [[CardToken alloc] initWithCardNumber:@"4170068810108020" expirationMonth:10 expirationYear:15 securityCode:@"123" cardholderName:@"APRO" docType:@"DNI" docNumber:@"12345678"];
	
		[mp createNewCardToken:cardToken success: ^(Token *t) {
			NSLog(@"TOKEN %@", t._id);
		} failure: ^(NSError *e) {
			NSLog(@"ERROR");
		}];
	}
```
## Examples

This project includes five examples you can follow to understand how MercadoPago SDK works:

1. Start with a simple card form payment flow
2. Add your customers' cards to the flow
3. Manage installments and bank issuers
4. Pay with other payment types (ticket, atm)
5. Let MercadoPago SDK do steps 1-4 for you!
6. Show deals list

## Documentation

+ [Read more about this 5 steps integration.](http://www.mercadopago.com.ar/developers/en/solutions/payments/custom-checkout/charge-with-creditcard/ios/)
+ [Check out MercadoPago Developers Site!](http://www.mercadopago.com.ar/developers)

## Feedback

You can join the MercadoPago Developers Community on MercadoPago Developers Site:

+ [English](https://www.mercadopago.com.ar/developers/en/community/forum/)
+ [Español](https://www.mercadopago.com.ar/developers/es/community/forum/)
+ [Português](https://www.mercadopago.com.br/developers/pt/community/forum/)