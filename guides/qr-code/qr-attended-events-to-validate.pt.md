# Casos para validar QR Atendido

| Caso | Resultado esperado | Observações |
| --- | --- | --- |
| **Escaneamento prévio à criação do pedido**. O cliente escaneia um código QR válido antes de fazer o pedido.  | O app mostra a tela de espera.  | Verifique que `fixed_amount=true` no caixa. |
| **Escaneamento do QR**. O usuário escaneia um código QR válido após a criação do pedido. | O app mostra a tela de pagamento. | Verifique o valor na tela de pagamento. |
| **Pagamento aprovado**. O usuário realiza um pagamento aprovado. | O sistema de Ponto de Venda recebe as informações de um pagamento aprovado. | [Verifique o recebimento de notificações](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/notifications/ipn/introduction). |
| **Pagamento recusado**. O usuário realiza um pagamento recusado. | O sistema de Ponto de Venda recebe as informações de um pagamento recusado e continua esperando que o pedido seja pago.| O `status` da `merchant_order` deve ser **opened**. |
| **Segunda tentativa de pagamento***. O usuário primeiro faz um pagamento recusado e depois um pagamento aprovado. O sistema de Ponto de Venda recebe as informações de um pagamento recusado e depois as de um pagamento aprovado. | Não elimine o pedido após um pagamento recusado. |
| **Devolução de pagamento**. Uma devolução é realizada desde o Ponto de Venda. | O reembolso ou estorno impacta na conta do comprador. | [Ver reembolsos](/developers/es/docs/qr-code/additional-content/refunds). |
| Cancelar pedido**. O usuário muda de ideia e decide pagar em dinheiro. | O pedido é excluído, portanto, ao escanear o QR é exibida a tela de espera. | Elimine o pedido do caixa. |
