# Vencimento de boleto 

Data de vencimento é o período máximo definido para realização de um pagamento. Com o Checkout Pro é possível alterar a data de vencimento padrão para **pagamentos com boleto** enviando o parâmetro `date_of_expiration` na requisição de criação da preferência. 

Neste campo, a data configurada deve ser entre 1 dia e 30 dias a partir da data de emissão do pagamento.

1. Envie um POST com o parâmetro `date_of_expiration` informando a data e horário de validade do item ao endpoint [/checkout/preferences](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/reference/preferences/_checkout_preferences/post). O valor deve seguir o formato ISO 8601 (yyyy-MM-dd'T'HH:mm:ssz)
2. Execute a requisição.

> WARNING
>
> Importante
>
> O prazo de compensação é entre 1 e 2 dias úteis de acordo com o meio de pagamento escolhido. Por isso, recomendamos definir a data de expiração com no mínimo 3 dias de intervalo para garantir a realização do pagamento. Além disso, caso o pagamento seja realizado depois da data de expiração, o valor será estornado na conta Mercado Pago do pagador.

> PREV_STEP_CARD_PT
>
> Valor de frete
>
> Saiba mais sobre o valor praticado para envio dos produtos vendidos.
>
> [Valor de frete](/developers/pt/docs/checkout-pro/checkout-customization/preferences/shipping-cost)

> NEXT_STEP_CARD_PT
>
> Esquema de abertura
>
> Veja como definir como o Checkout Pro será aberto para o usuário.
>
> [Esquema de abertura](/developers/pt/docs/checkout-pro/checkout-customization/user-interface/opening-schema)