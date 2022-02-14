# Configuração

A **integração de pagamento com QR code** utiliza o objeto `merchant_order`, que é a identificação do pedido a partir de cada leitura realizada ao QR.

Nas notificações IPN em pagamentos presenciais, o campo `status` da `merchant_order` permanecerá com status **opened** até que sejam identificados pagamentos aprovados e o valor de pagamento seja igual ou superior ao total da ordem.

Dentro da ordem, no objeto de payments, você encontrará todos os pagamentos realizados, seja ele aprovado ou rejeitado. É importante obter o ID dos pagamentos com status **approved** para poder realizar estornos/devoluções.

Por cada escaneamento do QR é gerada uma `merchant_order` diferente. Lembre que caso o cliente faça mais de um escaneamento, uma ordem ficará em **opened** por tempo indefinido e, para encerrar a transação, a `merchant_order` deve ter `status` = **closed**.

Para  receber as notificações dos eventos em sua plataforma, pode configurar previamente uma URL, que o Mercado PAgo tenha acesso, configure “notification_url” ao criar o pedido.

## Fluxo de notificações 

O processo de confirmação de pagamento é dividido em duas partes:

1. Eventos de notificação
2. Consulta da ordem
