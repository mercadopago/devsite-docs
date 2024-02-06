---
 sites_supported:
  - mlb
---

# Linx Commerce

## O que é Linx Commerce?

É uma **plataforma virtual que te permite receber pagamentos com o Mercado Pago**.

Com ela você poderá, oferecer aos seus clientes a possibilidade de pagar com [cartão de crédito](#bookmark_configurando_os_dados_de_cartão_de_crédito) e [boleto bancário](#bookmark_configurando_os_dados_de_boleto) na sua loja.

## Etapas para configurar

Os passos para **começar a receber com Mercado Pago**, são os seguintes:

1. Crie uma [conta de vendedor](https://www.mercadopago[FAKER][URL][DOMAIN]/activities) no Mercado Pago caso ainda não tenha uma.
1. Adicione o Mercado Pago como meio de pagamento dentro da sua loja.
1. Configure a forma de pagamento como Mercado Pago.
1. Configure o meio de pagamento do contrato.

## Adicione o Mercado Pago como meio de pagamento

Para **adicionar o Mercado Pago em sua loja**, siga os passos abaixo:

1. No painel administrativo, acesse "Meios de pagamentos" no menu Configs.
1. Acesse “Adicionar meio de pagamento". 
1. Na lista Fornecedor de Serviço, busque por Mercado Pago e clique em "Próximo Passo".
1. Defina um nome para o meio de pagamento Mercado Pago V2 e selecione o status "Ativo".
<p>&nbsp;</p>

![LINX Configuracao](/images/linx/linx_adicione_meio_pagamento-1.gif)
<p>&nbsp;</p>

## Configure a forma de pagamento

Depois de adicionar o Mercado Pago, você terá a opção de oferecer pagamentos com [cartão de crédito](#bookmark_configurando_os_dados_de_cartão_de_crédito) e [boleto bancário](#bookmark_configurando_os_dados_de_boleto).

Além disso, você pode [oferecer parcelas sem acréscimos](#bookmark_configurando_o_parcelamento_na_sua_conta_do_mercado_pago), consultar e configurar as [taxas e prazos](https://www.mercadopago[FAKER][URL][DOMAIN]/settings/release-options/) de suas vendas online quando quiser.

### Configurando os dados da integração

Após adicionar o meio de pagamento, **configure os dados de sua integração com o Mercado Pago** através dos seguintes passos:

1. Acesse a aba "Integração" e complete os campos Public Key e Access Token com as [Credenciais](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/resources/credentials) de produção de sua conta do Mercado Pago.
1. Preencha o nome que será informado na fatura do seu cliente para que ele possa reconhecê-lo.
1. Se deseja habilitar pagamentos de teste, na seção Modo teste selecione a opção "Sim". Depois complete os campos Public Key e Access Token com as [Credenciais](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/resources/credentials) de teste  da sua conta do Mercado Pago.
1. Na seção de Parcelamento, selecione "Externo (API do Mercado Pago)" onde você vai utilizar as condições de parcelamento diretamente da sua conta Mercado Pago.
1. Por último, clique em "Salvar".
<p>&nbsp;</p>

![LINX Configuracao](/images/linx/linx_configurando_integracao-2.gif)
<p>&nbsp;</p>

### Configurando os dados de cartão de crédito

Para **configurar os dados de Cartão de Crédito em sua loja**, siga os passos abaixo:

1. No painel administrativo, acesse "Meios de pagamentos" no menu Configs.
1. Localize o meio de pagamento criado e clique em "Editar".
1. Acesse a aba "Cartões de Crédito", escolha a bandeira que deseja configurar e selecione o status "Ativo".
1. Preencha os campos correspondentes, se necessário.

    | Campos | Dados |
    | --- | --- |
    | Porcentagem de acréscimos | Caso queira adicionar uma porcentagem de acréscimos, preencha um valor, caso não, deixe em 0,00. |
    | Tipo de acréscimos | Emissor - Incluir acréscimos no total do pedido. Emissor - Juros acrescido pelo emissor. Lojista - Incluir acréscimos no total do pedido. |
    | Número total de parcelas | Coloque o número total de parcelas que será possível escolher por compra. |
    | Número de parcelas sem acréscimos | O número total de parcelas sem acréscimos que será possível escolher por compra. |
    | Parcela mínima | Valor mínimo disponível para cada parcela de uma compra. |
    | Identificador de Integração | Coloque um código que será identificado no seu ERP. |
    | Ordem | Configure a ordem em que as bandeiras aparecerão no Checkout. |
    | Caminho Imagem | Complete o caminho onde as imagem das bandeiras do cartão serão buscadas. |

1. Por último, clique em "Salvar".
<p>&nbsp;</p>

![LINX Configuracao](/images/linx/linx_configurando_cartao-3.gif)
<p>&nbsp;</p>

> WARNING
>
> Importante
>
> Ao utilizar configuração de parcelamento externo, todas as configurações de parcelamento realizadas na plataforma serão desconsideradas.<br>
> O parcelamento externo não será mostrado em listagens ou no detalhe do produto.

### Configurando os dados de Boleto

Para **configurar os dados de Boleto Bancário o em sua loja**, siga os passos abaixo:

1. No painel administrativo, acesse "Meios de pagamentos" no menu Configs.
1. Localize o meio de pagamento criado e clique em "Editar".
1. Acesse a aba "Boletos" e selecione o status para "Ativo".
1. Preencha o campo Identificador de Integração com a informação que será identificada em seu ERP.
1. Informe a ordem em que o boleto aparecerá no seu checkout.
1. Por último, clique em "Salvar".
<p>&nbsp;</p>

![LINX Configuracao](/images/linx/linx_configurando_boleto-4.gif)
<p>&nbsp;</p>

## Configurando o parcelamento na sua conta do Mercado Pago

1. Na seção [Seu negócio](https://www.mercadopago.com.br/business/) na sua conta do Mercado Pago.
1. Procure por "Oferecer parcelamento sem juros" e clique em "Ativar".
1. Escolha quantas parcelas você quer oferecer e clique em “Ativar” para confirmar as alterações.
<p>&nbsp;</p>

![LINX Configuracao](/images/linx/linx_parcelamento_conta-5.gif)
<p>&nbsp;</p>

E pronto! Você está oferecendo parcelamento sem acréscimos, assumindo as tarifas de parcelamento que você configurou.

## Configurando meios de pagamento do contrato

O contrato tem a finalidade de determinar configurações específicas que serão utilizadas pela sua loja.

### Criando um contrato

Para **criar um contrato em sua loja**, siga os passos abaixo:

1. No painel administrativo, acesse "Contratos" no menu Backoffice.
1. Clique em “Adicionar Contrato".
1. Preencha um nome para o contrato que está sendo criado.
1. Por último, clique em "Salvar".
<p>&nbsp;</p>

![LINX Configuracao](/images/linx/linx_criando_um_contrato-6.gif)
<p>&nbsp;</p>

### Definindo os meios de pagamento do contrato

Para **definir os meios de pagamento do contrato**, siga os passos abaixo:

1. No painel administrativo, acesse "Contratos" no menu Backoffice.
1. Localize o contrato criado e clique em "Editar".
1. Localize a sessão meios de pagamento e defina a opção de contrato que deseja utilizar:
 - **Todos os meios de pagamento ativos na plataforma**. Irá permitir que todos os meios de pagamento habilitados na plataforma.
 - **Definidos abaixo**. Escolher quais meios de pagamento irão fazer parte do contrato.
1. Por último, clique em "Salvar".
<p>&nbsp;</p>

![LINX Configuracao](/images/linx/linx_meio_pagamento_contrato-7.gif)
<p>&nbsp;</p>

### Atribuindo meio de pagamento do contrato a um canal

Para **atribuir o meio de pagamento do contrato ao canal de sua loja**, siga os passos abaixo:

1. No painel administrativo, acesse "Canais" no menu Canais.
1. Localize o canal da sua loja e clique em "Editar".
1. Na sessão contrato padrão, adicione o contrato que criou.
1. Por último, clique em "Salvar".
<p>&nbsp;</p>

![LINX Configuracao](/images/linx/linx_atribuindo_contrato_ao_canal-8.gif)
<p>&nbsp;</p>

<!-- -->
> Para mais informações, visite o [site oficial da Linx Commerce](https://docs.linxcommerce.com.br/docs).
