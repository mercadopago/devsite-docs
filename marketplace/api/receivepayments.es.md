# Cobra en nombre de tu usuario

Para integrar el proceso de pago, tienes que interactuar con las mismas APIs pero utilizando las credenciales obtenidas de tu usuario.

Con ellas vas a poder:

Cobrar con tarjeta.
Administrar clientes y tarjetas.
Cobrar con tarjetas guardadas.
Cobrar en cuotas.
Cobrar con otros medios de pago.
Al cobrar con las credenciales de tu usuario, el monto será depositado directamente en su cuenta de MercadoPago.

Cobra una comisión por transacción

Si deseas cobrar una comisión por cada cobro que procesa tu aplicación en nombre de tu usuario, sólo debes agregar dicho monto en el parámetro application_fee al crear el pago.

``
curl -X POST \
        -H 'accept: application/json' \
        -H 'content-type: application/json' \
        https://api.mercadopago.com/v1/payments?access_token=USER_AT \
        -d '{
                "transaction_amount": 100,
                "token": "ff8080814c11e237014c1ff593b57b4d",
                "description": "Title of what you are paying for",
                "installments": 1,
                "payer": {
                        "id": "12345678"
                },
                "payment_method_id": "visa",
                "application_fee": 2.56
        }'

``
