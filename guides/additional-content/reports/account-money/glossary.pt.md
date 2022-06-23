# Glossário

Sabemos que alguns termos são técnicos e você pode não estar familiarizado com todos eles. Use este glossário para não se perder!

| Nome da coluna do relatório | O que significa |
| --- | --- |
| EXTERNAL_REFERENCE | <br/> ID que ajuda a identificar a origem da operação. Por exemplo, pode ser a venda através do ID do pedido ou do envio (se for uma compra de carrinho) ou o próprio ID fornecido pelo vendedor no caso de uma integração externa.<br/><br/> Lembre-se que é possível que este campo esteja vazio para alguns casos, como pagamento de boletos ou envio de dinheiro, entre outros. <br/> <br/> |
| SOURCE_ID | ID da transação no Mercado Pago (por exemplo, o pagamento de uma venda). |
| USER_ID | Código da conta do vendedor. (Cust ID) |
| PAYMENT_METHOD | Confira os ----[mla]---- [meios de pagamento disponíveis](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/additional-content/payment-localization/consult-payment-methods/#bookmark_argentina)  ------------ ----[mlb]---- [meios de pagamento disponíveis](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/additional-content/payment-localization/consult-payment-methods/#bookmark_brasil) ------------ ----[mpe]---- [meios de pagamento disponíveis](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/additional-content/payment-localization/consult-payment-methods/#bookmark_perú)  ------------ ----[mco]---- [meios de pagamento disponíveis](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/additional-content/payment-localization/consult-payment-methods/#bookmark_colombia)  ------------ ----[mlm]---- [meios de pagamento disponíveis](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/additional-content/payment-localization/consult-payment-methods/#bookmark_méxico) ------------ ----[mlu]---- [medios de pago disponibles](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/additional-content/payment-localization/consult-payment-methods/#bookmark_uruguay) ------------ ----[mlc]---- [meios de pagamento disponíveis](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/additional-content/payment-localization/consult-payment-methods/#bookmark_chile) ------------ de acordo com o país no qual você opera com o Mercado Pago. |
| PAYMENT_METHOD_TYPE | Tipo de meio de pagamento.<br><br> Pode ser:<br>*credit_card*: cartão de crédito.<br>*debit_card*: cartão de débito.<br>*bank_transfer*: transferência.<br>*atm*: caixa eletrônico.<br>*ticket*: à vista<br>*account_money*: dinheiro em conta.<br>*PIX*:transferência.<br><br/> |
| SITE | MLB: Brasil |
| TRANSACTION_TYPE | Tipo de operação. Pode ser:<br><br> *SETTLEMENT*: pagamento aprovado.<br> ----[mlu, mla, mlm, mco, mlc, mlb]---- *REFUND*: pagamento totalmente devolvido ou devolução parcial.------------ ----[mpe]---- *REFUND*: pagamento totalmente devolvido.------------<br>*CHARGEBACK*: o comprador fez uma contestação (desconhece o pagamento) no seu cartão de crédito.<br>*DISPUTE*: o comprador iniciou uma reclamação por esse pagamento.<br>*WITHDRAWAL*: retirada para a conta bancária.<br>*WITHDRAWAL_CANCEL*: retirada para a conta bancária que foi cancelada.<br>*PAYOUT*: saque em dinheiro ou transferência por PIX de saldo disponível no Mercado Pago. ----[mlb]---- <br>*TRAVA_DE_RECEBIVEL*: trava de recebível. ------------ <br><br> |
| TRANSACTION_AMOUNT | Valor bruto da transação. |
| TRANSACTION_CURRENCY | Moeda:<br><br>MXN (Peso mexicano)<br>CLP (Peso Chileno)<br>ARS (Peso Argentino)<br>BRL (Real Brasileiro)<br>EN (Sol Peruano)<br>COP (Peso Colombiano)<br>UYU (Peso Uruguayo)<br>VES (Bolivar Venezolano)<br><br> |
| SELLER_AMOUNT | Valor recebido por compras com split. |
| TRANSACTION_DATE | Data de aprovação da transação. |
| FEE_AMOUNT | É a somatória das tarifas de processamento, shipping, financiamento e boleto, se foi assumido pelo vendedor. |
| SETTLEMENT_NET_AMOUNT | Valor líquido da transação que impactou o dinheiro em conta. Foram descontadas todas as comissões envolvidas da `TRANSACTION_AMOUNT`. |
| SETTLEMENT_CURRENCY | Moeda:<br><br> MXN (Peso mexicano)<br>CLP (Peso Chileno)<br>ARS (Peso Argentino)<br>BRL (Real Brasileiro)<br>PEN (Sol Peruano)<br>COP (Peso Colombiano)<br>UYU (Peso Uruguayo)<br>VES (Bolivar Venezolano)<br><br> |
| SETTLEMENT_DATE | Data em que o valor da transação foi creditada. |
| REAL_AMOUNT | Valor líquido da transação, se é um settlement, os valores para estornos, reclamações ou devoluções são descontados. |
| COUPON_AMOUNT | Valor do cupom de desconto. **Apenas o valor bruto** (`TRANSACTION_AMOUNT`) **é descontado se fornecido pelo vendedor**. |
| METADATA | ----[mlu, mla, mlm, mco, mlc, mlb]---- Dados extras, como por exemplo, o ID dos reembolsos parciais ou dados fornecidos pelo vendedor no caso de integrações externas. ------------ ----[mpe]---- Dados adicionais como, por exemplo, ou dados informados pelo vendedor em caso de integração externa. ------------ ----[mlb]---- Quando o termo "Rebate" é exibido, entende-se como o desconto promocional assumido pelo Mercado Livre em promoções co-financiadas. ------------ |
| MKP_FEE_AMOUNT | Comissão do Mercado Livre. |
| FINANCING_FEE_AMOUNT | Custo de oferecer parcelamento quando o custo dessa comissão for assumido pelo seller. |
| SHIPPING_FEE_AMOUNT | Custo de envio. |
| TAXES_AMOUNT | ----[mla]---- Impostos cobrados por retenção de Receita Bruta na fonte, IVA, Lucros; e impostos sobre Créditos e Débitos, entre outros. [Saiba mais sobre retenções e impostos.](https://vendedores.mercadolibre.com.ar/nota/retenciones-y-percepciones-sobre-tus-ventas-lo-que-debes-saber/) ------------ ----[mlm, mlc, mlu, mlb, mco, mpe]----Impostos recebidos.------------  |
| INSTALLMENTS | Número de parcelas em que a transação foi realizada. |
| TAX_DETAIL | Descrição do imposto retido por operação no `TAXES_AMOUNT`. ----[mla]---- <br><br>Você pode considerar os seguintes valores conforme a jurisdição: <br>cordoba<br>corrientes<br>mendoza<br>la_pampa<br>santa_fe<br>tucuman<br>entre_rios<br>catamarca<br>neuquen<br>santiago_del_estero<br>rio_negro<br>jujuy ------------ <br><br> |
| POS_ID | ID do caixa, se o pagamento é feito através de um comércio físico. |
| POS_NAME | Nome do caixa para o pagamento realizado em um comércio físico. |
| EXTERNAL_POS_ID | ID do caixa definido pelo usuário para o pagamento realizado em um comércio físico. |
| STORE_ID | ID da loja se o pagamento é feito em um comércio físico. |
| STORE_NAME | Nome da loja para o pagamento feito em um comércio físico. |
| EXTERNAL_STORE_ID | ID da loja definido pelo usuário para o pagamento feito em um comércio físico. |
| ORDER_ID | Ordem de compra. |
| SHIPPING_ID | Identificador de envio. |
| SHIPMENT_MODE | Modalidade de envio. |
| PACK_ID | Identificador do pacote no carrinho. |
| TAXES_DISAGGREGATED | Impostos desagregados no formato JSON. |
| POI_ID | ID da maquininha se o pagamento é feito em uma loja física. |
| POI_WALLET_NAME | Nome da carteira digital de onde um pagamento virtual saiu. Permite identificar a origem de uma transação quando você cobra com um código QR do Mercado Pago.|
| POI_BANK_NAME | Nome da instituição bancária de onde um pagamento virtual saiu. Permite identificar a origem de uma transação quando você cobra com um código QR do Mercado Pago.|
| DESCRIPTION | Ajuda a identificar transações ou operações registradas em um período de tempo.<br> Quando se tratar de pagamento parcelado, a linha será identificada como "INSTALLMENT".|
| MONEY_RELEASE_DATE | Data de previsão da liberação do pagamento de cada parcela ou da parcela única.|
| CARD_INITIAL_NUMBER | Corresponde aos primeiros dígitos do cartão de crédito ou débito utilizado para fazer a compra. |
| OPERATION_TAGS | São etiquetas para categorizar e/ou segmentar diferentes aspectos da transação, como por exemplo, os canais usados para fazer um pagamento. Eles são identificados como: <br><br>  -   WHATSAPP_PAY: Esta etiqueta indica que o pagamento foi feito via WhatsApp <br> -   CASHOUT: Esta etiqueta indica que a transação corresponde a um Pix Saque <br> -   EXTRACASHOUT: Esta etiqueta indica que a transação corresponde a um Pix Troco <br> -   PIX: Esta etiqueta indica que a transação corresponde a um pagamento via Pix.| ----[mlb]----
| INSTALLMENT_NUMBER* | Indica o número da parcela que será paga, do total de parcelas contratadas.<br> Essa informação aparece quando o cliente solicita o parcelamento da compra.<br> Por exemplo: 2 / 5 indica o pagamento da segunda parcela, de um total das 5 parcelas contratadas.<br> Quando o pagamento é liberado em uma única parcela essa coluna não estará preenchida. | ------------ ----[mlb]----
| INSTALLMENT_NET_AMOUNT* | Mostra o valor líquido da parcela que será paga.<br> Essa informação aparece quando o cliente escolhe pagar o valor total da compra em parcelas mensais. | ------------ ----[mla]----
| PAYER_NAME* | Nome de quem faz o pagamento. | ------------ ----[mla]----
| PAYER_ID_TYPE* | Tipo de identificação de quem faz um pagamento ou doação. | ------------ ----[mla]----
| PAYER_ID_NUMBER* | Número de identificação de quem faz um pagamento ou doação. | ------------

----[mla]----
> INFO
>
> (*) Estas informações só podem ser usadas para fins de reconciliação e serão tratadas de acordo com as leis de 
> proteção de dados pessoais aplicáveis. Elas estarão disponíveis quando pagamentos via código QR e transferências forem 
> recebidos ou quando uma doação for recebida por uma ONG.
------------
