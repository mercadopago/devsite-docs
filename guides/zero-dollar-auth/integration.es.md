# Crear una validación Zero Dollar Auth

En tu frontend, utiliza nuestra biblioteca **Mercado Pago SDK JS** para capturar los datos de la tarjeta y generar el token.

> NOTE
>
> Importante
>
> También es posible generar un token de tarjeta utilizando el Brick de CardPayment. Consulta la documentación [Renderización por defecto](/developers/es/docs/checkout-bricks/card-payment-brick/default-rendering) de CardPayment para obtener más detalles.


```JavaScript
   const formElement = document.getElementById('form-checkout');
    formElement.addEventListener('submit', createCardToken);

    async function createCardToken(event) {
      try {
        const tokenElement = document.getElementById('token');
        if (!tokenElement.value) {
          event.preventDefault();
          const token = await mp.fields.createCardToken({
            cardholderName: document.getElementById('form-checkout__cardholderName').value,
            identificationType: document.getElementById('form-checkout__identificationType').value,
            identificationNumber: document.getElementById('form-checkout__identificationNumber').value,
          });
          tokenElement.value = token.id;
          formElement.requestSubmit();
        }
      } catch (e) {
        console.error('error creating card token: ', e)
      }
    }
```

A continuación, completa los campos necesarios según la siguiente tabla. Luego, envía los datos, junto con el token de la tarjeta, al backend, realizando una solicitud al endpoint [/v1/payments](/developers/pt/reference/payments/_payments/post).

| Parámetro | Tipo | Descripción | Ejemplo |
|---|---|---|----|
| token | String | Token de la tarjeta | 12346622341 |
| payment_method_id | String | Indica el identificador del medio de pago seleccionado para efectuar el pago | master |
| payer.id | String | ID del pagador | 123456 |
| payer.type | String | Tipo de identificación del pagador asociado | customer |
| description | String | Descripción de la validación | "validación de tarjeta con valor zero dollar master crédito con cvv" |
| transaction_amount | Number | Costo de la validación | Siempre cero (0) para Zero Dollar Auth |

```curl
curl --location --request POST 'https://api.mercadopago.com/v1/payments' \
--header 'Authorization: Bearer TOKEN' \
--header 'Content-Type: application/json' \
--header 'X-Card-Validation: card_validation' \
--data-raw '{
    "token": "TOKEN",
    "payment_method_id": "master",
    "payer": {
        "id": "1271664686-sl7aQsXWRh6AkC"
        "type" : "customer"
    },
    "description": "validação de cartão com valor zero dollar master",
    "transaction_amount": 0
}'
```

Al realizar las solicitudes, es posible que se devuelvan diferentes respuestas y estados. Para obtener más detalles sobre las respuestas recibidas, consulta la sección de "Respuestas de la API".


