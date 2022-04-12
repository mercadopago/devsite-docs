# Carteira Mercado Pago

A Carteira Mercado Pago é uma forma de pagamento que permite aceitar pagamentos apenas de usuários cadastrados. Ao oferecer esta opção, os usuários poderão pagar com cartão, saldo disponível e Mercado Crédito. 

> WARNING
>
> Importante
>
> Ao adicionar esta opção, não será possível receber pagamentos de usuários não cadastrados no Mercado Pago, assim como não poderá receber pagamentos via dinheiro ou transferência.

Para configurar pagamentos com Carteira Mercado Pago, envie um POST com o parâmetro `purpose` e o valor `wallet_purchase` ao endpoint [/checkout/preferences](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/reference/preferences/_checkout_preferences/post) e execute a requisição.

> PREV_STEP_CARD_PT
>
> Estilo de cores
>
> Veja como personalizar o estilo de cores dos elementos de sua interface.
>
> [Estilo de cores](/developers/pt/docs/checkout-pro/checkout-customization/user-interface/color-style)

> NEXT_STEP_CARD_PT
>
> Criar usuário de teste
>
> Saiba como criar usuários de teste que permitirão avaliar o funcionamento do checkout.
>
> [Criar usuário de teste](/developers/pt/docs/checkout-pro/integration-test/create-test-user)