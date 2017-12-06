Notificação Instantânea de Pagamento (IPN) é um mecanismo que permite que sua loja receba mensagens do servidor do Mercado Pago informando o estado de um determinado pagamento. Neste plugin, você não precisa se preocupar com a configuração da IPN pois ela já está implementada e configurada.

> DICA 1: Ao configurar ou testar sua IPN/Webhooks e comunicações de servidor, certifique-se de que seu servidor possa acessar o servidor Mercado Pago.

> DICA 2: Tenha certeza de que seu firewall tenha o conjunto dos [IPs do Mercado Pago](https://www.mercadopago.com.ar/developers/en/api-docs/basics/design-considerations#ip-range) dentro de sua white-list.

> DICA 3: Observe que o Mercado Pago usa o protocolo TSL versão 1.0, logo seu servidor precisa suportar/aceitar conexões com esta versão do protocolo.

> DICA 4: Tenha certeza de que nenhum outro plugin do WordPress esteja bloqueando o Mercado Pago.