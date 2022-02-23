## Salvar cartão

Armazena com segurança em nossos servidores a referência a um cartão utilizado pelo cliente no pagamento para evitar pedir todos os dados em transações futuras.


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


## Obter cartões de um cliente

Consulte a lista de cartões armazenados de um cliente a fim de mostrá-los no momento de fazer um pagamento.

[[[
```java

CustomerCardClient client = new CustomerCardClient();

String customerId = "448870796-7ZjwhKGxILixxN";
client.listAll(customerId);

```
]]]

## Obter cartão

Consultar as informações de referência de um cartão armazenado associado a um cliente.

[[[
```java

CustomerCardClient client = new CustomerCardClient();

String customerId = "448870796-7ZjwhKGxILixxN";
String cardId = "8987269652";
client.get(customerId, cardId);
```
]]]

## Excluir cartão

Exclua a referência a um cartão associado ao cliente sempre que for necessário.

[[[
```java

CustomerCardClient client = new CustomerCardClient();

String customerId = "448870796-7ZjwhKGxILixxN";
String cardId = "8987269652";
client.delete(customerId, cardId);
```
]]]

