# Glossário

----[mla]----
> WARNING
>
> Importante
>
> A partir de 5 de dezembro, não será mais possível criar novos relatórios de Dinheiro retirado. Para continuar controlando as transferências, saques e movimentações do seu saldo disponível, por favor,[use o relatório Liberações](https://bit.ly/3B7Q5Qy).
------------
----[mlm]----
> WARNING
>
> Importante
>
> A partir de 12 de dezembro, não será mais possível criar novos relatórios de "Dinheiro retirado". Para continuar controlando as transferências, saques e movimentações do seu saldo disponível, por favor,[use o relatório "Liberações".](https://bit.ly/3RH0KJ4)
------------


Sabemos que alguns termos são técnicos e você pode não estar familiarizado com todos eles. Use este glossário para não se perder!

| Nome da coluna do relatório | O que significa |
| --- | --- |
| DATE| Data de liberação, bloqueio ou desbloqueio, conforme se aplicar. |
| SOURCE_ID | ID da operação no Mercado Pago (por exemplo, o pagamento de uma venda).|
| EXTERNAL_REFERENCE | <br/> ID que ajuda a identificar a origem da operação. Por exemplo, pode ser a venda através do ID do pedido ou do envio (se for uma compra de carrinho) ou o próprio ID fornecido pelo vendedor no caso de uma integração externa. <br/><br/> Lembre-se de que é possível que este campo esteja vazio para alguns casos, como pagamento de boletos ou envio de dinheiro, entre outros. <br/> <br/> |
| RECORD_TYPE | <br/> `initial_available_balance` → Dinheiro disponível do período anterior.<br/><br/> `block` → Dinheiro bloqueado por uma reclamação ou contestação.<br/><br/> `unblock` → Dinheiro liberado porque foi resolvida uma reclamação ou estorno.<br/><br/> `release` → Dinheiro de uma cobrança que foi liberado.<br/><br/> `fullblock` → Diheiro bloqueado por restrição.<br/><br/> `subtotal` → Soma dos valores de cada record type.<br/><br/> `total` → Valor líquido total. <br/> <br/> |
| DESCRIPTION | <table style="border:none;background:none;font-size:16px;" ><tr style="border:none;background:none;"><td style="border:none;background:none;"> Possíveis valores que o campo pode tomar: <br/><ul><li> Para `block o unblock`: chargeback, dispute, shipping_return, credit_payment, reserve_for_payment, reserve_for_debt_payment, reserve_for_refund, reserve_for_bpp_shipping_return, reserve_for_cbk_cross_recovery, reserve_for_embargo_invested, restriction----[mlb]----, judgment_bacen, fraud ------------ </li><li>Para `release`: payment, withdrawal, refund, tax_payment_ibcf, tax_payment_ibcf_cancel, tax_payment_ibex, tax_payment_iibb, tax_payment_iibb_cancel, shipping, shipping_cancel, tax_withdholding, tax_withdholding_cancel, mediation,mediation_cancel, chargeback, fee_release_in_advance, asset_management_gain, asset_management_loss, trava_de_recibibles</li><li>Para `fullblock`: restriction.</li><li>Para `subtotal`: block, unblock o release.</li></ul></td></tr><tr style="border:none;"><td style="border:none;"> Definições a considerar: <br/><br/> `chargeback`: aparece quando uma contestação associada ao pagamento a que se refere é iniciada ou resolvida. <br/><br/> `dispute`: aparece quando uma mediação ou reclamação sobre o pagamento referido é iniciada ou resolvida. Pode ocorrer antes ou depois que o pagamento tenha sido liberado como dinheiro disponível e até mesmo retirado da conta. <br/><br/>`shipping_return`: aparece quando um pagamento por devolução agilizada é bloqueado ou desbloqueado. <br/><br/>`payment`: pagamento liberado em qualquer um dos canais em que o cliente opera. <br/><br/>`withdrawal`: retirada feita do saldo disponível. <br/><br/>`refund`: devolução associada ao pagamento referido.<br/><br/>`tax_payment_ibcf`: arrecadação da receita bruta em Capital Federal, calculada uma vez por mês, de acordo com as operações transacionadas. Para reconciliar por operação, consulte os detalhes nos [Relatórios de faturas no MyML](https://vendedores.mercadolibre[FAKER][URL][DOMAIN]/blog/notas/todo-lo-que-tenes-que-saber-sobre-tu-facturacion/).<br/><br/>`tax_payment_ibcf_cancel`: cancelamento do imposto de renda bruto em Capital Federal. <br/><br/>`tax_payment_ibex`: arrecadação da receita bruta por sujeito excedido do regime simplificado, calculada uma vez por mês de acordo com as operações transacionadas. Para reconciliar por operação, consulte os detalhes nos [Relatórios de faturas no MyML](https://vendedores.mercadolibre[FAKER][URL][DOMAIN]/blog/notas/todo-lo-que-tenes-que-saber-sobre-tu-facturacion/).<br/><br/> `tax_payment_iibb`: arrecadação da receita bruta na província de Buenos Aires, calculada uma vez por mês, de acordo com as operações transacionadas. Para reconciliar por operação, consulte os detalhes nos [Relatórios de faturas no MyML](https://vendedores.mercadolibre[FAKER][URL][DOMAIN]/blog/notas/todo-lo-que-tenes-que-saber-sobre-tu-facturacion/).<br/><br/> `tax_payment_iibb_cancel`: cancelamento do imposto da receita bruta. <br/><br/> `tax_payment_iibb_cre_[jurisdição]`: imposto sobre Receita Bruta - Mercado Crédito, em que substitui-se `[jurisdição]` pelo nome do estado onde o imposto é gerado. <br/>Exemplo 1: tax_payment_iibb_cre_misiones<br/>Exemplo 2: tax_payment_iibb_cre_san_luis<br/> Para reconciliar por operação, consulte os detalhes nos [Relatórios de faturas no MyML](https://vendedores.mercadolibre[FAKER][URL][DOMAIN]/blog/notas/todo-lo-que-tenes-que-saber-sobre-tu-facturacion/).<br/><br/> `tax_iibb_[jurisdição]`: imposto sobre Receita Bruta, em que substitui-se `[jurisdição]` pelo nome do estado onde o imposto é gerado. <br/>Exemplo 1: tax_iibb_misiones<br/>Exemplo 2: tax_iibb_san_luis<br/> Para reconciliar por operação, consulte os detalhes nos [Relatórios de faturas no MyML](https://vendedores.mercadolibre[FAKER][URL][DOMAIN]/blog/notas/todo-lo-que-tenes-que-saber-sobre-tu-facturacion/).<br/><br/> `tax_iva`: IVA - Regime Geral.<br/><br/> `tax_iva_cre`: IVA - Regime Geral - Mercado Crédito. <br/><br/> `tax_withdholding`: a cobrança de retenções que não puderam ser executadas para o pagamento associado. Na Argentina, são apenas retenções de receita bruta (arrecadações são debitadas como outra operação). No Uruguai, são retenções de IVA. Na Colômbia, são retenções de IVA, ICA e Fonte, conforme aplicável. <br/><br/> `tax_withdholding_cancel`: o cancelamento da retenção tax_withdholding. <br/><br/>`tax_withholding_payer`: imposto sobre Créditos e Débitos em pagamentos.<br/><br/>`tax_withholding_collector`: imposto sobre Créditos e Débitos em cobranças.<br/><br/>`tax_withholding_payout`: Imposto sobre Créditos e Débitos em saques.<br/><br/>`tax_withholding_shipping`: imposto sobre Créditos e Débitos em transferências.<br/><br/>`shipping`: tarifa de envio para compras de carrinho que não está incluída em cada pagamento do carrinho.<br/><br/>`shipping`: tarifa de envio para compras de carrinho que não está incluída em cada pagamento do carrinho.<br/><br/> `shipping_cancel`: cancelamento da tarifa de envio para compras de carrinho que não está incluída em cada pagamento do carrinho.<br/><br/> `mediation`: resolução de una mediação a favor do comprador que acaba debitando do saldo disponível do vendedor<br/><br/> `mediation_cancel`: cancelamento da mediação resolvida a favor do comprador. <br/><br/> `chargeback`: contestação a favor ou contra uma operação. <br/><br/>`fee-release_in_advance`: tarifa de antecipação.<br/><br/>`fee-release_in_advance_pnf`: tarifa de antecipação.<br/><br/> `asset_management_gain`: rendimento positivo gerado pela variação do valor de quotas adquiridas no fundo comum de investimento.<br/><br/> `asset_management_loss`: rendimento negativo gerado pela variação do valor de quotas adquiridas no fundo comum de investimento<br/><br/> `restriction`: ocorre quando uma restrição é aplicada por comportamento fraudulento.<br/><br/> `credit_payment`: aparece quando a parcela de um crédito é debitada.<br/><br/> `payout`: saque em dinheiro disponível no Mercado Pago.<br/><br/> `reserve_for_embargo_invested`: bloqueio do seu dinheiro em rendimento. Este valor aparece quando há uma reserva de dinheiro em fundos de investimento.<br/><br/> `reserve_for_bpp_shipping_return`: reserva para devoluções.<br/><br/> `reserve_for_debt_payment`: retido para pagamento de dívida.<br/><br/> `reserve_for_refund`: retido para devoluções aprovadas.<br/><br/> `reserve_for_cbk_cross_recovery`: retido por contestaçao de conta vinculada.<br/><br/> `reserve_for_payment`: gastos pendentes de confirmação. ----[mlb]---- <br/><br/>`judgment_bacen`: ordem Judicial do Banco Central. O dinheiro pode estar congelado na conta devido a algum litígio em andamento. Pode estar associado a bloqueios de valores.<br/><br/> `fraud`: revisão de segurança.<br/><br/>`trava_de_recibibles`: trava de recebível. ------------</td></tr></table>|
| NET_DEBIT_AMOUNT | Creditado no valor disponível. |
| NET_CREDIT_AMOUNT | Debitado no valor disponível. |
| SELLER_AMOUNT | Valor recebido por compras com split. |
| GROSS_AMOUNT | Valor bruto da transação. |
| METADATA | Dados adicionais como, por exemplo, o ID das devoluções parciais ou dados informados pelo vendedor em caso de integração externa. |
| MP_FEE_AMOUNT | Pagamento da tarifa doMercado Pago e/ou Mercado Livre. ----[mla, mpe, mco, mlm, mlu, mlc]---- Inclui IVA. ------------ |
| FINANCING_FEE_AMOUNT | Custo de oferecer parcelamento sem juros. |
| SHIPPING_FEE_AMOUNT | Custo de envio. |
| TAXES_AMOUNT | ----[mla]---- Impostos cobrados por retenção de Receita Bruta na fonte, IVA, Lucros; e impostos sobre Créditos e Débitos, entre outros.[Saiba mais sobre retenções e impostos.](https://vendedores.mercadolibre.com.ar/nota/retenciones-y-percepciones-sobre-tus-ventas-lo-que-debes-saber/) ------------  ----[mlm, mlc, mlu, mlb, mco, mpe]----Impostos recebidos por retenção de receita bruta.------------ |
| COUPON_AMOUNT | Valor do cupom de desconto. Apenas o valor bruto (`GROSS_AMOUNT`) é descontado se fornecido pelo vendedor. |
| INSTALLMENTS | Número de parcelas em que a transação foi realizada. |
| PAYMENT METHOD | Meio de pagamento. |
| TAX_DETAIL | <br/> Descrição do imposto retido por operação no `TAXES_AMOUNT`. ----[mla]---- Você pode considerar os seguintes valores conforme a jurisdição: <br/>cordoba<br/>corrientes<br/>mendoza<br/>la_pampa<br/>santa_fe<br/>tucuman<br/>entre_rios<br/>catamarca<br/>neuquen<br/>santiago_del_estero<br/>rio_negro<br/>jujuy ------------ <br/><br/> |
| TAX_AMOUNT_TELCO | É o valor do imposto às empresas de telecomunicação descontado do valor bruto. |
| TRANSACTION_APPROVAL_DATE | Data de aprovação da operação. |
| POS_ID | ID do caixa, se o pagamento é feito através de um comércio físico. |
| POS_NAME | Nome do caixa para o pagamento realizado em um comércio físico. |
| EXTERNAL_POS_ID | ID do caixa definido pelo usuário para o pagamento realizado em um comércio físico. |
| STORE_ID | ID da loja se o pagamento é feito em um comércio físico. |
| STORE_NAME | Nome da loja para o pagamento feito em um comércio físico. |
| EXTERNAL_STORE_ID | ID da lojal definido pelo usuário para o pagamento feito em um comércio físico. |
| ORDER_ID | Ordem de compra. |
| SHIPPING_ID | Identificador de envio. |
| SHIPMENT_MODE | Modalidade de envio. |
| PACK_ID | Identificador do pacote no carrinho. |
| TAXES_DISAGGREGATED | Impostos desagregados no formato JSON. |
| EFFECTIVE_COUPON_AMOUNT | Custo de oferecer desconto. |
| POI_ID | ID da maquininha se o pagamento é feito em uma loja física. |

<hr/>

### Próximos passos

> LEFT_BUTTON_RECOMMENDED_PT
>
> Como usar o relatório
>
> Saiba como o relatório é composto e aprenda a analisá-lo.
>
> [Como usar o relatório](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/additional-content/reports/available-money/how-to-use)

> RIGHT_BUTTON_REQUIRED_PT
>
> Gere seus relatórios
>
> Saiba as formas de gerar um relatório e siga as etapas para configurar suas preferências.
>
> [Gere seus relatórios](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/additional-content/reports/available-money/generate)
