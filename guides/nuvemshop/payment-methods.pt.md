---
  sites_supported:
      - mla
      - mlb
      - mlc
      - mco
      - mlm
---

# Configurar as formas de pagamento

Você poderá escolher qual **tipo de integração utilizar em sua loja**. Você pode optar por um [processo de compra diretamente em seu site](#bookmark_checkout_transparente) ou [no site do Mercado Pago](#bookmark_checkout_pro), sendo possível ativar um ou outro.

Além disso, você pode [configurar parcelas sem juros](#bookmark_configurando_o_parcelamento_em_sua_conta_mercado_pago) e consultar e configurar as [taxas e prazos](https://www.mercadopago[FAKER][URL][DOMAIN]/settings/release-options/) de suas vendas online quando quiser.

## Checkout Pro

**O comprador será redirecionado ao site do Mercado Pago** e uma vez finalizado o processo, voltará para sua loja, contando com meios de pagamentos como Pix, boleto parcelado, débito virtual da Caixa e carteira digital do Mercado Pago.

1. Acesse as [configurações de meios de pagamentos](https://lojavirtualnuvem.com.br/admin/payments/), no painel de administração de sua loja, localize o "Mercado Pago" na lista de meios de pagamentos e clique em "Editar".
2. No item "Tipo de integração" altere para "Processo de compra no site do Mercado Pago".
3. Selecione quais os tipos de pagamento que deseja oferecer em seu checkout, sendo eles: Cartão de crédito, Boleto bancário e PIX.
4. Clique em "Salvar alterações".
<p>&nbsp;</p>

![Payments Checkout Pro - Nuvem Shop](/images/nuvemshop/nuvemshop_checkout_redirect_3.gif)


----[mlb]----
## Checkout transparente
------------

----[mla, mlm, mlc, mlu, mpe, mco]----
## Checkout API
------------

----[mlb]----
É o checkout em que seu **cliente finaliza o pagamento no ambiente da sua loja** sem ser redirecionado para outro site, onde possibilita processar pagamentos com cartão de crédito, boleto bancário, Pix e Checkout Pro.

> WARNING
>
> Importante
>
> Para oferecer a opção de pagamento Pix, você deve ter cadastrada uma chave Pix na conta do vendedor. Este dado é único, serve para identificar sua conta e permitirá que você utilize as funcionalidades do meio de pagamento.<br><br>
> [Conheça como criar uma chave Pix](https://www.mercadopago.com.br/stop/pix?url=https%3A%2F%2Fwww.mercadopago.com.br%2Fadmin-pix-keys%2Fmy-keys&authentication_mode=required)

------------

----[mla, mlm, mlc, mlu, mpe, mco]----
É o checkout em que seu **cliente finaliza o pagamento no ambiente da sua loja** sem ser redirecionado para outro site, onde possibilita processar pagamentos com cartão de crédito, débito e Checkout Pro.

------------

1. Acesse as [configurações de meios de pagamentos](https://lojavirtualnuvem.com.br/admin/payments/), no painel de administração de sua loja, localize o "Mercado Pago" na lista de meios de pagamentos e clique em "Editar".
2. No item "Tipo de integração" altere para "Processo de compra sem sair da loja".
3. Selecione quais os tipos de pagamento que deseja oferecer em seu checkout, sendo eles: Cartão de crédito, Boleto bancário e PIX.
4. Caso deseje que o pagamento com boleto bancário tenha desconto, informe a porcentagem de desconto no campo “Desconto para pagamentos com boleto”.
5. Clique em "Salvar alterações".
<p>&nbsp;</p>

![Payments Checkout Transparente - Nuvem Shop](/images/nuvemshop/nuvemshop_checkout_transparente_2.gif)


> NOTE
>
> Nota
>
> Ao instalar o Mercado Pago, todos os meios de pagamento estarão ativos por padrão.