# Configurar pagos con ----[mlb]---- Checkout Transparente ------------ ----[mla, mlm, mpe, mco, mlu, mlc]---- Checkout API ------------

----[mlb]----
Con el [Checkout Transparente](/developers/es/guides/checkout-api/landing), todo el proceso de pago se realizará dentro del entorno de la tienda en línea, sin necesidad de redirigir a una página externa. Además de permitir un mayor control en el proceso de personalización e integración, el checkout ofrece una estructura completa para el procesamiento de pagos con los principales medios disponibles en el mercado.

Para integrar Checkout Transparente, siga los pasos a continuación.

------------

----[mla, mlm, mpe, mco, mlu, mlc]----
Con el [Checkout API](/developers/es/guides/checkout-api/landing), todo el proceso de pago se realizará dentro del entorno de la tienda en línea, sin necesidad de redirigir a una página externa. Además de permitir un mayor control en el proceso de personalización e integración, el checkout ofrece una estructura completa para el procesamiento de pagos con los principales medios disponibles en el mercado.

Para integrar Checkout API, siga los pasos a continuación.

------------

1. En el Panel Administrativo de tu tienda Tiendanube, accede a **Mis aplicaciones > Ver todas las aplicaciones**. 
2. Localiza el plugin Mercado Pago en la lista de aplicaciones y haz clic en **Configurar aplicación**.
3. En la lista de métodos de pago, localiza el plugin Mercado Pago, haz clic en **Configurar** y, luego, en **Editar**.
----[mla, mlb, mpe, mco, mlu, mlc]---- 
4. Para aplicar un "valor mínimo de cuotas" para los pagos, informa el monto en el campo disponible.
------------
----[mlm]---- 
4. Para aplicar un "valor mínimo de la mensualidad" para los pagos, informa el monto en el campo disponible.
------------
5. Si deseas aplicar descuentos para pagos con Checkout transparente (Checkout API), **informa la percentage** para pagos en efectivo y tarjetas (crédito y débito).
------------
----[mlb]---- 
5. Si deseas aplicar descuentos para pagos con Checkout transparente, **informa el porcentaje** para pagos en boleto, tarjeta de crédito y Pix.
------------
6. Si deseas aplicar descuentos para pagos con Checkout externo (Checkout Pro / Checkout Mercado Pago), **informa el porcentaje** en el campo disponible.
7. Para configurar las experiencias de pago de tu tienda, haz clic en **Editar en el sitio de Mercado Pago**.
8. En  ----[mlb]---- Checkout Transparente ------------ ----[mla, mlm, mpe, mco, mlu, mlc]---- Checkout API ------------, elige las formas de pago que quieres ofrecer en el entorno de pago de Mercado Pago, las cuales pueden ser:
----[mlb]---- 
* **Pix**. Elige también la fecha de vencimiento para pago con código Pix. Además, la opción de pago con Pix solo se mostrará si existe una chave Pix cadastrada en Mercado Pago. Si aún no las creaste, [haz clic aquí](https://www.youtube.com/watch?v=60tApKYVnkA) y consulta el paso a paso.
* **Tarjeta de crédito**. Elige también el número máximo de cuotas permitidas.
* **Boleto bancário**. Elige también el número de días para vencimiento del boleto.
 
------------ 
----[mla, mpe, mco, mlu, mlc]---- 
* **Tarjeta de crédito**. Elige también el número máximo de cuotas permitidas.
* **Tarjeta de débito**.
* **Redes de pago en efectivo**. Elige también el número de días para vencimiento del ticket (incluye sábado y domingo).
------------
----[mlm]---- 
* **Tarjeta de crédito**. Elige también el número máximo de meses permitidos.
* **Tarjeta de débito**. Elige también el número máximo de meses permitidos.
* **Redes de pago en efectivo**. Elige también el número de días para vencimiento del ticket (incluye sábado y domingo).
------------
9. Finalmente, haz clic en **Guardar configuraciones**.

----[mla, mlb, mpe, mco, mlu, mlc]---- 
</center>

![Payments Checkout API - Nuvemshop](/images/nuvemshop/cho-api-all-es.gif)

</center>
------------
----[mlm]---- 
</center>

![Payments Checkout API - Nuvemshop](/images/nuvemshop/cho-api-mlm-es.gif)

</center>
------------
----[mla, mlm, mpe, mco, mlu, mlc]---- 
¡Listo! El Checkout API está listo para recibir pagos de tu tienda.

------------
----[mlb]---- 
¡Listo! El Checkout Transparente está listo para recibir pagos de tu tienda.

------------