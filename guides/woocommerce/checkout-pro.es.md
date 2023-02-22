# Configurar pagos con Checkout Pro

Al instalar [Checkout Pro](/developers/es/docs/checkout-pro/landing), puede haber un **aumento en la tasa de aprobación de las ventas en la tienda en línea**. Esto sucede porque los compradores podrán pagar con una cuenta de Mercado Pago y todo el proceso de compra se realizará en nuestro entorno, lo que facilita el pago. Al final de la transacción, estos compradores son redirigidos al entorno de la tienda.

Al concluir la compra, cuando los compradores eligen pagar con Mercado Pago, se muestra información que destaca las ventajas exclusivas de pagar con una cuenta de Mercado Pago, tales como:

----[mlb]----
* **Inicio de sesión fácil**: inicia sesión con el mismo correo electrónico y contraseña que Mercado Libre.
* **Paga más rápido y de muchas formas**: usa tarjetas guardadas, Pix o saldo disponible en la cuenta de Mercado Pago.
* **Protección de compra**: recupera tu dinero si el producto no se entrega.

<center>

![woo-chopro-es-mlb](/images/woocomerce/woo-chopro-es-mlb.png)

</center>
------------

----[mla]----
* **Paga más rápido**: usa tarjetas guardadas o saldo disponible en tu cuenta de Mercado Pago.
* **Cuotas**: pago a plazos con o sin tarjeta de crédito.
* **Soporte Mercado Pago**: recibe ayuda si tienes algún problema con tu compra.

<center>

![woo-chopro-es-mla](/images/woocomerce/woo-chopro-es-mla.png)

</center>
------------

----[mlm]----
* **Inicio de sesión fácil**: inicia sesión con el mismo correo electrónico y contraseña que Mercado Libre.
* **Paga más rápido y de diferentes formas**: usa tarjetas guardadas, efectivo, medios de pago offline o saldo disponible en tu cuenta de Mercado Pago.
* **Protección de compra**: recupera tu dinero si el producto no se entrega.

<center>

![woo-chopro-es-mlm](/images/woocomerce/woo-chopro-es-mlm.png)

</center>
------------

----[mpe, mco, mlu, mlc]----
* **Inicio de sesión fácil**: inicia sesión con el mismo correo electrónico y contraseña que Mercado Libre.
* **Paga más rápido**: usa efectivo o saldo disponible en tu cuenta de Mercado Pago.
* **Cuotas**: cuotas sin interés en bancos seleccionados.

<center>

![woo-chopro-es-all](/images/woocomerce/woo-chopro-es-all.png)

</center>
------------

## Configurar el medio de pago

1. Para activar el checkout, deberás hacer clic en el botón slider.
2. En el campo **Título en el checkout de la tienda** puedes elegir el nombre con el que se mostrará este medio de pago en la tienda. Por ejemplo, puedes nombrarlo **Mercado Pago**.
3. La opción **Convertir moneda** permite que el valor de la moneda configurada en WooCommerce sea compatible al valor de la moneda que usas en Mercado Pago. Si deseas activarla, solo debes hacer clic en el botón slider. 
4. En **Elige los medios de pago que se aceptan en la tienda** podrás escoger qué medios de pago aceptarás en la tienda a través del Checkout Pro de Mercado Pago. Estos pueden ser:
----[mlb]----
    - **Tarjetas de débito y crédito**.
    - **Efectivo (saldo de cuenta de Mercado Pago o boleta bancaria)**.
    - **Transferencia bancaria (Pix y PEC)**. La opción de pago Pix solo se mostrará si existe una clave Pix registrada en Mercado Pago.
    - Financiación sin tarjeta: configurando Checkout Pro, puedes ofrecer la opción de pagar en hasta 12 veces sin tarjeta. Si, además, quieres mostrar esta opción en el checkout de tu tienda, haz clic [aquí](/developers/es/docs/woocommerce/payments-configuration/mercado-credito).
------------
----[mla, mlm]----
    - **Tarjetas de débito y crédito**.
    - **Efectivo (saldo de cuenta de Mercado Pago)**.
    - **Transferencia bancaria**.
    - Financiación sin tarjeta: configurando Checkout Pro, puedes ofrecer la opción de pagar en hasta 12 veces sin tarjeta. Si, además, quieres mostrar esta opción en el checkout de tu tienda, haz clic [aquí](/developers/es/docs/woocommerce/payments-configuration/mercado-credito).
------------
----[mpe, mco, mlu, mlc]----
    - **Tarjetas de débito y crédito**.
    - **Efectivo (saldo de cuenta de Mercado Pago)**.
    - **Transferencia bancaria**.
------------
5. En el campo **Máximo de cuotas** puedes elegir cuántas cuotas quieres ofrecer a los clientes a través de Mercado Pago. Puedes escoger entre 1 y 24 cuotas. 

Para guardar los cambios en la configuración, haz clic en el botón **Guardar cambios**.

## Configuración avanzada

Si lo deseas, puedes cambiar las opciones en la configuración avanzada del medio de pago para ofrecer una experiencia más personalizada en la tienda. Para acceder a estas opciones, haz clic sobre el titular **Configuración Avanzada** y se desplegarán las opciones que describimos aquí debajo: 

- **Experiencia de pago**: esta opción permite elegir si la experiencia de pago será dentro de la tienda o redireccionando a los clientes al sitio de Mercado Pago.
- **Volver a la tienda**: haz clic en el botón slider para elegir si deseas que el cliente vuelva a la tienda una vez finalizado el pago o si prefieres que su experiencia de compra termine en el sitio de Mercado Pago.
- **URL de éxito**: este campo te permite colocar una URL personalizada de éxito a donde podrás redirigir a los clientes una vez que finalicen su compra. 
- **URL de pago rechazado**: esta opción te permite colocar una URL personalizada a donde podrás redirigir a los clientes en caso de que el pago haya sido rechazado. 
- **URL de pago pendiente**: este campo permite colocar una URL personalizada a la que los clientes serán redirigidos en caso de que su pago esté pendiente de aprobación.
- **Rechazo automático de pagos sin aprobación instantánea**: activa esta opción con el botón slider para rechazar automáticamente los pagos que nos aprobados instantáneamente. 
- **Descuento en los checkouts de Mercado Pago**: permite elegir un valor porcentual de descuento que quieras ofrecer a los clientes por pagar utilizando este medio de pago. Para activarlo, deberás colocar un porcentaje y seleccionar el botón _Activar y mostrar esa información en el checkout de Mercado Pago_.
- **Comisiones en los checkout de Mercado Pago**: permite elegir un valor porcentual adicional que quieras cobrar como comisión a los clientes que eligan este medio de pago. Para activarlo, deberás colocar un porcentaje y seleccionar el botón _Activar y mostrar esa información en el checkout de Mercado Pago_.

Para guardar los cambios en la configuración, haz clic en el botón **Guardar cambios**.

