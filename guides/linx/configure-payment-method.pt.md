---
 sites_supported:
  - mlb
---

# Configure a forma de pagamento

Depois de adicionar o Mercado Pago, você terá a opção de oferecer pagamentos com [cartão de crédito](#bookmark_configurando_os_dados_de_cartão_de_crédito) e [boleto bancário](#bookmark_configurando_os_dados_de_boleto).

Além disso, você pode [oferecer parcelas sem acréscimos](#bookmark_configurando_o_parcelamento_na_sua_conta_do_mercado_pago), consultar e configurar as [taxas e prazos](https://www.mercadopago[FAKER][URL][DOMAIN]/settings/release-options/) de suas vendas online quando quiser.

## Configurando os dados da integração

Após adicionar o meio de pagamento, **configure os dados de sua integração com o Mercado Pago** através dos seguintes passos:

1. Acesse a aba "Integração" e complete os campos Public Key e Access Token com as [Credenciais](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/credentials/credentials) de produção de sua conta do Mercado Pago.
1. Preencha o nome que será informado na fatura do seu cliente para que ele possa reconhecê-lo.
1. Se deseja habilitar pagamentos de teste, na seção Modo teste selecione a opção "Sim". Depois complete os campos Public Key e Access Token com as [Credenciais](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/credentials/credentials) de teste  da sua conta do Mercado Pago.
1. Na seção de Parcelamento, selecione "Externo (API do Mercado Pago)" onde você vai utilizar as condições de parcelamento diretamente da sua conta Mercado Pago.
1. Por último, clique em "Salvar".
<p>&nbsp;</p>

![LINX Configuracao](/images/linx/linx_configurando_integracao-2.gif)
<p>&nbsp;</p>

## Configurando os dados de cartão de crédito

Para **configurar os dados de Cartão de Crédito em sua loja**, siga os passos abaixo:

1. No painel administrativo, acesse "Meios de pagamentos" no menu Configs.
1. Localize o meio de pagamento criado e clique em "Editar".
1. Acesse a aba "Cartões de Crédito", escolha a bandeira que deseja configurar e selecione o status "Ativo".
1. Preencha os campos correspondentes, se necessário.

    | Campos | Dados |
    | --- | --- |
    | Porcentagem de acréscimos | Caso queira adicionar uma porcentagem de acréscimos, preencha um valor, caso não, deixe em 0,00. |
    | Tipo de acréscimos | Emissor - Incluir acréscimos no total do pedido. Emissor - Acréscimos acrescido pelo emissor. Lojista - Incluir acréscimos no total do pedido. |
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

## Configurando os dados de Boleto

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
