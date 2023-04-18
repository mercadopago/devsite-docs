# Verificação de logs

Os logs provêm um maior entendimento às equipes para que possam ter um melhor suporte em uma primeira instância, pois permitem revisar a informação retornada na integração do Mercado Pago com a VTEX permitindo maior entendimento do que ocorreu com uma transação.

Além disso, caso seja necessário modificar ou ativar novos meios de pagamento, é possível validar se tudo está funcionando conforme o previsto.

Para ter acesso aos logs, acesse o painel de administração de sua loja VTEX e clique em  **Pagamentos > Transações**, então busque pelo log que contenha o `status response` e clique em **"+ Informações"**. Os dados mais significativos são os seguintes:

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

Caso um pagamento seja rejeitado, é  importante rever o `status_detail` que especifica o motivo da recusa.

Para mais informações, acesse o link [Resultados da criação de uma cobrança](/developers/pt/docs/checkout-api/response-handling/collection-results).