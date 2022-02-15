# Processamento de vendas

Com todas as etapas concluídas, seus clientes poderão realizar compras em sua loja. Ao realizar uma transação, é comum que algumas mensagens retornem com informações específicas sobre a compra. Essas informações são disponibilizadas na seção **Notas do Pedido**, no painel do WooCommerce.

![Notas do pedido](/images/woocomerce/pt_order_notes_01.png)

Nesta seção, você terá acesso aos detalhes dos possíveis status e motivos de cada retorno.

## Status de pagamentos

Toda venda gera um status de pagamento que mostra a situação da venda incluindo a confirmação, pendência ou recusa do pagamento e outras informações importantes sobre a transação. 

Existem dois status em uma venda via WooCommerce: **status do pagamento** e **status do pedido**. Na tabela abaixo você tem acesso aos detalhes sobre como essas informações se correlacionam.

| Mercado Pago status (pagamento) | WooCommerce status (pedido) |
|---|---|
| Pending | Pending |
| Approved | Processing |
| Inprocess | On hold |
| Inmediation | On hold|
| Rejected | Failed |
| Cancelled | Cancelled |
| Refunded | Refunded |
| Chargedback| Refunded|

Para mais informações, acesse a seção [Atividades](https://www.mercadopago[FAKER][URL][DOMAIN]/activities) da sua conta do Mercado Pago e o [manual de pedidos do WooCommerce]( https://docs.woocommerce.com/document/como-gerenciar-pedidos/).

Além disso, é possível ter acesso aos detalhes de cada tentativa de pagamento que aconteceu em sua loja. Para isso, acesse o painel do WordPress, e depois clique em **WooCommerce > Pedidos > Detalhes do pedido**.

## Motivos de recusas

Com relação à **aprovação dos pagamentos** na sua loja, existem três principais motivos que podem impactar diretamente nesses resultados. 

Abaixo, detalhamos os fatores que influenciam na recusa de um pagamento:

| Motivo | Situação | Como evitar |
|---|---|---|
| Erros do comprador | Erros de preenchimento de dados de endereço, CPF ou cartão. | Checkout com informações claras no passo a passo da compra. |
| Recusas bancárias | Cartões com expiração da validade, falta de limite, saldo insuficiente ou desabilitado para compras online.| Oferecer alternativas para outros meios e/ou condições de pagamentos. | 
| Prevenção contra fraude | O sistema anti-fraude do Mercado Pago faz a proteção do seu negócio contra ataques maliciosos que podem gerar prejuízos. | Este tipo de recusa é benéfico para sua loja. |

> NEXT_STEP_CARD_PT
>
> FAQ
>
> Conheça as principais dúvidas sobre a integração.
>
> [FAQ](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/plugins/woocommerce/faq)
