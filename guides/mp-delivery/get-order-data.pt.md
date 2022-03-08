# Obter dados do pedido

Com o número do `shipment_id` presente no campo "resource" da notificação, é possível realizar um GET para consultar os dados do pedido cuja resposta contém as seguintes informações.

* **Shipping**: dados da entrega.
* **Status**: estado no qual o pedido se encontra.
  * **Pending**: estado inicial de um pedido. Significa que o pedido está sendo criado e posteriormente será manuseado.
  * **Handling**: o pedido está sendo montado e aguardando alguma resposta do sistema como, por exemplo, a conclusão do pagamento por parte do cliente.
  * **Ready_to_ship**: este estado possui dois subestados que denotam que um pedido está passível de ser entregue (por ter sido recebido e pode ser aceito ou porque foi aceito e pode ser impresso).
  * **Shipped**: pedido a caminho.
  * **Not_delivered**: pedido não foi entregue.
  * **Delivered**: pedido entregue.
  * **Cancelled**: pedido cancelado.
  <br/>
* **Substatus**: subestado no qual o pedido se encontra. O subestado se relaciona diretamente com o estado. 
  * **Pending > creating_route**: rota do pedido sendo criada.
  * **Handling > null**: indicará o motivo pelo qual o pedido está aguardando o seu aceite.
  * **Ready_to_ship > ready_to_print**: aguardando a aceitação do pedido.
  * **Ready_to_ship > printed**: pedido aceito e impresso.
  * **Out_for_delivery**: pedido saiu para entrega. 
  * **Delivery_failed**: entrega não concluída.
  <br/>
* **Orders**: dados do pedido.
* **Items**: dados dos itens do pedido.
* **Payments**: dados do pagamento
* **Stores**: dados da loja

> NEXT_STEP_CARD_PT
>
> Aceitar pedido
>
> Saiba como aceitar pedidos com o Mercado Pago Delivery.
>
> [Aceitar pedido](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/mp-delivery/accept-order)