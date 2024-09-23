----[mlb, mla]----
# Parcelamento sem cartão

------------
----[mlm]----
# Compra ahora, paga después

------------
----[mlm]----
O **Compra ahora, paga después** é a modalidade de financiamento do Mercado Pago que oferece a opção de parcelar sem a necessidade de um cartão.

------------
----[mlb]----
A **Linha de Crédito** é a modalidade de financiamento do Mercado Pago que oferece a opção de parcelar sem a necessidade de um cartão.

------------
----[mlm]----
O **Pagos sin Tarjeta** é a modalidade de financiamento do Mercado Pago que oferece a opção de parcelar sem a necessidade de um cartão.

------------
----[mla]----
O **Pagos sin Tarjeta** é a modalidade de financiamento do Mercado Pago que oferece a opção de parcelar sem a necessidade de um cartão.

------------
----[mlb]----
Com a Linha de Crédito Mercado Pago, administrada pelo Mercado Pago, o pagamento é creditado integralmente na conta do vendedor, podendo o cliente optar por pagar em até 12 parcelas fixas mensais e sem a necessidade de cartão. O usuário terá apenas que entrar em sua conta no Mercado Pago (ou criar uma), saber o limite disponível e escolher em quantas parcelas deseja pagar.

------------
----[mla, mlm]----
Com essa linha de crédito, administrada pelo Mercado Pago, o pagamento é creditado integralmente na conta do vendedor, podendo o cliente optar por pagar em até 12 parcelas fixas mensais e sem a necessidade de cartão. O usuário terá apenas que entrar em sua conta no Mercado Pago (ou criar uma), saber o limite disponível e escolher em quantas parcelas deseja pagar.

------------
----[mlb]----
Atualmente a **Linha de Crédito** é oferecida em nosso [Checkout Pro](/developers/pt/docs/checkout-pro/landing) e agora também é possível acessá-lo diretamente do checkout da loja. Caso ainda não tenha o Checkout Pro habilitado em sua loja, acesse a seção [Configurar os pagamentos com Checkout Pro](/developers/pt/docs/woocommerce/payments-configuration/checkout-pro) para configurá-lo.

Para exibir a **Linha de Crédito** no checkout da sua loja, siga os passos abaixo.

------------
----[mlm, mla]----
Atualmente o **Pagos sin Tarjeta** é oferecido em nosso [Checkout Pro](/developers/pt/docs/checkout-pro/landing) e agora também é possível acessá-lo diretamente do checkout da loja. Caso ainda não tenha o Checkout Pro habilitado em sua loja, acesse a seção [Configurar os pagamentos com Checkout Pro](/developers/pt/docs/woocommerce/payments-configuration/checkout-pro) para configurá-lo.

Para exibir o **Pagos sin Tarjeta** no checkout da sua loja, siga os passos abaixo.

------------
## Configurar o meio de pagamento no checkout da loja
----[mlb, mla]----
> WARNING
>
> Atenção
>
> Para oferecer **Parcelamento sem cartão** como meio de pagamento na sua loja WooCommerce, você deve primeiro **atualizar o plugin do Mercado Pago** para a versão mais recente disponível. Para fazer isso, no painel de administração da sua loja, vá para **Plugins > Plugins instalados**, procure por **Mercado Pago**, e clique em **Atualizar**.

------------
----[mlm]----
> WARNING
>
> Atenção
>
> Para oferecer o **Compra ahora, paga después** como meio de pagamento na sua loja WooCommerce, você deve primeiro **atualizar o plugin do Mercado Pago** para a versão mais recente disponível. Para fazer isso, no painel de administração da sua loja, vá para **Plugins > Plugins instalados**, procure por **Mercado Pago**, e clique em **Atualizar**.

------------
1. Nas configurações do painel do WooCommerce, clique em **Configurar** na opção **Parcelado sem cartão** para acessar a página de configuração deste meio de pagamento.
2. Em **Ativar parcelamento sem cartão no checkout**, ative o botão deslizante para disponibilizar este meio de pagamento. Certifique-se de que o status está **ativo**.
3. Na opção **Título no checkout**, escolha o nome com que o meio de pagamento será exibida em sua loja. Recomendamos que utilize o título padrão **“Até 12x sem cartão com ----[mlb]----Linha de Crédito------------ ----[mlm]----Meses sin Tarjeta------------ ----[mla]----Cuotas sin Tarjeta------------"**.
4. Em **Converter moeda**, ative o botão deslizante para converter o valor da moeda configurada em WooComerce para um valor compatível com o da moeda que você usa no Mercado Pago. 
5. Em **Promova o pagamento dos seus produtos com o ----[mlb]----Linha de Crédito------------ ----[mlm]----Meses sin Tarjeta------------ ----[mla]----Cuotas sin Tarjeta------------**, ative o _banner_ promocional para divulgar a opção de pagamento parcelado na página do seu produto. Neste campo, você poderá escolher como divulgar o ----[mlb]----Linha de Crédito------------ ----[mlm]----Meses sin Tarjeta------------ ----[mla]----Cuotas sin Tarjeta------------ em sua loja selecionando uma entre as seguintes alternativas:

    - "Até 12x sem cartão com o ----[mlb]----Linha de Crédito------------ ----[mlm]----Meses sin Tarjeta------------ ----[mla]----Cuotas sin Tarjeta------------. Saiba mais."
    - "Compre agora, pague depois com o ----[mlb]----Linha de Crédito------------ ----[mlm]----Meses sin Tarjeta------------ ----[mla]----Cuotas sin Tarjeta------------. Saiba mais."
    - Com o ----[mlb]----Linha de Crédito------------ ----[mlm]----Meses sin Tarjeta------------ ----[mla]----Cuotas sin Tarjeta------------, você compra agora e paga por mês. Saiba mais."
    - "Pague e até 12x sem cartão de crédito. Saiba mais."

6. Clique em **Salvar alterações** para finalizar a configuração.

![woo-credits-admin-pt](/images/woocomerce/credits-woo-2.png)
