# Iniciar el flujo de pago

Existen tres formas de iniciar un flujo de pago, dependiendo del callback de respuesta que se va a utilizar. La función `launchPaymentFlow` permite indicar URLs como callbacks, y funciones _JavaScript_ nativas para recibir una notificación con el resultado del flujo de pago. También puedes usar la función `launchPaymentMethod` para iniciar el flujo de pago con un medio de pago específico.

A continuación, veremos ejemplos de cada implementación.

## Uso básico

Esta es la implementación básica para iniciar un flujo de pago, donde no se configura ningún callback customizado para notificar el resultado. En este caso, es necesario oir los eventos globales que notifican el resultado de pago para validar el comportamento de la aplicación al finalizar el flujo de pago.En este ejemplo, el flujo de pago se inicia con el monto de $ 20,00 y sin callback customizado.

```javascript
 launchPaymentFlow(20.0)
```

En este ejemplo, el flujo de pago se inicia con el monto de $ 35,00, con la tarjeta de crédito seleccionada como medio de pago y sin callback customizado.

```javascript
launchPaymentMethod(35.0, "credit")
```

## Iniciar con URL callbacks

Permite indicar una URL de respuesta correcta cuando el flujo de pago fue exitoso, y una URL de respuesta de error para cuando ocurre un problema o cancelación.

Ejemplo:

```javascript
launchPaymentFlow(15.50, null,'congrats.html','error.html')
```

En el ejemplo, el flujo de pago se inicia con el monto de $ 15,50 y es indicado con un camino relativo en caso de éxito (`congrats.html`), y un camino relativo en caso de error (`error.html`). El valor `null` indica que ningún metadato se está transmitiendo como dato adicional.

Presta atención porque estos archivos de URL deben existir dentro de la aplicación de la web para que el callback de respuesta funcione correctamente. En el caso del ejemplo, debe estar localizados en la raíz de la aplicación.

## Iniciar con funciones nativas JavaScript

Permite indicar funciones nativas del JavaScript, como callbacks de respuesta con el resultado del fluxo de pago. Para eso, es necesario tener una función global accesible a partir del componente ventana del _JS DOM_. Estas funciones deben ser prefijadas con `callback_` para que el sistema sepa que una función _JavaScript_ se está pasando como un callback.

```javascript
launchPaymentFlow(15.50, null,
'callback_payment_success', 'callback_payment_error')
```

## Iniciar medio de pago

Para iniciar el flujo de pago con un medio de pago específico, ejecuta la función ”launchPaymentMethod”.

Ejemplo:

```javascript
launchPaymentMethod(amount, paymentMethod
encodeURIComponent({"attr":"123"}), 'congrats.html', 'error.html')
```

Para obtener las variantes de medios de pago permitidas, es necesario llamar al comando `getPaymentMethods`.

## Iniciar pagamento com config definido (novo)

Para iniciar el flujo de pago, tienes que crear una instancia de `PaymentConfigBuilder` para definir una configuración necesaria. Después, usa el método `launchPayment` con esta configuración para iniciar el flujo de pago. 

Ejemplo:

```javascript
var config = new PaymentConfigBuilder();
config.setAmount(10.0);
config.setPaymentMethod("credit");
config.setMetadata(encodeURIComponent({"attr":"123"});
config.setCallbackSuccess("congrats.html");
config.setCallbackError("error.html");

launchPayment(config);
```

Parámetros de configuración:

| Parámetro | Tipo | Requerido | Valores posibles | Descripción |
| --- | --- | --- | --- | --- |
| setAmount | number | true | 0.01 <= n <  50000 | Define el monto a cobrar.| 
| setPaymentMethod | string | true | crédito, débito, qr y link | Indica si el flujo de facturación se inicia directamente para un método de pago sin pasar por el selector de métodos de pago. | 
| setMetadata | string | no | objeto Json como una string | Información adicional en formato JSON con codificación de URL que se devolverá en el callback cuando se complete el flujo de pago. | 
| setCallbackSuccess | string | no | paths | Define un callback cuando el pago se completa con éxito. Este callback puede ser una ruta relativa o un nombre de función. | 
| setCallbackError | string | no | paths | Define un callback cuando el pago falla por cualquier motivo. Este callback puede ser una ruta relativa o un nombre de función. | 