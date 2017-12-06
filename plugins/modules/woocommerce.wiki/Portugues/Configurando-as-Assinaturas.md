Esta página explicará como configurar o módulo para aceitar pagamentos recorrentes de assinaturas. Na administração da sua loja, vá para a guia *WooCommerce > Configurações > Checkout*. Em *Opções de Checkout*, clique em *Mercado Pago - Assinaturas*. Você deve obter a seguinte página:

[[/images/wiki3/subscription_checkout_config.png|Subscription Checkout Config]]

Se você configurou adequadamente suas credenciais em <a href="https://github.com/mercadopago/cart-woocommerce/wiki/Configurações-Gerais-do-Mercado-Pago">Configurações Gerais do Mercado Pago</a>, então você pode agora customizar seu checkout por cartão de crédito:

### Interface do Checkout
Como o checkout é mostrado.
  * *Título*: Este é o título da opção de pagamento que será exibido aos seus clientes;
  * *Descrição*: Esta é a descrição da opção de pagamento que será mostrada aos seus clientes;
  * *Método de Integração*: Como seus clientes irão interagir com o Mercado Pago para pagar os pedidos;
  * *Largura do iFrame*: A largura, em pixels, do iFrame (usado apenas com o método de integração por iFrame);
  * *Altura do iFrame*: A altura, em pixels, do iFrame (usado apenas com o método de integração por iFrame).

### Navegação do Checkout
Como a navegação do checkout irá se comportar.
  * *URL de Notificação Instantânea de Pagamento (IPN)*: Nesta parte, você pode verificar sua URL de IPN, onde você receberá as notificações das atualizações de pagamento. Para esta solução, você precisa configurar uma URL de IPN em sua conta do Mercado Pago. Anote sua URL, clique no link do seu país e coloque o URL no campo solicitado. Então salve-o;
  * *URL de Sucesso*: Personalize uma URL para o cliente ser redirecionado quando um pagamento for aprovado. Deixe em branco para redirecionar para a loja;
  * *URL de Falha*: Personalize uma URL para o cliente ser redirecionado quando um pagamento for recusado. Deixe em branco para redirecionar para a loja;
  * *URL de Pendência*: Personalize uma URL para o cliente ser redirecionado quando um pagamento estiver pendente. Deixe em branco para redirecionar para a loja.

### Opções de Pagamento
Como a opção de pagamento se comporta.
  * *Desconto por Gateway*: Dá um desconto percentual para seus clientes caso eles façam uma assinatura;

# Criando um Produto Assinável
Uma assinatura precisa de um tipo especial de produto, que deve ser vendido periodicamente. Você pode configurar um produto para ser assinável seguindo as seguintes etapas:

1. Vá para *Produtos* no menu lateral e clique no botão *Adicionar Produto*. A página aberta deve conter os detalhes e os campos do produto na janela *Dados do Produto*;<br>[[/images/wiki3/subscription_checkout_product.png|Subscription Checkout Product]]
2. Complete as informações do seu produto (nome, preço, imagens, etc.) e, em seguida, marque a caixa *Produto Recorrente*;
3. Preencha os campos de informação para a assinatura: *Frequência* (frequência com que as cobranças serão feitas ao seu cliente), *Tipo de Frequência* (o tipo da frequência pode estar em [Dias] ou [Meses]) e *Data Final* (data em que a assinatura deve terminar).

> IMPORTANTE: Uma assinatura deve ser exclusiva no carrinho do cliente. Os clientes só podem assinar um produto de cada vez e este não pode ser misturado com outros produtos não assináveis.