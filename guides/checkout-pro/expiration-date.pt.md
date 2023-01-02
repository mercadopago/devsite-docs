# Data de vencimento 

Data de vencimento é o período máximo definido para realização de um pagamento. Com o Checkout Pro é possível alterar a data de vencimento padrão para **pagamentos em dinheiro** enviando o campo `date_of_expiration` na requisição de criação da preferência. 

> NOTE
>
> Importante
>
> O prazo de compensação é entre 1 e 2 dias úteis de acordo com o meio de pagamento escolhido. Por isso, recomendamos definir a data de expiração com no mínimo 3 dias de intervalo para garantir a realização do pagamento. Além disso, caso o pagamento seja realizado depois da data de expiração, o valor será estornado na conta Mercado Pago do pagador.


Para alterar a data de vencimento, envie um **POST** com o parâmetro "date_of_expiration" com a data e horário de validade do item ao endpoint [/checkout/preferences](/developers/pt/reference/preferences/_checkout_preferences/post) e execute a requisição.


[[[
```json
===
A data usa o formato ISO 8601: yyyy-MM-dd'T'HH:mm:ssz
===
"date_of_expiration": "2020-05-30T23:59:59.000-04:00"
```
]]]