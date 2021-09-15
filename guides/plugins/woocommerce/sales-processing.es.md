# Procesamiento de ventas 

Completados todos los pasos, tus clientes podrán realizar compras en tu tienda. Al realizar una transacción, es común que algunos mensajes regresen con información específica sobre la compra. 

Esta información está disponible en la sección **Notas del pedido** en el panel de WooCommerce. 

![Notas del pedido](/images/woocomerce/es-notas-del-pedido.gif)

En esta sección, tendrás acceso a detalles del posible status y motivos de cada devolución.

## Status de pago

Cada venta genera un status de pago que muestra la situación de la venta, incluida la confirmación, el pendiente o recusa del pago y otras informaciones importantes sobre la transacción. 

Hay dos estados en una venta de WooCommerce: **status del pedido** y **status del pago**. En la siguiente tabla, tiene acceso a los detalles sobre cómo se correlaciona esta información.

| Mercado Pago status (pago) | WooCommerce status(pedido) |
|---|---|
| Pending | Pending |
| Approved | Processing |
| Inprocess | On hold |
| Inmediation | On hold|
| Rejected | Failed |
| Cancelled | Cancelled |
| Refunded | Refunded |
| Chargedback| Refunded|

Para obtener más información, acceda a la sección [Actividades](https://www.mercadopago.com.br/activities) de su cuenta de Mercado Pago y al [manual de pedidos de WooCommerce](https://docs.woocommerce.com/document/gestion-de-pedidos/).

Además, puede tener acceso a los detalles de cada intento de pago que ocurrió en su tienda. Para hacer esto, vaya al panel de WordPress y luego haga clic en **WooCommerce > Pedidos > Detalles del pedido**.

## Motivos de las recusas

En cuanto a la **aprobación de pagos** en su tienda, hay tres razones principales que pueden afectar directamente estos resultados. 

A continuación, detallamos los factores que influyen en la recusa de un pago:

| Motivo | Situación | Cómo evitar |
|---|---|---|
| Comprador | Errores en la cumplimentación de la dirección, CPF o datos de la tarjeta. | Checkout con información clara en el paso a paso de la compra. |
| Rechazos bancarios | Tarjetas con fecha de vencimiento, falta de límite, saldo insuficiente o inhabilitadas para compras online.| Ofrecer alternativas a otros medios y / o condiciones de pago.|
| Prevención del fraude | El sistema antifraude de Mercado Pago protege su negocio contra ataques maliciosos que pueden generar pérdidas.| Este tipo de rechazo es beneficioso para su tienda. |

Para obtener más información sobre las razones mencionadas anteriormente, visite los artículos:

* [Rechazos de pago](https://conteudo.mercadopago.com.br/entenda-como-funcionam-as-recusas-de-aprovacao-de-pagamentos-no-mercado-pago) 
* [Manejar las denegaciones de pago](https://conteudo.mercadopago.com.br/como-lidar-com-as-recusas-de-pagamento-do-cartao-de-credito-no-seu-e-commerce)

> LEFT_BUTTON_RECOMMENDED_ES
>
> FAQ
>
> Consulta las principales dudas sobre la integración.
>
> [FAQ](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/plugins/woocommerce/faq)