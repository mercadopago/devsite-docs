# Criar pagamento

É possível criar e acrescentar informações de determinado pagamento utilizando o SDK abaixo. Para detalhamento dos parâmetros de requisição, verifique a API [Criar pagamento](/developers/pt/reference/payments/_payments/post).

> NOTE
>
> Importante
>
> Ao executar as APIs citadas nesta documentação, você deverá enviar o atributo `X-Idempotency-Key`. Seu preenchimento é importante para garantir a execução e reexecução de requisições sem que haja situações indesejadas como, por exemplo, pagamentos em duplicidade.

[[[
```ruby

require 'mercadopago'

sdk = Mercadopago::SDK.new('ENV_ACCESS_TOKEN')

custom_headers = {
 'x-idempotency-key': '<SOME_UNIQUE_VALUE>'
}

custom_request_options = Mercadopago::RequestOptions.new(custom_headers: custom_headers)

payment_request = {
  token: 'ff8080814c11e237014c1ff593b57b4d',
  installments: 1,
  transaction_amount: 100,
  payer: {
    type: 'customer',
    id: '123456789-jxOV430go9fx2e'
  }
}
payment_response = sdk.payment.create(payment_request, custom_request_options)
payment = payment_response[:response]

```
]]]