# Glossário

Sabemos que alguns termos são técnicos e você pode não estar familiarizado com todos eles. Use este glossário para não se perder!

| Nome da coluna do relatório| O que significa   |
|----------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Código de referência  (EXTERNAL_REFERENCE)         | <br/> ID que ajuda a identificar a origem da operação. Por exemplo, pode ser a venda através do ID do pedido ou do envio (se for uma compra de carrinho) ou o próprio ID fornecido pelo vendedor no caso de uma integração externa.<br/><br/> Lembre-se que é possível que este campo esteja vazio para alguns casos, como pagamento de boletos ou envio de dinheiro, entre outros. <br/> <br/>                   |
| ID da transação no Mercado Pago (SOURCE_ID)        | ID da transação no Mercado Pago (por exemplo, o pagamento de uma venda).                  |
| Código da conta do vendedor (USER_ID)              | Código da conta do vendedor. (Cust ID).   |
| Meio de pagamento (PAYMENT_METHOD)                 | Confira os [meios de pagamento disponíveis](/developers/pt/docs/sales-processing/payment-methods) de acordo com o país no qual você opera com o Mercado Pago.     |
| Tipo de meio de pagamento (PAYMENT_METHOD_TYPE)    | Tipo de meio de pagamento.<br><br> Pode ser:<br>*credit_card*: cartão de crédito.<br>*debit_card*: cartão de débito.<br>*bank_transfer*: transferência.<br>*atm*: caixa eletrônico.<br>*ticket*: à vista<br>*account_money*: dinheiro em conta.<br>*PIX*:transferência.<br><br/>          |
| País de origem da conta do Mercado Pago (SITE)     | MLB: Brasil       |
| Tipo de operação (TRANSACTION_TYPE)                | Tipo de operação. Pode ser:<br><br> Pagamento aprovado (SETTLEMENT): pagamento aprovado.<br> ----[mlu, mla, mlm, mco, mlc, mlb]---- Devolução de dinheiro (REFUND): pagamento totalmente devolvido ou devolução parcial.------------ ----[mpe]---- *REFUND*: pagamento totalmente devolvido.------------<br>Contestação (CHARGEBACK)  o comprador fez uma contestação (desconhece o pagamento) no seu cartão de crédito.<br>Contestação (DISPUTE): o comprador iniciou uma reclamação por esse pagamento.<br>Transferência (WITHDRAWAL): retirada para a conta bancária.<br> Cancelamento da transferência (WITHDRAWAL_CANCEL): retirada para a conta bancária que foi cancelada.<br>Saque (PAYOUT) saque em dinheiro ou transferência por PIX de saldo disponível no Mercado Pago. ----[mlb]---- <br> Trava de recebível (TRAVA_DE_RECEBIVEL): trava de recebível. ------------ <br><br> |
| Valor da compra(TRANSACTION_AMOUNT)                | Valor bruto da transação.                 |
| Moeda (TRANSACTION_CURRENCY)                       | Moeda:<br><br>MXN (Peso mexicano)<br>CLP (Peso Chileno)<br>ARS (Peso Argentino)<br>BRL (Real Brasileiro)<br>EN (Sol Peruano)<br>COP (Peso Colombiano)<br>UYU (Peso Uruguayo)<br>VES (Bolivar Venezolano)<br><br>  |
| Valor recebido por compras com split de pagamento (SELLER_AMOUNT)          | Valor recebido por compras com split.     |
| Data de origem (TRANSACTION_DATE)                  | Data de criação da transação.           |
| Tarifas ----[mlu, mla, mlm, mco, mlc, mpe]---- + IVA ------------ (FEE_AMOUNT)                     | É a somatória das tarifas de processamento, shipping, financiamento e boleto, se foi assumido pelo vendedor.----[mlu, mla, mlm, mco, mlc, mpe]----Incluir IVA.------------                |
| Valor líquido da operação que impactou no dinheiro (SETTLEMENT_NET_AMOUNT) | Valor líquido da transação que impactou o dinheiro em conta. Foram descontadas todas as comissões envolvidas da valor da compra (TRANSACTION_AMOUNT).             |
| Moeda da liquidação (SETTLEMENT_CURRENCY)          | Moeda:<br><br> MXN (Peso mexicano)<br>CLP (Peso Chileno)<br>ARS (Peso Argentino)<br>BRL (Real Brasileiro)<br>PEN (Sol Peruano)<br>COP (Peso Colombiano)<br>UYU (Peso Uruguayo)<br>VES (Bolivar Venezolano)<br><br>|
| Data de aprovação (SETTLEMENT_DATE)                | Data de aprovação da transação.                   |
| Valor líquido da operação (REAL_AMOUNT)            | Valor líquido da transação, se é um settlement, os valores para estornos, reclamações ou devoluções são descontados.                      |
| Cupom de desconto (COUPON_AMOUNT)                  | Valor do cupom de desconto. **Apenas o valor bruto** (`TRANSACTION_AMOUNT`) **é descontado se fornecido pelo vendedor**.                  |
| Dados adicionais (METADATA)| ----[mlu, mla, mlm, mco, mlc, mlb]---- Dados extras, como por exemplo, o ID dos reembolsos parciais ou dados fornecidos pelo vendedor no caso de integrações externas. ------------ ----[mpe]---- Dados adicionais como, por exemplo, ou dados informados pelo vendedor em caso de integração externa. ------------ ----[mlb]---- Quando "Fee discount" aparecer, entende-se como a redução na tarifa de venda pela participação em uma campanha comercial. ------------                  |
| Tarifa do Mercado Livre ----[mlu, mla, mlm, mco, mlc, mpe]---- + IVA ------------ (MKP_FEE_AMOUNT) | Tarifa do Mercado Livre. ----[mlu, mla, mlm, mco, mlc, mpe]----Incluir IVA. ------------  |
| Tarifa por oferecer parcelas sem acréscimo (FINANCING_FEE_AMOUNT)          | Custo de oferecer parcelamento quando o custo dessa comissão for assumido pelo seller.    |
| Frete (SHIPPING_FEE_AMOUNT)| Custo de envio.   |
| Impostos cobrados por retenções de IIBB (TAXES_AMOUNT)                     | ----[mla]---- Impostos cobrados por retenção de Receita Bruta na fonte, IVA, Lucros; e impostos sobre Créditos e Débitos, entre outros. [Saiba mais sobre retenções e impostos.](https://vendedores.mercadolibre.com.ar/nota/retenciones-y-percepciones-sobre-tus-ventas-lo-que-debes-saber/) ------------ ----[mlm, mlc, mlu, mlb, mco, mpe]----Impostos recebidos.------------          |
| Parcelas (INSTALLMENTS)    | Número de parcelas em que a transação foi realizada.              |
| Detalhes dos impostos (TAX_DETAIL)                 | Descrição do imposto retido por transação `TAXES_AMOUNT`. . ----[mla]---- <br><br>Você pode considerar os seguintes valores conforme a jurisdição: <br>cordoba<br>corrientes<br>mendoza<br>la_pampa<br>santa_fe<br>tucuman<br>entre_rios<br>catamarca<br>neuquen<br>santiago_del_estero<br>rio_negro<br>jujuy ------------ <br><br>       |
| ID do caixa (POS_ID)       | ID do caixa, se o pagamento é feito através de um comércio físico.|
| Nome do caixa (POS_NAME)   | Nome do caixa para o pagamento realizado em um comércio físico.   |
| ID do caixa, definido pelo usuário (EXTERNAL_POS_ID)                       | ID do caixa definido pelo usuário para o pagamento realizado em um comércio físico.       |
| ID da loja (STORE_ID)      | ID da loja se o pagamento é feito em um comércio físico.          |
| Nome da loja (STORE_NAME)  | Nome da loja para o pagamento feito em um comércio físico.        |
| ID da loja, definido pelo usuário (EXTERNAL_STORE_ID)                      | ID da loja definido pelo usuário para o pagamento feito em um comércio físico.            |
| ID do pedido (ORDER_ID)    | Ordem de compra.  |
| ID do envio (SHIPPING_ID)  | Identificador de envio.                   |
| Forma de envio (SHIPMENT_MODE)                     | Modalidade de envio.                      |
| ID do pacote (PACK_ID)     | Identificador do pacote no carrinho.      |
| Impostos desagregados (TAXES_DISAGGREGATED)        | Detalhamento dos impostos no formato JSON.|
| Número de série da maquininha (S/N) (POI_ID)       | ID da maquininha se o pagamento é feito em uma loja física.       |
| Carteira digital (POI_WALLET_NAME)                 | Nome da carteira digital de onde um pagamento virtual saiu. Permite identificar a origem de uma transação quando você cobra com um código QR do Mercado Pago.     |
| Banco de origem (POI_BANK_NAME)                    | Nome da instituição bancária de onde um pagamento virtual saiu. Permite identificar a origem de uma transação quando você cobra com um código QR do Mercado Pago. |
| Descrição (DESCRIPTION)    | Ajuda a identificar transações ou operações registradas em um período de tempo.<br> Quando se tratar de pagamento parcelado, a linha será identificada como "INSTALLMENT".                |
| Data de liberação do dinheiro (MONEY_RELEASE_DATE) | Data de previsão da liberação do pagamento de cada parcela ou da parcela única.           |
| Cartão do seu comprador (CARD_INITIAL_NUMBER)      | Corresponde aos primeiros dígitos do cartão de crédito ou débito utilizado para fazer a compra.                   |
| Etiquetas da transação (OPERATION_TAGS)            | São etiquetas para categorizar e/ou segmentar diferentes aspectos da transação, como por exemplo, os canais usados para fazer um pagamento. Eles são identificados como: <br><br>  - Pagamento via WhatsApp (WHATSAPP_PAY) Esta etiqueta indica que o pagamento foi feito via WhatsApp ----[mlb]----<br> -   Pix Saque (CASHOUT): Esta etiqueta indica que a transação corresponde a um Pix Saque <br> -   Pix Troco (EXTRACASHOUT): Esta etiqueta indica que a transação corresponde a um Pix Troco <br> -   Pix (PIX): Esta etiqueta indica que a transação corresponde a um pagamento via Pix. ------------    | ----[mlb]----
| Número da parcela (INSTALLMENT_NUMBER*)            | Indica o número da parcela que será paga, do total de parcelas contratadas.<br> Essa informação aparece quando o cliente solicita o parcelamento da compra.<br> Por exemplo: 2 / 5 indica o pagamento da segunda parcela, de um total das 5 parcelas contratadas.<br> Quando o pagamento é liberado em uma única parcela essa coluna não estará preenchida.       | ------------ ----[mlb]----
| Valor liquido da parcela (INSTALLMENT_NET_AMOUNT*) | Mostra o valor líquido da parcela que será paga.<br> Essa informação aparece quando o cliente escolhe pagar o valor total da compra em parcelas mensais.          | ------------ ----[mla]----
| PAYER_NAME*                | Nome de quem faz o pagamento.             | ------------ ----[mla]----
| PAYER_ID_TYPE*             | Tipo de identificação de quem faz um pagamento ou doação.         | ------------ ----[mla]----
| PAYER_ID_NUMBER*           | Número de identificação de quem faz um pagamento ou doação.       | ----------------[mla]----  ------------
| Canal de venda (BUSINESS_UNIT)                     | Corresponde ao canal pelo qual uma venda foi gerada. Os canais são Mercado Pago, Mercado Livre, Mercado Shops e Delivery.                 |
| Plataforma de pagamento (SUB_UNIT)                 | Permite identificar o meio de pagamento usado para cobrar por uma venda com o Mercado Pago.                       |
| Código do produto SKU (PRODUCT_SKU)                | Código SKU, com o qual você poderá identificar seus produtos vendidos.                    |  
| Detalhe da venda (SALE_DETAIL)                     | Esta coluna apresenta informações detalhadas sobre os produtos vendidos, facilitando a reconciliação e o controle das suas vendas.Cada entrada nesta coluna mostra o primeiro elemento da venda, seguido do agrupamento dos demais produtos. É importante observar que, devido ao espaço, apenas os primeiros 100 caracteres do nome do produto serão mostrados.  |

> INFO
>
> (*) Estas informações só podem ser usadas para fins de reconciliação e serão tratadas de acordo com as leis de 
> proteção de dados pessoais aplicáveis. Elas estarão disponíveis quando pagamentos via código QR e transferências forem 
> recebidos ou quando uma doação for recebida por uma ONG.
