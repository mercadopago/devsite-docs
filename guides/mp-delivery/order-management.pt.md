# Gerenciamento de pedidos

O gerenciamento de pedidos é feito através de APIs REST, com as quais você consegue realizar ações dependendo do status atual do pedido.

As alterações de status do pedido, desde o momento da criação até a conclusão da entrega serão notificadas via webhook contendo em seu body o `resource` e o `user_id`. 

O atributo `resource` retorna o `shipment_id` que será utilizado para qualquer operação envolvendo o pedido e o atributo `user_id` retorna a identificação do usuário da loja que recebeu o pedido.

Com o `shipment_id` em mãos, você consegue:

* Obter dados do pedido.
* Aceitar pedidos.
* Imprimir o comprovante do pedido.
* Cancelar o pedido.

Dentro do Mercado Pago Delivery existem duas modalidade de logistica. Dessa forma, o fluxo de estados pode variar de acordo com a modalidade de logistica que estará vinculado ao pedido. Abaixo segue a descrição desses dois fluxos.

## Diagrama do Fluxo de Estados - Modalidade de Logística Flex

![flowchart](/images/mpdelivery/flowchart_delivery_pt.png)

Essa modalidade de logistica é usada geralmente em restaurantes que possuem entregadores próprios. Os entregadores deverão ter acesso ao aplicativo de celular Mercado Envios Flex para realizar a leitura do código QR para registrar e realizar a entrega. Com a leitura desse código QR, os compradores serão notificados de que o pedido está a caminho.  É possível utilizar o código QR presente no pdf disponível na API ou  gerar o código QR em sua integração. As informações, que deverão estar contidas no código QR, podem ser obtidas através da API do Mercado Pago Delivery utilizando o endpoint de consulta, onde esses dados serão retornadas no atributo “extension.qr”. É importante que o código QR seja disponilizado no ticket do pedido para que o fluxo de entrega possa ser realizado corretamente. A seguir, segue a descrição dos status de todas as notificações que chegarão ao webhook de pedidos atrelados a essa modalidade de logistica:

  * **ready_to_ship/ready_to_print:** Status inicial de um pedido. Nesse Status, alguma ação deve ser realizada (aceitar ou cancelar) em no máximo 5 minutos, caso contrário o pedido será cancelado por timeout.
  * **cancelled/cancelled_manually:** Status indicando que uma operação de cancelamento foi executada no pedido.
  * **cancelled/time_expired:** Nesse Status, o pedido foi cancelado por timeout devido ao fato de não ter sido realizada nenhuma operação nos primeiros 5 minutos desde sua criação.
  * **ready_to_ship/printed:** Status que indica que o pedido foi aceito.
  * **shipped/out_for_delivery:** Status que indica que o pedido está a caminho do seu local de destino. Esse Status é gerado logo após o entregador realizar a leitura do código QR do pedido, utilizando o aplicativo Mercado Envios Flex.
  * **shipped/delivery_failed:** Status que indica que ocorreu algum problema durante a entrega do pedido. Esse é gerado através do aplicativo Mercado Envios Flex quando o entregado não consegue realizar a entrega.
  * **delivered:** A entrega foi concluida com sucesso. Esse Status é gerado através do aplicativo Mercado Envios Flex pelo entregador logo após a conclusão da entrega.


## Diagrama do Fluxo de Estados - Modalidade de Logistica Dropoff

![flowchart](/images/mpdelivery/flowchart-1_delivery_pt.png)

Essa modalidade de logistica é utilizada por restaurantes que concordaram que empresas logisticas, que estejam integradas com Mercado Pago, realizem a entrega dos pedidos. Nesse fluxo, logo após aceitar um pedido, será enviada uma notificação de que um entregador estará a caminho para receber o pedido. É importante notar que diferentemente do fluxo que foi falado anteriormente, nessa modalidade de Dropoff os pedidos não terão um código QR, e devido a isso, ao realizar uma consulta sobre o pedido utilizando a API do Mercado Pago Delivery, o atributo "extension.qr" será vazio. A seguir, segue a descrição dos status de todas as notificações que chegarão ao webhook de pedidos atrelados a essa modalide de logistica:
  
  * **ready_to_ship/ready_to_print:** Status inicial de um pedido. Nesse Status, alguma ação deve ser realizada (aceitar ou cancelar) em no máximo 5 minutos, caso contrário o pedido será cancelado por timeout.
  * **cancelled/cancelled_manually:** Status indicando que uma operação de cancelamento foi executada no pedido.
  * **cancelled/time_expired:** Nesse Status, o pedido foi cancelado por timeout devido ao fato de não ter sido realizada nenhuma operação nos primeiros 5 minutos desde sua criação.
  * **ready_to_ship/printed:** Status que indica que um pedido foi aceito.
  * **ready_to_ship/on_route_to_pickup:** Assim que um pedido for aceito, a empresa de logística será informada da necessidade de entregar o pedido. Desta forma, um entregador será enviado a caminho do restaurante, e esse status indica isso.
  * **ready_to_ship/picking_up:** O Status indica que o entregador chegou ao restaurante e está retirando o pedido.
  * **shipped/out_for_delivery:** Indica que o entregador já saiu para entregar o pedido.
  * **shipped/at_the_door:** Indica que o entregador chegou ao destino do pedido.
  * **delivered:** A entrega foi bem sucedida.
  * **not_delivered:** Houve um problema e o entregador não conseguiu concluir a entrega.


> PREV_STEP_CARD_PT
>
> Configuração da integração
>
> Saiba como configurar a integração com o Mercado Pago Delivery.
>
> [Configuração da integração](/developers/pt/docs/mp-delivery/integration-configuration)

> NEXT_STEP_CARD_PT
>
> Obter dados do pedido
>
> Saiba como obter dados de pedidos com o Mercado Pago Delivery.
>
> [Obter dados do pedido](/developers/pt/docs/mp-delivery/order-management/get-order-data)
