# Suscripciones con pago autorizado

Las suscripciones con pago autorizado permiten generar y facturar la cuota de una suscripción en función de la periodicidad definida, lo que hace que el motor de suscripciones programe y cree automáticamente pagos en función del método de pago definido en el momento de la creación de la firma.

Para ofrecer **suscripciones sin plan asociado y con pago autorizado**, envía un POST con los atributos necesarios al endpoint [/preapproval](/developers/es/reference/subscriptions/_preapproval/post) y presta atención al parámetro `status`, que debe ser rellenado con el valor `authorized`. Si prefieres, usa el _curl_ a continuación.

[[[
```curl
curl --location --request POST 'https://api.mercadopago.com/preapproval?access_token=APP_USR-????????' \
--header 'Content-Type: application/json' \
--header 'X-scope: stage' \
--data-raw '{
    "back_url": "https://www.google.com",
    "reason": "Test Subscription",
    "auto_recurring": {
        "frequency": 1,
        "frequency_type": "months",
        "start_date": "2020-06-02T13:07:14.260Z",
        "end_date": "2022-07-20T15:59:52.581Z",
        "transaction_amount": 10,
        "currency_id": "ARS"
    },
    "payer_email": "test_user+1020927396@testuser.com",
    "card_token_id": "{{EL_CARD_TOKEN_QUE_CREASTE}}",
    "status": "authorized"
}'
```
]]]

Después de completar los campos, ejecuta el request.

> NOTE
>
> Importante
>
> Para acreditar la validez de la tarjeta, Mercado Pago realizará un cobro con un importe mínimo. Si el pago es exitoso, procederemos a la devolución de dicho pago. El valor puede diferir según cada país.

## Lógica de reintentos de cobro

Al automatizar la recurrencia de tus cobros, se crean pagos autorizados que tendrán una fecha de débito configurada en base a la periodicidad que se definió en la suscripción. Luego de suscribirse, el pago de la primera cuota se acreditará en 1 hora.

### Estados de pago

----[mlb, mlm]----

En el momento en que se cobre la cuota pueden surgir dos alternativas en base al resultado de su pago:

* __El pago es realizado exitosamente__ por lo que la cuota quedará `processed` y ya no se reintentará cobrarla. 

* __El pago es rechazado__ por lo que la cuota quedará en `recycling` siempre y cuando no esté expirada o no haya alcanzado el máximo de reintentos. Caso contrario, quedará en `processed`.

### Pagos rechazados

Cuando una cuota queda en el estado `recycling` entra en un esquema de reintentos con un máximo de 4 posibilidades, en los que se vuelve a realizar el cobro de la cuota. El resultado puede ser cualquiera de los dos puntos mencionados arriba. 

Si el pago resulta rechazado, se actualiza a una nueva fecha de cobro sumando 1 de las 4 posibilidades dentro de los diez días como ventana de tiempo de reintento a la última fecha de disponible.

Por defecto se reintenta dentro de una ventana de 10 días. En caso de que la cuota tenga fecha de expiración, la ventana de tiempo se ajusta a esa fecha y mantiene la lógica de 4 reintentos.

------------

----[mla]----

En el momento en que se cobre la cuota pueden surgir tres alternativas en base al resultado de su pago:

* __El pago es realizado exitosamente__ por lo que la cuota quedará `processed` y ya no se reintentará cobrarla. 

* __El pago se está procesando__ por lo que la cuota quedará en `waiting for gateway` hasta que se resuelva el pago.

* __El pago es rechazado__ por lo que la cuota quedará en `recycling` siempre y cuando no esté expirada o no haya alcanzado el máximo de reintentos. Caso contrario, quedará en `processed`.

### Pagos rechazados

Cuando una cuota queda en el estado `recycling` entra en un esquema de reintentos con un máximo de 4 posibilidades, en los que se vuelve a realizar el cobro de la cuota. El resultado puede ser cualquiera de los tres puntos mencionados arriba. 

Si el pago resulta rechazado, se actualiza a una nueva fecha de cobro sumando 1 de las 4 posibilidades dentro de los diez días como ventana de tiempo de reintento a la última fecha de disponible.

Por defecto se reintenta dentro de una ventana de 10 días. En caso de que la cuota tenga fecha de expiración, la ventana de tiempo se ajusta a esa fecha y mantiene la lógica de 4 reintentos.

### Pagos en proceso

Si una cuota se encuentra en el estado `waiting for gateway`, y cuando se resuelve el pago resulta rechazada y se cumplió la fecha de expiración, la cuota automáticamente pasará a ser procesada con el estado `processed`. Caso contrario, entrará al esquema de reintento.

------------

En el caso de que no se pueda cobrar la cuota en el cuarto reintento, la cuota automáticamente quedará en el estado `processed` asociada a un pago rechazado.

Luego de 3 cuotas con pagos rechazados se da de baja automáticamente la suscripción y la cuenta del vendedor será notificada de la cancelación de la suscripción por e-mail.

> NOTE
> 
> Nota
> 
> El resultado de una cuota no afecta la generación y procesamiento del resto de las cuotas para la misma suscripción.