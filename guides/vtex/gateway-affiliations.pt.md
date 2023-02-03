# Cadastre uma afiliações de gateway

Uma **afiliação de gateway** é um conjunto de configurações que representam o processamento de seus pagamentos com um gateway de sua escolha, neste caso o **Mercado Pago**. 

Com isso, é possível decidir por qual gateway de pagamento serão processados os diferentes tipos de transações da sua loja VTEX, podendo a **afiliação de gateway MercadoPagoV2** processar pagamentos com Cartão de Crédito, Cartão de Débito, Mercado Pago Offline e Checkout Pro.

## Criando afiliação de gateway MercadoPagoV2

----[mlb]----

A afiliação MercadoPagoV2 processa as condições de pagamento Cartão de Crédito, Boleto Bancário, Pix, Mercado Pago Offline e Checkout Pro.

------------

----[mla, mlm, mlu, mco, mpe]----

A afiliação MercadoPagoV2 processa as condições de pagamento Cartão de Crédito, Cartão de Débito, Mercado Pago Offline e Checkout Pro.

------------

----[mlc]----

A afiliação MercadoPagoV2 processa as condições de pagamento Cartão de Crédito, Cartão de Débito e Checkout Pro.

------------

> WARNING
>
> Importante
>
> Por motivos de segurança, caso você tenha uma afiliação de gateway do MercadoPagoV1, recomendamos [migrar para o MercadoPagoV2](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/vtex/mp1-mp2-migration).

Para criar uma **afiliação de gateway de pagamento com o MercadoPagoV2**, siga os passos abaixo:

1. No painel de administração de sua loja, acesse **Configurações** do módulo de **Pagamentos**.
2. Na aba **Afiliações de Gateways**, clique no botão "+".
3. Clique no conector **MercadoPagoV2**.
4. Preencha os campos correspondentes: 
   * **Application Key:** Refere-se às suas [credenciais](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/credentials/credentials) de produção do Mercado Pago. Complete com sua Public Key.
   * **Application Token:** Refere-se às suas [credenciais](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/credentials/credentials) do Mercado Pago. Complete com seu Access Token.
   * **Prazo de vencimento do boleto - Periodo de vencimiento del ticket:** Prazo, em dias úteis, de vencimento do pedido de compra. Também definirá o prazo limite do meio de pagamento. Caso o cliente efetue o pagamento após o prazo, o dinheiro será depositado na conta do mesmo no Mercado Pago.
   * **Nome da loja - Nombre para resúmenes:** Nome da loja. O valor deste campo aparecerá na fatura do cartão do cliente
   * **Parcelamento máximo - Cuotas máximas:** Número máximo de parcelas disponíveis.
   * **Categoría principal da loja - Categoría principal de la tienda:** Categoria da loja.
   * **Reembolso automático / manual:** Selecionar se deseja que o Mercado Pago realize automaticamente o reembolso em caso de cancelamento ou se deseja reter o valor pago para o cliente usar em compras futuras.
   * **Modo binário - binário:** Escolha se o pagamento poderá passar por revisão manual ou não.
   * **Métodos de pagamento excluídos - Métodos de pago excluídos:** Métodos de pagamento a serem excluídos no momento da compra. [Veja as opções aqui](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/vtex/payment-methods). Aplicável somente ao MercadoPagoPRO, MercadoPagoWallet e MercadoPAgoOff.
   * **Tipos de pagamento excluídos - Tipos de pago excluidos:** Tipos de pagamento a serem excluídos no momento da compra. [Veja as opções aqui](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/vtex/payment-methods). Aplicável somente ao MercadoPagoPRO, MercadoPagoWallet e MercadoPagoOff.
   * **Modo de processamento - Modo de procesamiento:** Configure o pagamento através do modelo agregador.
   * **Integrator ID:** Para programadores ou agências que realizam a integração.
   * **Moeda - Moneda:** Moeda a ser configurada (USD ou Local).
5. Clique em **Salvar**.

Pronto! Sua afiliação com MercadoPagoV2 já está ativada.

> NOTE
>
> Nota
> 
> Se você tiver dificuldades durante sua integração, verifique nossa [lista de erros](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/vtex/common-errors) e nosso documento sobre [logs do VTEX](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/vtex/logs).

![Criando afiliação de gateway MercadoPagoV2](/images/vtex/affiliationV2-imagenv2-pt.gif)

> PREV_STEP_CARD_PT
>
> Migração de versão de gateway
>
> Conheça como migrar de MercadoPagoV1 para MercadoPagoV2.
>
> [Migração de versão de gateway](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/vtex/mp1-mp2-migration)

> NEXT_STEP_CARD_PT
>
> Condições de pagamento
>
> Conheça como configurar condições de pagamento.
>
> [Condições de pagamento](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/vtex/configure-payment-conditions)
