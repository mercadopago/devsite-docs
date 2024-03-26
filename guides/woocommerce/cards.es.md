# Tarjetas

----[mlb]----
Este medio de pago adicionará Checkout Transparente, el medio de pago que te permitirá aceptar pagos con tarjetas de crédito y débito a través de Mercado Pago, sin necesidad de que el cliente salga de la tienda.

------------
----[mla, mlm, mpe, mco, mlu, mlc]----
Este medio de pago adicionará Checkout API, el medio de pago que te permitirá aceptar pagos con tarjetas de crédito y débito a través de Mercado Pago, sin necesidad de que el cliente salga de la tienda. 

------------

## Configura el método de pago

1. Para activar el Checkout, ve a la configuración del panel de WooCommerce (**WooCommerce > Mercado Pago**).
2. Haz clic en **3. Activa y configura los medios de pago**.
3. En la opción "Tarjeta de crédito y débito", haz clic en **Configurar**.
----[mla, mlm]----
![Activar y configurar](/images/woocomerce/cho-pro-active-configure-es.png)

------------
----[mlb]----
![Active and configure](/images/woocomerce/cho-pro-active-configure-pt.png)

------------
4. La opción "Activar checkout" te permite habilitar o deshabilitar el Checkout en tu tienda. Para activarlo, haz clic en el botón deslizante.
5. En el campo **Título en el checkout de la tienda**, ingresa el nombre con el que se identificará este método de pago en la tienda. Por ejemplo, puedes llamarlo **Tarjeta de crédito o débito**.

![Activar y título](/images/woocomerce/api-active-and-title-cards-es.png)

6. En el aviso sobre tarifas y financiamiento, haz clic en el botón **Configurar tarifas** para ser dirigido a tu cuenta de Mercado Pago. Allí, podrás establecer las tarifas de financiamiento y determinar si serán cobradas a la tienda o al comprador.

![Tarifas](/images/woocomerce/api-fees-warning-cards-es.png)

7. La opción **Convertir moneda** permite que el valor de la moneda configurada en WooCommerce sea compatible con el valor de la moneda que utilizas en Mercado Pago. Para activarlo, haz clic en el botón deslizante.
8. **Compras con tarjetas guardadas o saldo en Mercado Pago** es una funcionalidad para aquellos que tienen tarjetas guardadas o saldo en su cuenta de Mercado Pago, pudiendo comprar sin necesidad de completar datos. Esta opción mostrará un botón especial en tu cuenta y dirigirá a los clientes al checkout de Mercado Pago para completar la transacción. Si deseas ofrecerlo, actívalo con el botón deslizante.

![Convertir y cuenta MP](/images/woocomerce/api-convert-and-mp-account-es.png)

Para guardar los cambios en la configuración, haz clic en el botón **Concluir configuración**.

### Configuraciones avanzadas

Es posible personalizar las opciones en la sección de configuraciones avanzadas del método de pago, proporcionando una experiencia más personalizada en la tienda. Para acceder a estas opciones, haz clic en el título **Configuraciones avanzadas** y se mostrarán las opciones descritas a continuación:

- **Rechazo automático de pagos sin aprobación instantánea**: activa esta opción para rechazar automáticamente los pagos que no son aprobados al instante. Para activarlo, haz clic en el botón deslizante.
- **Descuento en los checkouts de Mercado Pago**: ingresa un valor porcentual de descuento para los clientes que paguen con este método de pago. Para activarlo, ingresa un porcentaje de descuento y marca la opción "Activar y mostrar esta información en el checkout de Mercado Pago".
- **Comisión en los checkouts de Mercado Pago**: ingresa un valor porcentual adicional que desees cobrar como comisión a los clientes que elijan este método de pago. Para activarlo, ingresa un porcentaje de descuento y marca la opción "Activar y mostrar esta información en el checkout de Mercado Pago".

![Configuraciones avanzadas](/images/woocomerce/api-advanced-settings-cards-es.gif)

Para guardar los cambios en la configuración, haz clic en el botón **Concluir configuración**.