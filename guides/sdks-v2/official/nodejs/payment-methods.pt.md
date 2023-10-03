## Obter meios de pagamento

É possível consultar as formas de pagamento disponíveis e obter uma lista com os detalhes de cada uma delas utilizando o SDK abaixo. Para detalhamento dos parâmetros de requisição, verifique a API [Obter meios de pagamento](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/reference/payment_methods/_payment_methods/get).

[[[
```node
const client = new MercadoPago({ accessToken: 'access_token' });

const paymentMethod = new PaymentMethod(client);

paymentMethod.get()
    .then((result) => { console.log(result); })
    .catch((error) => { console.error(error); });
```
]]]