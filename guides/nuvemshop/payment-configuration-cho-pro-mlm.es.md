# Configurar pagos con Checkout Pro (Checkout Mercado Pago)
 
Al instalar [Checkout Pro](/developers/es/docs/checkout-pro/landing), puede haber un **aumento en la tasa de aprobación de las ventas en la tienda en línea**. Esto sucede porque los compradores podrán pagar con una cuenta de Mercado Pago y todo el proceso de compra se realizará en nuestro entorno, lo que facilita el pago. Al final de la transacción, estos compradores son redirigidos al entorno de la tienda.
 
Para integrar Checkout Pro, sigue los pasos a continuación.
 
1. En el Panel Administrativo de tu Tiendanube, accede a **Mis aplicaciones > Ver todas las aplicaciones**. 
2. Localiza el plugin Mercado Pago en la lista de aplicaciones y haz clic en **Configurar aplicación**.
3. En la lista de métodos de pago, localiza el plugin Mercado Pago y haz clic en **Editar**.
----[mla, mlb, mpe, mco, mlu, mlc]---- 
4. Para aplicar un "valor mínimo de cuotas" para los pagos, informa el monto en el campo disponible.

------------
----[mlm]---- 
4. Para aplicar un "valor mínimo de la mensualidad" para los pagos, informa el monto en el campo disponible.

------------
----[mla, mlm, mpe, mco, mlu, mlc]---- 
5. Si deseas aplicar descuentos para pagos con Checkout API, **informa el porcentaje** para pagos en efectivo y tarjetas (crédito y débito).

------------
----[mlb]---- 
5. Si deseas aplicar descuentos para pagos con Checkout Transparente, **informa el porcentaje** para pagos con boleto, tarjeta de crédito y Pix.

------------
6. Si deseas aplicar descuentos para pagos con Checkout externo (Checkout Pro / Checkout Mercado Pago), **informa el porcentaje** en el campo disponible.
7. Para configurar las experiencias de pago de su tienda, haz clic en **Editar en el sitio de Mercado Pago**.
8. En el Checkout Mercado Pago, elige las formas de pago que quieres ofrecer en el entorno de pago de Mercado Pago, las cuales pueden ser:
----[mla, mpe, mco, mlu, mlc]---- 
 * **Financiación sin tarjeta**: habilita el método de financiación de Mercado Pago, el "Mercado de Crédito, que ofrece la opción de pagar en mensualidades sin contar con una tarjeta. Con esta línea de crédito, administrada por Mercado Pago, el dinero se acredita en su totalidad en la cuenta del vendedor, mientras que el cliente puede optar por pagar en hasta 12 pagos fijos mensuales, sin necesidad de contar con una tarjeta. <br>
 * **Tarjeta de crédito**: seleccione las tarjetas que desea habilitar en su tienda y, después, elige también el **número máximo de cuotas permitidas para las compras a plazos**. <br>
 * **Tarjeta de débito**: seleccione las marcas que desea habilitar en su tienda. <br>
 * **Otros medios de pago**: seleccione otros tipos de medios de pago que desee habilitar en su tienda, por ejemplo, Oxxo y Santander y, después, indique también el **número de días para vencimiento del boleto (incluye sábado y domingo)**.

------------ 
----[mlb]---- 
 * **Financiación sin tarjeta**: habilita el método de financiación de Mercado Pago, el "Mercado de Crédito, que ofrece la opción de pagar en mensualidades sin contar con una tarjeta. Con esta línea de crédito, administrada por Mercado Pago, el dinero se acredita en su totalidad en la cuenta del vendedor, mientras que el cliente puede optar por pagar en hasta 12 pagos fijos mensuales, sin necesidad de contar con una tarjeta. <br>
 * **Tarjeta de crédito**: seleccione las tarjetas que desea habilitar en su tienda y, después, elige también el **número máximo de cuotas permitidas para las compras a plazos**. <br>
 * **Tarjeta de débito**: seleccione las marcas que desea habilitar en su tienda. <br>
 * **Otros medios de pago**: seleccione otros tipos de medios de pago que desee habilitar en su tienda, por ejemplo, Pix y boleto bancário y, después, indique también el **número de días para vencimiento del boleto (incluye sábado y domingo)**. La opción de pago Pix solo se mostrará si existe una clave Pix registrada en Mercado Pago. Si aún no lo ha creado, [haga clic aquí](https://www.youtube.com/watch?v=60tApKYVnkA) y vea el paso a paso.

------------ 
----[mlm]---- 
 * **Financiamiento sin tarjeta**.
 * **Tarjeta de crédito**. Elige también el número máximo de meses permitidos.
 * **Tarjeta de débito**.
 * **Otros medios de pago**. Elige también el número de días para vencimiento del ticket (incluye sábado y domingo).

 * **Financiamiento sin tarjeta**: habilita el método de financiación de Mercado Pago, el "Mercado de Crédito, que ofrece la opción de pagar en mensualidades sin contar con una tarjeta. Con esta línea de crédito, administrada por Mercado Pago, el dinero se acredita en su totalidad en la cuenta del vendedor, mientras que el cliente puede optar por pagar en hasta 12 pagos fijos mensuales, sin necesidad de contar con una tarjeta. <br>
 * **Tarjeta de crédito**: seleccione las tarjetas que desea habilitar en su tienda y, después, elige también el **número máximo de meses permitidas para las compras a plazos**. <br>
 * **Tarjeta de débito**: seleccione las marcas que desea habilitar en su tienda. <br>
 * **Otros medios de pago**: seleccione otros tipos de medios de pago que desee habilitar en su tienda, por ejemplo, Oxxo y Santander y, después, indique también el **número de días para vencimiento del boleto (incluye sábado y domingo)**.

------------
9. Finalmente, haz clic en **Guardar cambios**.

----[mla, mlb, mpe, mco, mlu, mlc]---- 
<center>

![Payments Checkout Pro - Nuvemshop](/images/nuvemshop/cho-pro-all-es.gif)

</center>
------------
----[mlm]---- 
<center>

![Payments Checkout Pro - Nuvemshop](/images/nuvemshop/cho-pro-mlm-es.gif)

</center>
------------

¡Listo! Checkout Pro está listo para recibir pagos de tu tienda.