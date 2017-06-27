# **Personalización**

> WARNING
> 
> Pre-requisitos
>
> *  Esta guía asume que ya has seguido los pasos de la sección introducción y recibiendo pagos de la documentación para la instalación del SDK y la integración por defecto, junto con la creación de la preferencia de pago.

## Paga en tu Servidor 

Si necesitas hacer alguna validación en tu servidor al momento de realizar el pago, puedes configurar tu propio servicio de pagos.  De esta manera no tendrás que crear una preferencia en los servidores de Mercado Pago, deberás crear una preferencia de pago local. 

### Crea una preferencia de pago local

La preferencia de pago local contiene la información sobre el producto o servicio a pagar, ésta debe tener como mínimo un ítem y el país desde el cual se quiere realizar el pago.  A su vez, el Item debe recibir una descripción y el monto, o una descripción, cantidad y precio unitario.


```java
CheckoutPreference checkoutPreference = new CheckoutPreference.Builder()
.addItem(new Item("Item", new BigDecimal("1000")))
.setSite(Sites.ARGENTINA)
build();
```
```swift
	let item = Item(_id: "Item_Id", title: "Remeras", quantity: 1, unitPrice: 50, description: nil, currencyId: "ARS")
	let payer = Payer(_id: "Payer_Id", email: "sarasa@gmail.com", type: nil, identification: nil, entityType: nil)

	let checkoutPreference = CheckoutPreference()
	checkoutPreference.items = [item]
	checkoutPreference.payer = payer
	checkoutPreference.setId("MLA")
```
```Objective-c	  
	Item *item = [[Item alloc] initWith_id:@"itemId" title:@"item title" quantity:2 unitPrice:2 description:@"item description" currencyId:@"ARS"];
    
    Payer *payer = [[Payer alloc] initWith_id:@"payerId" email:@"payer@email.com" type:nil identification:nil entityType:nil];
    
    NSArray *items = [NSArray arrayWithObjects:item, item, nil];
        
    self.pref = [[CheckoutPreference alloc] initWithItems:items payer:payer paymentMethods:nil];
	[self.pref setSiteId:@“MLA”];
```
En la clase ServicePreference puedes configurar la URL y la URI de tu servicio junto con un Map para que puedas enviar la información que desees.

Al momento de postear el pago, el SDK lo hará a tu servicio, [el cual deberá crear el pago](https://www.mercadopago.com.ar/developers/es/api-docs/custom-checkout/create-payments/) y hacer la validaciones inherentes a tu negocio. El SDK esperará recibir un pago, tal como responde el servicio de Mercado Pago.

Una vez creada la ServicePreference, debes iniciar el flujo de pago de Mercado Pago, tal como se muestra en el siguiente código:

```java
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
	let item = Item(_id: "Item_Id", title: "Remeras", quantity: 1, unitPrice: 50, description: nil, currencyId: "ARS")
	let payer = Payer(_id: "Payer_Id", email: "sarasa@gmail.com", type: nil, identification: nil, entityType: nil)

	let checkoutPreference = CheckoutPreference()
	checkoutPreference.items = [item]
	checkoutPreference.payer = payer
	checkoutPreference.setId("MLA")

	let servicePreference = ServicePreference()
	servicePreference.setCreatePayment(baseURL: "https://your-base-URL.com/", URI: "your_create_preference_URI",
    additionalInfo: ["item_id" : "id", "quantity" : 1])

	MercadoPagoCheckout.setServicePreference(servicePreference)
	
	 let checkout = MercadoPagoCheckout(publicKey: publicKey, accessToken: nil, checkoutPreference: checkoutPreference,
         navigationController: self.navigationController!)

	   checkout.start()
```
```Objective-c
	 Item *item = [[Item alloc] initWith_id:@"itemId" title:@"item title 2" quantity:2 unitPrice:2 description:@"item description" currencyId:@"ARS"];
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

### Personaliza tu preferencia de pago local

De ser necesario, puedes especificar restricciones dentro del objeto CheckoutPreference como exclusiones de medios o tipos de pago específicos y establecer la cantidad de cuotas máximas o por default.

#### Excluir Medios de Pago

Puedes especificar los tipos de medio de pago que no quieras soportar (Efectivo, Tarjetas de Crédito o Débito) excluyéndolos en la creación de la Checkout Preference.

*Excluir un tipo de medio de pago específico:*

[Android]
```java
CheckoutPreference checkoutPreference = new CheckoutPreference.Builder()
.addItem(new Item("Item", new BigDecimal("1000")))
.setSite(Sites.ARGENTINA)
 //Excluir un tipo de medio de pago específico.
.addExcludedPaymentType(PaymentTypes.TICKET)
.build(); 
```

[iOS - Swift]
```swift
let item = Item(_id: "Item_Id", title: "Remeras", quantity: 1, unitPrice: 50, description: nil, currencyId: "ARS")
	let payer = Payer(_id: "Payer_Id", email: "sarasa@gmail.com", type: nil, identification: nil, entityType: nil)

	let checkoutPreference = CheckoutPreference()
	checkoutPreference.items = [item]
	checkoutPreference.payer = payer
	checkoutPreference.setId("MLA")
	checkoutPreference.setExcludedPaymentTypes(["ticket"])
```

[iOS - Objective-C]
```Objective-c
	  Item *item = [[Item alloc] initWith_id:@"itemId" title:@"item title" quantity:2 unitPrice:2 description:@"item description" currencyId:@"ARS"];
    
    Payer *payer = [[Payer alloc] initWith_id:@"payerId" email:@"payer@email.com" type:nil identification:nil entityType:nil];
    
    NSArray *items = [NSArray arrayWithObjects:item, item, nil];
        	
PaymentPreference *paymentExclusions = [[PaymentPreference alloc] init];
    paymentExclusions.excludedPaymentTypeIds = [NSSet setWithObjects:@"ticket", nil];
    
    self.pref = [[CheckoutPreference alloc] initWithItems:items payer:payer paymentMethods:paymentExclusions];

	[self.pref setSiteId:@“MLA”];
```

*Excluir más de un tipo de medio de pago:*

[Android]
```java
List<String> excludedPaymentTypes = new ArrayList<>();
excludedPaymentTypes.add(PaymentTypes.TICKET);
excludedPaymentTypes.add(PaymentTypes.BANK_TRANSFER);

CheckoutPreference checkoutPreference = new CheckoutPreference.Builder()
.addItem(new Item("Item", new BigDecimal("1000")))
.setSite(Sites.ARGENTINA)
//Excluir varios medios de pago.
.addExcludedPaymentTypes(excludedPaymentTypes)
.build();                                              
```
```swift
let item = Item(_id: "Item_Id", title: "Remeras", quantity: 1, unitPrice: 50, description: nil, currencyId: "ARS")
	let payer = Payer(_id: "Payer_Id", email: "sarasa@gmail.com", type: nil, identification: nil, entityType: nil)

	let checkoutPreference = CheckoutPreference()
	checkoutPreference.items = [item]
	checkoutPreference.payer = payer
	checkoutPreference.setId("MLA")
	checkoutPreference.setExcludedPaymentTypes(["ticket","bank_transfer"])
```
```Objective-c
Item *item = [[Item alloc] initWith_id:@"itemId" title:@"item title" quantity:2 unitPrice:2 description:@"item description" currencyId:@"ARS"];
    
    Payer *payer = [[Payer alloc] initWith_id:@"payerId" email:@"payer@email.com" type:nil identification:nil entityType:nil];
    
    NSArray *items = [NSArray arrayWithObjects:item, item, nil];
        	
PaymentPreference *paymentExclusions = [[PaymentPreference alloc] init];
    paymentExclusions.excludedPaymentTypeIds = [NSSet setWithObjects:@"bank_transfer", @"ticket", nil];
    
    self.pref = [[CheckoutPreference alloc] initWithItems:items payer:payer paymentMethods:paymentExclusions];

	[self.pref setSiteId:@“MLA”];
```

O incluso puedes determinar qué medios de pago específicos (Visa, Mastercard, etc) quieres excluir del checkout:

*Excluir un medio de pago específico:*

```java
CheckoutPreference checkoutPreference = new CheckoutPreference.Builder()
.addItem(new Item("Item", new BigDecimal("1000")))
.setSite(Sites.ARGENTINA)
 //Excluir un medio de pago específico
.addExcludedPaymentMethod(PaymentMethods.ARGENTINA.VISA) 
.build(); 
```
```swift
let item = Item(_id: "Item_Id", title: "Remeras", quantity: 1, unitPrice: 50, description: nil, currencyId: "ARS")
	let payer = Payer(_id: "Payer_Id", email: "sarasa@gmail.com", type: nil, identification: nil, entityType: nil)

	let checkoutPreference = CheckoutPreference()
	checkoutPreference.items = [item]
	checkoutPreference.payer = payer
	checkoutPreference.setId("MLA")
	checkoutPreference.setExcludedPaymentMethods(["visa"])
```
```Objective-c
Item *item = [[Item alloc] initWith_id:@"itemId" title:@"item title" quantity:2 unitPrice:2 description:@"item description" currencyId:@"ARS"];
    
    Payer *payer = [[Payer alloc] initWith_id:@"payerId" email:@"payer@email.com" type:nil identification:nil entityType:nil];
    
    NSArray *items = [NSArray arrayWithObjects:item, item, nil];
        	
PaymentPreference *paymentExclusions = [[PaymentPreference alloc] init];
    paymentExclusions.excludedPaymentMethods = [NSSet setWithObjects:@"visa", nil];
    
    self.pref = [[CheckoutPreference alloc] initWithItems:items payer:payer paymentMethods:paymentExclusions];

	[self.pref setSiteId:@“MLA”];
```

*Excluir más de un medio de pago:*

```java
List<String> excludedPaymentMethods = new ArrayList<>();
excludedPaymentMethods.add(PaymentMethods.ARGENTINA.VISA);
excludedPaymentMethods.add(PaymentMethods.ARGENTINA.MASTER);

CheckoutPreference checkoutPreference = new CheckoutPreference.Builder()
.addItem(new Item("Item", new BigDecimal("1000")))
.setSite(Sites.ARGENTINA)
//Excluir varios medios de pago
.addExcludedPaymentMethods(excludedPaymentMethods)
.build();                                              
```
```swift
let item = Item(_id: "Item_Id", title: "Remeras", quantity: 1, unitPrice: 50, description: nil, currencyId: "ARS")
	let payer = Payer(_id: "Payer_Id", email: "sarasa@gmail.com", type: nil, identification: nil, entityType: nil)

	let checkoutPreference = CheckoutPreference()
	checkoutPreference.items = [item]
	checkoutPreference.payer = payer
	checkoutPreference.setId("MLA")
	checkoutPreference.setExcludedPaymentMethods(["visa","master"])
```
```Objective-c
Item *item = [[Item alloc] initWith_id:@"itemId" title:@"item title" quantity:2 unitPrice:2 description:@"item description" currencyId:@"ARS"];
    
    Payer *payer = [[Payer alloc] initWith_id:@"payerId" email:@"payer@email.com" type:nil identification:nil entityType:nil];
    
    NSArray *items = [NSArray arrayWithObjects:item, item, nil];
        	
PaymentPreference *paymentExclusions = [[PaymentPreference alloc] init];
    paymentExclusions.excludedPaymentMethods = [NSSet setWithObjects:@"visa",@"master", nil];
    
    self.pref = [[CheckoutPreference alloc] initWithItems:items payer:payer paymentMethods:paymentExclusions];

	[self.pref setSiteId:@“MLA”];
```

#### Personalizar Cuotas

Puedes precisar la cantidad máxima de cuotas que quieres soportar para tus medios de pago:

```java
CheckoutPreference checkoutPreference = new CheckoutPreference.Builder()
.addItem(new Item("Item", new BigDecimal("1000")))
.setSite(Sites.ARGENTINA)
//Limitar la cantidad de cuotas
.setMaxInstallments(1) 
.build();
```
```swift
let item = Item(_id: "Item_Id", title: "Remeras", quantity: 1, unitPrice: 50, description: nil, currencyId: "ARS")
	let payer = Payer(_id: "Payer_Id", email: "sarasa@gmail.com", type: nil, identification: nil, entityType: nil)

	let checkoutPreference = CheckoutPreference()
	checkoutPreference.items = [item]
	checkoutPreference.payer = payer
	checkoutPreference.setId("MLA")
	checkoutPreference.setMaxInstallments(1)
```
```Objective-c
Item *item = [[Item alloc] initWith_id:@"itemId" title:@"item title" quantity:2 unitPrice:2 description:@"item description" currencyId:@"ARS"];
    
    Payer *payer = [[Payer alloc] initWith_id:@"payerId" email:@"payer@email.com" type:nil identification:nil entityType:nil];
    
    NSArray *items = [NSArray arrayWithObjects:item, item, nil];
        	
PaymentPreference *paymentExclusions = [[PaymentPreference alloc] init];
    paymentExclusions.setMaxInstallments = 1;
        
    self.pref = [[CheckoutPreference alloc] initWithItems:items payer:payer paymentMethods:paymentExclusions];

	[self.pref setSiteId:@“MLA”];
```

O también establecer una cantidad de coutas por default que se seleccionará automáticamente, si es que existe para el medio de pago seleccionado por el usuario. De lo contrario, se le mostrará la pantalla de coutas para que él elija:

```java
CheckoutPreference checkoutPreference = new CheckoutPreference.Builder()
.addItem(new Item("Item", new BigDecimal("1000")))
.setSite(Sites.ARGENTINA)
//Setear una cantidad de cuotas default
.setDefaultInstallments(3)
.build();
```
```swift
let item = Item(_id: "Item_Id", title: "Remeras", quantity: 1, unitPrice: 50, description: nil, currencyId: "ARS")
	let payer = Payer(_id: "Payer_Id", email: "sarasa@gmail.com", type: nil, identification: nil, entityType: nil)

	let checkoutPreference = CheckoutPreference()
	checkoutPreference.items = [item]
	checkoutPreference.payer = payer
	checkoutPreference.setId("MLA")
	checkoutPreference.setDefaultInstallments(3)
```
```Objective-c
Item *item = [[Item alloc] initWith_id:@"itemId" title:@"item title" quantity:2 unitPrice:2 description:@"item description" currencyId:@"ARS"];
    
    Payer *payer = [[Payer alloc] initWith_id:@"payerId" email:@"payer@email.com" type:nil identification:nil entityType:nil];
    
    NSArray *items = [NSArray arrayWithObjects:item, item, nil];
        	
PaymentPreference *paymentExclusions = [[PaymentPreference alloc] init];
    paymentExclusions.setDefaultInstallments = 3;
        
    self.pref = [[CheckoutPreference alloc] initWithItems:items payer:payer paymentMethods:paymentExclusions];

	[self.pref setSiteId:@“MLA”];
```

----------

## Preferencia de Flujo

La Preferencia de Flujo permite personalizar y configurar el flujo para que puedas lograr la mejor experiencia de pago. 

En la clase FlowPreference podrás configurar, tanto si deseas mostrar una pantalla con el resumen de lo que se va a pagar (Revisa y Confirma) como si deseas comunicar campañas de descuentos, entre otras opciones.

Para incorporar en el Checkout las opciones configuradas en la clase FlowPreference deberás agregar una instancia de la misma en el inicio del Checkout, como se muestra en el siguiente código:

```java
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
		    self.mpCheckout = [[MercadoPagoCheckout alloc] initWithPublicKey: TEST_PUBLIC_KEY accessToken: nil checkoutPreference:checkoutPreference paymentData:nil discount:nil navigationController:self.navigationController paymentResult: nil];
    [self.mpCheckout start];
	}
```
Como se observa en el ejemplo, puedes ocultar el botón de "Promociones" con el método disableBankDeals para aquellos casos en lo que solo solicites pagos en una cuota.
