# Como verificar logs

Os logs ajudam a ter uma compreensão maior da parte dos sistemas de suporte, pois permitem revisar as informações retornadas na integração do Mercado Pago com a VTEX. Isso facilita o entendimento do que aconteceu em uma transação. 

Além disso, em caso de modificação ou ativação de novos métodos de pagamento, eles permitem validar se tudo está funcionando conforme o esperado. 

Eventualmente, a equipe de suporte poderá solicitar que você verifique e/ou envie logs para rastrear informações necessárias. Para acessar esses logs, entre no painel de administração da sua loja VTEX e clique em **Pagamentos > Transações**. Em seguida, procure pelo log que contém o *status de resposta* e clique em **+ Informação**. Os dados mais relevantes são os seguintes:


|Campo|Dado|Descrição|
|---|---|---|
|`ID`|10302316|Número da transação de Mercado Pago.|
|`Payment_method_id`|visa|Meio de pagamento.|
|`Payment_type_id`|credit_card|Meio de pagamento.|
|`Status`|authorized|Estado do pagamento. Quando o `status` for rejeitado, é muito importante revisar o `status_detail` que especifica o motivo do mesmo.|
|`Status_detail`|pending_capture|Detalhe do estado do pagamento.|
|`External_reference`|503451|Identificador da VTEX enviado a Mercado Pago.|
|`First_six_digits`|450995|Bin do cartão de crédito.|
|`Processing_mode`|agregador|Modo de processamento do pagamento.|

> NOTE
>
> Nota
>
> Você pode obter informações mais detalhadas sobre como buscar erros ou problemas em uma transação, acessando [este documento](https://help.vtex.com/es/tutorial/checking-for-errors-or-problems-in-a-transaction--3QecZEdmzumGKe8WGmeI8a) disponível no site da VTEX.  Para obter mais informações, acesse o link [Resultados da criação de uma cobrança](/developers/pt/docs/checkout-api/response-handling/collection-results). 
