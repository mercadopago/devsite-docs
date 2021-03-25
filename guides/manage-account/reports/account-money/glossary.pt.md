
# Glossário


Sabemos que alguns termos são técnicos e você pode não estar familiarizado com todos eles. Use este glossário para não se perder!

| Nome da coluna do relatório | O que significa |
| --- | --- |
| EXTERNAL_REFERENCE | <br/> ID que ajuda a identificar a origem da operação. Por exemplo, pode ser a venda através do ID do pedido ou do envio (se for uma compra de carrinho) ou o próprio ID fornecido pelo vendedor no caso de uma integração externa.<br/><br/> Lembre-se que é possível que este campo esteja vazio para alguns casos, como pagamento de boletos ou envio de dinheiro, entre outros. <br/> <br/> |
| SOURCE_ID | ID da transação no Mercado Pago (por exemplo, o pagamento de uma venda). |
| USER_ID | Código da conta do vendedor. (Cust ID) |
| PAYMENT_METHOD | Confira os [meios de pagamento disponíveis](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/resources/localization/payment-methods) de acordo com o país no qual você opera com o Mercado Pago. |
| PAYMENT_METHOD_TYPE | Tipo de meio de pagamento.<br><br> Pode ser:<br>*credit_card*: cartão de crédito.<br>*debit_card*: cartão de débito.<br>*bank_transfer*: transferência.<br>*atm*: caixa eletrônico.<br>*ticket*: à vista<br>*account_money*: dinheiro em conta.<br><br> |
| SITE | MLB: Brasil |
| TRANSACTION_TYPE | Tipo de operação. Pode ser:<br><br> *SETTLEMENT*: pagamento aprovado.<br>*REFUND*: pagamento devolvido total ou parcial.<br>*CHARGEBACK*: o comprador fez uma contestação (desconhece o pagamento) no seu cartão de crédito.<br>*DISPUTE*: o comprador iniciou uma reclamação por esse pagamento.<br>*WITHDRAWAL*: retirada para a conta bancária.<br>*WITHDRAWAL_CANCEL*: retirada para a conta bancária que foi cancelada.<br>*PAYOUT*: saque em dinheiro disponível no Mercado Pago. ----[mlb]---- <br>*TRAVA_DE_RECEBIVEL*: trava de recebível. ------------ <br><br> |
| TRANSACTION_AMOUNT | Valor bruto da transação. |
| TRANSACTION_CURRENCY | Moeda:<br><br>MXN (Peso mexicano)<br>CLP (Peso Chileno)<br>ARS (Peso Argentino)<br>BRL (Real Brasileiro)<br>EN (Sol Peruano)<br>COP (Peso Colombiano)<br>UYU (Peso Uruguayo)<br>VES (Bolivar Venezolano)<br><br> |
| TRANSACTION_DATE | Data de aprovação da transação. |
| FEE_AMOUNT | É a somatória das tarifas de processamento, shipping, financiamento e boleto, se foi assumido pelo vendedor. |
| SETTLEMENT_NET_AMOUNT | Valor líquido da transação que impactou o dinheiro em conta. Foram descontadas todas as comissões envolvidas da `TRANSACTION_AMOUNT`. |
| SETTLEMENT_CURRENCY | Moeda:<br><br> MXN (Peso mexicano)<br>CLP (Peso Chileno)<br>ARS (Peso Argentino)<br>BRL (Real Brasileiro)<br>PEN (Sol Peruano)<br>COP (Peso Colombiano)<br>UYU (Peso Uruguayo)<br>VES (Bolivar Venezolano)<br><br> |
| SETTLEMENT_DATE | Data em que o valor da transação foi creditada. |
| REAL_AMOUNT | Valor líquido da transação, se é um settlement, os valores para estornos, reclamações ou devoluções são descontados. |
| COUPON_AMOUNT | Valor do cupom de desconto. **Apenas o valor bruto** (`TRANSACTION_AMOUNT`) **é descontado se fornecido pelo vendedor.**. |
| METADATA | Dados adicionais como, por exemplo, o ID das devoluções parciais ou dados informados pelo vendedor em caso de integração externa. |
| MKP_FEE_AMOUNT | Comissão do Mercado Livre. |
| FINANCING_FEE_AMOUNT | Custo de oferecer parcelamento sem juros. |
| SHIPPING_FEE_AMOUNT | Custo de envio. |
| TAXES_AMOUNT | Impostos recebidos. |
| INSTALLMENTS | Número de parcelas em que a transação foi realizada. |
| TAX_DETAIL | <br/> Descrição do imposto retido por operação no `TAXES_AMOUNT`. <br/><br/> |
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

<hr/>

### Próximos passos

> LEFT_BUTTON_RECOMMENDED_PT
>
> Como usar o relatório
>
> Saiba como o relatório é composto e aprenda a analisá-lo.
>
> [Como usar o relatório](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/manage-account/reports/account-money/how-to-use)

> RIGHT_BUTTON_REQUIRED_PT
>
> Gere seus relatórios
>
> Saiba as formas de gerar um relatório e siga as etapas para configurar suas preferências.
>
> [Gere seus relatórios](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/manage-account/reports/account-money/generate)
