# XTECH

## O que é XTECH

[XTECH](https://www.xtechcommerce.com/) é uma plataforma de ecommerce que disponibiliza a integração com Mercado Pago como meio de pagamento.

## Como posso operar com Mercado Pago na XTECH

XTECH permite operar Mercado Pago nas seguintes modalidades:

### Checkout Transparente

Receba pagamentos em sua loja através de Cartão de Crédito e/ou Boleto Bancário no modo transparente, ou seja, tenha o layout do checkout customizado para a sua loja conforme disponibilizado pela plataforma XTECH.

### Checkout Redirect

Receba pagamentos em sua loja utilizando o checkout do próprio Mercado Pago, neste modelo o usuário (cliente) será redirecionado para uma página do Mercado Pago para finalizar sua compra.

## Conta Mercado Pago

Antes de iniciar a configuração, é necessário que você possua uma conta válida no **Mercado Pago**, caso não tenha, pode realizar o cadastro acessando o [formulário de registro](https://www.mercadopago.com.br/registration-mp?mode=mp).

Se quiser saber mais sobre o **Mercado Pago** acesse nossa [página principal](https://www.mercadopago.com.br/).

## Como habilitar o Mercado Pago

1. Acessar o administrador se sua loja na plataforma.
2. No menu Ferramentas, selecionar a opção **MÓDULOS DE PAGAMENTO**

    ![Enabling Mercado Pago in Xtech](/images/xtech_config01.png)

3. Clique no botão **INSTALAR** no quadro do Mercado Pago

    ![Mercado Pago installation page at Xtech](/images/xtech_config02.png)

4. Será redirecionado para uma página do Mercado Pago para poder realizar permitir a conexão entre a XTECH Plataforma e sua conta Mercado Pago, realizando todas as configurações necessárias.

    ![Xtech authorization message](/images/xtech_config03.png)

5. Após clicar em **PERMITIR** você será redirecionado de volta para a seção administrativa da plataforma, na tela de configurações do módulo Mercado Pago.

    ![Xtech Configuration Page](/images/xtech_config04.png)

O Mercado pago está instalado porém **desativado**, siga os passos abaixo para realizar as configurações do módulo.

### Configurando o Mercado Pago

Após seguir os passos anteriores, o módulo do Mercado Pago na plataforma já estará habilitado, agora é necessário configurá-lo de acordo com o tipo de checkout que deseja utilizar.

#### Ativando o meio de pagamento

Para ativar o meio de pagamento, é necessário selecionar a opção **ATIVADO** do campo **STATUS**.

![Activating payment method](/images/xtech_config06.png)

#### Escolhendo o tipo de checkout

Para escolher o checkout transparente, é necessário selecionar a opção **ATIVADO** do campo **Checkout transparente**.

![Choice of checkout type](/images/xtech_config07.png)

Para escolher o checkout redirect, é necessários elecionar a opção **DESATIVADO** do campo **Checkout transparente**.

![Transparent checkout disabled](/images/xtech_config08.png)

#### Entendendo o formulário de configuração da XTECH

![Understanding Xtech Configuration Page](/images/xtech_config05.png)

Segue abaixo a descrição de cada campo do formulário de configuração no painel administrativo da plataforma:

Item | Valores | Descrição
---------|----------|---------
 Status | Ativado / Desativado | Indica se o meio de pagamento está ativado/desativado na págian do checkout
 Nome da Aba no Checkout | | Indica o nome da aba para o meio de pagamento
 Desconto no boleto (%) | | Valor a ser descontado quando a forma de pagamento selecionada for boleto
 Cupom Mercado Pago | Ativado / Desativado | Habilitar o cupom de desconto exclusivo do Mercado Pago
 Checkout Transparente | Ativado / Desativado | Indica o tipo de checkout. Ativado habilita o checkout transparente enquanto que desativado habilita o checkout redirect
 Nome da Fatura do cartão de crédito | | Indica o nome que irá aparecer na fatura do cliente, sugerismo utilizar o nome da loja. Limite máximo de 11 caracteres.
 Formas de pagamento | Cartão de crédito / Boleto Bancário | Habilita as formas de pagamento que serão exibidas na página do checkout.
 Número de parcelas | | Indica a quantidade máxima de parcelas que serão aceitas no checkout.
 Valor minimo de parcela | | Indica o menor valor que a parcela poderá ter.

## Exemplos

Utilizamos uma loja virtual de demonstração da XTECH para mostrar o resultado dos tipos de checkouts para os clientes.

### Visual do Checkout Transparente

**_Cartao de Crédito_**

![Setting up payment method - Credit card](/images/xtech_config12.png)

**_Boleto Bancário_**

![Setting up payment method - Ticket](/images/xtech_config11.png)

### Visual do Checkout Redirect

![Checkout redirect visual](/images/xtech_config10.png)

Após clicar em **FINALIZAR COMPRA** o cliente será redirecionado para uma página do Mercado Pago para finalizar sua compra:

![Checkout page - Checkout redirect](/images/xtech_gif01.png)
