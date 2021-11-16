# Verificação de logs

Os logs provêm um maior entendimento às equipes para que possam ter um melhor suporte em uma primeira instância, pois permitem revisar a informação retornada na integração do Mercado Pago com a VTEX permitindo maior entendimento do que ocorreu com uma transação.

Também em caso de modificação ou ativação de novos meios de pagamento, nos dão a possibilidade de poder validar se tudo está funcionando conforme o previsto.

Para ter acesso aos logs, acesse o menu **Transações** do módulo **Pagamentos** do painel de administração de sua loja VTEX, então busque pelo LOG que contenha o `status response` e clique em **"ver mais"**. Os dados mais significativos são os seguintes:

|Campo|Dado|Descrição|
|---|---|---|
|`ID`|10302316|Número da transação de Mercado Pago.|
|`Payment_method_id`|visa|Meio de pagamento.|
|`Payment_type_id`|credit_card|Meio de pagamento.|
|`Status`|authorized|Estado do pagamento.|
|`Status_detail`|pending_capture|Detalhe do estado do pagamento.|
|`External_reference`|503451|Identificador da VTEX enviado a Mercado Pago.|
|`First_six_digits`|450995|Bin do cartão de crédito.|
|`Processing_mode`|agregador|Modo de processamento do pagamento.|

> NOTE
>
> Nota
>
> [Este documento](https://help.vtex.com/pt/tutorial/checking-for-errors-or-problems-in-a-transaction--3QecZEdmzumGKe8WGmeI8a) explica em detalhes como encontrar erros ou problemas em uma transação.

Quando confrontado com uma rejeição, é muito importante rever o `status_detail` que especifica o motivo do mesmo.

Para mais informações acesse o link [Resultados da criação de uma cobrança](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/online-payments/checkout-api/handling-responses).

> LEFT_BUTTON_RECOMMENDED_PT
>
> Glossário de erros
>
> Conheça os erros mais comuns.
>
> [Glossário de erros](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/plugins/unofficial/vtex/common-errors)