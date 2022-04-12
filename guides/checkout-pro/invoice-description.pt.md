# Descrição de fatura

Descrição de fatura é uma configuração que permite definir o nome do estabelecimento que será exibido na fatura do comprador. Isto permite a identificação do negócio e evita contestações desnecessárias.

1. Envie um POST com o parâmetro `statement_descriptor` ao endpoint [/checkout/preferences](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/reference/preferences/_checkout_preferences/post).
2. Em `statement_descriptor`, insira o nome do estabelecimento.
3. Execute a requisição.

> PREV_STEP_CARD_PT
>
> Modo binário
>
> Veja mais informações sobre o modo binário e como ativá-lo.
>
> [Modo binário](/developers/pt/docs/checkout-pro/checkout-customization/preferences/binary-mode)

> NEXT_STEP_CARD_PT
>
> Valor de frete
>
> Saiba mais sobre o valor praticado para envio dos produtos vendidos.
>
> [Valor de frete](/developers/pt/docs/checkout-pro/checkout-customization/preferences/shipping-cost)