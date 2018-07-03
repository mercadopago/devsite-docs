---
  sites_supported:
      - mlb
---

# ISET

## O que é ISET

[ISET](https://www.iset.com.br/) é uma plataforma de ecommerce que disponibiliza a integração com Mercado Pago como meio de pagamento.

## Como posso operar com Mercado Pago na ISET

ISET permite operar Mercado Pago nas seguintes modalidades:

### Checkout Transparente

Receba pagamentos em sua loja através de Cartão de Crédito e/ou Boleto Bancário no modo transparente, ou seja, tenha o layout do checkout customizado para a sua loja conforme disponibilizado pela plataforma ISET.

### Checkout Redirect

Receba pagamentos em sua loja utilizando o checkout do próprio Mercado Pago, neste modelo o usuário (cliente) será redirecionado para uma página do Mercado Pago para finalizar sua compra.

## Conta Mercado Pago

Antes de iniciar a configuração, é necessário que você possua uma conta válida no **Mercado Pago**, caso não tenha, pode realizar o cadastro acessando o [formulário de registro](https://www.mercadopago.com.br/registration-mp?mode=mp).

Se quiser saber mais sobre o **Mercado Pago** acesse nossa [página principal](https://www.mercadopago.com.br/).

## Como configurar o Mercado Pago na plataforma

1. Acessar o administrador se sua loja na plataforma.

    ![ISET Configuracao](/images/iset-img1.png)

2. No menu lateral, no item **Módulos**, clicar na opção **Formas de Pagamento**

    ![ISET Configuracao](/images/iset-img2.png)

3. Será carregado uma página com a lista de todos os módulos de pagamentos disponíveis

    ![ISET Configuracao](/images/iset-img3.png)

4. Clique sobre o ícone de ferramenta para abrir as opções de configurações

    ![ISET Configuracao](/images/iset-img13.png)

5. Será carregado sobre a página uma nova página de configurações exclusivas para o Mercado Pago

    ![ISET Configuracao](/images/iset-img4.png)

Abaixo iremos detalhar as configurações disponíveis na plataforma.

### Ativando o meio de pagamento

Para ativar o meio de pagamento, é necessário selecionar uma opção do campo **STATUS**:

    * Ativo: _meio de pagamento habilitado para desktop e dispositivos móveis_
    * Ativo apenas para Computador: _meio de pagamento habilitado apenas para desktop_
    * Ativo apenas para mobile: _meio de pagamento habilitado apenas para dispositivos móveis_

Selecione a opção de ativo que melhor se encaixe no seu negócio, recomendamos que seja ativado tanto para computador quanto para mobile, dessa forma o Mercado Pago como meio de pagamento estará disponível para os seus clientes que vierem pelo computador e pelo celular.

![ISET Configuracao](/images/iset-img5.png)

### Configurando as credenciais do Mercado Pago

Para ter acesso as credenciais, basta acessar o [link](https://www.mercadopago.com/mlb/account/credentials), para obter os dados de client_secret e access_token utilize a aba *checkout transparente* e para obter o client_id utilize a aba *checkout básico*:

![ISET Configuracao](/images/iset-img14.png)

### Escolhendo o tipo de checkout

Para escolher o checkout transparente, selecione a opção através do item **Modelo de Checkout**.

Para escolher o checkout redirect, é necessários elecionar a opção **DESATIVADO** do campo **Checkout transparente**:

    * Padrão: _checkout redirect_
    * Transparente: _checkout transparente_
    * Ambos: _habilita os dois modelos de checkout, redirect e transparente_

![ISET Configuracao](/images/iset-img7.png)

### Selecionando os meios de pagamentos

Na ISET, você tem a flexibilidade de selecionar quais formas de pagamento deseja habilitar em teu checkout:

    * Boleto bancário
    * Cartão de crédito: VISA, MASTER, AMERICAN EXPRESS, DINNERS, ELO, HIPERCARD e Mercado Livre

![ISET Configuracao](/images/iset-img6.png)

### Configurações Avançadas

#### Estados dos pedidos customizados

Configuração que define estados personalizados para os pedidos a partir dos status de pagamento:

![ISET Configuracao](/images/iset-img8.png)

#### Personalização de parcelas

Configuração que define a quantidade máxima de parcelas, valores minimos e aplicação de descontos sobre as parcelas.

![ISET Configuracao](/images/iset-img10.png)

Atenção: Está configuração irá sobrepor as configurações obtidas pela API do mercado pago, caso você tenha algum acordo comercial com o Mercado Pago que seja diferenciado, as configurações realizadas nesta parte deverão ser assessoradas pela equipe do Mercado Pago. Em caso de dúvidas entre em [contato conosco](https://www.mercadopago.com.br/developers/pt/support).

#### Textos no Checkout

A plataforma possibilita a edição de duas mensagens de textos no que serão exibidas antes e depois da finalização do pagamento.

![ISET Configuracao](/images/iset-img11.png)

### Habilitando Cupom de Desconto

A funcionalidade de cupom de desconto é exclusiva no checkout para o Mercado Pago como meio de pagamento, através desta configuração é possível utilizar os cupons de descontos promovidos pelo Mercado Pago ou os cupons que você pode criar através de sua conta Mercado Pago, acesse o [link](https://www.mercadopago.com.br/settings/my-business) na seção *ofereça desconto*.

![ISET Configuracao](/images/iset-img9.png)

## Exemplos

Utilizamos uma loja virtual de demonstração da ISET para mostrar o resultado dos tipos de checkouts para os clientes.

### Visual do Checkout Transparente

**_Cartao de Crédito_**

![ISET Configuracao](/images/ISET_config12.png)

**_Boleto Bancário_**

![ISET Configuracao](/images/ISET_config11.png)

### Visual do Checkout Redirect

![ISET Configuracao](/images/ISET_config10.png)

Após clicar em **FINALIZAR COMPRA** o cliente será redirecionado para uma página do Mercado Pago para finalizar sua compra:

![ISET Configuracao](/images/ISET_gif01.png)