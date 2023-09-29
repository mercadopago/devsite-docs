# Salvar cartão

É possível armazenar com segurança em nossos servidores a referência a um cartão utilizado pelo cliente no pagamento através do SDK abaixo. Para detalhamento dos parâmetros de requisição, veja a API [Salvar cartão](/developers/pt/reference/cards/_customers_customer_id_cards/post).


[[[
```php
<?php
  $client = new CustomerCardClient();
  $request = ["token" => "9b2d63e00d66a8c721607214ceda233a"];
  $client->create('123456789', $request);
?>
```
]]]

# Obter cartões de um cliente

É possível obter os dados de cartões de determinado cliente através do seu ID de cliente utilizando o SDK abaixo. Para detalhamento dos parâmetros de requisição, verifique a API [Cartões](/developers/pt/reference/cards/_customers_customer_id_cards/get).

[[[

```php
<?php
  $client = new CustomerCardClient();
  $client->list("448870796-7ZjwhKGxILixxN");
?>
```
]]]

# Obter cartão

É possível consultar as informações de referência de um cartão armazenado associado a um cliente utilizando o SDK abaixo. Para detalhamento dos parâmetros de requisição, verifique a API [Obter cartão](/developers/pt/reference/cards/_customers_customer_id_cards_id/get).

[[[
```php
<?php
  $client = new CustomerCardClient();
  $client->get("448870796-7ZjwhKGxILixxN", "8987269652");
?>
```
]]]

# Excluir cartão

É possível excluir a referência a um cartão associado ao cliente sempre que for necessário utilizando o SDK abaixo. Para detalhamento dos parâmetros de requisição, verifique a API [Excluir cartão](/developers/pt/reference/cards/_customers_customer_id_cards_id/delete).

[[[
```php
<?php
  $client = new CustomerCardClient();
  $client->delete("448870796-7ZjwhKGxILixxN", "8987269652");
?>
```
]]]