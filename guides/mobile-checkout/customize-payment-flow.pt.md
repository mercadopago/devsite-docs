# Personalize o fluxo de pagamento

A Preferência do Fluxo permite personalizar e configurar o fluxo para que obtenha a melhor experiência de pagamento.

Para incorporar ao _Checkout_ as opções definidas na classe `AdvancedConfiguration`, você deve adicionar uma requisição no início do _Checkout_, conforme exibido no código a seguir:

[[[
```android
===
Como visto no exemplo, você pode ocultar o botão de Promoções com o método **disableBankDeals** para casos de pagamentos em uma única parcela.
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
Como visto no exemplo, você pode ocultar o botão de Promoções **bankDealsEnabled = false** para casos de pagamentos em uma única parcela.
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
Como visto no exemplo, você pode ocultar o botão de Promoções **bankDealsEnabled = NO** para casos de pagamentos em uma única parcela.
===
MercadoPagoCheckoutBuilder *builder = [[MercadoPagoCheckoutBuilder alloc] initWithPublicKey:@"ENV_PUBLIC_KEY" preferenceId:@"PREFERENCE_ID"];

PXAdvancedConfiguration *config =  [[PXAdvancedConfiguration alloc] init];
[config setBankDealsEnabled:NO];

[builder setAdvancedConfigurationWithConfig:config];

MercadoPagoCheckout *checkout = [[MercadoPagoCheckout alloc] initWithBuilder:builder];

[checkout startWithNavigationController:self.navigationController lifeCycleProtocol:nil];
```
]]]

## Configuração de cor

É possível alterar as cores da interface gráfica do fluxo de pagamento utilizando o seguinte código:

[[[

```android
===
No arquivo **colors.xml** você deve fazer referência às cores que deseja alterar no checkout e defini-las com suas próprias cores.
===
<!-- Cor principal -->
<color name="ui_components_android_color_primary">@color/your_color</color>

<!-- Cor da Toolbar -->
<color name="px_toolbar_text">@color/your_color</color>

<!-- Cor da Status Bar -->
<color name="ui_components_android_color_primary_dark">@color/your_color</color>

<!-- Cor primaria do Spinner-->
<color name="ui_components_spinner_primary_color">@color/your_color</color>

<!-- Cor secundario do Spinner -->
<color name="ui_components_spinner_secondary_color">@color/your_color</color>

<!-- Cor de fundo do Spinner -->
<color name="px_background_loading">@color/your_color</color>

<!-- Cor dos icones dos meios de pagamento -->
<color name="px_paymentMethodTint">@color/your_color</color>

<!-- Cor dos inputs -->
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