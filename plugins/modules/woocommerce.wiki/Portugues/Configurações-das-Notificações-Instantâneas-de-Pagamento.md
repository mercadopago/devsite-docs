Notificação Instantânea de Pagamento (IPN) é um mecanismo que permite que sua loja receba mensagens do servidor do Mercado Pago informando o estado de um determinado pagamento. Neste plugin, você não precisa se preocupar com a configuração da IPN pois ela já está implementada e configurada.

### Configurando a IPN para Assinaturas
Assinaturas é o único gateway que você deve configurar a IPN para receber corretamente as notificações em seu servidor. Para configurá-lo, faça o seguinte:

1. Na administração da sua loja, acesse *WooCommerce > Configurações > Checkout* e depois, nas opções de gateway listadas, selecione *Mercado Pago - Assinaturas*;

2. Anote a URL informada no campo *URL de Notificação Instantânea de Pagamento (IPN)* e acesse o ambiente da IPN/Webhook para seu país: [Argentina](https://www.mercadopago.com.ar/ipn-notifications), [Brasil](https://www.mercadopago.com.br/ipn-notifications), ou [México](https://www.mercadopago.com.mx/ipn-notifications);

3. Insira a URL no campo e clique no botão *salvar*. Você receberá uma mensagem informando se o Mercado Pago acessou seu servidor corretamente e recebeu uma resposta válida. Se tudo estiver OK, você deve receber uma mensagem de confirmação.

> DICA 1: Ao configurar ou testar sua IPN/Webhooks e comunicações de servidor, certifique-se de que seu servidor possa acessar o servidor Mercado Pago.

> DICA 2: Tenha certeza de que seu firewall tenha o conjunto dos [IPs do Mercado Pago](https://www.mercadopago.com.ar/developers/en/api-docs/basics/design-considerations#ip-range) dentro de sua white-list.

> DICA 3: Observe que o Mercado Pago usa o protocolo TSL versão 1.0, logo seu servidor precisa suportar/aceitar conexões com esta versão do protocolo.

> DICA 4: Tenha certeza de que nenhum outro plugin do WordPress esteja bloqueando o Mercado Pago.