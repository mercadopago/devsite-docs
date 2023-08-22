# Tratamiento de callbacks con resultados de pago

Existen tres tipos de callbacks que puden ser configurados para capturar el resultado del flujo de pago. Dos de ellos se configuran  cuando el flujo de pago es lanzado, que son **por URL y por funciones nativas del _JavaScript_**, y el otro vía **eventos globales**.

Consulta este ejemplo de cada tipo de retorno de llamada personalizada:

## URL de retorno

Con una url de callback configurada para que cuando el flujo de pago sea exitoso, sea posible obtener los datos de pago de la siguiente forma:

```javascript
launchPaymentFlow(15.50, null,'congrats.html','error.html')

let urlQueryString = window.location.search;
let urlParams = new URLSearchParams(urlQueryString);
// Obtener error de datos de pago de datos de eventos
let paymentType = urlParams.get('payment_type');
let paymentReference = urlParams.get('payment_reference');
let metadata = urlParams.get('metadata');
	
/**  
* Escribe el código aquí...
**/ 	
```

Con una url de callback configurada para que cuando el flujo de pago falle, sea posible obtener los datos de pago de la siguiente forma:

```javascript
let urlQueryString = window.location.search;
let urlParams = new URLSearchParams(urlQueryString);
// Obtener error de datos de pago de datos de eventos
let errorStatus = urlParams.get('error_status');
let metadata = urlParams.get('metadata');
	
/**  
* Escribe el código aquí...
**/ 	
```

## Callbacks de funciones nativas del JavaScript 

Habiendo configurado una función de callback JavaScript al iniciar el flujo de checkout, los datos de pago se pueden obtener de la siguiente manera.

Ejemplo de callback de éxito

```javascript
function callback_payment_success(data) {
	let paymentType = data["payment_type"]; 
	let paymentReference = data["payment_reference"]; 
	
	// Tu código aquí...
}
```

Ejemplo de error de callback:

```javascript
function callback_payment_error(data) {
	let errorStatus = data["error_status"]; 
	let metadata = data["metadata"]; 
	
	// Tu código aquí...
}
```

## Eventos globales

Independientemente del tipo de callback que se configure al iniciar el flujo de pago, el sistema enviará un evento global en *JavaScript* cuando el flujo se complete correctamente o cuando falle. 

Estos eventos se denominan `PointPayment.Success`,en caso de que sea exitoso, y `PointPayment.Error` cuando hay una falla. A continuación, tenemos ejemplos de cómo capturar el evento en cada caso.

Ejemplo de implementación con tratamiento del evento de pago con éxito:

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

## Datos de retorno de callback con éxito

Cuando un flujo de pagamento es finalizado con éxito, los siguintes datos son enviados al callback de éxito.

Parámetros de respuesta:

| Parámetro | Tipo | Requerido | Descripción |
| --- | --- | --- | --- |
| payment_type | string | crédito, débito, voucher, qr e link | Indica el tipo de pago realizado. | 
| payment_reference | string | paymentId ou link de pago | Indica una referencia de tipo de pago. | 
| payment_creation_date | number | yyyy-MM-dd'T'HH:mm:ss'Z' | Indica la fecha y hora de pago en formato ISO INSTANT. | 
| payment_sn_device | number |  - | Indica el número de serie del dispositivo. | 
| payment_amount | number | 0.01 <= n <  50000 | Indica el monto total del pago. | 
| payment_installments | number | - | Indica el número de cuotas (crédito, débito y voucher), si aplica. | 
| payment_brand_name  | string | - | Indica la marca de la tarjeta (crédito, débito y voucher), si aplica. | 

## Datos de retorno de callback de error

Cuando ocurre un error o es cancelado, se envían los siguientes datos al callback de error.

Parámetros de respuesta:

| Parámetro | Tipo | Requerido | Descripción |
| --- | --- | --- | --- |
| error_status | string | canceled y unknown | Indica el tipo de falla que ocurrió durante el proceso, que puede ser que se canceló el flujo de efectivo o que ocurrió un error desconocido en el flujo de cobranza que no se pudo determinar.| 
| metadata | string | objeto Json como una string | La información adicional proporcionada por MiniApp al iniciar el flujo de pago. | 