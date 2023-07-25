# Obter dados do pedido

Para consultar dados de um pedido, realize um GET enviando o `shipment_id` e o `access_token` (gerado pelo processo de autenticação do OAuth) ao endpoint [/proximity-integration/v1/orders/{shipmentId}](/developers/pt/reference/mp_delivery/_proximity-integrationorders_shipment_id/get). Veja [Segurança](/developers/pt/guides/additional-content/security/oauth/introduction) para mais informações sobre OAuth.

* **Merchant**: informações sobre o restaurante que recebeu o pedido.
* **Items**: descrição sobre os itens e adicionais do pedido.
* **OtherFees**: informações sobre taxas de envio e de operação.
* **Discounts**: descontos aplicados sobre o pedido.
* **Total**: valor total pago em um pedido.
* **Payments**: informações sobre a forma de pagamento de um pedido.
* **Customer**: dados sobre o comprador.
* **Delivery**: informações sobre o local da entrega.
* **Extension.status**: estado no qual o pedido se encontra.
  * **Pending**: estado inicial de um pedido. Significa que o pedido está sendo criado e posteriormente será manuseado.
  * **Handling**: o pedido está sendo montado e aguardando alguma resposta do sistema como, por exemplo, a conclusão do pagamento por parte do cliente.
  * **Ready_to_ship**: este estado possui dois subestados que denotam que um pedido está passível de ser entregue (por ter sido recebido e pode ser aceito ou porque foi aceito e pode ser impresso).
  * **Shipped**: pedido a caminho.
  * **Not_delivered**: pedido não foi entregue.
  * **Delivered**: pedido entregue.
  * **Cancelled**: pedido cancelado.
  <br/>
* **Extension.substatus**: subestado no qual o pedido se encontra. O subestado se relaciona diretamente com o estado. 
  * **Pending > creating_route**: rota do pedido sendo criada.
  * **Handling > null**: indicará o motivo pelo qual o pedido está aguardando o seu aceite.
  * **Ready_to_ship > ready_to_print**: aguardando a aceitação do pedido.
  * **Ready_to_ship > printed**: pedido aceito e impresso.
  * **Out_for_delivery**: pedido saiu para entrega. 
  * **Delivery_failed**: entrega não concluída.