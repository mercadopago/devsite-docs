---
sites_supported:
    - mla
    - mlb
    - mlm
    - mco
    - mlc
    - mpe
    - mlv
    - global
---
# **Personalização**

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
final AdvancedConfiguration advancedConfiguration =
    new AdvancedConfiguration.Builder().setBankDealsEnabled(false).build();
new MercadoPagoCheckout
    .Builder("ENV_PUBLIC_KEY", checkoutPreferenceId)
    .setAdvancedConfiguration(advancedConfiguration).build()
    .startPayment(CheckoutExampleActivity.this, REQUEST_CODE);
```
```swift
let flowPrefernece = FlowPreference()
            flowPrefernece.disableReviewAndConfirmScreen()
            flowPrefernece.disableDiscount()
            flowPrefernece.disableBankDeals()

            MercadoPagoCheckout.setFlowPreference(flowPrefernece)

let item = Item(_id: "itemId", title: "[FAKER][COMMERCE][PRODUCT_NAME]", quantity: [FAKER][NUMBER][BETWEEN][1,10], unitPrice: [FAKER][COMMERCE][PRICE], description: nil, currencyId: "[FAKER][CURRENCY][ACRONYM]")
let payer = Payer(_id: "payerId", email: "[FAKER][INTERNET][FREE_EMAIL]", type: nil, identification: nil, entityType: nil)

let checkoutPreference = CheckoutPreference()
            checkoutPreference.items = [item]
            checkoutPreference.payer = payer
            checkoutPreference.setId("MLA")

let checkout = MercadoPagoCheckout(publicKey: "ENV_PUBLIC_KEY", accessToken: nil, checkoutPreference: checkoutPreference,
navigationController: self.navigationController!)
checkout.start()
```
```Objective-c
FlowPreference *flowPreference = [[FlowPreference alloc]init];
[flowPreference disableReviewAndConfirmScreen];
[flowPreference disableDiscount];
[flowPreference disableBankDeals];
[MercadoPagoCheckout setFlowPreference:flowPreference];

Item *item = [[Item alloc] initWith_id:@"itemId" title:@"[FAKER][COMMERCE][PRODUCT_NAME]" quantity:[FAKER][NUMBER][BETWEEN][1,10] unitPrice:[FAKER][COMMERCE][PRICE] description:@"item description" currencyId:@"[FAKER][CURRENCY][ACRONYM]"];
Payer *payer = [[Payer alloc] initWith_id:@"payerId" email:@"[FAKER][INTERNET][FREE_EMAIL]" type:nil identification:nil entityType:nil];

NSArray *items = [NSArray arrayWithObjects:item, item, nil];

CheckoutPreference *checkoutPreference = [[CheckoutPreference alloc] initWithItems:items payer:payer paymentMethods:nil];
[checkoutPreference setSiteId:@"MLA"];

MercadoPagoCheckout * checkout = [[MercadoPagoCheckout alloc] initWithPublicKey: "ENV_PUBLIC_KEY" checkoutPreference:checkoutPreference discount:nil navigationController:self.navigationController];
[checkout start];
```
]]]

Como visto no exemplo, você pode ocultar o botão de Promoções com o método disableBankDeals para casos de pagamentos em uma única parcela.

### Configuração de cor

É possível alterar as cores da interface gráfica do fluxo de pagamento utilizando o seguinte código:

[[[

```android
===
En tu archivo `colors.xml` deberás hacer referencia a los colores que quieras cambiar del checkout y setearlos con tus propios colores.
===

<!-- Color principal -->
<color name="ui_components_android_color_primary">@color/your_color</color>

<!-- Color de la Toolbar -->
<color name="px_toolbar_text">@color/your_color</color>

<!-- Color de la Status Bar -->
<color name="ui_components_android_color_primary_dark">@color/your_color</color>

<!-- Color primario del Spinner-->
<color name="ui_components_spinner_primary_color">@color/your_color</color>

<!-- Color secundario del Spinner -->
<color name="ui_components_spinner_secondary_color">@color/your_color</color>

<!-- Color de fondo del Spinner -->
<color name="px_background_loading">@color/your_color</color>

<!-- Color de los iconos de los medios de pago -->
<color name="px_paymentMethodTint">@color/your_color</color>

<!-- Color de los inputs -->
<color name="px_input">@color/your_color</color>
```
```swift
public func startMercadoPagoCheckout(_ checkoutPreference CheckoutPreference) {
    let decorationPreference: DecorationPreference = DecorationPreference()
    decorationPreference.setBaseColor(color: UIColor.purple)
    decorationPreference.enableDarkFont()
    MercadoPagoCheckout.setDecorationPreference(decorationPreference)

    let checkout = MercadoPagoCheckout(publicKey: "ENV_PUBLIC_KEY", accessToken: nil, checkoutPreference: checkoutPreference,
    navigationController: self.navigationController!)

    checkout.start()
}
```
```objective-c
DecorationPreference *decorationPreference = [[DecorationPreference alloc] initWithBaseColor:[UIColor fromHex:@"#CA254D"]];
[decorationPreference enableDarkFont];
[MercadoPagoCheckout setDecorationPreference:decorationPreference];

-(void)startMercadoPagoCheckout:(CheckoutPreference *)checkoutPreference {
    MercadoPagoCheckout *checkout = [[MercadoPagoCheckout alloc] initWithPublicKey: "ENV_PUBLIC_KEY" checkoutPreference:checkoutPreference discount:nil navigationController:self.navigationController];
    [checkout start];
}
```

]]]

O SDK permite configurar a cor no formato hexadecimal, ou seja, por exemplo: **setBaseColor("#060d72")**.
