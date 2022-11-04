# Configuração de URLs e Eventos

Abaixo explicaremos como indicar as URLs que serão notificadas e como configurar os eventos dos quais se receberá a notificação.

![ipn](/images/notifications/ipn__pt.png)

1. Acesse a tela de [Notificações IPN](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/panel/notifications/ipn).
2. Em seguida, configure a **URL** de **produção** no qual serão recebidas as notificações.
3. Você também poderá experimentar e testar se a URL indicada está recebendo as notificações corretamente, podendo verificar a solicitação, a resposta dada pelo servidor e a descrição do evento.
4. Caso seja necessário identificar múltiplas contas, no final da URL indicada você poderá indicar o parâmetro `?cliente=(nomedovendedor) endpoint` para identificar os vendedores.
5. Selecione os **eventos** dos quais você receberá notificações em formato `json` utilizando `HTTP POST` para a URL especificada anteriormente. Notificamos eventos relacionados aos seus pedidos (`merchant_orders`), estornos recebidos (`chargebacks`), pagamentos recebidos (`payment`), tentativas de pagamento (`point_integration_ipn`) ou alertas de fraude (`delivery_cancellation`)

