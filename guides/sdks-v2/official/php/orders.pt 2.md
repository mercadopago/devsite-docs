# Criar pedido 

É possível criar um pedido para associá-lo à preferência de pagamento e obter a URL necessária para iniciar o fluxo de pagamento através do SDK abaixo. Para detalhamento dos parâmetros de requisição, acesse a API [Criar pedido](/developers/pt/reference/merchant_orders/_merchant_orders/post).

[[[
```php
<?php
  $client = new MerchantOrderClient();

  $item = [
    "id" => "item id",
    "category_id" => "item category",
    "currency_id" => "BRL",
    "description" => "item description",
    "picture_url" => "item picture",
    "quantity" => 1,
    "unit_price" => "5",
    "title" => "item title"
  ];

  $createRequest = [
    "external_reference" => "default",
    "preference_id" => "Preference identification",
    "payer" => [
        "id" => 123,
        "nickname" => "JOHN"
    ],
    "site_id" => "MLA",
    "items" => $items,
    "application_id" => "10000000000000000"
  ];

  $client->create(createRequest);
?>
```
]]]

# Pesquisar pedidos

É possível encontrar todas as informações dos pedidos criados através de filtros específicos ou por um intervalo de datas específico através do SDK abaixo. Para detalhamento dos parâmetros de requisição, acesse a API [Pesquisar pedidos](/developers/pt/reference/merchant_orders/_merchant_orders_search/get).

[[[
```php
<?php
  $searchRequest = new MPSearchRequest(0, 0, [
    "preference_id" => "10000000000000000"
  ]);
  $client = new MerchantOrderClient();
  $client->search($searchRequest);
?>
```
]]]

# Obter pedido

É possível obter todas as informações de pagamento de um produto ou serviço com a identificação do pedido de sua escolha através do SDK abaixo. Para detalhamento dos parâmetros de requisição, acesse a API [Obter pedido](/developers/pt/reference/merchant_orders/_merchant_orders_id/get).

[[[
```php
<?php
  $client = new MerchantOrderClient();
  $client->get(123456789);
?>
```
]]]

# Atualizar pedido

É possível atualizar os dados de um pagamento indicando o ID do pedido e enviando as informações que atualizar utilizando o SDK abaixo. Para detalhamento dos parâmetros de requisição, acesse a API [Atualizar pedido](/developers/pt/reference/merchant_orders/_merchant_orders_id/put).

[[[
```php
<?php
  $client = new MerchantOrderClient();

    $request = [
      "notification_url" => "https://www.test.com"
    ];

  $client->update(123456789, $request);
?>
```
]]]
