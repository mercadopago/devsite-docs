## Obter meios de pagamento

É possível consultar as formas de pagamento disponíveis e obter uma lista com os detalhes de cada uma delas utilizando o SDK abaixo. Para detalhamento dos parâmetros de requisição, verifique a API [Obter meios de pagamento](/developers/pt/reference/payment_methods/_payment_methods/get).

```node
const client = new MercadoPagoConfig({ accessToken: 'access_token' });

const paymentMethod = new PaymentMethod(client);

paymentMethod.get().then(console.log).catch(console.log);
```