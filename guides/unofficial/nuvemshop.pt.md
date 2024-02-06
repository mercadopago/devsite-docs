---
  sites_supported:
      - mla
      - mlb
      - mlc
      - mco
      - mlm
---

# Nuvemshop

## O que é Nuvemshop?

Nuvemshop é uma **plataforma e-commerce para sua loja virtual, que permite processar pagamentos através do Mercado Pago.**
Você poderá oferecer aos seus clientes a possibilidade de pagar com cartão de crédito, boleto bancário e Pix no [próprio checkout da sua loja](#bookmark_checkout_transparente) ou [redirecionado para o site do Mercado Pago](#bookmark_checkout_pro).

## Etapas para configurar

Os **passos para começar a operar com Mercado Pago,** são os seguintes:

1. Crie uma [conta de vendedor](https://www.mercadopago[FAKER][URL][DOMAIN]/activities) no Mercado Pago caso ainda não tenha uma.
2. Ative o **Mercado Pago** como meio de pagamento dentro da sua loja.
3. Configure as formas de pagamento Mercado Pago.

## Ative o Mercado Pago em sua loja

Para **vincular sua conta do Mercado Pago à Nuvemshop,** siga os passos abaixo:

1. Acesse as [configurações de meios de pagamentos](https://lojavirtualnuvem.com.br/admin/payments/), no painel de administração de sua loja.
2. Localize o "Mercado Pago" na lista de meios de pagamentos.
3. Clique em "Configurar" e depois em "Ativar".
4. Você **será redirecionado para uma página do Mercado Pago** para acessar com seus dados. Clique em "Permitir" para autorizar a conexão.
<p>&nbsp;</p>

![Payments Connect - Nuvem Shop](/images/nuvemshop/nuvemshop_connect_1.gif)

<p>&nbsp;</p>
Pronto! Sua conta Mercado Pago já está ativa!

> WARNING
>
> Importante
>
> Por padrão, a Nuvemshop apresenta algumas informações da conta que está recebendo pagamento, são elas: e-mail, país e a moeda correspondente a sua conta Mercado Pago.

<!-- -->
> NOTE
>
> Alterar conta do Mercado Pago
>
> Se, por algum motivo, você precisar trocar a conta atual do Mercado Pago por outra, os passos são bem simples.
>
> 1. Desconectar de sua conta Mercado Pago, caso conectada em um navegador.
> 2. Clique no "Menu de opções" e depois em "Sair".
> 3. Acesse as [configurações de meios de pagamentos](https://lojavirtualnuvem.com.br/admin/payments/), no painel de administração de sua loja, localize o "Mercado Pago" na lista de meios de pagamentos e clique em "Editar".
> 4. Clique em "Mudar usuário" para desvincular a conta atual.
> 5. Pronto! Basta você refazer o processo para [ativar uma nova conta](#bookmark_ative_o_mercado_pago_em_sua_loja).

## Configurar as formas de pagamento

Você poderá escolher qual **tipo de integração utilizar em sua loja**. Você pode optar por um [processo de compra diretamente em seu site](#bookmark_checkout_transparente) ou [no site do Mercado Pago](#bookmark_checkout_pro), sendo possível ativar um ou outro.

Além disso, você pode [configurar parcelas sem acréscimos](#bookmark_configurando_o_parcelamento_em_sua_conta_mercado_pago) e consultar e configurar as [taxas e prazos](https://www.mercadopago[FAKER][URL][DOMAIN]/settings/release-options/) de suas vendas online quando quiser.

### Checkout Transparente

É o checkout em que seu **cliente finaliza o pagamento no ambiente da sua loja** sem ser redirecionado para outro site, onde possibilita processar pagamentos com cartão de crédito, boleto bancário, Pix e Checkout Pro.

> WARNING
>
> Importante
>
> Para oferecer a opção de pagamento Pix, você deve ter cadastrada uma chave Pix na conta do vendedor. Este dado é único, serve para identificar sua conta e permitirá que você utilize as funcionalidades do meio de pagamento.<br><br>
> [Conheça como criar uma chave Pix](https://www.mercadopago.com.br/stop/pix?url=https%3A%2F%2Fwww.mercadopago.com.br%2Fadmin-pix-keys%2Fmy-keys&authentication_mode=required)

1. Acesse as [configurações de meios de pagamentos](https://lojavirtualnuvem.com.br/admin/payments/), no painel de administração de sua loja, localize o "Mercado Pago" na lista de meios de pagamentos e clique em "Editar".
2. No item "Tipo de integração" altere para "Processo de compra sem sair da loja".
3. Selecione quais os tipos de pagamento que deseja oferecer em seu checkout, sendo eles: Cartão de crédito, Boleto bancário e PIX.
4. Caso deseje que o pagamento com boleto bancário tenha desconto, informe a porcentagem de desconto no campo “Desconto para pagamentos com boleto”.
5. Clique em "Salvar alterações".
<p>&nbsp;</p>

![Payments Checkout Transparente - Nuvem Shop](/images/nuvemshop/nuvemshop_checkout_transparente_2.gif)


### Checkout Pro

**O comprador será redirecionado ao site do Mercado Pago** e uma vez finalizado o processo, voltará para sua loja, contando com meios de pagamentos como Pix, boleto parcelado, débito virtual da Caixa e carteira digital do Mercado Pago.

1. Acesse as [configurações de meios de pagamentos](https://lojavirtualnuvem.com.br/admin/payments/), no painel de administração de sua loja, localize o "Mercado Pago" na lista de meios de pagamentos e clique em "Editar".
2. No item "Tipo de integração" altere para "Processo de compra no site do Mercado Pago".
3. Selecione quais os tipos de pagamento que deseja oferecer em seu checkout, sendo eles: Cartão de crédito, Boleto bancário e PIX.
4. Clique em "Salvar alterações".
<p>&nbsp;</p>

![Payments Checkout Pro - Nuvem Shop](/images/nuvemshop/nuvemshop_checkout_redirect_3.gif)


> NOTE
>
> Nota
>
> Ao instalar o Mercado Pago, todos os meios de pagamento estarão ativos por padrão.

## Configuração de parcelamento

A Nuvemshop utiliza as informações de **parcelamento diretamente de sua conta Mercado Pago.**
As alterações feitas nas configurações de parcelamento em sua conta "Mercado Pago" serão refletidas na sua loja online em até 24h.

Caso queira **sincronizar suas alterações manualmente** ou aplicar um valor mínimo da parcela, realize os seguintes passos:

1. Acesse as [configurações de meios de pagamentos](https://lojavirtualnuvem.com.br/admin/payments/), no painel de administração de sua loja, localize o "Mercado Pago" na lista de meios de pagamentos e clique em "Editar".
2. Caso deseje aplicar um valor mínimo de parcela para pagamento transparente, informe o valor no campo “Parcelas”.
3. No item "Parcelas" clique em "Ativar agora".
4. Clique em "Salvar alterações".
<p>&nbsp;</p>

![Payments Installment - Nuvem Shop](/images/nuvemshop/nuvemshop_installments_4.gif)


## Configurando o parcelamento em sua conta Mercado Pago

1. Acesse sua [conta Mercado Pago](https://www.mercadopago[FAKER][URL][DOMAIN]/business/) e clique em "Seu negócio".
2. Clique na opção Configurações, navegue até o campo "Oferecer parcelas sem acréscimo" e clique em "Ativar".
3. Escolha "Quantas parcelas você quer oferecer?" e clique em "Ativar" para confirmar as alterações.
<p>&nbsp;</p>

![Payments Installments - Nuvem Shop](/images/nuvemshop/nuvemshop_account_installments_5.gif)

<p>&nbsp;</p>
----[mlb]----
E pronto! Você está oferecendo parcelamento sem acréscimo, assumindo as tarifas de parcelamento que você configurou.
------------

----[mlb, mla]----
> WARNING
>
> Importante
>
> Os serviços do Mercado Envios estão temporariamente indisponíveis, não sendo possível utilizar esse meio de envio na plataforma por tempo indeterminado.
------------

<!-- -->
> Para mais informação, visite o ----[mlb]---- [site oficial da Nuvemshop](https://www.nuvemshop.com.br). ------------ ----[mla, mlm, mlc, mlu, mpe, mco]---- [site oficial da Nuvemshop](https://www.tiendanube.com). ------------
