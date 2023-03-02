# Configurar pagos con Checkout Pro (Checkout Mercado Pago)
 
Al instalar [Checkout Pro](/developers/es/docs/checkout-pro/landing), puede haber un **aumento en la tasa de aprobación de las ventas en la tienda en línea**. Esto sucede porque los compradores podrán pagar con una cuenta de Mercado Pago y todo el proceso de compra se realizará en nuestro entorno, lo que facilita el pago. Al final de la transacción, estos compradores son redirigidos al entorno de la tienda.

Al concluir la compra, cuando los compradores eligen pagar con Mercado Pago, se muestra información que destaca las ventajas exclusivas de pagar con una cuenta de Mercado Pago, tales como:

----[mlb]----
* **Inicio de sesión fácil**: inicia sesión con el mismo correo electrónico y contraseña que Mercado Libre.
* **Paga más rápido y de muchas formas**: usa tarjetas guardadas, Pix o saldo disponible en la cuenta de Mercado Pago.
* **Protección de compra**: recupera tu dinero si el producto no se entrega.

<center>

![woo-chopro-es-mlb](/images/nuvemshop/nuvemshop-chopro-es-mlb.png)

</center>
------------

----[mla]----
* **Paga más rápido**: usa tarjetas guardadas o saldo disponible en tu cuenta de Mercado Pago.
* **Cuotas**: pago a plazos con o sin tarjeta de crédito.
* **Soporte Mercado Pago**: recibe ayuda si tienes algún problema con tu compra.

<center>

![woo-chopro-es-mla](/images/nuvemshop/nuvemshop-chopro-es-mla.png)

</center>
------------

----[mlm]----
* **Inicio de sesión fácil**: inicia sesión con el mismo correo electrónico y contraseña que Mercado Libre.
* **Paga más rápido y de diferentes formas**: usa tarjetas guardadas, efectivo, medios de pago offline o saldo disponible en tu cuenta de Mercado Pago.
* **Protección de compra**: recupera tu dinero si el producto no se entrega.

<center>

![woo-chopro-es-mlm](/images/nuvemshop/nuvemshop-chopro-es-mlm.png)

</center>
------------

----[mpe, mco, mlu, mlc]----
* **Inicio de sesión fácil**: inicia sesión con el mismo correo electrónico y contraseña que Mercado Libre.
* **Paga más rápido**: usa efectivo o saldo disponible en tu cuenta de Mercado Pago.
* **Cuotas**: cuotas sin interés en bancos seleccionados.

<center>

![woo-chopro-es-all](/images/nuvemshop/nuvemshop-chopro-es-all.png)

</center>
------------
 
Para integrar Checkout Pro, siga los pasos a continuación.
 
1. En el Panel Administrativo de tu tienda Tiendanube, accede a **Potenciar > Mis aplicaciones**. 
2. Localiza el plugin Mercado Pago en la lista de aplicaciones y haz clic en **Configurar aplicación**.
3. En la lista de métodos de pago, localiza el plugin Mercado Pago, haz clic en **Configurar** y, luego, en **Editar**.
4. Para aplicar un monto mínimo de cuotas para los pagos, informa el monto en el campo disponible. 
----[mla, mlm, mpe, mco, mlu, mlc]---- 
5. Si deseas aplicar descuentos para pagos con Checkout transparente (Checkout API), **informa la percentage** para pagos en efectivo y tarjetas (crédito y débito).
------------
----[mlb]---- 
5. Si deseas aplicar descuentos para pagos con Checkout transparente, **informa la percentage** para pagos en boleto, tarjeta de crédito y Pix.
------------
6. Si deseas aplicar descuentos para pagos con Checkout externo (Checkout Pro / Checkout Mercado Pago), **informa la percentage** en el campo disponible.
7. Para configurar las experiencias de pago de su tienda, haz clic en **Editar en el sítio de Mercado Pago**.
8. En el Checkout Mercado Pago, elige las formas de pago que quieres ofrecer en el entorno de pago de Mercado Pago, las cuales pueden ser:
----[mla, mpe, mco, mlu, mlc]---- 
 * **Tarjeta de crédito**. Elige también el número máximo de cuotas permitidas.
 * **Tarjeta de débito**.
 * **Otros medios de pago**. Elige también el número de días para vencimiento del ticket (incluye sábado y domingo). 
------------ 
----[mlb]---- 
 * **Tarjeta de crédito**. Elige también el número máximo de cuotas permitidas.
 * **Tarjeta de débito**.
 * **Otros medios de pago**. Elige también el número de días para vencimiento del ticket (incluye sábado y domingo). Además, la opción de pago con Pix solo se mostrará si existe una chave Pix cadastrada en Mercado Pago. Si aún no las creaste, [haz clic aquí](https://www.youtube.com/watch?v=60tApKYVnkA) y consulta el paso a paso.
------------ 
----[mlm]---- 
 * **Tarjeta de crédito**. Elige también el número máximo de meses permitidos.
 * **Tarjeta de débito**.
 * **Otros medios de pago**. Elige también el número de días para vencimiento del ticket (incluye sábado y domingo).
------------
9. Finalmente, haz clic en **Guardar cambios**.

<center>

![Payments Checkout Pro - Nuvemshop](/images/nuvemshop/cho-pro-es.gif)

</center>

¡Listo! El Checkout Pro está listo para recibir pagos de tu tienda.