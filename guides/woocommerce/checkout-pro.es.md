# Checkout Pro

Al instalar [Checkout Pro](/developers/es/docs/checkout-pro/landing), puede haber un **aumento en la tasa de aprobación de las ventas en la tienda en línea**. Esto sucede porque los compradores podrán pagar con una cuenta de Mercado Pago y todo el proceso de compra se realizará en nuestro entorno, lo que facilita el pago. Al final de la transacción, estos compradores son redirigidos al entorno de la tienda.

## Activa y configura el método de pago

1. Para activar Checkout Pro, ve a la configuración del panel de WooCommerce (**WooCommerce > Mercado Pago**).
2. Haz clic en **3. Activa y configura los métodos de pago**.
3. En la opción "Tarjetas guardadas y dinero disponibile en Mercado Pago", haz clic en **Configurar**.
----[mlm, mla]----
![Activar y configurar](/images/woocomerce/cho-pro-active-configure-es.png)

------------
----[mlb]----
![Payments methods](/images/woocomerce/active-and-configure-pt-br.png)

------------
4. La opción "Activar checkout" permite habilitar o deshabilitar Checkout Pro en tu tienda. Para activarlo, haz clic en el interruptor.
5. En el campo **Título en el checkout de la tienda**, ingresa el nombre con el que este método de pago se identificará en la tienda. Por ejemplo, puedes llamarlo "Mercado Pago".

![Activar y configurar](/images/woocomerce/cho-pro-activate-title-es.png)

6. La opción **Convertir moneda** permite que el valor de la moneda configurada en WooCommerce sea compatible con el valor de la moneda que utilizas en Mercado Pago. Para activarlo, haz clic en el interruptor.
7. En la sección **Elige los métodos de pago aceptados en la tienda**, elige qué tipos y métodos de pago se aceptarán en la tienda a través de Checkout Pro, pudiendo ser:
----[mlb]----
    - **Tarjetas de débito y crédito**.
    - **Efectivo (saldo de cuenta de Mercado Pago o boleta bancaria)**.
    - **Transferencia bancaria (Pix y PEC)**. La opción de pago Pix solo se mostrará si existe una clave Pix registrada en Mercado Pago.
    - **Financiación sin tarjeta**. Configurando Checkout Pro, puedes ofrecer la opción de pagar en hasta 12 veces sin tarjeta. Si, además, quieres mostrar esta opción en el checkout de tu tienda, accede a la [documentación](/developers/es/docs/woocommerce/payments-configuration/mercado-credito).

![Activate and configure](/images/woocomerce/cho-pro-convert-payments-methods-pt.png)

------------
----[mla]----
    - **Tarjetas de débito y crédito**.
    - **Efectivo (saldo de cuenta de Mercado Pago)**.
    - **Transferencia bancaria**.
    - **Financiación sin tarjeta**. Configurando Checkout Pro, puedes ofrecer la opción de pagar en hasta 12 veces sin tarjeta. Si, además, quieres mostrar esta opción en el checkout de tu tienda, accede a la [documentación](/developers/es/docs/woocommerce/payments-configuration/mercado-credito).

![Activate and configure](/images/woocomerce/cho-pro-payments-methods-es-ar.png)

------------
----[mlm]----
    - **Tarjetas de débito y crédito**.
    - **Efectivo (saldo de cuenta de Mercado Pago)**.
    - **Transferencia bancaria**.
    - **Financiamiento sin tarjeta**. Configurando Checkout Pro, puedes ofrecer la opción de pagar en hasta 12 meses sin tarjeta. Si, además, quieres mostrar esta opción en el checkout de tu tienda, accede a la [documentación](/developers/es/docs/woocommerce/payments-configuration/mercado-credito).

![Activate and configure](/images/woocomerce/cho-pro-payments-methods-es-mx.png)

------------
----[mpe, mco, mlu, mlc]----
    - **Tarjetas de débito y crédito**.
    - **Efectivo (saldo de cuenta de Mercado Pago)**.
    - **Transferencia bancaria**.

> Para conocer qué tipos y métodos de pago se aceptan en cada país, consulta la [documentación](/developers/es/docs/sales-processing/payment-methods).

------------
8. En el campo **Plazos máximos**, selecciona el número máximo de cuotas que deseas ofrecer a tus clientes a través de Mercado Pago. Puedes optar por ofrecer entre 1 y 24 cuotas.

![Installments](/images/woocomerce/cho-pro-installment-es.png)

Para guardar los cambios en la configuración, haz clic en el botón **Finalizar configuración**.

### Configuraciones avanzadas

Puedes personalizar las opciones en la sección de configuraciones avanzadas del método de pago, brindando una experiencia más personalizada en la tienda. Para acceder a estas opciones, haz clic en el título **Configuraciones avanzadas** y se mostrarán las siguientes opciones:

- **Experiencia de pago**: elige si la experiencia de pago será dentro de la tienda o redirigiendo a los clientes al sitio de Mercado Pago.
- **Volver a la tienda**: desliza el botón para elegir si quieres que el cliente regrese a la tienda una vez que se complete el pago o si prefieres que su experiencia de compra termine en el sitio de Mercado Pago.
- **URL de éxito**: ingresa una URL personalizada de éxito para redirigir a los clientes una vez que hayan completado la compra.
- **URL de pago rechazado**: ingresa una URL personalizada para redirigir a los clientes si el pago ha sido rechazado.
- **URL de pago pendiente**: ingresa una URL personalizada para redirigir a los clientes si el pago está pendiente de aprobación.
- **Rechazo automático de pagos sin aprobación instantánea**: activa esta opción para rechazar automáticamente los pagos que no sean aprobados instantáneamente. Para activarlo, desliza el botón.
- **Descuento en los checkouts de Mercado Pago**: ingresa un valor porcentual de descuento para los clientes que paguen con este método de pago. Para activarlo, ingresa un porcentaje de descuento y marca la opción "Activar y mostrar esta información en el checkout de Mercado Pago".
- **Comisiones en los checkouts de Mercado Pago**: ingresa un valor porcentual adicional que desees cobrar como comisión a los clientes que elijan este método de pago. Para activarlo, ingresa un porcentaje de descuento y marca la opción "Activar y mostrar esta información en el checkout de Mercado Pago".

![Advanced settings](/images/woocomerce/cho-pro-advanced-settings-es.gif)

Para guardar los cambios en la configuración, haz clic en el botón **Finalizar configuración**.

Al concluir la compra, cuando los compradores eligen pagar con Mercado Pago, se muestra información que destaca las ventajas exclusivas de pagar con una cuenta de Mercado Pago, tales como:

----[mlb]----
* **Inicio de sesión fácil**: inicia sesión con el mismo correo electrónico y contraseña que Mercado Libre.
* **Paga más rápido y de muchas formas**: usa tarjetas guardadas, Pix o saldo disponible en la cuenta de Mercado Pago.
* **Protección de compra**: recupera tu dinero si el producto no se entrega.

<center>

![woo-chopro-es-mlb](/images/woocomerce/mlb-preview.png)

</center>
------------

----[mla]----
* **Paga más rápido**: usa tarjetas guardadas o saldo disponible en tu cuenta de Mercado Pago.
* **Cuotas**: pago a plazos con o sin tarjeta de crédito.
* **Soporte Mercado Pago**: recibe ayuda si tienes algún problema con tu compra.

<center>

![woo-chopro-es-mla](/images/woocomerce/mla-preview.png)

</center>
------------

----[mlm]----
* **Inicio de sesión fácil**: inicia sesión con el mismo correo electrónico y contraseña que Mercado Libre.
* **Paga más rápido y de diferentes formas**: usa tarjetas guardadas, efectivo, medios de pago offline o saldo disponible en tu cuenta de Mercado Pago.
* **Protección de compra**: recupera tu dinero si el producto no se entrega.

<center>

![woo-chopro-es-mlm](/images/woocomerce/mlm-preview.png)

</center>
------------

----[mpe, mco, mlu, mlc]----
* **Inicio de sesión fácil**: inicia sesión con el mismo correo electrónico y contraseña que Mercado Libre.
* **Paga más rápido**: usa efectivo o saldo disponible en tu cuenta de Mercado Pago.
* **Cuotas**: cuotas sin interés en bancos seleccionados.

<center>

![woo-chopro-es-all](/images/woocomerce/all-preview.png)

</center>
------------