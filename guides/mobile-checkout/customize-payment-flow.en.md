# Customize the payment flow

The Advanced Configuration allows you to customize and set up the flow so that you can get the best payment experience.

In order to incorporate into the _Checkout_ the options set up in the `AdvancedConfiguration` class, you must add a request for that in the beginning of the _Checkout_, as shown in the following code:

[[[
```android
===
As you can see in the example, it is possible to hide the Promotions button using the **disableBankDeals** method for single-installment payments.
===
final AdvancedConfiguration advancedConfiguration =
    new AdvancedConfiguration.Builder().setBankDealsEnabled(false).build();
new MercadoPagoCheckout
    .Builder("ENV_PUBLIC_KEY", checkoutPreferenceId)
    .setAdvancedConfiguration(advancedConfiguration).build()
    .startPayment(CheckoutExampleActivity.this, REQUEST_CODE);
```
```swift
===
As you can see in the example, it is possible to hide the Promotions button configuring **bankDealsEnabled = false** for single-installment payments.
===
let builder = MercadoPagoCheckoutBuilder.init(publicKey: "ENV_PUBLIC_KEY", preferenceId: checkoutPreferenceId)
let config = PXAdvancedConfiguration()
config.bankDealsEnabled = false
builder.setAdvancedConfiguration(config: config)
let checkout = MercadoPagoCheckout.init(builder: builder)
checkout.start(navigationController: self.navigationController!)
```
```objective-c
===
As you can see in the example, it is possible to hide the Promotions button configuring **bankDealsEnabled = NO** for single-installment payments.
===
MercadoPagoCheckoutBuilder *builder = [[MercadoPagoCheckoutBuilder alloc] initWithPublicKey:@"ENV_PUBLIC_KEY" preferenceId:@"PREFERENCE_ID"];

PXAdvancedConfiguration *config =  [[PXAdvancedConfiguration alloc] init];
[config setBankDealsEnabled:NO];

[builder setAdvancedConfigurationWithConfig:config];

MercadoPagoCheckout *checkout = [[MercadoPagoCheckout alloc] initWithBuilder:builder];

[checkout startWithNavigationController:self.navigationController lifeCycleProtocol:nil];
```

]]]

## Color settings

You can change the colors of the graphical interface of the payment flow by using the following code:

[[[
```android
===
In the **colors.xml** file you must reference the colors you want to change by setting your own colors.
===
<!-- Main color -->
<color name="ui_components_android_color_primary">@color/your_color</color>

<!-- Toolbar's text color -->
<color name="px_toolbar_text">@color/your_color</color>

<!-- Status Bar color -->
<color name="ui_components_android_color_primary_dark">@color/your_color</color>

<!-- Spinner primary color -->
<color name="ui_components_spinner_primary_color">@color/your_color</color>

<!-- Spinner secondary color -->
<color name="ui_components_spinner_secondary_color">@color/your_color</color>

<!-- Spinner background color -->
<color name="px_background_loading">@color/your_color</color>

<!-- Payment method icon color -->
<color name="px_paymentMethodTint">@color/your_color</color>

<!-- Inputs color -->
<color name="px_input">@color/your_color</color>
```
```swift
@IBAction func startMercadoPagoCheckout(_ sender: Any) {
    let builder = MercadoPagoCheckoutBuilder.init(publicKey: "ENV_PUBLIC_KEY", preferenceId: checkoutPreferenceId)
    let config = PXAdvancedConfiguration()
    builder.setAdvancedConfiguration(config: config)
    builder.setColor(checkoutColor: .green)
    let checkout = MercadoPagoCheckout.init(builder: builder)
    checkout.start(navigationController: self.navigationController!)
}
```
```objective-c
MercadoPagoCheckoutBuilder *builder = [[MercadoPagoCheckoutBuilder alloc] initWithPublicKey:@"ENV_PUBLIC_KEY" preferenceId:@"PREFERENCE_ID"];

[builder setColorWithCheckoutColor:[UIColor greenColor]];

MercadoPagoCheckout *checkout = [[MercadoPagoCheckout alloc] initWithBuilder:builder];

[checkout startWithNavigationController:self.navigationController lifeCycleProtocol:nil];
```

]]]