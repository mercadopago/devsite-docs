# Configurar os pagamentos com ----[mlb]---- Checkout Transparente ------------ ----[mla, mpe, mco, mlu, mlc]---- Checkout API ------------

----[mlb]----
Com o [Checkout Transparente](/developers/pt/docs/checkout-api/landing), todo o processo de finalização de compra acontecerá dentro do ambiente da loja online, sem a necessidade de redirecionamento para uma página externa. Além de permitir maior controle no processo de customização e integração, o checkout oferece uma estrutura completa para processamento de pagamentos com os principais meios disponíveis no mercado. 

> WARNING
>
> Importante
>
> Para oferecer a opção de pagamento Pix, você deve ter cadastrada uma chave Pix na conta do vendedor. Este dado é único, serve para identificar sua conta e permitirá que você utilize as funcionalidades do meio de pagamento. Caso ainda não tenha criado, [clique aqui](https://www.youtube.com/watch?v=60tApKYVnkA) e veja o passo a passo.

Para integrar o Checkout Transparente, siga os passos abaixo.

------------
----[mla, mpe, mco, mlu, mlc]----
Com o [Checkout API](/developers/pt/docs/checkout-api/landing), todo o processo de finalização de compra acontecerá dentro do ambiente da loja online, sem a necessidade de redirecionamento para uma página externa. Além de permitir maior controle no processo de customização e integração, o checkout oferece uma estrutura completa para processamento de pagamentos com os principais meios disponíveis no mercado.

Para integrar o Checkout API, siga os passos abaixo.

------------

1. Acesse as [configurações de meios de pagamentos](https://lojavirtualnuvem.com.br/admin/payments/), no painel de administração de sua loja, localize o "Mercado Pago" na lista de meios de pagamentos e clique em "Editar".
2. No item "Tipo de integração" altere para "Processo de compra sem sair da loja".
3. Selecione quais os tipos de pagamento que deseja oferecer em seu checkout, sendo eles: Cartão de crédito, Boleto bancário e PIX.
4. Caso deseje que o pagamento com boleto bancário tenha desconto, informe a porcentagem de desconto no campo “Desconto para pagamentos com boleto”.
5. Clique em "Salvar alterações".

![Payments Checkout Transparente - Nuvem Shop](/images/nuvemshop/nuvemshop_checkout_transparente_2.gif)

> NOTE
>
> Nota
>
> Ao instalar o Mercado Pago, todos os meios de pagamento estarão ativos por padrão.