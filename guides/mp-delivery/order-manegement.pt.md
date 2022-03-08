# Gerenciamento de pedidos

O gerenciamento de pedidos é feito através de APIs REST, com as quais você consegue realizar ações dependendo do status atual do pedido.

As alterações de status do pedido, desde o momento da criação até a conclusão da entrega serão notificadas via webhook contendo em seu body o resource e o `user_id`. 

O atributo resource retorna o `shipment_id` que será utilizado para qualquer operação envolvendo o pedido e o atributo `user_id` retorna a identificação do usuário da loja que recebeu o pedido.

Com o `shipment_id` em mãos, você consegue:

* Obter dados do pedido.
* Aceitar pedidos.
* Imprimir o comprovante do pedido.
* Cancelar o pedido.

> NEXT_STEP_CARD_PT
>
> Obter dados do pedido
>
> Saiba como obter dados de pedidos com o Mercado Pago Delivery.
>
> [Obter dados do pedido](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/mp-delivery/order-data)
