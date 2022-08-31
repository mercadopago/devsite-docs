# Casos para validar o QR Dinâmico

|Caso|Resultado esperado|Observações|
|---|---|---|
|Escaneamento de QR. O usuário escaneia um código QR válido após a realização e criação do pedido.| O app mostra a tela de pagamento.| Verifique o valor na tela de pagamento.|
|Pagamento aprovado. O usuário realiza um pagamento aprovado.|O sistema de Ponto de Venda recebe as informações de um pagamento aprovado.| [Verifique o recebimento de Notificações](/developers/pt/docs/qr-code/additional-content/notifications/Introduction)|
|Pagamento recusado. O usuário realiza um pagamento recusado.|O sistema de Ponto de Venda recebe as informações de um pagamento recusado e continua esperando que o pedido seja pago.|O `status` da `merchant_order` deve ser opened.|
|Segunda tentativa de pagamento. O usuário primeiro faz um pagamento recusado e depois um pagamento aprovado.| O sistema de Ponto de Venda recebe as informações de um pagamento recusado e depois as de um pagamento aprovado.| Não elimine o pedido após um pagamento recusado.|
|Devolução do pagamento. Uma devolução é realizada desde o Ponto de Venda.|O reembolso ou estorno impacta na conta do comprador.| [Ver Reembolsos e cancelamentos](/developers/pt/docs/qr-code/additional-content/cancellations-and-refunds)|
|Expiração do pedido. O usuário tenta pagar após a expiração do QR.|O pedido é excluído, portanto, ao escanear o QR é exibida a tela de erro.|Tente escanear o QR após a expiração do `expiration_date`|