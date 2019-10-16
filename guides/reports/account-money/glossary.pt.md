
# Glossário


Sabemos que alguns termos são técnicos e você pode não estar familiarizado com todos eles. Use este glossário para não se perder!

| Name on the report column | What it means|
| ----------------------------------- |	--------------- |
| EXTERNAL_REFERENCE | <br/> ID que ajuda a identificar a origem da operação. Por exemplo, pode ser a venda através do ID do pedido ou do envio (se for uma compra de carrinho) ou o próprio ID fornecido pelo vendedor no caso de uma integração externa.<br/><br/> Lembre-se que é possível que este campo esteja vazio para alguns casos, como pagamento de boletos ou envio de dinheiro, entre outros. <br/> <br/> |
| SOURCE_ID | ID da transação no Mercado Pago (por exemplo, o pagamento de uma venda). |
| USER_ID | Código da conta do vendedor. (Cust ID) |
| PAYMENT_METHOD | Confira os [meios de pagamento disponíveis](https://www.mercadopago.com.br/developers/pt/guides/localization/payment-methods/#bookmark_argentina) de acordo com o país no qual você operer com o Mercado Pago. |
| PAYMENT_METHOD_TYPE | <table style="border:none;background:none;font-size:16px;height:auto" ><tr style="border:none;background:none;"><td style="border:none;background:none;"> Tipo de meio de pagamento.<br/><br/> Pode ser:<br/><ul><li>*credit_card*: cartão de crédito.</li><li>*debit_card*: cartões de débito.</li><li>*bank_transfer*: transferência.</li><li>*atm*: caixa eletrônico.</li><li>*ticket*:  à vista</li><li>*account_money*: dinheiro em conta.</li></ul></td></tr></table> |
| SITE | País ao qual pertence a conta do Mercado Pago: MLB: Brasil |
| TRANSACTION_TYPE | <table style="border:none;background:none;font-size:16px;height:auto" ><tr style="border:none;background:none;"><td style="border:none;background:none;"> Tipo de operação.<br/><br/> Pode ser:<br/><ul><li> *SETTLEMENT*: Pagamento aprovado.</li><li>*REFUND*: Pagamento devolvido total ou parcial.</li><li>*CHARGEBACK*: O comprador fez uma contestação (desconhece o pagamento) no seu cartão de crédito.</li><li>*DISPUTE*: O comprador iniciou uma reclamação por esse pagamento.</li><li>*WITHDRAWAL*: Retirada para a conta bancária.</li><li>*WITHDRAWAL_CANCEL*: Retirada para a conta bancária que foi cancelada.</li></ul></td></tr></table> |
| TRANSACTION_AMOUNT | Valor bruto da transação. |
| TRANSACTION_CURRENCY | <table style="border:none;background:none;font-size:16px;height:auto" ><tr style="border:none;background:none;"><td style="border:none;background:none;"> Moeda:<br/><ul><li> MXN (Peso mexicano)</li><li>CLP (Peso Chileno)</li><li>ARS (Peso Argentino)</li><li>BRL (Real Brasilero</li><li>PEN (Sol Peruano)</li><li>COP (Peso Colombiano)</li><li>UYU (Peso Uruguayo)</li><li>VES (Bolivar Venezolano)</li></ul></td></tr></table> |
| TRANSACTION_DATE | Data de aprovação da transação. |
| FEE_AMOUNT | É a somatória das tarifass de processamento, shipping, financiamento e boleto, se foi assumido pelo vendedor. |
| SETTLEMENT_NET_AMOUNT | Valor líquido da transação que impactou o dinheiro em conta. Foram descontadas todas as comissões envolvidas da `TRANSACTION_AMOUNT`. |
| SETTLEMENT_CURRENCY | <table style="border:none;background:none;font-size:16px;height:auto" ><tr style="border:none;background:none;"><td style="border:none;background:none;"> Moeda:<br/><ul><li> MXN (Peso mexicano)</li><li>CLP (Peso Chileno)</li><li>ARS (Peso Argentino)</li><li>BRL (Real Brasilero</li><li>PEN (Sol Peruano)</li><li>COP (Peso Colombiano)</li><li>UYU (Peso Uruguayo)</li><li>VES (Bolivar Venezolano)</li></ul></td></tr></table> |
| SETTLEMENT_DATE | Data em que o valor da transação foi creditado. |
| REAL_AMOUNT | Valor líquido da transação, se é um settlement, os valores para estornos, reclamações ou devoluções são descontados. |
| COUPON_AMOUNT | Valor do cupom de desconto. **Apenas o valor bruto** (`TRANSACTION_AMOUNT`) **é descontado se fornecido pelo vendedor.**. |
| METADATA | Dados adicionais como, por exemplo, o ID das devoluções parciais ou dados informados pelo vendedor em caso de integração externa. |
| MKP_FEE_AMOUNT | Comissão do Mercado Livre. |
| FINANCING_FEE_AMOUNT | Custo de oferecer parcelamento sem juros. |
| SHIPPING_FEE_AMOUNT | Custo de envio. |
| TAXES_AMOUNT | Impostos recebidos. |
| INSTALLMENTS | Número de parcelas em que a transação foi realizada. |
| TAX_DETAIL | <br/> Descrição do imposto retido por operação no  `TAXES_AMOUNT`. <br/><br/> |
| POS_ID | ID do caixa, se o pagamento é feito através de um comércio físico. |
| POS_NAME | Nome do caixa para o pagamento realizado em um comércio físico. |
| EXTERNAL_POS_ID |  ID do caixa definido pelo usuário para o pagamento realizado em um comércio físico. |
| STORE_ID | ID da loja se o pagamento é feito em um comércio físico. |
| STORE_NAME |  Nome da loja para o pagamento feito em um comércio físico. |
| EXTERNAL_STORE_ID |  ID da loja definido pelo usuário para o pagamento feito em um comércio físico. |
| ORDER_ID | Ordem de compra. |
| SHIPPING_ID | Identificador de remessa. |
| SHIPMENT_MODE |  Modalidade de remessa. |
| PACK_ID |  Identificador de pacote no carrinho. |

<hr/>

### Próximos passos

> LEFT_BUTTON_RECOMMENDED_PT
>
> Como usar o relatório
>
> Saiba como o relatório é composto e aprenda a analisá-lo.
>
> [Como usar o relatório](https://www.mercadopago.com.br/developers/pt/guides/reports/account-money/how-to-use/)

> RIGHT_BUTTON_REQUIRED_PT
>
> Gere seus relatórios
>
> Saiba as formas de gerar um relatório e siga as etapas para configurar suas preferências.
>
> [Gere seus relatórios](https://www.mercadopago.com.br/developers/pt/guides/reports/account-money/generate/)
