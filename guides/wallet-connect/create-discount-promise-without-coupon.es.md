# Crear promesa de descuento sin cupón pre-añadido

La **promesa de descuento sin un cupón pre-añadido** es un método en el cual el descuento se aplica a una transacción sin la necesidad de un cupón ya vinculado a la cuenta o transacción del usuario.

En este caso, el descuento puede aplicarse automáticamente basado en ciertos criterios o acciones, como la fidelidad del cliente, el valor total de la compra, o la participación en una promoción específica.

Diferente al enfoque con cupón pre-añadido, donde el descuento está garantizado a través de un código ya introducido, aquí el descuento se asegura mediante reglas o condiciones definidas por la plataforma o por el vendedor. Esta estrategia permite que los clientes se beneficien de descuentos sin la necesidad de introducir códigos.

Para **crear una promesa de descuento sin un cupón pre-añadido**, utiliza el _curl_ presente debajo e inserta los parámetros de acuerdo con la tabla descriptiva a continuación.

| Parámetro  | Descripción  | Ejemplo  |
| --- | --- | --- |
| Authorization  | Token de autorización del usuario (Access token). Esta información se puede obtener a través del menú [Tus integraciones](/developers/es/docs/wallet-connect/additional-content/your-integrations/credentials).  | APP_USR-123456-test-access-t0ken  |
| x-payer-token  | Este es un token específico del pagador. Reemplaza <PAYER_TOKEN> con el token correspondiente. Esta información se obtiene al finalizar el [flujo de vinculación de cuentas](/developers/es/docs/wallet-connect/account-linking-flow/create-agreement)  | payer1-token2-test3-example4  |
| amount  | Valor total de la transacción.  | 550.50  |

[[[
```curl

curl -X POST \
'https://api.mercadopago.com/v2/wallet_connect/payment/discounts' \
--header 'Authorization: Bearer <YOUR_ACCESS_TOKEN>' \
--header 'x-payer-token: <PAYER_TOKEN>' \
--header 'Content-Type: application/json' \
-d '{
    "amount": 550
}'

```
]]]

Al crear una promesa de descuento sin un cupón pre-añadido, es posible que recibir diferentes respuestas, sean de éxito como errores. Consulta la sección [Respuestas](/developers/es/docs/wallet-connect/discounts/create-discount-promise-without-preadd-coupon/responses) para obtener detalles de cada una de ellas.
