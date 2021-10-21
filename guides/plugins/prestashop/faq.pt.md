# FAQ

### 1. Como configurar o status do pedido?

Para configurar o status do pedido para o plugin do Mercado Pago, siga os passos abaixo: 

1. No menu **Parâmetros da loja**, clique em **definições da encomenda**.
2. Em seguida, acesse a aba **Status**. 
3. Na aba em questão, configure os status da seguinte forma: 

![Configurar status no PrestaShop](/images/prestashop/config_status_pt.png)

### 2. Como validar as notificações?

No plugin do PrestaShop são recebidas apenas notificações do tipo IPN. Para validar ESSAS notificações, é necessário usar o painel de pagamentos: https://payments.adminml.com/ipn_webhooks

### 3. Como obter o relatório do sistema?

Para obter o relatório do sistema no PrestaShop, você deve ir ao administrador da loja no menu:

1. No menu **Parâmetros da loja**, clique em **definições da encomenda**.
2. Em seguida, acesse a aba **Status**. 
3. Na aba em questão, configure os status da seguinte forma: 

![Relatórios do sistema](/images/prestashop/infos_pt.png)

### 4. Como conciliar o transaction_id do pedido no PrestaShop com o pagamento no Mercado Pago?

Para pagamentos com o **Checkout Pro**, o `transaction_id` é o `merchant_order_id` e, nos pagamentos com **Checkout Transparente**, o `transaction_id` é o `payment_id`.

### 5. Oferecemos suporte para o modo de gateway?

Ainda não oferecemos suporte ao **modo Gateway** no PrestaShop.

### 6. O plugin faz conversão de moeda?

Não, o plugin do PrestaShop não faz conversão de moeda.

### 7. O que é o integrator ID?

É o número de identificação que um desenvolvedor ou parceiro do Mercado Pago recebe ao fazer sua certificação. Esse ID não é obrigatório para que a integração funcione, porém é através dele que reconhecemos quais integrações foram feitas por qual parceiro.

Quer ser um parceiro, [clique aqui](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/developer-program) para mais informações.
