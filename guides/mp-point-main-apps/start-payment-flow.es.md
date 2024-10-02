# Iniciar el flujo de pago

Para ofrecer una experiencia fluida en tu app, nuestro SDK facilita la inicialización del flujo de pago a través de la clase `PaymentFlow`. De esta forma:

[[[
```kotlin
val paymentFlow = MPManager.paymentFlow

val amount = "2.0"
val description = "Payment description"
val intentSuccess = paymentFlow.buildCallbackUri(
   callback = "mercadopago://smart_integrations/payment_result",
   methodCallback = "success",
   metadata = hashMapOf("message" to "testSuccess"),
   appID = "demo.app"
)
val intentError = paymentFlow.buildCallbackUri(
   callback = "mercadopago://smart_integrations/payment_result",
   methodCallback = "error",
   metadata = hashMapOf("message" to "testError"),
   appID = "demo.app"
)

val paymentFlowData = PaymentFlowData(
   amount = amount,
   description = description,
   intentSuccess = intentSuccess,
   intentError = intentError,
   paymentMethod = PaymentMethod.CREDIT_CARD.name,
   installments = 6
)
paymentFlow.launchPaymentFlowActivity(
   paymentFlowData = paymentFlowData,
   context = context
) { response ->
   response.doIfSuccess { message ->
       // Manejo de éxito utilizando un mensaje
   }.doIfError { error ->
       // Manejo del error
   }
}
```
```java
final PaymentFlow paymentFlow = MPManager.INSTANCE.getPaymentFlow();

final HashMap<String, String> successMetadata = new HashMap<>();
successMetadata.put("success", "testSuccess");

final HashMap<String, String> errorMetadata = new HashMap<>();
successMetadata.put("message", "testError");

final String amount = "2.0";
final String description = "Payment description";
final Uri intentSuccess = paymentFlow.buildCallbackUri(
   "mercadopago://smart_integrations/payment_result",
   "success",
   successMetadata,
   "demo.app"
);
final Uri intentError = paymentFlow.buildCallbackUri(
   "mercadopago://smart_integrations/payment_result",
   "error",
   errorMetadata,
   "demo.app"
);

final PaymentFlowData paymentFlowData = new PaymentFlowData(
   amount,
   description,
   intentSuccess,
   intentError,
   PaymentMethod.CREDIT_CARD.name(),
   6
);

final Function1<MPResponse<String>, Unit> callback = (final MPResponse<String> response) -> {
 if (response.getStatus() == ResponseStatus.SUCCESS) {
   // Manejo de éxito utilizando un mensaje
 } else {
   // Manejo del error
 }
 return Unit.INSTANCE;
};

paymentFlow.launchPaymentFlowActivity(paymentFlowData, context, callback);
```
]]]

|Campo|Descripción|
|---|---|
|**amount (String)**|E l monto usado para iniciar el flujo de pago.|
|**description (String)**| La descripción usada para iniciar el flujo de pago. Su uso es opcional.|
|**intentSuccess (Uri)**| URI que llama la pantalla de éxito. Se usa para formar un deeplink que envía la actividad de éxito.|
|**intentError (Uri)**| URI que llama la pantalla de error. Se usa para formar un deeplink que envía la actividad de error.|
|**paymentMethod (String)**| El medio de pago para realizar la operación. Su uso es opcional.|
|**installments (Int)**| El número de cuotas usado para iniciar el flujo de pago. Está disponible solo para Brasil, y su uso es opcional.|
|**launchPaymentFlowActivity**| Este método inicia el flujo de pago usando la app SmartPOS.|
|**paymentFlowData (PaymentFlowData)**| Modelo de datos necesario para la apertura del flujo.|
|**context (Context)**| Contexto de dónde se inciará el flujo.|
|**allback (MPResponse&lt;String&gt; -> Unit)**| Ofrece el resultado de la apertura del flujo de pago.|

## Construir una URI para apertura del flujo de pago

La función `buildCallbackUri` está diseñada para construir una URI válida que permita abrir una actividad específica, con base en la estrategia del _deeplink_. Para acceder a ella, usa la función `PaymentFlow` a través del objeto `MPManager`.

> WARNING
>
> Atención
>
> Configura correctamente el deeplink en tu `AndroidManifest` para que la actividad correspondiente direccione el llamado.

Consulta cómo implementar esta funcionalidad:

[[[
```kotlin
val paymentFlow = MPManager.paymentFlow

val uriResult = paymentFlow.buildCallbackUri(
   callback = "tuHost://tuApp/result",
   methodCallback = "error",
   metadata = hashMapOf("message" to "result"),
   appID = "demo.app"
)
```
```java
final PaymentFlow paymentFlow = MPManager.INSTANCE.getPaymentFlow();

final HashMap<String, String> resultMetadata = new HashMap<>();
resultMetadata.put("message", "result");

final Uri uriResult = paymentFlow.buildCallbackUri(
   "tuHost://tuApp/result",
   "error",
   resultMetadata,
   "demo.app"
);
```
]]]

|Campo|Descripción|
|---|---|
|**callback (String)**| El monto de la URI para llamar el _deeplink_. Ejemplo: `tuHost://tuApp/prueba`.|
|**methodCallback (String)**| Identifica si la URI es para un caso de éxito, de error u otra respuesta personalizada.|
|**metadata (HashMap&lt;String, String&gt;)**| Campo opcional para enviar información a la pantalla de respuesta, en caso de que sea necesario mostrar detalles adicionales, como el nombre del cliente o el resumen de los productos comprados. |
|**appID (String)**|  Identificador de la app principal. Usamos el nombre del paquete. Ejemplo: `com.tuempresa.tuapp`.|
|**Uri**| La URI definida con la información ingresada.|

## Obtener el resultado del pago

La función `parseResponse` de la clase `PaymentFlow` se usa para recibir el resultado del flujo de pago, que se entrega en forma de objeto `PaymentResponse` listo para su manipulación. En este proceso, la siguiente información se ofrece:

- **Medio de pago usado.**
- **Referencia de pago.**
- **Fecha de creación.**
- **Monto del pago.**
- **Número de serie del lector.**
- **Marca de la tarjeta.**
- **Cantidad de cuotas.**
- **Últimos cuatro números de la tarjeta.**
- **Cualquier error asociado a la operación.**

Consulta cómo implementar esta funcionalidad:

[[[
```kotlin
intent.data?.let { data ->
   val response = paymentFlow.parseResponse(data)
   if (response.paymentReference.isNotEmpty()) {
       //  Manejo de pago con un resultado de éxito
   } else {
       // Manejo de pago con un resultado de error
   }
}
```
```java
final PaymentFlow paymentFlow = MPManager.INSTANCE.getPaymentFlow();

final Uri resultUri = getIntent().getData();
final PaymentResponse response = paymentFlow.parseResponse(resultUri);

if (!response.getPaymentReference().isEmpty()) {
 //  Manejo de pago con un resultado de éxito
} else {
 // Manejo de pago con un resultado de error
}
```
]]]

|Campo|Descripción|
|---|---|
|**response (Uri)**| La respuesta recibida de [SmartPOS](/developers/es/docs/mp-point/landing). Para encontrarla, usa `intent.data` de la _Activity_ encargada de abrir el _deeplink_ configurado dentro de la función `buildCallbackUri`.|
|**PaymentResponse**| Objeto que contiene detalles de la operación. Si la respuesta es nula, se devuelve un `PaymentResponse` con un `paymentStatusError`.|
|**paymentMethod**| Medio de pago usado para hacer la operación. Ejemplos: crédito, débito, código QR, link de pago. |
|**paymentReference**| Número identificador único de la operación.|
|**paymentCreationDate**| Fecha de creación de la operación.|
|**paymentAmount**|  Monto del pago.|
|**paymentSnDevice**| Número de serie del lector donde se hizo la operación.|
|**paymentBrandName**| Nombre de usuario registrado en el lector.|
|**paymentInstallments**| Número de cuotas que la persona seleccionó al hacer el pago.|
|**paymentLastFourDigits**| Últimos cuatro números de la tarjeta usada en el pago.|
|**paymentStatusError**| Campo para registrar problemas y errores de la operación.|

> WARNING
>
> Atención
>
> Asegúrate de que la respuesta del flujo de pago sea válida y tenga la información necesaria.