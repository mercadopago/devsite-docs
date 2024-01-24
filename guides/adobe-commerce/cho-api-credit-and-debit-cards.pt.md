# Cartões

1. No Painel de Controle da loja, acesse **Lojas > Configuração > Vendas > Forma de pagamento**.
2. No plugin do Mercado pago, clique em **Configurar**.
3. Clique na aba **Checkout Transparente** e então, clique em **Cartão de crédito e débito** e complete os campos de acordo com as descrições a seguir.
    1. Em **Habilitado**, escolha entre "Sim" ou "Não". Esta opção define se o método de pagamento estará disponível para uso.
    2. Em **Título**, defina o título de como a forma de pagamento será exibida no checkout da loja.
    3. Em **Habilitar cofre**, selecione para permitir que o consumidor salve ou use o cartão futuramente.
    4. No campo **Ação de Pagamento**, selecione entre **Autorização para captura futura** ou **Autorização e captura imediata**. Essa configuração irá definir o comportamento de como o Mercado Pago irá processar o pedido, sendo: "Autorização e captura imediata" um fluxo em que não requer nenhuma ação futura, nesse cenário o cliente paga e o Mercado Pago já retira o valor do saldo do cartão. Já para a opção "Autorização e captura futura" o Mercado Pago irá apenas sensibilizar o valor no saldo do cliente e somente após a sua ação manual é que o valor será capturado de fato.
    5. Em **Usar modo binário**, selecione entre **Sim, processar pedidos síncrono** ou **Não, processar pedidos assíncrono**. Este campo define se irá aceitar apenas pagamentos onde o status final é recebido imediatamente.

![](/images/adobe-commerce/credito_e_debito.png)


----[mlb]----
## Captura de dados do cliente no formulário de pagamento

Esta função permite capturar documentos de clientes a partir de um campo adicional no formulário de pagamento. Caso a loja ainda não capture esses dados, basta selecionar a opção **Habilitado** em **Capturar documento de identificação**. 

A ativação desta funcionalidade proporciona a inserção automática do CPF do cliente no formulário de pagamento, otimizando a experiência de preenchimento dos dados.


> WARNING
>
> Importante
>
> Nosso módulo tenta capturar a informação do campo `vat_id` de sua loja, caso não encontre iremos sobrescrever a sua configuração pois esse é um valor obrigatório para o pagamento.

------------

## Definições comuns de meios de pagamento

[TXTSNIPPET][/guides/snippets/test-integration/adobe-commerce-common-definitions]

## Parcelamento e acréscimos

A configuração de parcelamento e acréscimos é feita diretamente na sua conta Mercado Pago. Para isso, siga as etapas descritas abaixo.

1. Clique no botão **Definir Parcelas e Juros** e faça o login na sua conta de pessoa vendedora Mercado Pago.
2. Selecione a opção **Código QR e pagamentos online**, habilite o parcelamento e selecione o número de parcelas que deseja oferecer no checkout. As opções vão de 1 a 12 vezes.

![Installment and interest](/images/adobe-commerce/parcelamento.gif)

Pronto! Finalizadas essas etapas, o parcelamento no checkout estará configurado e pronto para processar vendas.