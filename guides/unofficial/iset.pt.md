---
 sites_supported:
  - mlb
---

# iSET

## O que é iSET

iSET é uma **plataforma virtual que te permite receber pagamentos com Mercado Pago**.

Você poderá oferecer aos seus clientes a possibilidade de pagar com cartão de crédito e boleto bancário no [próprio checkout da sua loja](#bookmark_checkout_transparente), [redirecionado para o site do Mercado Pago](#bookmark_checkout_pro) ou [ambos os checkouts](#bookmark_ambos_checkouts).

## Etapas para configurar

Os **passos para começar a receber com Mercado Pago** são os seguintes:

1. Crie uma [conta de vendedor](https://www.mercadopago[FAKER][URL][DOMAIN]/activities) no Mercado Pago caso ainda não tenha uma.
2. Ative o Mercado Pago como meio de pagamento dentro da sua loja.
3. Configure as formas de pagamento.

## Ative o Mercado Pago em sua loja

Para **ativar sua conta do Mercado Pago na iSET**, siga os passos abaixo:

1. Acesse "Formas de pagamento" da seção Módulos do painel administrativo de sua loja.
2. Na lista de meios de pagamentos, selecione as "Opções de configuração" do Mercado Pago.
3. No campo Status, selecione a opção "Ativo".
4. Clique em "Fechar" e depois em "Salvar Alterações".
<p>&nbsp;</p>

![Payments Connect - iSET](/images/iset/iset_active_modulo_1.gif)
<p>&nbsp;</p>
E pronto! O Mercado Pago já está ativado.

## Configure as formas de pagamento

Após ativar o Mercado Pago, você tem a opção de oferecer os seguintes modelos de checkout: [Checkout Pro](#bookmark_checkout_pro), [Checkout Transparente](#bookmark_checkout_transparente) ou [Ambos os checkouts](#bookmark_ambos_checkouts).

Além disso, você pode [configurar parcelas sem acréscimos](#bookmark_configurando_o_parcelamento_em_sua_conta_do_mercado_pago), consultar e configurar as [taxas e prazos](https://www.mercadopago[FAKER][URL][DOMAIN]/settings/release-options/) de suas vendas online quando quiser.

### Configure os tipos de pagamentos

1. Acesse "Formas de pagamento" da seção Módulos do painel administrativo de sua loja.
2. Na lista de meios de pagamentos, selecione as "Opções de configuração" do Mercado Pago.
3. Selecione quais tipos de pagamento que deseja oferecer em seu checkout, sendo eles: "Boleto Bancário" e/ou "Cartão de Crédito".
4. Preencha uma Breve descrição/Nome da loja que deve aparecer na fatura do cartão do comprador (em até 13 caracteres).
5. Clique em "Fechar" e depois em "Salvar Alterações".
<p>&nbsp;</p>

![Payments Connect - iSET](/images/iset/iset_configuration_methods_2.gif)
<p>&nbsp;</p>

### Checkout Pro

Onde o **comprador será redirecionado ao site do Mercado Pago** e uma vez finalizado o processo, voltará para sua loja.

Para ativar esse modelo de checkout, siga os passos abaixo:

1. Acesse "Formas de pagamento" da seção Módulos do painel administrativo de sua loja.
2. Na lista de meios de pagamentos, selecione as "Opções de configuração" do Mercado Pago.
3. Selecione a opção "Padrão" da seção Modelo de Checkout.
4. Informe o [e-mail de cadastro na MercadoPago](https://www.mercadopago[FAKER][URL][DOMAIN]/profile#from-section=menu).
5. Complete os campos Client ID e Client Secret que são as [credenciais da sua conta do Mercado Pago](https://www.mercadopago[FAKER][URL][DOMAIN]developers/pt/guides/resources/credentials).
6. Clique em "Fechar" e depois em "Salvar Alterações".
<p>&nbsp;</p>

![Payments Connect - iSET](/images/iset/iset_configuration_checkout_padrao_3.gif)
<p>&nbsp;</p>

### Checkout Transparente

Onde seu **cliente finaliza o processo de compra no ambiente da sua loja**, sem ser redirecionado para outro site.

Para ativar esse modelo de checkout, siga os passos abaixo:

1. Acesse "Formas de pagamento" da seção Módulos do painel administrativo de sua loja.
2. Na lista de meios de pagamentos, selecione as "Opções de configuração" do Mercado Pago.
3. Selecione a opção "Transparente" da seção Modelo de Checkout.
4. Informe o [e-mail de cadastro na MercadoPago](https://www.mercadopago[FAKER][URL][DOMAIN]/profile#from-section=menu).
5. Complete os campos Client ID, Client Secret e Public Key que são as [credenciais da sua conta do Mercado Pago]((https://www.mercadopago[FAKER][URL][DOMAIN]developers/pt/guides/resources/credentials)).
6. Clique em "Fechar" e depois em "Salvar Alterações".
<p>&nbsp;</p>

![Payments Connect - iSET](/images/iset/iset_configuration_checkout_transparente_4.gif)
<p>&nbsp;</p>

### Ambos Checkouts

Onde poderá oferecer ao seu cliente a escolha de finalizar o pagamento diretamente em sua loja ou ser redirecionado ao site do Mercado Pago.

Para **ativar os dois checkout**, siga os passos abaixo:

1. Acesse "Formas de pagamento" da seção Módulos do painel administrativo de sua loja.
2. Na lista de meios de pagamentos, selecione as "Opções de configuração" do Mercado Pago.
3. Selecione a opção "Ambos" da seção Modelo de Checkout.
4. Informe o [e-mail de cadastro na MercadoPago](https://www.mercadopago[FAKER][URL][DOMAIN]/profile#from-section=menu).
5. Complete os campos Client ID, Client Secret e Public Key que são as [credenciais da sua conta do Mercado Pago]((https://www.mercadopago[FAKER][URL][DOMAIN]developers/pt/guides/resources/credentials)).
6. Clique em "Fechar" e depois em "Salvar Alterações".
<p>&nbsp;</p>

![Payments Connect - iSET](/images/iset/iset_configuration_checkout_ambos_5.gif)
<p>&nbsp;</p>

## Configuração de parcelamento

Estabeleça a quantidade máxima ou mínima de parcelas e a aplicação de acréscimo ou desconto sobre as parcelas em sua loja.

> WARNING
>
> Importante
>
> Para que o parcelamento funcione corretamente, é necessário configurá-lo também no Mercado Pago, acessando a configuração de [parcelamento de sua conta](#bookmark_configurando_o_parcelamento_em_sua_conta_do_mercado_pago).

1. Acesse "Formas de pagamento" da seção Módulos do painel administrativo de sua loja.
2. Na lista de meios de pagamentos, selecione as "Opções de configuração" do Mercado Pago.
3. Selecione em "Categoria dos Produtos" a melhor categoria que representa o tipo de produto anunciado em sua loja.
4. Preencha os seguintes campos de acordo com a configuração da sua conta Mercado Pago:

    | Campo | Descrição |
    | --- | --- |
    | Venda parcelada em até | Selecione o número máximo de parcelas que deseja oferecer. |
    | Valor mínimo de parcela R$ | Informe o valor mínimo de parcela que deseja oferecer. |
    | Somente pedidos acima de R$ | Indique se deseja usar uma faixa de valor mínimo para aceitar pedidos. |
    | Desconto para pagamento à vista (em %) | Informe o valor do desconto para pagamentos à vista que deseja oferecer. |
    | Acréscimo/Desconto | Aplique acréscimo ou desconto sobre pedido que deseja oferecer. |

5. Clique em "Fechar" e depois em "Salvar Alterações".
<p>&nbsp;</p>

![Payments Connect - iSET](/images/iset/iset_configuration_installments_6.gif)
<p>&nbsp;</p>

## Configurando o parcelamento em sua conta do Mercado Pago

1. Acesse a seção [Seu negocio](https://www.mercadopago.com.br/business/) na sua conta Mercado Pago.
2. Procure por "Oferecer parcelamento sem juros" e clique em "Ativar".
3. Escolha "Quantas parcelas você quer oferecer?" e clique em "Ativar" para confirmar as alterações.
<p>&nbsp;</p>

![Payments Connect - iSET](/images/iset/iset_account_installment_7.gif)
<p>&nbsp;</p>
E pronto! Você está oferecendo parcelamento sem acréscimo, assumindo as tarifas de parcelamento que você configurou.

## Informação de pedido de sua loja iSET

Para **configurar as informações de pedido em sua loja**, siga os passos abaixo:

1. Acesse "Formas de pagamento" da seção Módulos do painel administrativo de sua loja.
2. Na lista de meios de pagamentos, selecione as "Opções de configuração" do Mercado Pago.
3. Preencha os campos referentes ao que deseja oferecer em sua loja.

    | Campo | Descrição |
    | --- | --- |
    | Informações ao usuário referente ao este tipo de pagamento. | Instruções exibidas no momento da escolha da forma de pagamento. |
    | Informações ao usuário referente ao este tipo de pagamento. | Instruções exibidas após a finalização do pagamento.|
    | Status para novos pedidos. | Selecione o status para novos pedidos que deseja apresentar em sua loja. |
    | Status dos pedidos aprovados. | Selecione o status para pedidos aprovados que deseja apresentar em sua loja. |
    | Status dos pedidos cancelados. | Selecione o status para pedidos cancelados que deseja apresentar em sua loja. |
    | Utilizar campanha de desconto. | Informe se irá utilizar cupons de descontos providos pelo Mercado Pago em sua loja. |
 
4. Clique em "Fechar" e depois em "Salvar Alterações".
<p>&nbsp;</p>

![Payments Connect - iSET](/images/iset/iset_configuration_informacion_9.gif)
<p>&nbsp;</p>

> WARNING
>
> Importante
>
> A funcionalidade de campanha de descontos que existia no Mercado Pago foi descontinuada, desta forma, não é possível utilizar cupons de desconto do Mercado Pago.

<!-- -->
> Para mais informações, visite o [site oficial da iSET](https://www.iset.com.br/).
