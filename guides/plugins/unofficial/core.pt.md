---
  indexable: false
---

---
 sites_supported:
  - mlb
---

# CORE

## O que é CORE?

CORE Commerce é uma plataforma de e-commerce para sua loja virtual do grupo Linx commerce, que permite processar pagamentos através do Mercado Pago. 

Você poderá oferecer aos seus clientes a possibilidade de pagar com [cartão de crédito](#bookmark_configurando_os_dados_de_cartão_de_credito) e [boleto bancário](#bookmark_configurando_os_dados_de_boleto) no próprio checkout da sua loja.

## Etapas para configurar

Os **passos para começar a operar com Mercado Pago**, são os seguintes:

1. Crie uma [conta de vendedor](https://www.mercadopago.com.br/activities) no Mercado Pago caso ainda não tenha uma.
2. Adicione o "Mercado Pago" como meio de pagamento dentro da sua loja.
3. Configure a forma de pagamento Mercado Pago.
4. Configure o meio de pagamento do contrato.

## Adicione o Mercado Pago como meio de pagamento

Para **adicionar o Mercado Pago em sua loja**, siga os seguintes passos:

1. No painel de administração de sua loja, acesse Meios de pagamentos no menu Configs.
2. Clique no botão “Adicionar meio de pagamento". 
3. Na lista de "Fornecedor de Serviço", selecione o "Mercado Pago V2" e clique em "Próximo Passo".
4. Defina um "Nome" para o meio de pagamento Mercado Pago V2, selecione o status para "Ativo" e clique em salvar.
<p>&nbsp;</p>
    ![CORE Configuracao](/images/core/core_adicione_meio_pagamento-1.gif)
<p>&nbsp;</p>

## Configure a forma de pagamento

Após ter adicionado o Mercado Pago, você tem a opção de oferecer no próprio checkout de sua loja pagamentos com [cartão de crédito](#bookmark_configurando_os_dados_de_cartão_de_credito) e [boleto bancário](#bookmark_configurando_os_dados_de_boleto).

Além disso, você pode [configurar parcelas sem juros](#bookmark_configurando_o_parcelamento_em_sua_conta_mercado_pago) e consultar e configurar as [taxas e prazos](https://www.mercadopago.com.br/settings/release-options/) de suas vendas online quando quiser.

### Configurando os dados da integração

Para **configurar os dados de sua integração com o Mercado Pago em sua loja**, siga os seguintes passos:

1. No painel de administração de sua loja, acesse Meios de pagamentos no menu Configs.
2. Localize o meio de pagamento criado e clique em editar.
3. Acesse a aba "Integração" e complete os campos "Public Key e Access Token Key" que correspondem as [credenciais]([FAKER][CREDENTIALS][URL_BASIC]) de "Produção" de sua conta "Mercado Pago" da seção "Integração".
4. Preencha o nome que será informado na fatura de seu cliente.
5. Na seção "Modo teste", selecione a opção "sim" caso queira habilitar transações de teste.
6. Complete os campos "Public Key de teste e Access Token Key de teste" que correspondem as [credenciais]([FAKER][CREDENTIALS][URL_BASIC]) de "Sandbox" de sua conta "Mercado Pago".
7. Na seção de "Parcelamento", selecione a configuração de parcelamento "Externo (API do Mercado Pago) onde utiliza as condições de parcelamento diretamente de sua conta Mercado Pago.
8. Clique em "Salvar".
<p>&nbsp;</p>
    ![CORE Configuracao](/images/core/core_configurando_integracao-2.gif)
<p>&nbsp;</p>

### Configurando os dados de Cartão de Crédito

Para **configurar os dados de Cartão de Crédito em sua loja**, siga os seguintes passos:

1. No painel de administração de sua loja, acesse Meios de pagamentos no menu Configs.
2. Localize o meio de pagamento criado e clique em editar.
3. Acesse a aba "Cartões de Crédito", clique sobre a bandeira que deseja configurar e altere o status para "Ativo".
4. Preencha os campos correspondentes caso necessário e clique em "Salvar".

| Campos | Dados necessários |
|-------------------------------------------|---------------------------------------------------------------------------------------|
| Porcentagem de juros | Caso deseje colocar uma porcentagem de juros, coloque um valor, caso não, deixe em 0,00. |
| Tipo de juros | Emissor - Incluir juros no total do pedido. Emissor - Juros acrescido pelo emissor. Lojista - Incluir juros no total do pedido. |
| Número total de parcelas | Coloque o número total de parcelas que será possível realizar o pedido. |
| Número de parcelas sem juros | O número total de parcelas sem juros que será possível realizar o pedido. |
| Parcela mínima | Valor mínimo disponível para cada parcela de uma compra. |
| Identificador de Integração | Coloque um código que será identificado no seu ERP. |
| Ordem | A ordem em que a bandeira aparecerá no Checkout. |
| Caminho Imagem | O caminho de onde puxará a imagem para a bandeira do cartão. |
<br>

> WARNING
>
> Importante
>
> Ao utilizar configuração de parcelamento externo, todas as configurações de parcelamento realizadas na plataforma serão desconsideradas.
> O parcelamento externo NÃO será mostrado em listagens ou no detalhe do produto.

<p>&nbsp;</p>
    ![CORE Configuracao](/images/core/core_configurando_cartao-3.gif)
<p>&nbsp;</p>

### Configurando os dados de Boleto

Para configurar os dados de Boleto Bancário o em sua loja, siga os seguintes passos:

1. No painel de administração de sua loja, acesse Meios de pagamentos no menu Configs.
2. Localize o meio de pagamento criado e clique em editar.
3. Acesse a aba "Boletos" e altere o status para "Ativo".
4. Preencha o campo "Identificador de Integração" com  informação que será identificada em seu ERP.
5. Informe a "Ordem" em que o boleto aparecerá em seu checkout e clique em "Salvar".
<p>&nbsp;</p>
    ![CORE Configuracao](/images/core/core_configurando_boleto-4.gif)
<p>&nbsp;</p>

## Configurando o parcelamento em sua conta Mercado Pago.

1. Acesse sua [conta Mercado Pago](https://www.mercadopago.com.br/business/) e clique em "Seu negócio"
2. Clique na opção “Configurações”, navegue até o campo "Oferecer parcelas sem acréscimo" e clique em “Ativar”.
3. Escolha “Quantas parcelas você quer oferecer?” e clique em “Ativar” para confirmar as alterações.
<p>&nbsp;</p>
    ![CORE Configuracao](/images/core/core_parcelamento_conta-5.gif)
<p>&nbsp;</p>

E pronto! Você está oferecendo parcelamento sem acréscimo, assumindo as tarifas de parcelamento que você configurou.

## Configurando meios de pagamento do contrato

O contrato tem a finalidade de determinar configurações específicas que serão utilizadas pela sua loja.

### Criando um contrato

Para **criar um contrato em sua loja**, siga os seguintes passos:

1. No painel de administração de sua loja, acesse Contratos no menu Backoffice.
2. Clique no botão “Adicionar Contrato".
3. Preencha um "Nome" para o contrato que está sendo criado e clique em salvar.
<p>&nbsp;</p>
    ![CORE Configuracao](/images/core/core_criando_um_contrato-6.gif)
<p>&nbsp;</p>

### Definindo os meios de pagamento do contrato

Para **definir os meios de pagamento do contrato em sua loja**, siga os seguintes passos:

1. No painel de administração de sua loja, acesse Contratos no menu Backoffice.
2. Localize o "Contrato" criado e clique em editar.
3. Localize a sessão "Meios de Pagamento" e defina qual a opção que o contrato irá refletir para o meio de pagamento, sendo eles:

- **Todos os meios de pagamento ativos na plataforma.** Irá permitir que todos os meios de pagamento habilitados na plataforma sejam refletidos para este contrato.
- **Definidos abaixo.** Escolher quais os meios de pagamento irão fazer parte do contrato criado.

4. Clique em "Salvar".
<p>&nbsp;</p>
    ![CORE Configuracao](/images/core/core_meio_pagamento_contrato-7.gif)
<p>&nbsp;</p>

### Atribuindo meio de pagamento do contrato a um canal

Para **atribuir o meio de pagamento do contrato ao canal de sua loja**, siga os seguintes passos:

1. No painel de administração de sua loja, acesse Canais no menu Canais.
2. Localize o canal de sua loja e clique em editar.
3. Na sessão "Contrato Padrão", adicione o contrato criado anteriormente.
4. Clique em "Salvar".
<p>&nbsp;</p>
    ![CORE Configuracao](/images/core/core_atribuindo_contrato_ao_canal-8.gif)
<p>&nbsp;</p>

> Para mais informação, visite o [site oficial da CoreCommerce - Linx](https://docs.linxcommerce.com.br/docs).
