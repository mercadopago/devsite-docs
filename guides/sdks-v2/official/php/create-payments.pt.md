# Criar pagamento

É possível criar e acrescentar informações de determinado pagamento utilizando o SDK abaixo. Para detalhamento dos parâmetros de requisição, verifique a API [Criar pagamento](/developers/pt/reference/payments/_payments/post).

> NOTE
>
> Importante
>
> Ao executar as APIs citadas nesta documentação, você poderá encontrar o atributo `X-Idempotency-Key`. Seu preenchimento é importante para garantir a execução e reexecução de requisições sem que haja situações indesejadas como, por exemplo, pagamentos em duplicidade.

[[[
```php
<?php
  $createRequest = [
    "transaction_amount" => 100,
    "description" => "description",
    "payment_method_id" => "pix",
      "payer" => [
        "email" => "test_user_24634097@testuser.com",
      ]
  ];

  $client = new PaymentClient();
  $request_options = new MPRequestOptions();
  $request_options->setCustomHeaders(["X-Idempotency-Key: <SOME_UNIQUE_VALUE>"]);

  $client->create($createRequest, $request_options);
?>
```
]]]

# Pesquisar pagamentos

É possível pesquisar pagamentos efetuados nos últimos doze meses a partir da data de pesquisa utilizando o SDK abaixo. Para detalhamento dos parâmetros de requisição, acesse a API [Pesquisar pagamentos](/developers/pt/reference/payments/_payments_search/get).

[[[
```php
<?php
  $searchRequest = new MPSearchRequest(0, 0, [
    "sort" => "date_created", 
    "criteria" => "desc", 
    "external_reference" => "ID_REF"
  ]);
  $client = new PaymentClient();
  $request_options = new MPRequestOptions();
  $request_options->setCustomHeaders(["X-Idempotency-Key: <SOME_UNIQUE_VALUE>"]);

  $client->search($searchRequest, $request_options);
?>
```
]]]

# Obter pagamento

É possível consultar todas as informações de um pagamento através do ID de pagamento utilizando o SDK abaixo. Para detalhamento dos parâmetros de requisição, acesse a API [Obter pagamento](/developers/pt/reference/payments/_payments_id/get).

[[[
```php
<?php
  $client = new PaymentClient();
  $payment = $client->get(id);
?>
```
]]]

# Atualizar pagamento

É possível alterar os dados de determinado pagamento enviando os parâmetros com as informações que você deseja atualizar através do SDK abaixo. Para detalhamento dos parâmetros de requisição, acesse a API [Atualizar pagamento](/developers/pt/reference/payments/_payments_id/put).

[[[
```php
<?php
  $client = new PaymentClient();
  $request_options = new MPRequestOptions();
  $request_options->setCustomHeaders(["X-Idempotency-Key: <SOME_UNIQUE_VALUE>"]);

  $payment = $client->capture(123456789, 100, $request_options);
?>
```
]]]
