# Personalização

> WARNING
>
> PRÉ-REQUISITOS
>
> *  Esta guia presume que você já tenha seguido os passos da seção sobre introdução e recebimento de pagamentos da documentação para instalação do SDK e integração padrão, juntamente com a criação da preferência de pagamentos.

## Personalize sua preferência de pagamentos

Se necessário, ao criar a preferência de pagamentos em seu servidor, você poderá especificar restrições e exclusões de meios ou tipos de pagamentos específicos e definir o número máximo de parcelas ou deixar o valor padrão.

#### Exclua Meios de Pagamento

Você pode especificar os tipos de meio de pagamento que não quiser aceitar (Boleto ou Cartões de Crédito), excluindo-os ao criar a Checkout Preference.

No conteúdo de sua preferência de pagamentos você pode adicionar os meios de pagamentos que aceita ou os que não aceita.

*Excluir um tipo de meio de pagamento específico:*


```json
{
  "items": [
    ...
  ],
  "payer": {
    ...
  },
  "payment_methods": {
    "excluded_payment_types":[
        {"id":"ticket"}
    ]
  },
  ...
}
```

*Excluir mais de um tipo de meio de pagamento:*


```json
{
  "items": [
    ...
  ],
  "payer": {
    ...
  },
  "payment_methods": {
    "excluded_payment_types":[
        {"id":"ticket"},
        {"id":"atm"},
        {"id":"debit_card"}
    ]
  },
  ...
}
```

Você pode até mesmo determinar quais meios de pagamento específicos (Visa, Mastercard, etc.) deseja excluir do checkout:

*Excluir um meio de pagamento específico:*


```json
{
  "items": [
    ...
  ],
  "payer": {
    ...
  },
  "payment_methods": {
    "excluded_payment_methods":[
        {"id":"visa"}
    ]
  },
  ...
}
```

*Excluir mais de um meio de pagamento:*


```json
{
  "items": [
    ...
  ],
  "payer": {
    ...
  },
  "payment_methods": {
    "excluded_payment_methods":[
        {"id":"visa"},
        {"id":"master"}
    ]
  },
  ...
}
```

#### Personalize o número de parcelas

Você pode especificar o número máximo de parcelas que deseja permitir para seus meios de pagamento.

```json
{
  "items": [
    ...
  ],
  "payer": {
    ...
  },
  "payment_methods": {
  	 "excluded_payment_methods": [
  	   ...
  	 ],
  	 "excluded_payment_types": [
  	   ...
  	 ],
    "installments": 1
  },
  ...
}
```

Você também poderá definir um número de parcelas padrão a ser selecionado automaticamente, caso esteja disponível para o meio de pagamento selecionado pelo usuário. Caso contrário, a tela de parcelas será exibida para que o cliente selecione.



```json
{
  "items": [
    ...
  ],
  "payer": {
    ...
  },
  "payment_methods": {
  	 "excluded_payment_methods": [
  	   ...
  	 ],
  	 "excluded_payment_types": [
  	   ...
  	 ],
    "default_installments": 3
  },
  ...
}
```

## Personalize o fluxo de pagamento

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


### Configuração de cor

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
