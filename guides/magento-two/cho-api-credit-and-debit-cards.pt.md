# Cartões

1. No Painel de Controle da loja, acesse **Lojas > Configuração > Vendas > Forma de pagamento**.
2. No plugin do Mercado pago, clique em **Configurar**.
3. Clique na aba **Checkout Transparente** e então, clique em **Cartão de crédito e débito** e complete os campos de acordo com as descrições a seguir.
    1. Em **Habilitado**, escolha entre "Sim" ou "Não". Esta opção define se o método de pagamento estará disponível para uso.
    2. Em **Título**, defina o título de como a forma de pagamento será exibida no checkout da loja.
    3. Em **Habilitar cofre**, selecione para permitir que o consumidor salve ou use o cartão futuramente.
    4. No campo **Ação de Pagamento**, selecione entre **Autorização para captura futura** ou **Autorização e captura imediata**. Essa configuração irá definir o comportamento de como o Mercado Pago irá processar o pedido, sendo: "Autorização e captura imediata" um fluxo em que não requer nenhuma ação futura, nesse cenário o cliente paga e o Mercado Pago já retira o valor do saldo do cartão. Já para a opção "Autorização e captura futura" o Mercado Pago irá apenas sensibilizar o valor no saldo do cliente e somente após a sua ação manual é que o valor será capturado de fato.
    5. Em **Usar modo binário**, selecione entre **Sim, processar pedidos síncrono** ou **Não, processar pedidos assíncrono**. Este campo define se irá aceitar apenas pagamentos onde o status final é recebido imediatamente.

![](/images/magento-two/credito_e_debito.png)