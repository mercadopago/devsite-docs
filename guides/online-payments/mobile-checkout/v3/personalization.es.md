---
sites_supported:
    - mla
    - mlb
    - mlm
    - mco
    - mlc
    - mpe
---
# Personalización

> WARNING
>
> Pre-requisitos
>
> *  Esta guía asume que ya has seguido los pasos de la sección introducción y recibiendo pagos de la documentación para la instalación del SDK y la integración por defecto, junto con la creación de la preferencia de pago.

## Personaliza tu preferencia de pago

De ser necesario, al momento de crear la preferencia de pago en tu servidor puedes especificar restricciones como exclusiones de medios o tipos de pago específicos y establecer la cantidad de cuotas máximas o por _default_.

#### Excluir Medios de Pago

Puedes especificar los tipos de medio de pago que no quieras soportar (Efectivo, Tarjetas de Crédito o Débito) excluyéndolos en la creación de la _Checkout Preference_.

En el contenido de la preferencia de pago puedes agregar los medios de pago o tipos de medio que no quieras soportar.

*Excluir un tipo de medio de pago específico:*


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

*Excluir más de un tipo de medio de pago:*


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

O incluso puedes determinar qué medios de pago específicos (Visa, Mastercard, etc) quieres excluir del _checkout_:

*Excluir un medio de pago específico:*


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

*Excluir más de un medio de pago:*


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

#### Personalizar Cuotas

Puedes precisar la cantidad máxima de cuotas que quieres soportar para tus medios de pago:


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

O también establecer una cantidad de cuotas por _default_ que se seleccionará automáticamente, si es que existe para el medio de pago seleccionado por el usuario. De lo contrario, se le mostrará la pantalla de cuotas para que él elija:




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

## Personaliza el flujo de pago

La Preferencia de Flujo permite personalizar y configurar el flujo para que puedas lograr la mejor experiencia de pago.

En la clase _FlowPreference_ podrás configurar, tanto si deseas mostrar una pantalla con el resumen de lo que se va a pagar (Revisa y Confirma) como si deseas comunicar campañas de descuentos, entre otras opciones.

Para incorporar en el _Checkout_ las opciones configuradas en la clase _FlowPreference_ deberás agregar una instancia de la misma en el inicio del _Checkout_, como se muestra en el siguiente código:

[[[
```android
	CheckoutPreference checkoutPreference = new CheckoutPreference.Builder()
                .setSite(Sites.ARGENTINA)
                .addItem(new Item("Blue shirt", new BigDecimal("100")))
                .build();

FlowPreference flowPreference = new FlowPreference.Builder()
                .disableReviewAndConfirmScreen()
                .disableDiscount()
                .disableBankDeals()
                .build();

new MercadoPagoCheckout.Builder()
                .setActivity(this)
                .setPublicKey("ENV_PUBLIC_KEY")
                .setCheckoutPreference(checkoutPreference)
                .setFlowPreference(flowPreference)
                .startForPayment();
```
```swift
let flowPrefernece = FlowPreference()
            flowPrefernece.disableReviewAndConfirmScreen()
            flowPrefernece.disableDiscount()
            flowPrefernece.disableBankDeals()

MercadoPagoCheckout.setFlowPreference(flowPrefernece)

let item = Item(_id: "itemId", title: "Blue shirt", quantity: 10, unitPrice: [FAKER][COMMERCE][PRICE], description: nil, currencyId: "[FAKER][CURRENCY][ACRONYM]")
let payer = Payer(_id: "payerId", email: "john@yourdomain.com", type: nil, identification: nil, entityType: nil)

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

Item *item = [[Item alloc] initWith_id:@"itemId" title:@"Blue shirt" quantity:10 unitPrice:[FAKER][COMMERCE][PRICE] description:@"item description" currencyId:@"[FAKER][CURRENCY][ACRONYM]"];
Payer *payer = [[Payer alloc] initWith_id:@"payerId" email:@"john@yourdomain.com" type:nil identification:nil entityType:nil];
    
NSArray *items = [NSArray arrayWithObjects:item, item, nil];

CheckoutPreference *checkoutPreference = [[CheckoutPreference alloc] initWithItems:items payer:payer paymentMethods:nil];
[checkoutPreference setSiteId:@"MLA"];

MercadoPagoCheckout * checkout = [[MercadoPagoCheckout alloc] initWithPublicKey: "ENV_PUBLIC_KEY" checkoutPreference:checkoutPreference discount:nil navigationController:self.navigationController];
[checkout start];
```
]]]

Como se observa en el ejemplo, puedes ocultar el botón de "Promociones" con el método disableBankDeals para aquellos casos en lo que solo solicites pagos en una cuota.

## Paga en tu Servidor

Si necesitas hacer alguna validación en tu servidor al momento de realizar el pago, puedes configurar tu propio servicio de pagos.

En la clase _ServicePreference_ puedes configurar la URL y la URI de tu servicio junto con un _Map_ para que puedas enviar la información que desees.

Al momento de postear el pago, el SDK lo hará a tu servicio, [el cual deberá crear el pago](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/reference/payments/_payments/post) y hacer la validaciones inherentes a tu negocio. El SDK esperará recibir un pago, tal como responde el servicio de Mercado Pago.

Una vez creada la _ServicePreference_, debes iniciar el flujo de pago de Mercado Pago, tal como se muestra en el siguiente código:

[[[

```android
public void submit(View view) {
  CheckoutPreference checkoutPreference = new CheckoutPreference.Builder()
          .setSite(Sites.ARGENTINA)
          .addItem(new Item("Blue shirt", new BigDecimal("100")))
          .build();

  HashMap<String, Object> extraData = new HashMap<>();
  map.put("item_id", "id");

  ServicePreference servicePreference = new ServicePreference.Builder()
          .setCreatePaymentURL("https://your-base-url.com", "/your-create-payment-uri", extraData)
          .build();

  new MercadoPagoCheckout.Builder()
          .setActivity(this)
          .setServicePreference(servicePreference)
          .setPublicKey("ENV_PUBLIC_KEY")
          .setCheckoutPreference(checkoutPreference)
          .startForPayment();
}
```
```swift
let item = Item(_id: "itemId", title: "Blue shirt", quantity: 10, unitPrice: [FAKER][COMMERCE][PRICE], description: nil, currencyId: "[FAKER][CURRENCY][ACRONYM]")
let payer = Payer(_id: "payerId", email: "john@yourdomain.com", type: nil, identification: nil, entityType: nil)


	let checkoutPreference = CheckoutPreference()
	checkoutPreference.items = [item]
	checkoutPreference.payer = payer
	checkoutPreference.setId("[FAKER][GLOBALIZE][SITE_ID]")


let servicePreference = ServicePreference()
servicePreference.setCreatePayment(baseURL: "https://your-base-url.com/", URI: "/your-create-payment-uri",
additionalInfo: ["item_id" : "id", "quantity" : 10])

MercadoPagoCheckout.setServicePreference(servicePreference)

 let checkout = MercadoPagoCheckout(publicKey: "ENV_PUBLIC_KEY", accessToken: nil, checkoutPreference: checkoutPreference, navigationController: self.navigationController!)

checkout.start()
```
```Objective-c
 
	 Item *item = [[Item alloc] initWith_id:@"itemId" title:@"item title 2" quantity:10 unitPrice:2 description:@"item description" currencyId:@"[FAKER][CURRENCY][ACRONYM]"];
    Payer *payer = [[Payer alloc] initWith_id:@"payerId" email:@"payer@email.com" type:nil identification:nil entityType:nil];

    NSArray *items = [NSArray arrayWithObjects:item, item, nil];

    self.pref = [[CheckoutPreference alloc] initWithItems:items payer:payer paymentMethods:nil];
	[self.pref setSiteId:@"[FAKER][GLOBALIZE][SITE_ID]"];

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

- Para obtener información sobre como hacer pruebas, dirígete a la sección [Probando integración](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/online-payments/mobile-checkout/v3/testing).
