# Salvar cartão

É possível armazenar com segurança em nossos servidores a referência a um cartão utilizado pelo cliente no pagamento através do SDK abaixo. Para detalhamento dos parâmetros de requisição, veja a API [Salvar cartão](/developers/pt/reference/cards/_customers_customer_id_cards/post).


[[[
```java
CustomerCardClient client = new CustomerCardClient();

String customerId = "448870796-7ZjwhKGxILixxN";

CustomerCardCreateRequest request = CustomerCardCreateRequest.builder()
   .token("9b2d63e00d66a8c721607214ceda233a")
   .build();

client.create(customerId, request);
```
]]]

# Obter cartões de um cliente

É possível obter os dados de cartões de determinado cliente através do seu ID de cliente utilizando o SDK abaixo. Para detalhamento dos parâmetros de requisição, verifique a API [Obter cartões de um cliente](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/reference/cards/_customers_customer_id_cards/get).

[[[
```java

CustomerCardClient client = new CustomerCardClient();

String customerId = "448870796-7ZjwhKGxILixxN";
client.listAll(customerId);

```
]]]

# Obter cartão

É possível consultar as informações de referência de um cartão armazenado associado a um cliente utilizando o SDK abaixo. Para detalhamento dos parâmetros de requisição, verifique a API [Obter cartão](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/reference/cards/_customers_customer_id_cards_id/get).

[[[
```java

CustomerCardClient client = new CustomerCardClient();

String customerId = "448870796-7ZjwhKGxILixxN";
String cardId = "8987269652";
client.get(customerId, cardId);
```
]]]

# Excluir cartão

É possível excluir a referência a um cartão associado ao cliente sempre que for necessário utilizando o SDK abaixo. Para detalhamento dos parâmetros de requisição, verifique a API [Excluir cartão](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/reference/cards/_customers_customer_id_cards_id/delete).

[[[
```java

CustomerCardClient client = new CustomerCardClient();

String customerId = "448870796-7ZjwhKGxILixxN";
String cardId = "8987269652";
client.delete(customerId, cardId);
```
]]]

