# Carteira Mercado Pago

A Carteira Mercado Pago é uma forma de pagamento que permite aceitar pagamentos apenas de usuários cadastrados. Ao oferecer esta opção, os usuários poderão pagar com cartão, saldo disponível e Mercado Crédito. 

> WARNING
>
> Importante
>
> Ao adicionar esta opção, não será possível receber pagamentos de usuários não cadastrados no Mercado Pago, assim como não poderá receber pagamentos via dinheiro ou transferência.

Para configurar pagamentos com Carteira Mercado Pago, envie um **POST** com o parâmetro `purpose` e o valor `wallet_purchase` ao endpoint [/checkout/preferences](developers/pt/reference/preferences/_checkout_preferences/post) e execute a requisição.