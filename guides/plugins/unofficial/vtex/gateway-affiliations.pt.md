# Cadastre uma afiliações de gateway

Uma **afiliação de gateway** é um conjunto de configurações que representam o processamento de seus pagamentos com um gateway de pagamento de sua escolha, neste caso **Mercado Pago**. 

Com isso, você pode possível decidir por qual gateway de pagamento serão processados os diferentes tipos de transações da sua loja VTEX podendo a **afiliação de gateway MercadoPagoV2** para o processamento de pagamentos com Cartão de Crédito, Cartão de Débito, Mercado Pago Offline e Checkout Pro.

## Criando afiliação de gateway MercadoPagoV2

----[mlb]----

A afliliação MercadoPagoV2 processa as condições de pagamento Cartão de Crédito, Cartão de Débito, Boleto Bancário, Pix, Mercado Pago Offline e Checkout Pro.

------------

----[mla, mlm, mlu, mco, mpe]----

A afliliação MercadoPagoV2 processa as condições de pagamento Cartão de Crédito, Cartão de Débito, Mercado Pago Offline e Checkout Pro.

------------

----[mlc]----

A afliliação MercadoPagoV2 processa as condições de pagamento Cartão de Crédito, Cartão de Débito e Checkout Pro.

------------

> WARNING
>
> Importante
>
> Se você tem uma afiliação de gateway do MercadoPagoV1, por motivos de segurança, recomendamos [migrar para o MercadoPagoV2](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/plugins/unofficial/vtex/mp1-mp2-migration).

Para criar uma **afiliação de gateway de pagamento com o MercadoPagoV2**, siga os passos abaixo:

1. No painel de administração de sua loja, acesse **Configurações** do módulo de **Pagamentos**.
2. Na aba **Afiliações de Gateways**, clique no botão "+".
3. Clique no conector **MercadoPagoV2**.
4. Preencha os campos correspondentes: 
   * **Application Key:** Refere-se às suas [credenciais](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/resources/credentials) do Mercado Pago. Complete com sua Public Key.
   * **Application Token:** Refere-se às suas [credenciais](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/resources/credentials) do Mercado Pago. Complete com seu Access Token.
   * **Prazo para finalizar pedido (dias) - Plazo para finalizar el pedido (días):** Prazo, em dias úteis, de vencimento do boleto. Caso o cliente efetue o pagamento após o prazo, o dinheiro será depositado na conta do mesmo no Mercado Pago.
   * **Nome da loja - Nombre de la tienda:** Nome da loja. O valor deste campo aparecerá na fatura do cartão do cliente
   * **Número máximo de parcelas - Número máximo de cuotas/mensualidades sin interés** Número máximo de parcelas disponíveis.
   * **Categoría principal da loja - Categoría principal de la tienda:** Categoria da loja.
   * **Reembolso em vendas canceladas - Reembolso de las ventas anuladas:** Selecionar se deseja que o Mercado Pago realize automaticamente o reembolso em caso de cancelamento ou se deseja reter o valor pago para o cliente usar em compras futuras.
   * **Anti-fraude totalmente automático - Antifraude totalmente automático:** Configura se o pagamento poderá passar por revisão manual ou não.
   * **Métodos de pagamento excluídos - Métodos de pago excluidos (formato: visa, paypal, etc.):** Métodos de pagamento a serem excluídos no momento da compra. [Veja as opções aqui](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/plugins/unofficial/vtex/payment-methods).
   * **Tipos de pagamento excluídos - Tipos de pago excluidos (formato: credti_card, bank_transfer etc.):** Tipos de pagamento a serem excluídos no momento da compra. [Veja as opções aqui](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/plugins/unofficial/vtex/payment-methods).
   * **Modo de processamento - Modo de procesamiento** Configura se o pagamento será gateway ou agregador.
   * **Insira seu Integrator ID - Introduce tu Integrator ID:** Para programadores ou agências que realizam a integração.
   * **Selecione a moeda das vendas - Seleccione la moneda de venta:** Moeda a ser configurada (USD ou Local).
   * **Prazo de captura de pagamento aprovado -  Plazo de captura de pagos aprobado:** Caso utilize um Anti Fraude externo complementar você pode configurar um prazo de captura automática de uma transação aprovada, para evitar cancelamentos desnecessários.
5. Clique em **Salvar**.

E pronto! Sua afiliação com MercadoPagoV2 já está ativa!

> NOTE
>
> Nota
> 
> Se você tiver dificuldades durante sua integração, verifique nosso [glossário de erros](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/plugins/unofficial/vtex/common-errors) e nosso documento sobre [logs do VTEX](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/plugins/unofficial/vtex/logs).

![Criando afiliação de gateway MercadoPagoV2](/images/vtex/affiliationV2-pt.gif)

> LEFT_BUTTON_RECOMMENDED_PT
>
> Migração de versão de gateway
>
> Conheça como migrar de MercadoPagoV1 para MercadoPagoV2.
>
> [Migração de versão de gateway](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/plugins/unofficial/vtex/mp1-mp2-migration)

> RIGHT_BUTTON_REQUIRED_PT
>
> Condições de pagamento
>
> Conheça como configurar condições de pagamento.
>
> [Condições de pagamento](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/plugins/unofficial/vtex/configure-payment-conditions)
