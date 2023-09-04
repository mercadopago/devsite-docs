# Comandos disponibles

Ve a continuación qué comandos están disponibles para usar solo después de cargar la mini app.

## Comando: back 

Te permite navegar hacia atrás, pudiendo retroceder varias pantallas.

| Parámetro | Tipo | Requerido | Valores posibles | Descripción |
| --- | --- | --- | --- | --- |
| screen | int | true | 0 < n < 50 | El número de pantallas para retroceder. Por defecto = 1. | 

Ejemplo de código:

```javascript
{
    "method": 'back',
    "args": {
        'screen': screens
     }
}
```

## Comando: close

Te permite cerrar lel flujo de _webview_ de la landing del _Javascript_.

| Parámetro | Tipo | Requerido | Valores posibles | Descripción |
| --- | --- | --- | --- | --- |
| - | - | - | - | - | 

Ejemplo de código:

```javascript
{
    "method": 'close',
    "args": {}
}
```

## Comando: history

Ingresa al historial de navegación.

| Parámetro | Tipo | Requerido | Valores posibles | Descripción |
| --- | --- | --- | --- | --- |
| - | - | - | - | - | 

Ejemplo de código:

```javascript
{
    "method": 'history',
    "args": {}
}
```

## Comando: info_device

Permite obtener información del dispositivo Point Smart, como: **número de serie**, **marca** y **modelo**.

| Parámetro | Tipo | Requerido | Valores posibles | Descripción |
| --- | --- | --- | --- | --- |
| - | - | - | - | - | 

Ejemplo de código:

```javascript
{
    "method": 'info_device',
    "args": {}
}
```

## Comando: clear_history

Te permite borrar el historial de navegación.

| Parámetro | Tipo | Requerido | Valores posibles | Descripción |
| --- | --- | --- | --- | --- |
| - | - | - | - | - | 

Ejemplo de código:

```javascript
{
    "method": 'clear_history',
    "args": {},
    "callback": callbackResult
}

function callbackResult(result, error) {
   if (result == 'success') {
       // Llamada exitosa
   } else {
       //'error' tiene información detallada de error
   }
}
```

## Iniciar flujo de pago (payment_flow)

Para iniciar el flujo de pago, la función `launchPaymentFlow` debe ser llamada junto con los siguientes parámetros:

| Parámetro | Tipo | Requerido | Valores posibles | Descripción |
| --- | --- | --- | --- | --- |
| amount | Number | Si | 0.01 <= n <  50000 | Monto a pagarse. |
| metadata | string | No | SON Object como uma string | Información adicional que se devolverá al callback después que finalice el flujo de pago. |
| callback_success | string | No | Paths| Indica el camino a donde se enviará la respuesta en caso de éxito. Esta ruta será relativa al dominio de la mini app. |
| callback_error | string | No | Paths|Indica el camino donde se enviará la respuesta en caso de error. Esta ruta será relativa al dominio de la mini app. |

Ejemplo de código:

```javascript
launchPaymentFlow(amount, encodeURIComponent({"attr":"123"}),
'response/congrats.html', 'response/error.html')
```

Para más información, consultá la sección [Como empezar](/developers/es/docs/mini-apps/introduction/how-to-start).

## Iniciar medio de pago (payment_flow)

Para iniciar el flujo de pago con medio de pago, la función `launchPaymentMethod` debe ser llamada junto con los siguientes parámetros:

| Parámetro | Tipo | Requerido | Valores posibles | Descripción |
| --- | --- | --- | --- | --- |
| amount | Number | Si | 0.01 <= n <  50000 | Monto a pagarse. |
| payment_method | string | Si | credit, debit, qr, link| Indica le método de pago que se usará. |
| metadata | string | No | SON Object como uma string | Información adicional que se devolverá al callback después que finalice el flujo de pago. |
| callback_success | string | No | Paths| Indica el camino a donde se enviará la respuesta en caso de éxito. Esta ruta será relativa al dominio de la mini app. |
| callback_error | string | No | Paths|Indica el camino donde se enviará la respuesta en caso de error. Esta ruta será relativa al dominio de la mini app. |

Ejemplo de código:

```javascript
launchPaymentMethod(25.6, "debit", encodeURIComponent({"attr":"123"}), 
'congrats.html', 'error.html')
```

Para más información, consultá [Iniciar método de pago]().

## Ingresar medios de pagos disponibles (payment_methods)

Obtiene las variantes de medios de pago permitidos para iniciar el flujo de pago, con un medio de pago específico.

Las variantes compatibles con esta versión son:

* **Credit**: pago con tarjeta de crédito.
* **Debit**: pago con tarjeta de débito.
* **Qr**: pago con QR.
* **Link**: para generar un link de pagamento.
* **Voucher**: pago con tarjetas Sodexo.

| Parámetro | Tipo | Requerido | Valores posibles | Descripción |
| --- | --- | --- | --- | --- |
| - | - | - | - | - |