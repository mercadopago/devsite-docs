# Flujo de pago

Para **iniciar el flujo de pago con una configuración definida**, debes crear una instancia `PaymentConfigBuilder` y definir una configuración necesaria. Luego usa el método `launchPayment` con esta configuración para iniciar el flujo de pago.

| Parámetro | Tipo | Requerido | Valores posibles | Descripción |
| --- | --- | --- | --- | --- |
| setAmount | number | true | 0.01 <= n <  50000 | Define el monto a cobrar.| 
| setPaymentMethod | string | true | crédito, débito, qr y link | Indica si el flujo de facturación se inicia directamente para un método de pago sin pasar por el selector de métodos de pago. | 
| setMetadata | string | no | objeto Json como una string | Información adicional en formato JSON con codificación de URL que se devolverá en el callback cuando se complete el flujo de pago. | 
| setCallbackSuccess | string | no | paths | Define un callback cuando el pago se completa con éxito. Este callback puede ser una ruta relativa o un nombre de función. | 
| setCallbackError | string | no | paths | Define un callback cuando el pago falla por cualquier motivo. Este callback puede ser una ruta relativa o un nombre de función. | 

Ejemplo de solicitud:

```javascript
var config = new PaymentConfigBuilder();
config.setAmount(10.0);
config.setPaymentMethod("credit");
config.setMetadata(encodeURIComponent({"attr":"123"});
config.setCallbackSuccess("congrats.html");
config.setCallbackError("error.html");

launchPayment(config);
```

## Manejo de callbacks con resultados de pago

Hay tres tipos de callbacks que se pueden configurar para capturar el resultado del flujo de pago, dos de ellos se configuran cuando se lanza el flujo de pago, que son **por URL y por funciones nativas de _JavaScript_**, y el otro es vía de **eventos globales**.

| Parámetro | Tipo | Requerido | Descripción |
| --- | --- | --- | --- |
| payment_type | string | crédito, débito, voucher, qr e link | Indica el tipo de pago realizado. | 
| payment_reference | string | paymentId ou um link de pagamento | Indica una referencia de tipo de pago. | 
| payment_creation_date | number | yyyy-MM-dd'T'HH:mm:ss'Z' | Indica la fecha y hora de pago en formato ISO INSTANT. | 
| payment_sn_device | number |  - | Indica el número de serie del dispositivo. | 
| payment_amount | number | 0.01 <= n <  50000 | Indica el monto total del pago. | 
| payment_installments | number | - | Indica el número de cuotas (crédito, débito y voucher), cuando se aplica. | 
| payment_brand_name  | string | - | Indica la marca de la tarjeta (crédito, débito y voucher), cuando se aplica. | 
| error_status | string | canceled e unknown | Indica el tipo de falla que ocurrió durante el proceso, que puede ser que se canceló el flujo de efectivo o que ocurrió un error desconocido en el flujo de cobranza que no se pudo determinar.| 
| metadata | string | objeto Json como uma string | La información adicional proporcionada por MiniApp al iniciar el flujo de pago. | 

A continuación se muestra un ejemplo de cada tipo de callback personalizado.

### URL de callback

Con una URL de callback configurado para cuando el flujo de pago sea exitoso, es posible obtener los datos de pago de la siguiente manera:

```javascript
launchPaymentFlow(15.50, null,'congrats.html','error.html')

let urlQueryString = window.location.search;
let urlParams = new URLSearchParams(urlQueryString);
// Obtener error de datos de pago de datos de eventos
let paymentType = urlParams.get('payment_type');
let paymentReference = urlParams.get('payment_reference');
let metadata = urlParams.get('metadata');
	
/**  
* Escreva o código aqui...
**/ 	
```

Con una URL de callback configurada para cuando falla el flujo de pago, es posible obtener los datos de pago de la siguiente manera:

```javascript
let urlQueryString = window.location.search;
let urlParams = new URLSearchParams(urlQueryString);
// Obtener error de datos de pago de datos de eventos
let errorStatus = urlParams.get('error_status');
let metadata = urlParams.get('metadata');
	
/**  
* Escreva o código aqui...
**/ 	
```

### Callbacks de funciones nativas de JS

Con una función de callback *JavaScript* configurada al iniciar el flujo de pago, los datos de pago se pueden obtener de la siguiente manera.

Ejemplo de callback exitoso:

```javascript
function callback_payment_success(data) {
	let paymentType = data["payment_type"]; 
	let paymentReference = data["payment_reference"]; 
	
	// Tu código aquí...
}
```

Ejemplo de callback de error:

```javascript
function callback_payment_error(data) {
	let errorStatus = data["error_status"]; 
	let metadata = data["metadata"]; 
	
	// Tu código aquí...
}
```

### Eventos globales

Independientemente del tipo de callback que se configure al iniciar el flujo de pago, el sistema enviará un evento global en *JavaScript* cuando el flujo se complete correctamente o cuando falle. Estos eventos se denominan `PointPayment.Success`,en caso de que sea exitoso, y `PointPayment.Error`,en caso de que falle.

Ejemplo de implementación con manejo exitoso de eventos de pago:

```javascript
window.addEventListener("PointPayment.Success", (event) => {

   let data=event.detail;
   // Obtener error de datos de pago de datos de eventos
   let paymentType = data["payment_type"];
   let paymentReference = data["payment_reference"];
   let paymentCreationDate = data["payment_creation_date"];
   let paymentAmount = data["payment_amount"];
   let serialNumberDevice = data["payment_sn_device"];

   let metadata = data['metadata'];

   if(paymentType == "credit" || paymentType == "debit" || paymentType == "voucher"){
       let installments = data["payment_installments"];
       let brandName = data["payment_brand_name"];
   }

   // Tu código aquí...
});
```

Ejemplo de implementación con manejo de eventos de falla de pago:

```javascript
window.addEventListener("PointPayment.Error", (event) => {
  
	let data=event.detail;
	// Obtener error de datos de pago de datos de eventos
	let errorStatus = data["error_status"]; 
	let metadata = data['metadata'];
	
	// Tu código aquí...
});
```