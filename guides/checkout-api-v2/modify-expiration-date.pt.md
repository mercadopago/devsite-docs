# Alterar data de vencimento

Data de vencimento é o período máximo definido para realização de um pagamento. Ao oferecer pagamentos com boleto e/ou dinheiro é possível alterar a data de vencimento padrão (3 dias) para pagamentos enviando o campo `date_of_expiration` na requisição de criação da preferência. 

Neste campo, a data configurada deve ser entre 1 dia e 30 dias a partir da data de emissão do pagamento.



1. Envie um POST com o parâmetro "date_of_expiration" com a data e horário de validade do item ao endpoint [/checkout/preferences](https://www.mercadopago.com.br/developers/pt/reference/preferences/_checkout_preferences/post). O valor deve seguir o formato ISO 8601 (yyyy-MM-dd'T'HH:mm:ssz)
2. Execute a requisição.

Se preferir, execute a requisição utilizando um de nossos SDKs abaixo.


[[[
```php
===
A data usa o formato ISO 8601: yyyy-MM-dd'T'HH:mm:ssz
===

$payment->date_of_expiration = "2020-05-30T23:59:59.000-04:00";
```
```node
===
A data usa o formato ISO 8601: yyyy-MM-dd'T'HH:mm:ssz
===

date_of_expiration: "2020-05-30T23:59:59.000-04:00",
```
```java
===
A data usa o formato ISO 8601: yyyy-MM-dd'T'HH:mm:ssz
===

payment.setDateOfExpiration("2020-05-30T23:59:59.000-04:00")
```
```ruby
===
A data usa o formato ISO 8601: yyyy-MM-dd'T'HH:mm:ssz
===

date_of_expiration: '2020-05-30T23:59:59.000-04:00',
```
```csharp
===
A data usa o formato ISO 8601: yyyy-MM-dd'T'HH:mm:ssz
===

paymentCreateRequest.DateOfExpiration = DateTime.Parse("2020-05-30T23:59:59.000-04:00");
```
```python
===
A data usa o formato ISO 8601 format: yyyy-MM-dd'T'HH:mm:ssz
===

"date_of_expiration": "2020-05-30T23:59:59.000-04:00"
```
```curl
===
A data usa o formato ISO 8601: yyyy-MM-dd'T'HH:mm:ssz
===

"date_of_expiration": "2020-05-30T23:59:59.000-04:00",
```
]]]


> WARNING
>
> Importante
>
> O prazo de aprovação do boleto é de até 48h úteis. Por isso, recomenda-se configurar a data de expiração com no mínimo 3 dias para garantir que o pagamento seja abonado.
