Esta página explicará como configurar o módulo para aceitar pagamentos com o Cartão de Crédito do Checkout transparente. Na administração da sua loja, vá para a guia *Settings > Store > Payments*. Clique em *Mercado Pago - Checkout Transparente*. Você deve obter a seguinte página:

[[/images/custom_config_screenshot.png|Custom Checkout Config]]

### Credenciais do Mercado Pago
  * Aqui você deve colocar suas chaves *Public Key* e *Access Token*, que são as credenciais que o identificam de maneira única no Mercado Pago.

### Opções de Checkout
Como o checkout é mostrado.
  * *Descritor da Declaração*: A descrição que será mostrada na fatura do seu cliente;
  * *Modo Binário*: Ao cobrar um cartão de crédito, apenas o status [aprovado] ou [rejeitado] será tomado;
  * *Categoria da Loja*: Define a categoria da loja;
  * *Identificador da Loja*: Um prefixo para identificar sua loja, quando você possui várias lojas para uma única conta do Mercado Pago;
  * *URL de Sucesso*: Personalize uma URL para o cliente ser redirecionado quando um pagamento for aprovado. Deixe em branco para redirecionar para a loja;
  * *URL de Pendência*: Personalize uma URL para o cliente ser redirecionado quando um pagamento estiver pendente. Deixe em branco para redirecionar para a loja.

### Opções de Pagamento
Como a opção de pagamento se comporta.
  * *Conversão de moeda*: Habilita o modo de conversão de moeda para as vendas com Checkout Básico. A conversão de moeda é uma funcionalidade que lhe permite configurar uma moeda não suportada no WP eCommerce enquanto mantém o Mercado Pago como método de pagamento. A moeda não suportada será convertida para a moeda usada em seu país. Fique atento pois este serviço converte valores em tempo real durante a compra e pode trazer algum atraso adicional ao seu servidor.

### Opções de Debug e Teste
Oferece ferramentas de registro para que você possa analisar possíveis problemas que possam estar ocorrendo. Mantenha isso desabilitado se estiver trabalhando em produção com um sistema estável.
  * *Habilitar Sandbox*: Habilita o modo de testes em sandbox;
  * *Modo debug*: Habilita log de mensagens no console do browser.