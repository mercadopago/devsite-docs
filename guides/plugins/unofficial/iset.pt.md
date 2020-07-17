---
 sites_supported:
  - mlb
---

# iSET

## O que é iSET

iSET é uma **plataforma e-commerce para sua loja virtual**, que permite processar pagamentos através do Mercado Pago.

Você poderá oferecer aos seus clientes a possibilidade de pagar com cartão de crédito e boleto bancário no [próprio checkout da sua loja](#bookmark_configure_checkout_transparente), [redirecionado para o site do Mercado Pago](#bookmark_configure_checkout_mercado_pago) ou [ambos os checkouts](#bookmark_configure_ambos_checkouts).

## Etapas para configurar

Os **passos para começar a operar com Mercado Pago,** são os seguintes:

1. Crie uma [conta de vendedor](https://www.mercadopago.com.br/activities) no Mercado Pago caso ainda não tenha uma.
2. Ative o **Mercado Pago** como meio de pagamento dentro da sua loja.
3. Configure as formas de pagamento.

## Ative o Mercado Pago em sua loja

Para **ativar sua conta do Mercado Pago na iSET,** siga os passos abaixo:

1. Acesse "Formas de pagamento" da seção "Módulos" do painel administrativo de sua loja.
2. Localize o "Mercado Pago" na lista de meios de pagamentos e acesse as "Opções de configuração".
3. No campo "Status", selecione a opção "Ativo".
4. Clique em "Fechar" e depois em "Salvar Alterações".
<p>&nbsp;</p>
    ![Payments Connect - iSET](/images/iset/iset_active_modulo_1.gif)
<p>&nbsp;</p>
E pronto! O Mercado Pago já está ativado.

## Configure as formas de pagamento

Após ativar o Mercado Pago, você tem a opção de oferecer os seguintes modelos de checkout: [Checkout Mercado Pago](#bookmark_configure_checkout_mercado_pago), [Checkout Transparente](#bookmark_configure_checkout_transparente) ou [Ambos os Checkouts](#bookmark_configure_ambos_checkouts) em sua loja.

Além disso, você pode [configurar parcelas sem juros](#bookmark_configurando_o_parcelamento_em_sua_conta_mercado_pago), consultar e configurar as [taxas e prazos](https://www.mercadopago.com.br/settings/release-options/) de suas vendas online quando quiser.

### Configure os tipos de pagamentos

1. Acesse "Formas de pagamento" da seção "Módulos" do painel administrativo de sua loja.
2. Localize o "Mercado Pago" na lista de meios de pagamentos e acesse as "Opções de configuração".
3. Selecione quais tipos de pagamento que deseja oferecer em seu checkout, sendo eles: "Boleto Bancário" e "Cartão de Crédito".
4. Preencha (em até 13 caracteres), a "Breve descrição/Nome da loja" que deve aparecer na fatura do cartão do comprador.
5. Clique em "Fechar" e depois em "Salvar Alterações".
<p>&nbsp;</p>
    ![Payments Connect - iSET](/images/iset/iset_configuration_methods_2.gif)
<p>&nbsp;</p>

### Configure Checkout Mercado Pago

Onde o **comprador será redirecionado ao site do Mercado Pago** e uma vez finalizado o processo, voltará para sua loja.

Para ativar esse modelo de checkout, siga os passos abaixo:

1. Acesse "Formas de pagamento" da seção "Módulos" do painel administrativo de sua loja.
2. Localize o "Mercado Pago" na lista de meios de pagamentos e acesse as "Opções de configuração".
3. Selecione a opção "Padrão" da seção "Modelo de Checkout".
4. Informe o "E-mail de cadastro na MercadoPago", referente ao [e-mail de sua conta](https://www.mercadopago.com.br/profile#from-section=menu) Mercado Pago.
5. Complete os campos "Client ID e Client Secret" que são as [credenciais de sua conta](#bookmark_credenciais_de_sua_conta_mercado_pago) "Mercado Pago".
6. Clique em "Fechar" e depois em "Salvar Alterações".
<p>&nbsp;</p>
    ![Payments Connect - iSET](/images/iset/iset_configuration_checkout_padrao_3.gif)
<p>&nbsp;</p>

### Configure Checkout Transparente

Onde seu **cliente finaliza o processo de compra no ambiente da sua loja**, sem ser redirecionado para outro site.

Para ativar esse modelo de checkout, siga os passos abaixo:

1. Acesse "Formas de pagamento" da seção "Módulos" do painel administrativo de sua loja.
2. Localize o "Mercado Pago" na lista de meios de pagamentos e acesse as "Opções de configuração".
3. Selecione a opção "Transparente" da seção "Modelo de Checkout".
4. Informe o "E-mail de cadastro na MercadoPago", referente ao [e-mail de sua conta](https://www.mercadopago.com.br/profile#from-section=menu) Mercado Pago.
5. Complete os campos "Client ID, Client Secret e Public Key" que são as [credenciais de sua conta](#bookmark_credenciais_de_sua_conta_mercado_pago) "Mercado Pago".
6. Clique em "Fechar" e depois em "Salvar Alterações".
<p>&nbsp;</p>
    ![Payments Connect - iSET](/images/iset/iset_configuration_checkout_transparente_4.gif)
<p>&nbsp;</p>

### Configure Ambos Checkouts

Onde poderá oferecer ao seu cliente a escolha de finalizar o pagamento diretamente em sua loja ou ser redirecionado ao site do Mercado Pago.

Para ativar esse modelo de checkout, siga os passos abaixo:

1. Acesse "Formas de pagamento" da seção "Módulos" do painel administrativo de sua loja.
2. Localize o "Mercado Pago" na lista de meios de pagamentos e acesse as "Opções de configuração".
3. Selecione a opção "Ambos" da seção "Modelo de Checkout".
4. Informe o "E-mail de cadastro na MercadoPago", referente ao [e-mail de sua conta](https://www.mercadopago.com.br/profile#from-section=menu) Mercado Pago.
5. Complete os campos "Client ID, Client Secret e Public Key" que são as [credenciais de sua conta](#bookmark_credenciais_de_sua_conta_mercado_pago) "Mercado Pago".
6. Clique em "Fechar" e depois em "Salvar Alterações".
<p>&nbsp;</p>
    ![Payments Connect - iSET](/images/iset/iset_configuration_checkout_ambos_5.gif)
<p>&nbsp;</p>

## Configuração de parcelamento de sua loja iSET

Configure a quantidade máxima de parcelas, valor mínimo de parcela e aplicação de acréscimo ou descontos sobre as parcelas em seu loja.

> WARNING
>
> Importante
>
> Para que o parcelamento funcione corretamente, é necessário configurá-lo também no Mercado Pago, acessando a configuração de [parcelamento de sua conta](#bookmark_configurando_o_parcelamento_em_sua_conta_mercado_pago).
> Em caso de dúvidas entre em [contato conosco](https://www.mercadopago.com.br/developers/pt/support).

1. Acesse "Formas de pagamento" da seção "Módulos" do painel administrativo de sua loja.
2. Localize o "Mercado Pago" na lista de meios de pagamentos e acesse as "Opções de configuração".
3. Selecione em "Categoria dos Produtos" a melhor categoria que representa o tipo de produto anunciado em sua loja.
4. Preencha os seguintes campos de acordo com a configuração da sua conta Mercado Pago:

- **Venda parcelada em até**. Selecione o número máximo de parcelas que deseja oferecer.
- **Valor mínimo de parcela R$**. Informe o valor mínimo de parcela que deseja oferecer.
- **Somente pedidos acima de R$**. Indique se deseja usar uma faixa de valor mínimo para aceitar pedidos em sua loja.
- **Desconto para pagamento à vista (em %)**. Informe o valor do desconto para pagamentos à vista que deseja oferecer.
- **Acréscimo/Desconto**. Aplique acréscimo ou desconto sobre pedido que deseja oferecer em sua loja.

5. Clique em "Fechar" e depois em "Salvar Alterações".
<p>&nbsp;</p>
    ![Payments Connect - iSET](/images/iset/iset_configuration_installments_6.gif)
<p>&nbsp;</p>

## Configurando o parcelamento em sua conta Mercado Pago

1. Acesse sua [conta Mercado Pago](https://www.mercadopago.com.br/business/) e clique em "Seu negócio".
2. Clique na opção Configurações, navegue até o campo "Oferecer parcelas sem acréscimo" e clique em "Ativar".
3. Escolha "Quantas parcelas você quer oferecer?" e clique em "Ativar" para confirmar as alterações.
<p>&nbsp;</p>
    ![Payments Connect - iSET](/images/iset/iset_account_installment_7.gif)
<p>&nbsp;</p>
E pronto! Você está oferecendo parcelamento sem acréscimo, assumindo as tarifas de parcelamento que você configurou.

## Credenciais de sua conta Mercado Pago

As credenciais são as chaves com as quais identificamos uma integração na sua conta. Servem para capturar pagamentos em lojas virtuais e outras aplicações, são elas:

- **Credenciais de produção.** Usadas para receber pagamentos reais.
- **Credenciais de teste.** Usadas para simular pagamentos e testar suas integrações.

Estas chaves podem ser encontradas na seção [credenciais da sua conta]([FAKER][CREDENTIALS][URL_BASIC]).

> NOTE
>
> Nota
>
> Antes de iniciar sua integração em produção, assegure se de preencher o formulário <a href="https://www.mercadopago.com.br/developers/pt/guides/payments/api/goto-production/" target="_blank">ir à Produção</a>. Caso já tenha realizado este passo o link não será apresentado.
<p>&nbsp;</p>
    ![Payments Connect - iSET](/images/iset/iset_configuration_credentions_8.gif)
<p>&nbsp;</p>

## Informação de pedido de sua loja iSET

Para **configurar as informações de pedido em sua loja**, siga os passos abaixo:

1. Acesse "Formas de pagamento" da seção "Módulos" do painel administrativo de sua loja.
2. Localize o "Mercado Pago" na lista de meios de pagamentos e acesse as "opções de configuração".
3. Preencha os campos referentes ao que deseja oferecer em sua loja.

  - **Informações ao usuário referente ao este tipo de pagamento.** Informe uma mensagem de texto no que será exibida antes da finalização do pagamento. 
  - **Informações ao usuário referente ao este tipo de pagamento.** Informe uma mensagem de texto no que será exibida depois da finalização do pagamento. 
  - **Status para novos pedidos.** Selecione o status para novos pedidos que deseja oferecer em sua loja.
  - **Status dos pedidos aprovados.** Selecione o status para pedidos aprovados que deseja oferecer em sua loja.
  - **Status dos pedidos cancelados.** Selecione o status para pedidos cancelados que deseja oferecer em sua loja.
  - **Utilizar campanha de desconto.** Informe se irá utilizar cupons de descontos providos pelo Mercado Pago em sua loja.
 
4. Clique em "Fechar" e depois em "Salvar Alterações".
<p>&nbsp;</p>
    ![Payments Connect - iSET](/images/iset/iset_configuration_informacion_9.gif)
<p>&nbsp;</p>

> WARNING
>
> Importante
>
> A funcionalidade de cupom de desconto é exclusiva para o "Checkout Mercado Pago", através da seção "Utilizar campanha de desconto" é possível utilizar os cupons de descontos promovidos pelo Mercado Pago ou os [cupons criados por você](https://www.mercadopago.com.br/settings/my-business) através de sua conta Mercado Pago.

<!-- -->
> Para mais informação, visite o site [oficial da iSET](https://www.iset.com.br/).
