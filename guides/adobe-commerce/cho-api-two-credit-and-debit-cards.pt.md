# Dois cartões de crédito e débito

----[mlb]----
Para habilitar o pagamento via 2 cartões de crédito e débito no Checkout Transparente, siga os seguintes passos:

------------

----[mla, mpe, mco, mlm, mco, mlu, mlc]----
Para habilitar o pagamento via 2 cartões de crédito e débito no Checkout API, siga os seguintes passos:

------------

1. No Painel de Controle da loja, acesse **Lojas > Configuração > Vendas > Forma de pagamento**.
2. No plugin do Mercado Pago, clique em **Configurar**.
3. Selecione a aba **Checkout Transparente**.
4. Clique em **2 Cartões de crédito e débito** e complete os campos de acordo com as descrições a seguir:

    1. Em **Habilitado**, escolha entre "Sim" ou "Não". Esta opção define se o método de pagamento estará disponível para uso.
    2. Em **Título**, defina o título de como a forma de pagamento será exibida no checkout da loja.
    3. Em **Habilitar cofre**, selecione para permitir que o consumidor salve ou use o cartão futuramente.
    4. No campo **Ação de Pagamento**, selecione entre **Autorização para captura futura** ou **Autorização e captura imediata**. Essa configuração irá definir o comportamento de como o Mercado Pago irá processar o pedido, sendo: "Autorização e captura imediata" um fluxo em que não requer nenhuma ação futura, nesse cenário o cliente paga e o Mercado Pago já retira o valor do saldo do cartão. Já para a opção "Autorização e captura futura" o Mercado Pago irá apenas sensibilizar o valor no saldo do cliente e somente após a sua ação manual é que o valor será capturado de fato.

![Two cards](/images/adobe-commerce/dois_cartoes.png)

Ao finalizar o preenchimento desses campos, o pagamento via cartão terá sido habilitado no Checkout Transparente. Clique em **Gravar configuração** para salvar as alterações realizadas ou, se preferir, siga para a próxima etapa e configure o parcelamento e juros para cartões.


## Definições comuns de meios de pagamento

[TXTSNIPPET][/guides/snippets/test-integration/adobe-commerce-common-definitions]

## Parcelamento e juros

A configuração de parcelamento e juros é feita diretamente na sua conta Mercado Pago. Para isso, siga as etapas descritas abaixo.

1. Clique no botão **Definir Parcelas e Juros** e faça o login na sua conta de pessoa vendedora Mercado Pago.
2. Selecione a opção **Código QR e pagamentos online**, habilite o parcelamento e selecione o número de parcelas que deseja oferecer no Checkout. As opções vão de 1 a 12 vezes.

![Installment and interest](/images/adobe-commerce/parcelamento.gif)

Pronto! Finalizadas essas etapas, o parcelamento no checkout estará configurado e pronto para processar vendas.