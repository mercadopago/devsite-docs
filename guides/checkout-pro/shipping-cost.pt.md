# Valor de frete

Valor de envio, ou frete, é o valor praticado para envio dos produtos vendidos. Se este valor já está definido, é possível exibi-lo separado do valor total da compra no momento do pagamento.

1. Envie um POST com os atributos `cost` e `mode` do parâmetro `shipments` ao endpoint [/checkout/preferences](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/reference/preferences/_checkout_preferences/post).
2. Em `cost`,  insira o valor do frete.
3. Em `mode`, insira `not_specified`.
4. Execute a requisição em seu terminal.

> PREV_STEP_CARD_PT
>
> Descrição de fatura
>
> Veja como definir o nome do estabelecimento que será exibido na fatura do comprador.
>
> [Descrição de fatura](/developers/pt/docs/checkout-pro/checkout-customization/preferences/invoice-description)

> NEXT_STEP_CARD_PT
>
> Vencimento de boleto 
>
> Veja como alterar a data de vencimento padrão para pagamentos com boleto.
>
> [Vencimento de boleto](/developers/pt/docs/checkout-pro/checkout-customization/preferences/expiration-date)