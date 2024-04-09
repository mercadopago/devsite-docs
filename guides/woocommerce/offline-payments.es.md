# ----[mlb]---- Boleto e lotérica ------------ ----[mla, mlm, mpe, mco, mlu, mlc]---- Efectivo------------

Este medio de pago adicionará----[mlb]---- Checkout Transparente ------------ ----[mla, mlm, mpe, mco, mlu, mlc]---- Checkout API ------------y te permitirá ofrecer pagos en efectivo utilizando medios de pago offline a través de Mercado Pago.

1. Para activar el Checkout, ve a la configuración del panel de WooCommerce (**WooCommerce > Mercado Pago**).
2. Haz clic en **3. Activa y configura los medios de pago**.
----[mlb]----
3. En la opción "Boleto y lotérica", haz clic en **Configurar**.

![Active and configure](woocomerce/cho-pro-active-configure-pt.png)

------------
----[mla, mlm, mpe, mco, mlu, mlc]----
3. En la opción "Efectivo", haz clic en **Configurar**.

![Activar y configurar](woocomerce/cho-pro-active-configure-es.png)

------------
4. La opción "Activar checkout" te permite habilitar o deshabilitar el Checkout en tu tienda. Para activarlo, haz clic en el botón deslizante.
5. En el campo **Título en el checkout de la tienda**, ingresa el nombre con el que se identificará este método de pago en la tienda. Por ejemplo, puedes llamarlo **Pago en efectivo**.
----[mlb]----
![Activar y título](woocomerce/api-active-boleto-pt-br.png)

------------
----[mla, mlm, mpe, mco, mlu, mlc]----
![Activar y configurar](woocomerce/api-active-efectivo-es.png)

------------
6. La opción **Convertir moneda** permite que el valor de la moneda configurada en WooCommerce sea compatible con el valor de la moneda que utilizas en Mercado Pago. Para activarlo, haz clic en el botón deslizante.
7. En la sección **Métodos de pago**, habilita qué métodos de pago en efectivo deseas ofrecer en la tienda. Puedes habilitar la opción "Todos los métodos de pago" o solo algunos.
8. En **Vencimiento del pago**, configura en cuántos días expirarán los pedidos con pago en efectivo.
----[mlb]----
![Convertir y métodos de pago](woocomerce/api-convert-and-payments-methods-boleto-pt-br.png)

------------
----[mla]----
![Convert and payments methods](woocomerce/api-convert-and-payments-methods-efectivo-es-ar.png)

------------
----[mlm]----
![Convert and payments methods](woocomerce/api-convert-and-payments-methods-efectivo-es-mx.png)
![Convert and payments methods 2](woocomerce/api-convert-and-payments-methods-efectivo-es-mx-2.png)

------------
----[mpe, mco, mlu, mlc]----
> Para conocer qué tipos y métodos de pago se aceptan en cada país, consulta la [documentación](/developers/es/docs/sales-processing/payment-methods).

------------
Para guardar los cambios en la configuración, haz clic en el botón **Finalizar configuración**.

### Configuraciones avanzadas

Es posible personalizar las opciones en la sección de configuraciones avanzadas del método de pago, proporcionando una experiencia más personalizada en la tienda. Para acceder a estas opciones, haz clic en el título **Configuraciones avanzadas** y se mostrarán las opciones descritas a continuación:

- **Reducir inventario**: activa la reducción de inventario durante la creación de un pedido, independientemente de la aprobación del pago. Desactiva esta opción solo cuando los pagos estén aprobados.
- **Descuentos en los checkouts de Mercado Pago**: ingresa un valor porcentual de descuento para los clientes que paguen con este método de pago. Para activarlo, ingresa un porcentaje de descuento y marca la opción "Activar y mostrar esta información en el checkout de Mercado Pago".
- **Comisiones en los checkouts de Mercado Pago**: ingresa un valor porcentual adicional que desees cobrar como comisión a los clientes que elijan este método de pago. Para activarlo, ingresa un porcentaje de descuento y marca la opción "Activar y mostrar esta información en el checkout de Mercado Pago".

![Advanced settings](woocomerce/advanced-settings-efectivo-es.gif)

Para guardar los cambios en la configuración, haz clic en el botón **Finalizar configuración**.