Esta página explicará como configurar o módulo para aceitar os pagamentos com o Checkout Básico em Redirecionamento, Iframe ou Lightbox. Na administração da sua loja, vá para a guia *Settings > Store > Payments*. Clique em *Mercado Pago - Checkout Básico*. Você deve obter a seguinte página:

[[/images/basic_config_screenshot.png|Installation Instructions]]

### Credenciais do Mercado Pago
  * Aqui você deve colocar suas chaves *Client Id* e *Client Secret*, que são as credenciais que o identificam de maneira única no Mercado Pago.

### Opções de Checkout
Como o checkout é mostrado.
  * *Descrição*: Esta é a descrição da opção de pagamento que será mostrada aos seus clientes;
  * *Categoria da Loja*: Define a categoria da loja;
  * *Identificador da Loja*: Um prefixo para identificar sua loja, quando você possui várias lojas para uma única conta do Mercado Pago;
  * *Método de Integração*: Como seus clientes irão interagir com o Mercado Pago para pagar os pedidos;
  * *Largura do iFrame*: A largura, em pixels, do iFrame (usado apenas com o método de integração por iFrame);
  * *Altura do iFrame*: A altura, em pixels, do iFrame (usado apenas com o método de integração por iFrame);
  * *Auto Retorno*: If set, the platform will return to your store when the payment is approved;
  * *URL de Sucesso*: Personalize uma URL para o cliente ser redirecionado quando um pagamento for aprovado. Deixe em branco para redirecionar para a loja;
  * *URL de Pendência*: Personalize uma URL para o cliente ser redirecionado quando um pagamento estiver pendente. Deixe em branco para redirecionar para a loja.

### Opções de Pagamento
Como a opção de pagamento se comporta.
  * *Parcelamento Máximo*: O número máximo de parcelas permitidas para seus clientes;
  * *Conversão de moeda*: Habilita o modo de conversão de moeda para as vendas com Checkout Básico. A conversão de moeda é uma funcionalidade que lhe permite configurar uma moeda não suportada no WP eCommerce enquanto mantém o Mercado Pago como método de pagamento. A moeda não suportada será convertida para a moeda usada em seu país. Fique atento pois este serviço converte valores em tempo real durante a compra e pode trazer algum atraso adicional ao seu servidor;
  * *Excluir Meios de Pagamento*: Selecione os métodos de pagamento que você não deseja oferecer com Mercado Pago.

### Opções de Debug e Teste
Oferece ferramentas de registro para que você possa analisar possíveis problemas que possam estar ocorrendo. Mantenha isso desabilitado se estiver trabalhando em produção com um sistema estável.
  * *Habilitar Sandbox*: Habilita o modo de testes em sandbox;
  * *Modo debug*: Habilita log de mensagens no console do browser.