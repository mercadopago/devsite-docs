# Mejora la aprobación de tus pagos

Al realizar un pago online, la transacción se somete a un análisis cuidadoso para minimizar los riesgos de fraude y garantizar que el procesamiento se realice sin errores.

En esta documentación encontrarás información sobre qué provoca que un pago sea rechazado y algunas recomendaciones para evitar que esto suceda.

## ¿Por qué se rechaza un pago?

Un pago puede ser rechazado por un **error en el método de pago o porque no cumple con los requisitos de seguridad necesarios**. Por ejemplo, si la tarjeta no tiene suficiente saldo o si hay un movimiento inusual en la cuenta.

## Razones de rechazo

La denegación de pagos es una realidad en el mundo de las ventas online y puede ocurrir por varias razones: llenado incorrecto de información por parte del cliente, intento de fraude, problema en la comunicación entre adquirentes y sub adquirentes, entre muchas otras cuestiones.

Puedes encontrar la información y verificar el estado de un pago a través de la API por medio del método [Obtener pago](/developers/es/reference/payments/_payments_id/get). El campo de `status` indica si el pago fue aprobado o no, mientras que el campo `status_detail` proporciona más detalles, incluidos los motivos del rechazo.


> NOTE
>
> Importante
>
> Puedes encontrar más información sobre el detalle del pago en la actividad de la cuenta de [Mercado Pago.](https://www.mercadopago[FAKER][URL][DOMAIN]/activities)

### Errores de relleno del comprador

Esta es una de las principales razones por las que se rechaza un pago. A menudo, el comprador puede cometer un error al completar sus datos, **especialmente la dirección, datos de identificación y los números de tarjeta**.

En estos casos, el campo `status_detail` puede devolver: `cc_rejected_bad_filled_date`, `cc_rejected_bad_filled_other`, `cc_rejected_bad_filled_security_code`

### Pagos rechazados por el banco

Al realizar un pago con tarjeta de crédito o débito el banco emisor puede rechazar el cargo por diferentes motivos. Por ejemplo, fecha de vencimiento caduca, saldo o límite insuficientes, tarjeta deshabilitada o bloqueada para compras online. 

En estos casos, el campo `status_detail` puede devolver: `cc_rejected_call_for_authorize`, `cc_rejected_card_disabled`, `cc_rejected_duplicated_payment`, `cc_rejected_insufficient_amount`

### Pagos rechazados para prevenir fraude

A la hora de efectuar un pago tenemos una serie de comprobaciones, tanto por parte del banco como de Mercado Pago, y si nuestro sistema de prevención de fraude detecta algún movimiento inusual o que caracterice algún tipo de estafa o fraude, se bloquea. 

En estos casos, el campo `status_detail` puede devolver: `cc_rejected_blacklist`, `cc_rejected_high_risk`

> WARNING
> 
> Rechazo sin motivo
>
> Es importante tener en cuenta que si el emisor de la tarjeta no indica el motivo del rechazo, vas a ver el detalle del pago como `cc_rejected_other_reason`. Para este caso, es recomendable cambiar el medio de pago o contactarse con el banco para resolver el problema.

## Recomendaciones para mejorar tu aprobación

Para evitar que un pago real sea rechazado porque no cumple con las validaciones de seguridad, **es necesario incluir toda la información posible** al realizar la transacción y también prestar atención a algunos requisitos de seguridad, como nuestro **Código de seguridad** y el **device ID**.

> NOTE
>
> Importante
>
> Si utilizas Checkout Pro, ya cuentas con toda la seguridad para prevenir fraude.

### Uso del device ID en la web

El Device ID es una información importante para garantizar una mejor seguridad y, en consecuencia, una mejor tasa de aprobación de pagos. Representa **un identificador único para el dispositivo de cada comprador** en el momento de la compra.

Si un comprador frecuente hace una compra desde un dispositivo diferente al habitual, esto podría representar un comportamiento falso e indicarnos que esta transacción no debe realizarse.

Comprueba si la tienda está enviando esta información y si no, asegúrate de activar esta funcionalidad.