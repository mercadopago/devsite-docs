## Criar cancelamento

É possível realizar o cancelamento de uma compra específica a partir do ID do pagamento utilizando o SDK abaixo. Para detalhamento dos parâmetros de requisição, verifique a API de [Cancelamento](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/reference/chargebacks/_payments_payment_id/put).

```node
const client = new MercadoPagoConfig({ accessToken: 'ACCESS_TOKEN' });
const payment = new Payment(client);

payment.cancel({
	id: '<PAYMENT_ID>',
	requestOptions: {
		idempotencyKey: '<IDEMPOTENCY_KEY>'
	},
}).then(console.log).catch(console.log);
```