---
 sites_supported:
  - mlb
---

# Loja Integrada

## O que é Loja Integrada?

Loja integrada é uma **plataforma para sua loja virtual que permite processar pagamentos através do Mercado Pago**. Para contas gratuitas na Loja Integrada esse é o único meio de pagamento possível.

Você pode ativar a opção de [vender diretamente em seu site](https://www.mercadopago.com.br/developers/pt/plugins_sdks/plugins/unofficial/lojaintegrada#bookmark_configurar-as-formas-de-pagamento), [receber pagamentos por boleto](https://www.mercadopago.com.br/developers/pt/plugins_sdks/plugins/unofficial/lojaintegrada#bookmark_configuração-boleto) e [oferecer parcelamento sem juros](https://www.mercadopago.com.br/developers/pt/plugins_sdks/plugins/unofficial/lojaintegrada#bookmark_configuração-de-parcelamento).

## Etapas para configurar

Os **passos para começar a operar com Mercado Pago** são os seguintes:

1. Crie uma [conta de vendedor](https://www.mercadopago.com.br/activities) no Mercado Pago caso ainda não tenha uma.
1. Instale o aplicativo dentro da loja.
1. Configure as formas de pagamento Mercado Pago.

## Instalar Mercado Pago em sua loja

Para **vincular sua conta do Mercado Pago à Loja Integrada**, siga os passos abaixo:

1. Acesse as [configurações de formas de pagamento](https://app.lojaintegrada.com.br/painel/configuracao/pagamento/listar) no menu da Loja Integrada.
1. Clique em “Mercado Pago” e depois em “Instalar aplicativo do Mercado Pago”.
1. Você será redirecionado para uma página do Mercado Pago para acessar com seus dados. Clique em “Permitir” para autorizar a conexão.


    ![Installing Mercado Pago - Loja Integrada](/images/lojaintegrada/lojaintegrada-connect-1.gif)


E pronto! O aplicativo do Mercado Pago já está instalado na sua loja e você pode começar a receber pagamentos.


> NOTE
>
> Alterar conta do Mercado Pago
>
> Se quiser alterar a conta do Mercado Pago do seu site, é necessário sair e reinstalar o aplicativo.
> 1. Desconectar de sua conta Mercado Pago, caso conectada em um navegador.
> 1. Clique no "Menu de opções" e depois em "Sair".
> 1. Acesse as [configurações de formas de pagamento](https://app.lojaintegrada.com.br/painel/configuracao/pagamento/listar) no menu da Loja Integrada e clique em “Mercado Pago” e depois em "Desinstalar aplicativo".
> 1. Repita o procedimento para [Instalar Mercado Pago em sua loja](https://www.mercadopago.com.br/developers/pt/plugins_sdks/plugins/unofficial/lojaintegrada#bookmark_instalar-Mercado-Pago-em-sua-loja) com a nova conta.

## Configurar as formas de pagamento

Após vincular sua conta, você tem a **opção de ativar dois tipos de checkout**, são eles: Checkout Transparente e Mercado Pago Redirect. Você precisa ativar um ou outro. Além disso, você pode [configurar pagamentos por boleto](https://www.mercadopago.com.br/developers/pt/plugins_sdks/plugins/unofficial/lojaintegrada#bookmark_configuração-boleto) e [parcelas sem juros](https://www.mercadopago.com.br/developers/pt/plugins_sdks/plugins/unofficial/lojaintegrada#bookmark_configuração-de-parcelamento).

Você pode consultar e configurar as [taxas e prazos](https://www.mercadopago.com.br/settings/release-options) de suas vendas online quando quiser.

### Checkout Transparente

É o checkout em que seu **cliente finaliza o pagamento no ambiente da sua loja**, sem ser redirecionado para outro site.

1. Acesse as [configurações de formas de pagamento](https://app.lojaintegrada.com.br/painel/configuracao/pagamento/listar) no menu da Loja Integrada e clique em “Mercado Pago”.
1. No item “Checkout Transparente” alterar de “Desativado” para “Ativado”.
1. Clique em “Salvar alterações”.

### Mercado Pago Redirect

O **comprador é direcionado ao Mercado Pago para fazer o pagamento** e concluir a compra.

1. Acesse as [configurações de formas de pagamento](https://app.lojaintegrada.com.br/painel/configuracao/pagamento/listar) no menu da Loja Integrada e clique em “Mercado Pago”.
1. No item “Mercado Pago Redirect” alterar de “Desativado” para “Ativado”.
1. Clique em “Salvar alterações”.


    ![Activating Checkout transparent and Checkout redirected - Loja Integrada](/images/lojaintegrada/lojaintegrada-checkout-1.gif)


Informe como você quer que sua loja apareça para seu cliente quando for realizar a compra:

- **Nome na Fatura do Comprador**. Preencha o nome que deve aparecer na fatura do cartão do comprador (máximo de 11 caracteres).
- **Valor mínimo**. Informe o valor mínimo de compra pelo Mercado Pago da maneira que melhor desejar. Por padrão, é de R$ 5,00.
- Clique em “Salvar alterações”.

## Configuração boleto

Operar com **boleto do Mercado Pago como opção de pagamento**:

1. Acesse as [configurações de formas de pagamento](https://app.lojaintegrada.com.br/painel/configuracao/pagamento/listar) no menu da Loja Integrada, clique em “Mercado Pago” e navegue até o grupo “Configuração de boleto”.
1. No item “Boleto bancário” alterar de “Desativado” para “Ativado”.
1. Informe um valor mínimo para que a plataforma apresente a opção de boleto ao comprador. Caso todos os pedidos possam ser pagos com boleto deixe o campo zerado.
1. Caso deseje que o pagamento com boleto tenha desconto marque a opção “Usar desconto no boleto?” e informe a porcentagem de desconto no campo “Desconto aplicado”.
1. Clique em “salvar alterações”.


    ![Setting ticket - Loja Integrada](/images/lojaintegrada/lojaintegrada-ticket-1.gif)


## Configuração de parcelamento

**Ofereça a opção de parcelamento** sem juros com cartão de crédito em seu site com Mercado Pago.

> WARNING
>
> Importante
>
> Para que o parcelamento funcione corretamente, é necessário configurá-lo também no Mercado Pago, acessando a [configuração de parcelamento](https://www.mercadopago.com.br/developers/pt/plugins_sdks/plugins/unofficial/lojaintegrada#bookmark_configurando-o-parcelamento-de-sua-conta-Mercado-Pago) de sua conta.

1. Acesse as [configurações de formas de pagamento](https://app.lojaintegrada.com.br/painel/configuracao/pagamento/listar) no menu da Loja Integrada, clique em “Mercado Pago” e navegue até o campo “Configuração do parcelamento”.
1. Preencha os seguintes campos de acordo com a configuração da sua conta Mercado Pago:
  - Apenas para pagamento transparente, **marcar a opção para utilizar o serviço de parcelamento externo do Mercado Pago**.
  - **Complete o valor máximo e mínimo de parcelas** que deseja receber.
  - E por último, de acordo com a configuração da sua conta Mercado Pago, **escolha o número de parcelas sem juros para pagamentos**.
1. Clique em “Salvar alterações”.


    ![Setting credit card - Loja Integrada](/images/lojaintegrada/lojaintegrada-credit-card-1.gif)

### Configurando o parcelamento de sua conta Mercado Pago

1. Acesse sua [conta Mercado Pago](https://www.mercadopago.com.br/business) e clique em "Seu negócio".
1. Clique na opção "Configurações", navegue até o campo "Oferecer parcelas sem acréscimo" e clique em “Ativar”.
1. Escolha “Quantas parcelas você quer oferecer?” e clique em “Ativar” para confirmar as alterações.


	![Setting account installment - Loja Integrada](/images/lojaintegrada/lojaintegrada-account-installment-1.gif)


> Para mais informação, visite o [site oficial do Loja integrada](https://lojaintegrada.com.br/).
