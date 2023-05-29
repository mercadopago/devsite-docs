# Mejora la aprobación de tus pagos

## ¿Por qué se rechaza un pago?

La denegación de pagos es una realidad en el mundo de las ventas online y puede ocurrir por varias razones. Un **pago puede ser rechazado por**:
 * un error con el medio de pago;
 * llenado incorrecto de información por parte del cliente;
 * tarjetas sin saldo suficiente;
 * carga errónea de datos;
 * incumplimiento con algún requisito de seguridad;
 * comportamientos sospechosos que indiquen riesgo de fraude;
 * problemas en la comunicación entre adquirentes y sub-adquirentes.

Puedes encontrar **toda la información sobre un pago y verificar su estado** a través de la API por medio del método [Obtener pago](/developers/es/reference/payments/_payments_id/get). El campo de `status` indica si el pago fue aprobado o no, mientras que el campo `status_detail` proporciona más detalles, incluidos los motivos del rechazo.

```json
{
    "status": "rejected",
    "status_detail": "cc_rejected_insufficient_amount",
    "id": 47198050,
    "payment_method_id": "master",
    "payment_type_id": "credit_card",
    ...
}
```

> NOTE
>
> Importante
>
> Puedes encontrar más información sobre el detalle del pago en la actividad de la cuenta de [Mercado Pago](https://www.mercadopago[FAKER][URL][DOMAIN]/activities).


### Rechazos por errores en el relleno de datos

Estos rechazos ocurren debido a **errores al momento del checkout**, que pueden suceder por diversas razones: una falla de entendimiento en la pantalla de pago, problemas en la experiencia del comprador, o falta de validación de ciertos campos, así como errores que comete el cliente a la hora de completar sus datos, especialmente datos de tarjetas. 

En estos casos, el campo `status_detail` puede devolver: 
 * `cc_rejected_bad_filled_card_number`
 * `cc_rejected_bad_filled_date` 
 * `cc_rejected_bad_filled_other`
 * `cc_rejected_bad_filled_security_code`


### Rechazos del banco emisor

Al ofrecer un **pago con tarjeta de crédito o débito**, el banco emisor puede rechazar el cobro por distintas razones: que la tarjeta se encuentre vencida, que sus fondos o límites sean insuficientes, o que se encuentre bloqueada para compras online.

En estos casos, el campo `status_detail` puede devolver: 
 * `cc_rejected_call_for_authorize`
 * `cc_rejected_card_disabled`
 * `cc_rejected_duplicated_payment`
 * `cc_rejected_insufficient_amount`
 * `cc_rejected_invalid_installments`
 * `cc_rejected_max_attempts`


### Rechazos para prevenir fraude

Monitoreamos en tiempo real las transacciones, buscando **reconocer características y patrones sospechosos** que apunten a un intento de fraude. Esto es hecho tanto por los algoritmos de Mercado Pago como por los bancos, todo para evitar al máximo los contracargos (*chargebacks*). 

Cuando los sistemas de prevención detectan un pago sospechoso, la respuesta de la API puede devolver en el `status_detail`: 
 * `cc_rejected_blacklist` 
 * `cc_rejected_high_risk`
 * `cc_rejected_other_reason`


> WARNING
> 
> Atención
>
> La respuesta `cc_rejected_other_reason` es un status que proviene del banco emisor y, si bien no explicita el motivo de rechazo, se trata de una estimación de riesgo de fraude. Igualmente, hay otros motivos por los cuales este status puede ser devuelto. En caso de duda, es recomendable elegir otro medio de pago o ponerse en contacto con la entidad bancaria.

```json
 {
    "status": "rejected",
    "status_detail": "cc_rejected_high_risk",
    "id": 47198050,
    "payment_method_id": "master",
    "payment_type_id": "credit_card",
    ...
}
```

