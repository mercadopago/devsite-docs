---
sites_supported:
    - mla
    - mlb
    - mlm
    - mco
    - mcl
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

Você pode especificar os tipos de meio de pagamento que não quiser aceitar (Dinheiro, Cartões de Crédito ou Débito), excluindo-os ao criar a Checkout Preference.

En el contenido de la preferencia de pago puedes agregar los medios de pago o tipos de medio que no quieras soportar.

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

Na classe FlowPreference, você poderá definir se deseja exibir uma tela com o resumo do pagamento (Revisão e Confirmação) ou se deseja anunciar campanhas de descontos, entre outras opções.

Para incorporar ao Checkout as opções definidas na classe FlowPreference, você deve adicionar uma requisição no início do Checkout, conforme exibido no código a seguir:

[[[
```android
	FlowPreference flowPreference = new FlowPreference.Builder()
                .disableReviewAndConfirmScreen()
                .disableDiscount()
                .disableBankDeals()
                .build();

        new MercadoPagoCheckout.Builder()
                .setActivity(this)
                .setPublicKey(mPublicKey)
                .setCheckoutPreference(mCheckoutPreference())
                .setFlowPreference(flowPreference)
                .startForPayment();
```
```swift
	let flowPrefernece = FlowPreference()
            flowPrefernece.disableReviewAndConfirmScreen()
            flowPrefernece.disableDiscount()
            flowPrefernece.disableBankDeals()

            MercadoPagoCheckout.setFlowPreference(flowPrefernece)

	 let checkout = MercadoPagoCheckout(publicKey: publicKey, accessToken: nil, checkoutPreference: checkoutPreference,
         navigationController: self.navigationController!)
	   checkout.start()
```
```Objective-c
	FlowPreference *flowPreference = [[FlowPreference alloc]init];
    [flowPreference disableReviewAndConfirmScreen];
    [flowPreference disableDiscount];
    [flowPreference disableBankDeals];
    [MercadoPagoCheckout setFlowPreference:flowPreference];

	-(void)startMercadoPagoCheckout:(CheckoutPreference *)checkoutPreference {
    		MercadoPagoCheckout *checkout = [[MercadoPagoCheckout alloc] initWithPublicKey: TEST_PUBLIC_KEY checkoutPreference:checkoutPreference discount:nil navigationController:self.navigationController];
		[checkout start];
	}
```
]]]

Como visto no exemplo, você pode ocultar o botão de Promoções com o método disableBankDeals para casos de pagamentos em uma única parcela.

## Pagamentos em seu Servidor

Se precisar fazer alguma validação em seu servidor no momento do pagamento, você pode configurar o seu próprio serviço de pagamentos.

Na classe ServicePreference, você pode configurar a URL e a URI do seu serviço juntamente com um Map para que possa enviar as informações que deseja.

No momento de postar o pagamento, o SDK o fará em seu lugar, [o qual deverá criar o pagamento](https://www.mercadopago.com.ar/developers/es/api-docs/custom-checkout/create-payments/)e efetuar as validações inerentes ao seu negócio. O SDK irá esperar receber um pagamento, da mesma forma que o serviço do Mercado Pago responde.

Assim que a ServicePreference é criada, você deve iniciar o fluxo de pagamento do Mercado Pago, conforme indicado no código abaixo:

[[[

```android
        public void submit(View view) {
        CheckoutPreference checkoutPreference = new CheckoutPreference.Builder()
                .setSite(Sites.ARGENTINA)
                .addItem(new Item("Test Item", new BigDecimal("100")))
                .build();

        HashMap<String, Object> extraData = new HashMap<>();
        map.put("item_id", "id");

        ServicePreference servicePreference = new ServicePreference.Builder()
                .setCreatePaymentURL("https://www.tunombre.com", "/createPayment", extraData)
                .build();

        new MercadoPagoCheckout.Builder()
                .setActivity(this)
                .setServicePreference(servicePreference)
                .setPublicKey("TEST-0b74577e-863f-4a0e-9932-b87761cda03e")
                .setCheckoutPreference(checkoutPreference)
                .startForPayment();
    }
```
```swift
	let item = Item(_id: "Item_Id", title: "Remeras", quantity: [FAKER][NUMBER][BETWEEN][1,10], unitPrice: 50, description: nil, currencyId: "[FAKER][CURRENCY][ACRONYM]")
	let payer = Payer(_id: "Payer_Id", email: "sarasa@gmail.com", type: nil, identification: nil, entityType: nil)

	let checkoutPreference = CheckoutPreference()
	checkoutPreference.items = [item]
	checkoutPreference.payer = payer
	checkoutPreference.setId("MLA")

	let servicePreference = ServicePreference()
	servicePreference.setCreatePayment(baseURL: "https://your-base-URL.com/", URI: "your_create_preference_URI",
    additionalInfo: ["item_id" : "id", "quantity" : [FAKER][NUMBER][BETWEEN][1,10]])

	MercadoPagoCheckout.setServicePreference(servicePreference)

	 let checkout = MercadoPagoCheckout(publicKey: publicKey, accessToken: nil, checkoutPreference: checkoutPreference,
         navigationController: self.navigationController!)

	   checkout.start()
```
```Objective-c
	 Item *item = [[Item alloc] initWith_id:@"itemId" title:@"item title 2" quantity:[FAKER][NUMBER][BETWEEN][1,10] unitPrice:2 description:@"item description" currencyId:@"[FAKER][CURRENCY][ACRONYM]"];
    Payer *payer = [[Payer alloc] initWith_id:@"payerId" email:@"payer@email.com" type:nil identification:nil entityType:nil];

    NSArray *items = [NSArray arrayWithObjects:item, item, nil];

    self.pref = [[CheckoutPreference alloc] initWithItems:items payer:payer paymentMethods:nil];
	[self.pref setSiteId:@"[FAKER][GLOBALIZE][UPPER_SITE_ID]"];

	ServicePreference * servicePreference = [[ServicePreference alloc] init];
	 NSDictionary *extraParams = @{
                                  @"merchant_access_token" : @"mla-cards-data" };
	[servicePreference setCreatePaymentWithBaseURL:@"https://private-0d59c-mercadopagoexamples.apiary-mock.com" URI:@"/create_payment" additionalInfo:extraParams];
	[MercadoPagoCheckout setServicePreference:servicePreference];

	-(void)startMercadoPagoCheckout:(CheckoutPreference *)checkoutPreference {
		    self.mpCheckout = [[MercadoPagoCheckout alloc] initWithPublicKey: TEST_PUBLIC_KEY accessToken: nil checkoutPreference:checkoutPreference paymentData:nil discount:nil navigationController:self.navigationController paymentResult: nil];
    [self.mpCheckout start];
	}
```
]]]
