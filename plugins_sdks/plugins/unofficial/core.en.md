# CORE

## O que é CORE?

[CORE Commerce](http://www.plataformacore.com.br) é um ecossistema focado em soluções multi canal para sua loja virtual que permite processar pagamentos através do Mercado Pago.
Para obter maiores informações sobre as possibilidades que a CORE oferece acesse [sua página de recursos](http://www.plataformacore.com.br/recursos/).

## Como posso operar com Mercado Pago na CORE

CORE permite operar Mercado Pago nas seguintes modalidades:

### Checkout Transparente

Receba pagamentos em sua loja através de Cartão de Crédito e/ou Boleto Bancário no modo transparente, ou seja, tenha o layout do checkout customizado para a sua loja conforme disponibilizado pela plataforma CORE.

### Checkout Redirect

Receba pagamentos em sua loja utilizando o checkout do próprio Mercado Pago, neste modelo o usuário (cliente) será redirecionado para uma página do Mercado Pago para finalizar sua compra.

## Conta Mercado Pago

Antes de iniciar a configuração, é necessário que você possua uma conta válida no **Mercado Pago**, caso não tenha, pode realizar o cadastro acessando o [formulário de registro](https://www.mercadopago.com.br/registration-mp?mode=mp).

Se quiser saber mais sobre o **Mercado Pago** acesse nossa [página principal](https://www.mercadopago.com.br/).

## Como habilitar o Checkout Redirect

1. Acessar o painel administrativo de sua loja na plataforma.

2. No menu Configs, selecionar a opção **MEIOS DE PAGAMENTO**.

    ![CORE Configuracao](/images/core1.png)

3. Busque no menu pela opção **Integração MercadoPago** clique no quadro de seleção ao lado do logotipo Mercado Pago e depois clique no botão de editar representado por um lápis na lista de ações.

    ![CORE Configuracao](/images/core19.png)

4. Na tela de dados gerais deixe o campo **ativo** como **sim**.

    ![CORE Configuracao](/images/core3.png)


5. No menu **Integração** informe as [credenciais de sua conta mercado pago](https://www.mercadolibre.com/jms/[FAKER][GLOBALIZE][SITE_ID]/lgz/login?platform_id=mp&go=https://www.mercadopago.com/mlb/account/credentials).

    ![CORE Configuracao](/images/core0.png)

6. No menu **Cartões de Crédito** navegue pelos paineis mudando o status de cada bandeira para **ativo**.

    ![CORE Configuracao](/images/core6.png)

7. No menu **Boletos** assim como feito para as bandeiras de cartão de crédito clique no status **ativo**.

    ![CORE Configuracao](/images/core7.png)

8. Ativas as formas de pagamento de sua escolha e definidas as credenciais é preciso então ativar a configuração do contrato para que seja disponibilizado na loja, avance para o tópico **Como configurar contratos**.

# Como habilitar o Checkout Transparente

1. Acessar o painel administrativo de sua loja na plataforma.

2. No menu Configs, selecionar a opção **MEIOS DE PAGAMENTO**.

    ![CORE Configuracao](/images/core1.png)

3. Busque no menu pela opção **MercadoPagoV2** clique no quadro de seleção ao lado do logotipo Mercado Pago e depois clique no botão de editar representado por um lápis na lista de ações.

    ![CORE Configuracao](/images/core2.png)

4. Na tela de dados gerais deixe o campo **ativo** como **sim**.

    ![CORE Configuracao](/images/core4.png)


5. No menu **Integração** informe as [credenciais de sua conta mercado pago](https://www.mercadolibre.com/jms/[FAKER][GLOBALIZE][SITE_ID]/lgz/login?platform_id=mp&go=https://www.mercadopago.com/mlb/account/credentials).

    ![CORE Configuracao](/images/core5.png)

6. No menu **Cartões de Crédito** navegue pelos paineis mudando o status de cada bandeira para **ativo**.

    ![CORE Configuracao](/images/core6.png)

7. No menu **Boletos** assim como feito para as bandeiras de cartão de crédito clique no status **ativo**.

    ![CORE Configuracao](/images/core7.png)

8. Ativas as formas de pagamento de sua escolha e definidas as credenciais é preciso então ativar a configuração do contrato para que seja disponibilizado na loja, avance para o tópico **Como configurar contratos**.

## Como configurar contratos

1. Acessar o painel administrativo de sua loja na plataforma.

2. No menu Backoffice, selecionar a opção **CONTRATOS**.

    ![CORE Configuracao](/images/core8.png)

3. Selecionar a opção **Adicionar Contrato**, ou edite um existente.

    ![CORE Configuracao](/images/core9.png)

4. Caso esteja criando um novo contrato estara selecionado o meio de pagamento do contrato padrão, selecionar a opção **Definidos abaixo**.

    ![CORE Configuracao](/images/core10.png)

5. Na tela de aviso, selecionar a opção **Sim**.

    ![CORE Configuracao](/images/core11.png)

6. Retornando ao menu do contrato, selecionar a opção **Selecione**.

    ![CORE Configuracao](/images/core12.png)    

7. Defina então para este contrato de Meio de Pagamento o Checkout que Configurou no tópico anterior clicando nas setas de maneira com que as formas de pagamento selecionadas mudem para o menu da direita, selecionar então a opção **salvar**.

    ![CORE Configuracao](/images/core13.png)    

## Como configurar multicanais

1. Acessar o painel administrativo de sua loja na plataforma.

2. No menu Canais, selecionar a opção **CANAIS**.

    ![CORE Configuracao](/images/core14.png)

3.  Selecionar a opção **Adicionar Canal**, ou edite um existente.

    ![CORE Configuracao](/images/core15.png)

4. No menu de definição do Tipo de Canal, selecionar a opção **Próximo passo**.

    ![CORE Configuracao](/images/core16.png)

5. Defina as informações de configuração do canal, rolar para baxio até encontrar a opção **Contrato Padrão**.

    ![CORE Configuracao](/images/core17.png)

6. Clique em **Selecione** e escolha o contrato configurado no tópico anterior, selecionar a opção **Salvar e fechar**.

    ![CORE Configuracao](/images/core18.png)  
