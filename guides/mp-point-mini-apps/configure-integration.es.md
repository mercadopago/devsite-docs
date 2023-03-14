# Configurar la integración con Mercado Pago

Para comunicarse con la aplicación de Mercado Pago, la MiniApp debe utilizar algunos comandos que solo estarán disponibles para su uso después de cargar la Mini App. Ver más información en la sección [Ciclo de vida de los MiniApps](/developers/es/docs/point/mini-apps/additional-content/lifecycle).

Todos los comandos disponibles admiten los siguientes parámetros:

| Parámetro | Tipo | Requerido | Descripción |
| --- | --- | --- | --- |
| method | string | true | set_title <br><br> payment_flow | 
| args | objeto JSON  | depende del método | cualquier objeto JSON | 
| callback | function | false | function <br><br> (result, error) | 

Ejemplo de solicitud:

```javascript
var exampleCommand =
    {
        "method": 'example',
        "args": {
            'arg1': value1
         },
         "callback": function(result, error) {
             if (!result) {
                 console.log("ERROR: wrong echo result");
             } else {
                 console.log("SUCCESS: echo arrives " + result);
             }
         }
    }
MobileWebKit.executeNative(exampleCommand)
```

## Comandos disponibles

Ve a continuación qué comandos están disponibles para usar solo después de cargar la MiniApp.

* `set_title`

Le permite actualizar el título de la barra de herramientas.

| Parámetro | Tipo | Requerido | Valores posibles | Descripción |
| --- | --- | --- | --- | --- |
| title | string | true | qualquer string | Texto para mostrar en ActionBar. | 

Ejemplo de solicitud:

```javascript
{
    "method": 'set_title',
    "args": {
        'title': title
     }
}
```

* `back`

Le permite navegar hacia atrás, pudiendo volver a varias pantallas.

| Parámetro | Tipo | Requerido | Valores posibles | Descripción |
| --- | --- | --- | --- | --- |
| screen | int | true | 0 < n < 50 | El número de pantallas para retroceder, por defecto = 1. | 

Ejemplo de solicitud:

```javascript
{
    "method": 'back',
    "args": {
        'screen': screens
     }
}
```

* `back_action`

Le permite cambiar el comportamiento del botón **Volver**.

| Parámetro | Tipo | Requerido | Valores posibles | Descripción |
| --- | --- | --- | --- | --- |
| type | String | true | back  <br><br> close | back: funciona por defecto para volver a la pantalla anterior. <br><br> close: cerrar la pantalla. | 

Ejemplo de solicitud:

```javascript
{
    "method": 'back_action',
    "args": {
        'type': type
     }
}
```

* `close`

Le permite cerrar la pantalla del MiniApp.

| Parámetro | Tipo | Requerido | Valores posibles | Descripción |
| --- | --- | --- | --- | --- |
| - | - | - | - | - |

Ejemplo de solicitud:

```javascript
{
    "method": 'close',
    "args": {}
}
```

* `history`

Le permite obtener su historial de navegación.

| Parámetro | Tipo | Requerido | Valores posibles | Descripción |
| --- | --- | --- | --- | --- |
| - | - | - | - | - |

Ejemplo de solicitud:

```javascript
{
    "method": 'history',
    "args": {}
}
```

Ejemplo de respuesta:

```
{
  "result": {
    "serial_number": "SMARTPOS123044",
    "brand_name": "PAX",
    "model": "A910"
  }
}
``` 

* `info_device`

Permite obtener información del dispositivo Point Smart, como: **número de serie**, **marca** y **modelo**.

| Parámetro | Tipo | Requerido | Valores posibles | Descripción |
| --- | --- | --- | --- | --- |
| - | - | - | - | - |

Ejemplo de solicitud:

```javascript
{
    "method": 'info_device',
    "args": {}
}
```

Ejemplo de respuesta:

```
{
  "result": {
    "serial_number": "SMARTPOS123044",
    "brand_name": "PAX",
    "model": "A910"
  }
}
``` 

* `clear_history`

Le permite borrar el historial de navegación.

| Parámetro | Tipo | Requerido | Valores posibles | Descripción |
| --- | --- | --- | --- | --- |
| - | - | - | - | - |

Ejemplo de solicitud:

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

* `payment_methods`

Le permite obtener las variantes de método de pago permitidas para iniciar el flujo de pago con un método de pago específico. Todas las variantes de métodos de pago que admite esta versión son: **tarjetas de crédito y débito**, **código QR**, **link de pago** y **voucher (tarjetas Sodexo)**.

| Parámetro | Tipo | Requerido | Valores posibles | Descripción |
| --- | --- | --- | --- | --- |
| - | - | - | - | - |

Ejemplo de solicitud:

```javascript
getPaymentMethods(callback)

function callbackResult(result, error) {
    for (var method in result) {

    }
}
```

Ejemplo de respuesta:

```javascript
{
  "result": [
    "credit",
    "debit",
    "voucher",
    "qr",
    "link"
  ]
}
``` 