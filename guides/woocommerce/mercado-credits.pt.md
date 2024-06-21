# Parcelamento sem cartão

O **Mercado Crédito** é a modalidade de financiamento do Mercado Pago que oferece a opção de parcelar sem a necessidade de um cartão.

Com essa linha de crédito, administrada pelo Mercado Pago, o pagamento é creditado integralmente na conta do vendedor, podendo o cliente optar por pagar em até 12 parcelas fixas mensais e sem a necessidade de cartão. O usuário terá apenas que entrar em sua conta no Mercado Pago (ou criar uma), saber o limite disponível e escolher em quantas parcelas deseja pagar.

Atualmente o **Mercado Crédito** é oferecido em nosso [Checkout Pro](/developers/pt/docs/checkout-pro/landing) e agora também é possível acessá-lo diretamente do checkout da loja. Caso ainda não tenha o Checkout Pro habilitado em sua loja, acesse a seção [Configurar os pagamentos com Checkout Pro](/developers/pt/docs/woocommerce/payments-configuration/checkout-pro) para configurá-lo.

Para exibir o Mercado Crédito no checkout da sua loja, siga os passos abaixo.

## Configurar o meio de pagamento no checkout da loja

> WARNING
>
> Atenção
>
> Para oferecer **Parcelamento sem cartão** como meio de pagamento na sua loja WooCommerce, você deve primeiro **atualizar o plugin do Mercado Pago** para a versão mais recente disponível. Para fazer isso, no painel de administração da sua loja, vá para **Plugins > Plugins instalados**, procure por **Mercado Pago**, e clique em **Atualizar**.

1. Na opção **Parcelado sem cartão**, clique em **Configurar** para acessar a página de configuração deste meio de pagamento.

![woo-credits-admin-pt](/images/woocomerce/credits-woo-1.png)

2. Em **Ativar parcelamento sem cartão no checkout**, ative o botão deslizante para disponibilizar esta forma de pagamento. Certifique-se de que o status está **ativo**.
3. Na opção **Título no checkout**, escolha o nome com que essa forma de pagamento será exibida em sua loja. Recomendamos que utilize o título padrão **“Até 12x sem cartão com Mercado Crédito**.
4. Em **Converter moeda**, ative esta opção para converter o valor da moeda configurada em WooComerce para um valor compatível com o da moeda que você usa no Mercado Pago. 
5. Em **Promova o pagamento dos seus produtos com o Mercado Crédito**, ative o _banner_ promocional para oferecer a opção de pagamento parcelado na página do seu produto. Neste capo, você poderá escolher como divulgar o Mercado Crédito em sua loja selecionando uma entre as seguintes alternativas:
    - "Até 12x sem cartão com o Mercado Crédito. Saiba mais."
    - "Compre agora, pague depois com o Mercado Crédito. Saiba mais."
    - Com o Mercado Crédito, você compra agora e paga por mês. Saiba mais."
    - "Pague e até 12x sem cartão de crédito. Saiba mais."
6. Clique no botão **Salvar alterações** para finalizar a configuração.

![woo-credits-admin-pt](images/woocomerce/credits-woo-2.png)