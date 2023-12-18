## Criar reembolso total

É possível criar um reembolso total utilizando o SDK abaixo. Para detalhamento dos parâmetros de requisição, verifique a API [Criar reembolso](/developers/pt/reference/chargebacks/_payments_id_refunds/post).  

```node
const client = new MercadoPagoConfig({ accessToken: 'access_token', options: { timeout: 5000 } });

const refund = new PaymentRefund(client);

refund.create({
	payment_id: '123456789',
	body: {
		amount: 100
	}
}).then(console.log).catch(console.log);
```

## Criar reembolso parcial

É possível criar um reembolso parcial utilizando o SDK abaixo. Para detalhamento dos parâmetros de requisição, verifique a API [Criar reembolso](/developers/pt/reference/chargebacks/_payments_id_refunds/post). 

```node
var refund = {
 payment_id: payment_id,
 amount: 0.0
};
mercadopago.configure({
 access_token: 'YOUR_ACCESS_TOKEN'
});
 
mercadopago.refund.create(refund).then((result) => {
 console.log(result.response.id)
});
```

## Obter reembolso específico

É possível obter reembolsos específicos de determinados pagamentos utilizando o SDK abaixo. Para detalhamento dos parâmetros de requisição, verifique a API [Obter reembolso específico](/developers/pt/reference/chargebacks/_payments_id_refunds_refund_id/get).

```node
const client = new MercadoPagoConfig({ accessToken: 'access_token', options: { timeout: 5000 } });

const refund = new PaymentRefund(client);

refund.get({
	payment_id: '<PAYMENT_ID>',
	refund_id: '<REFUND_ID>'
}).then(console.log).catch(console.log);
```

## Obter lista de reembolso

É possível consultar todos os reembolsos para um pagamento específico utilizando o SDK abaixo. Para detalhes dos parâmetros de requisição, acesse a API [Obter lista de reembolso](/developers/pt/reference/chargebacks/_payments_id_refunds/get).

```node
const client = new MercadoPagoConfig({ accessToken: 'access_token', options: { timeout: 5000 } });

const refund = new PaymentRefund(client);

refund.list({
	payment_id: '<PAYMENT_ID>'
}).then(console.log).catch(console.log);
```