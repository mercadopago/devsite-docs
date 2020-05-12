---
sites_supported:
  - mla
  - mco
  - global
indexable: false
---

# Mercado Pago Gateway: Configuração

> WARNING
>
> Contato comercial necessário
>
> Você só pode integrar este produto se o seu contato comercial compartilhar todas as informações necessárias para isso.

## Introdução

Desde o backoffice de Mercado Pago, você poderá configurar seus números de comércio, assim como seus acordos comerciais, com adquirentes e/ou emissores na hipótese de ter promoções. 

Para fazê-lo, acesse a seção: _Configuração:_

![Configuração](/images/gateway/configuration.png)

## Números de comércio

Na seção _Configuração &rarr; Nº de comercio_ você poderá ver a relação dos números de comércio que carregou. Dessa vista, poderá criar ou gerenciar os já criados.

![Números de comercio](/images/gateway/merchant_accounts.png)

### Criando um número de comércio

Clicando _Adicionar Nº comércio_ vai ver o seguinte:

![Números de comercio](/images/gateway/merchant_accounts_new.png)

Preencha as informações necessárias e clique _Continuar_

![Número de comercio cargado](/images/gateway/merchant_accounts_congrats.png)

Pronto! Seu número de comércio já foi criado. 

> Por defeito, cada número de comércio criado estará desativado. É necessário ativá-lo depois, quando esteja tudo pronto para ser utilizado.

**O que é o ID externo e para que é utilizado?**

Seu uso vincula-se com a parte técnica e é para identificar facilmente um número de comércio na hora de realizar a integração.

> Se você não souber o que preencher neste campo, simplesmente deixe-o em branco. Seu integrador ou equipe de desenvolvimento saberão se for necessário utilizá-lo ou não.

### Editando um número de comércio

Clicando sobre um item da relação de números de comércio, poderá ir para a vista de edição:

![Edición de número de comercio](/images/gateway/merchant_accounts_edit.png)

Aqui poderá editar os dados que necessitar.

### Removendo um número de comércio

Não é possível remover um número de comércio. Apenas pode ser desativado.

## Acordos comerciais (meios de pagamento)

Os acordos comerciais podem ser gerenciados da seção _Configuração &rarr; Meios de pagamento_. Voce verá que tem uma aba de Gateway e outra de Agregador.

### Próprios (Modelo Gateway)

Daqui poderá gerenciar seus próprios acordos e meios de pagamento.

![Medios de pago gateway](/images/gateway/payment_methods_gateway.png)

#### Criando um meio de pagamento

Clicando em _Adicionar meio de pagamento_ vai ver o seguinte:

![Nuevo medio de pago gateway](/images/gateway/payment_methods_gateway_new.png)

Clicando _Continuar_ verá a tela seguinte:

![Nuevo medio de pago gateway](/images/gateway/payment_methods_gateway_new_2.png)

Aqui deverá selecionar os números de comércio válidos para o meio de pagamento que carregou previamente.

![Nuevo medio de pago gateway](/images/gateway/payment_methods_gateway_new_3.png)

Pronto! Seu meio de pagamento já estará criado.

> Por defeito cada meio de pagamento criado será disponibilizado no âmbito de testes  (Sandbox). É necessário ativá-lo depois, quando já estiver tudo pronto para sua utilização em produção.

#### Editando um meio de pagamento

Clicando num item da relação de meios de pagamento, poderá ir para a vista de edição. Ali poderá editar os dados que precisar.

#### Removendo um meio de pagamento

Não é possível remover um meio de pagamento. Apenas desativá-lo.

### De Mercado Pago (Modelo Agregador)

Daqui você poderá gerenciar os meios de pagamento Mercado pago

![Medios de pago agregador](/images/gateway/payment_methods_aggregator.png)

### Desativando um meio de pagamento

Clicando sobre um item da relação de meios de pagamento poderá ir à vista de edição:

![Edición Medios de pago agregador](/images/gateway/payment_methods_aggregator_edit.png)

Desative os acordos que não lhe interesse oferecer.

> Se quiser desativar um meio de pagamento inteiro, desfaça a relação inteira.

### Necessita ajuda?

Entre em contato com seu executivo de conta.

### Próximos passos

* [Integre o Checkout Mercado Pago](https://www.mercadopago.com.ar/developers/es/guides/gateway/web-checkout/receiving-payments) no Modelo Gateway.
* [Integre o API](https://www.mercadopago.com.ar/developers/es/guides/gateway/api/receiving-payments) no Modelo Gateway.
