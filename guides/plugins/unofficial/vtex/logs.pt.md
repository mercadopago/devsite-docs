# Verificação de logs

Os logs permitem revisar a informação que retorna Mercado Pago e VTEX expõe para poder ter um maior entendimento de o que ocorreu com uma transação. Também em caso de modificação ou ativação de novos meios de pagamento, nos dão a possibilidade de poder validar se tudo está funcionando segundo o previsto. Por último, provém um maior entendimento às equipes comerciais para que possam dar um melhor suporte aos vendedores e converter se em uma primeira instância de suporte.

Acesse a transação da VTEX, então busque pelo LOG que contenha o status response e clique em **ver mais**.

Os dados mais significativos são os seguintes:

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

Quando confrontado com uma rejeição, é muito importante rever o `status_detail` que especifica o motivo do mesmo.

Para mais informações acesse o link [Resultados da criação de uma cobrança](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/online-payments/checkout-api/handling-responses).

> LEFT_BUTTON_RECOMMENDED_PT
>
> Glossário de erros
>
> Conheça os erros mais comuns.
>
> [Glossário de erros](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/plugins/unofficial/vtex/common-errors)