# Cadastre uma afiliações de gateway

Uma afiliação de gateway é um conjunto de configurações que representam o processamento de seus pagamentos com o Mercado Pago.

Você poderá utilizar a **afiliação de gateway MercadoPagoV2** para o processamento de pagamentos com Cartão de Crédito, Cartão de Débito, Mercado Pago Offline e Checkout Pro.

&nbsp;

## Migração de Mercado PagoV1 para Mercado PagoV2

> WARNING
>
> Importante
>
> As afiliações MercadoPago e MercadoPagoV1 serão descontinuadas, as mesmas processavam apenas a condição de pagamento Cartão de Crédito e Débito, agora essas mesmas condições já estão disponíveis no MercadoPagoV2.

Para realizar a migração basta realizar os seguintes passos:

**Etapas para migrar**

Os passos para **migrar das versões antigas para a mais recente**, são os seguintes:

1. Cadastre uma afiliação de gateway de pagamento com o **MercadoPagoV2**.
2. Nas Condições de Pagamento altere o **Processar com a afiliação** para a nova que criou.
3. Realize a alteração em todas as condições existentes no seu e-commerce.

&nbsp;

## Criando afiliação de gateway MercadoPagoV2

----[mlb]----

> WARNING
>
> Importante
>
> A afliliação MercadoPagoV2 processa as condições de pagamento Cartão de Crédito, Cartão de Débito, Boleto Bancário, Pix, Mercado Pago Offline e Checkout Pro.

------------

----[mla]----

> WARNING
>
> Importante
>
> A afliliação MercadoPagoV2 processa as condições de pagamento Cartão de Crédito, Cartão de Débito, Mercado Pago Offline e Checkout Pro.

------------

----[mlm]----

> WARNING
>
> Importante
>
> A afliliação MercadoPagoV2 processa as condições de pagamento Cartão de Crédito, Cartão de Débito, Mercado Pago Offline e Checkout Pro.

------------

----[mlu]----

> WARNING
>
> Importante
>
> A afliliação MercadoPagoV2 processa as condições de pagamento Cartão de Crédito, Cartão de Débito, Mercado Pago Offline e Checkout Pro.

------------

----[mco]----

> WARNING
>
> Importante
>
> A afliliação MercadoPagoV2 processa as condições de pagamento Cartão de Crédito, Cartão de Débito, Mercado Pago Offline e Checkout Pro.

------------

----[mpe]----

> WARNING
>
> Importante
>
> A afliliação MercadoPagoV2 processa as condições de pagamento Cartão de Crédito, Cartão de Débito, Mercado Pago Offline e Checkout Pro.

------------

----[mlc]----

> WARNING
>
> Importante
>
> A afliliação MercadoPagoV2 processa as condições de pagamento Cartão de Crédito, Cartão de Débito e Checkout Pro.

------------

Para criar uma **afiliação de gateway de pagamento com o MercadoPagoV2**, siga os passos abaixo:

1. No painel de **administração** de sua loja, acesse **Configurações** do módulo de pagamentos.
2. Na aba **Afiliações de Gateways**, clique no botão "+".
3. Clique no conector **MercadoPagoV2**.
4. Preencha os campos correspondentes: 

|Campos|Dados necessários|
|---|---|
|Application Key|Refere-se às suas [credenciais](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/resources/credentials) do Mercado Pago. Complete com sua Public Key.|
|Application Token|Refere-se às suas [credenciais](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/resources/credentials) do Mercado Pago. Complete com seu Access Token.|
|Prazo de vencimento do boleto - Periodo de vencimiento del ticket|Prazo, em dias úteis, de vencimento do boleto. Caso o cliente efetue o pagamento após o prazo, o dinheiro será depositado na conta do mesmo no Mercado Pago.|
|Nome da loja - Nombre para resúmenes|Nome da loja, o valor deste campo aparecerá na fatura do cartão do cliente|
|Parcelamento máximo - Cuotas máximas|úmero máximo de parcelas disponíveis.|
|Categoría principal da loja - Categoría principal de la tienda|Categoria da loja|
|Reembolso automático / manual|Selecionar se deseja que o Mercado Pago realize automaticamente o reembolso em caso de cancelamento ou se deseja reter o valor pago para o cliente usar em compras futuras.|
|Modo binário - binário|Configura se o pagamento poderá passar por revisão manual ou não.|
|Métodos de pagamento excluídos - Métodos de pago excluídos (visa, paypal, bolbradesco, oxxo...)|Métodos de pagamento a serem excluídos no momento da compra. [Veja as opções aqui](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/plugins/unofficial/vtex/payment-methods).|
|Tipos de pagamento excluídos - Tipos de pago excluidos (credit_card, bank_transfer, ticket...)|Tipos de pagamento a serem excluídos no momento da compra. [Veja as opções aqui](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/plugins/unofficial/vtex/payment-methods).|
|Modo de processamento - Modo de procesamiento|Configura se o pagamento será gateway ou agregador|
|Integrator ID|Para programadores ou agências que realizam a integração.|
|Moeda - Moneda|Moeda a ser configurada (USD ou Local)|

5. Clique em **Salvar**.

IMG

E pronto! Sua afiliação com MercadoPagoV2 já está ativa!

> LEFT_BUTTON_REQUIRED_PT
>
> Condições de pagamento
>
> Conheça como configurar condições de pagamento.
>
> [Condições de pagamento](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/plugins/unofficial/vtex/configure-payment-conditions)