# Criar afiliação de gateway MercadoPagoV2 

Uma afiliação de gateway é um conjunto de configurações que representam o processamento dos seus pagamentos, neste caso, com o Mercado Pago. 

A **afiliação MercadoPagoV2** permitirá que você processe pagamentos com o ----[mlb]---- Checkout Transparente ------------ ----[mla, mlm, mlu, mco, mpe, mlc]---- Checkout API ------------ e Checkout Pro, onde você poderá oferecer pagamentos com cartão de crédito e débito, ----[mla, mlm, mlb]----financiamento sem cartão------------ ou dinheiro em conta. 

Também permitirá ativar o **3DS (3-D Secure)**, um protocolo criado para proteger transações em lojas online por meio de uma camada adicional de verificação de identidade antes da autorização final, o que tornará suas transações ainda mais seguras e aumentará a taxa de aprovação de seus pagamentos.

> WARNING
>
> Importante
>
> A afiliação de gateway MercadoPagoV1 será descontinuada. Se você já possui uma afiliação de gateway MercadoPagoV1, você precisará [migrar para o MercadoPagoV2](/developers/pt/docs/vtex/how-tos/migrate-v1-v2) para continuar operando com o Mercado Pago e aproveitar as novas vantagens que esse conector oferece. 

Para criar uma **afiliação de gateway com o MercadoPagoV2**, siga os passos abaixo:

1. No painel de administração de sua loja VTEX, acesse **Pagamentos > Configurações**.
2. Na parte superior da tela, vá para a aba **"Afiliaciones de gateway"** e clique no botão "+" para criar uma nova afiliação.
3. Procure pelo conector **MercadoPagoV2** e selecione-o. Isso irá te levar para uma nova tela.
4. Nesta tela, escolha qual será o **Nome da afiliação** dentro da loja. Além disso, certifique-se de ter ativado o botão deslizante **Live/Produção**.
5. Após, preencha os campos correspondentes:
| Campo | Descrição |
|---|---|
| Application Key  | Refere-se às suas [credenciais](/developers/pt/docs/vtex/additional-content/your-integrations/credentials) de produção do Mercado Pago. Complete com sua **Public Key**. |
| Application Token | Refere-se às suas [credenciais](/developers/pt/docs/vtex/additional-content/your-integrations/credentials) do Mercado Pago. Complete com seu **Access Token**. |
| Prazo de vencimento do boleto  | Prazo, em dias úteis, de vencimento do pedido de compra. Caso o cliente efetue o pagamento após o prazo, o dinheiro será depositado na conta do mesmo no Mercado Pago. |
| Nome da loja  | Nome da loja. O valor deste campo aparecerá na fatura do cartão do cliente. |
| Parcelamento máximo   | Número máximo de parcelas disponíveis para efetuar o pagamento. Com o Mercado Pago, você pode oferecer parcelamento em até 12 vezes. |
| Suporte 3DS 2.0 | 3-D Secure é um protocolo criado para proteger transações em comércio eletrônico por meio de uma camada adicional de verificação de identidade antes da autorização final. Apenas transações rejeitadas por Alto Risco são enviadas para validação do 3DS e não afetam a experiência de compra.<br>Para ativá-lo, **desative a opção Modo binário** e selecione a opção **"Sim"**. <br>Certifique-se de ter instalado o Mercado Pago Payment App para que ele funcione corretamente. |
| Categoría principal da loja | Ramo de atividades da loja. |
| Compartilhamento da categoría (loja ou produto) por transação | Para ajudar nosso sistema de prevenção de fraudes, você tem a opção de compartilhar os dados da categoria da loja ou do produto para cada transação realizada. Recomendamos selecionar a opção **Categoria da Loja**. |
| Reembolso automático / manual  | Em caso de cancelamento, você pode escolher se deseja que o Mercado Pago reembolse automaticamente o dinheiro ou se deseja reter o valor pago para que o cliente possa usá-lo em compras futuras na mesma loja. |
| Modo binário | Configure se deseja que a loja aceite pagamentos pendentes. <br>Se você selecionar a opção **"Não"**, a transação ficará pendente por 48 horas ou até que o pagamento seja realizado, e o estoque envolvido nessa compra será retido pelo mesmo período de tempo. <br>Se você selecionar **"Sim"**, as transações pendentes serão rejeitadas e o estoque será liberado automaticamente. <br>**Importante:** para usar o 3DS, o modo binário precisa estar desativado. |
| Métodos de pagamento excluídos | Se você deseja oferecer pagamentos com o Checkout Pro, você pode excluir métodos de pagamento para que não estejam disponíveis no momento da compra. Você precisará digitar os nomes de cada um, conforme mostrado nos [Tipos e Métodos de Pagamento](/developers/pt/docs/vtex/payments-configuration/checkout-pro/exclude-payment-types-methods). Você estará excluindo métodos de pagamento específicos (visa, Pix, amex, etc.).<br><br>Tenha em mente que, durante o processo de configuração de pagamentos, você precisará selecionar individualmente os meios de pagamento que deseja oferecer. Excluir métodos e tipos de pagamento nesta etapa limitará essas opções apenas no caso de integrar o Checkout Pro. Se você integrar o  ----[mlb]---- Checkout Transparente ------------ ----[mla, mlm, mlu, mco, mpe, mlc]---- Checkout API ------------ , essas configurações não terão impacto.  |
| Tipos de pagamento excluídos | Ao integrar o Checkout Pro, você também pode excluir tipos de pagamento completos, como cartão de crédito (credit_card), cartão de débito (debit_card) e boleto (ticket). Você pode verificar as opções disponíveis na seção [Excluir tipos e métodos de pagamento](/developers/pt/docs/vtex/payments-configuration/checkout-pro/exclude-payment-types-methods). Certifique-se de digitar os nomes exatamente como estão listados para garantir a exclusão correta.<br><br>Tenha em mente que, durante o processo de configuração de pagamentos, você precisará selecionar individualmente os meios de pagamento que deseja oferecer. Excluir métodos e tipos de pagamento nesta etapa limitará essas opções apenas no caso de integrar o Checkout Pro. Se você integrar o  ----[mlb]---- Checkout Transparente ------------ ----[mla, mlm, mlu, mco, mpe, mlc]---- Checkout API ------------ , essas configurações não terão impacto.  |
| Modo de processamento | Selecione a opção **Aggregator**. |
| Integrator ID | Se você é um desenvolvedor, preencha com sua **identificação do Mercado Pago**. |
| Moeda | ----[mlu]---- Configure a moeda da loja (**USD** ou **Local**). ------------ ----[mla, mlm, mlb, mco, mpe, mlc]---- Este campo identifica a moeda da loja. Você não precisa completá-lo. ------------  |
| Merchant Account | Este campo identifica a conta do merchant. Você não precisa completá-lo. |
| Plazo de captura de pagamento aprobado | Você pode configurar um atraso na captura do pagamento que a VTEX realiza selecionando nas opções do menu suspenso. Se não quiser configurá-lo, selecione **"Desativado"**. |
| Tempo para cancelar carrito abandonado | Configure o intervalo de tempo que deve ser aguardado até que os meios de pagamento habilitados não estejam disponíveis para efetuar a compra. Você pode selecionar um intervalo de tempo nas opções suspensas ou escolher **“não cancelar”**. |

![Configure MercadoPagoV2](/images/vtex/vtex-v2-new-admin-pt.gif)

Depois de preencher todos os campos, clique em **Salvar** e pronto! Sua afiliação com o MercadoPagoV2 já está ativada.


> NOTE
>
> Nota
>
> Se você tiver dificuldades durante sua integração, verifique nossa [lista de erros](/developers/pt/guides/vtex/additional-content/possible-errors) e nosso documento sobre [logs da VTEX.](/developers/pt/guides/vtex/how-tos/logs)
