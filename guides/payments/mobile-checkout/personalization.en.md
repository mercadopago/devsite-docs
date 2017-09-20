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
# **Customization**

> WARNING
>
> Prerequisites
>
> *  This guide assumes that you have followed the Introduction and Receive Payments sections of the documentation for the installation, default integration of the SDK and the creation of a payment preference.

## Customize the payment preference

When creating the payment preference in your server you can specify restrictions such as payment method exclusions, specific payment types supported or set default or maximum amounts of installments.

#### Excluir Medios de Pago

By default, we offer all payment methods available for the country where you are running the integration. If your business model does not support any of these [payment types](#localización), or you [do not want to accept any particular method](https://api.mercadopago.com/v1/payment_methods/search?site_id=MLA&marketplace=NONE), you can exclude it when creating the payment preference.

In addition, you can set the payment method or the number of installments that should be displayed by default, as well as the maximum number of installments to offer.

*Exclude a specific payment type*


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

*Exclude more than one payment type:*


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

Or you can even set which specific payment methods (Visa, Mastercard, et) you want to exclude from checkout:

*Exclude a specific payment method:*


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

*Exclude more than one payment method:*


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

#### Customize installments

You can set the maximum number of installments you want to offer for your payment methods:

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

Also you can set a default amount of installments, which will automatically be selected if it exists for the payment method selected by the user. If not, an installment selection step will be shown to the user to choose the amount:


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

## Customize the payment flow

Flow preference allows you to set and customize the payment flow to offer your users the best payment experience.

In the `FlowPreference`class you can set if you want to display or not a step which shows a summary of what is going to be paid (review and confirm step), or the discount communications et.

To add to checkout the configurations done in `FlowPreference`class, you should create an instance of this class and add it to the checkout initialization as shown below:

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

As observed in the example, you can hide "deals" button with `disableBankDeals` method for those cases in which you will only accept payments without installments.

## Pay in your server

If you need to make any validation in your server before making the payment, you can set your own payment service.

In the `ServicePreference` class you can set the URL and the URI of your service together with a map in which you can set the information you want.

When posting the payment, the SDK will post it to your service, [it must create the paymet](https://www.mercadopago.com.ar/developers/es/api-docs/custom-checkout/create-payments/) and make your own business validation. The SDK waits for a payment response, just like Mercado Pago payment service.

Once created the `ServicePreference` you must start the checkout with it as shown below:

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
	[self.pref setSiteId:@“MLA”];

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
