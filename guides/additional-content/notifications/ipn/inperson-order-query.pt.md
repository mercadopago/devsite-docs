# Consulta do pedido

Para poder consultar o status do pedido por meio do `merchant_order`, você precisará fazer um GET usando o ID que você recebeu no servidor de notificações.

Em nossa [Referência de API](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/reference/merchant_orders/_merchant_orders_id/get) você obterá as informações necessárias sobre os parâmetros de solicitação e resposta.

> NOTE
>
> Nota
>
> Lembre-se que o campo `status` do `merchant_order` só será **closed** quando a soma dos pagamentos aprovados for igual ao total do pedido.

No pedido, dentro do objeto pagamento, você encontrará todos os pagamentos efetuados, sejam eles aprovados ou rejeitados. É importante obter a identificação dos pagamentos com status aprovado para poder fazer estornos/reembolsos.

## Obter um pagamento

Se você precisar de mais informações sobre os pagamentos, pode usar o ID de pagamento para obter uma resposta mais detalhada.

Em nossa [Referência de API](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/reference/payments/_payments_id/get) você obterá as informações necessárias sobre os parâmetros de solicitação e resposta.

