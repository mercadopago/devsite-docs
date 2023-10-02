# Checkout Pro
 
Al instalar [Checkout Pro](/developers/es/docs/checkout-pro/landing), puede haber un **aumento en la tasa de aprobación de las ventas en la tienda en línea**. Esto sucede porque los compradores podrán pagar con una cuenta de Mercado Pago y todo el proceso de compra se realizará en nuestro entorno, lo que facilita el pago. Al final de la transacción, estos compradores son redirigidos al entorno de la tienda.
 
Para integrar Checkout Pro, sigue los pasos a continuación.
 
1. En el Panel Administrativo de tu Tiendanube, accede a **Mis aplicaciones > Ver todas las aplicaciones**. 
2. Localiza el plugin Mercado Pago en la lista de aplicaciones y haz clic en **Configurar aplicación**.
3. En la lista de métodos de pago, localiza el plugin Mercado Pago y haz clic en **Editar**.
4. Para configurar las experiencias de pago en tu tienda, haz clic en **Editar en el sitio de Mercado Pago**.
5. En el Checkout Mercado Pago, elige las formas de pago que quieres ofrecer en el entorno de pago de Mercado Pago, que pueden ser:
----[mla, mpe, mco, mlu, mlc]---- 
 * **Tarjeta de crédito**. Selecciona las tarjetas que deseas habilitar en tu tienda y elige también el **número máximo de cuotas permitidas para las compras a plazos**. 
 * **Tarjeta de débito**. Selecciona las tarjetas que desea habilitar en tu tienda. 
 * **Otros medios de pago**: selecciona otros medios de pago que deseas habilitar en tu tienda, como Financiación sin tarjeta (si, además, quieres mostrar esta opción en el checkout de tu tienda, consulta la [documentación](/developers/es/docs/nuvemshop/payments-configuration/mercado-credito)). Indica también, en el campo inferior, el **número de días de vencimiento del ticket** del medio de pago que lo requiera.

------------ 
----[mlm]---- 
 * **Tarjeta de crédito**. Seleccione las tarjetas que desea habilitar en su tienda y elige también el **número máximo de meses permitidos para las compras a plazos**. 
 * **Tarjeta de débito**. Seleccione las tarjetas que desea habilitar en su tienda. 
 * **Otros medios de pago**. Seleccione otros tipos de medios de pago que desee habilitar en su tienda, como Financiamiento sin tarjeta (si, además, quieres mostrar esta opción en el checkout de tu tienda, consulte la [documentación](/developers/es/docs/nuvemshop/payments-configuration/mercado-credito)), Paycash, OXXO, entre otros. Indique también, en el campo inferior, el **número de días de vencimiento del ticket** del medio de pago que lo requiera.

------------
----[mlb]---- 
 * **Tarjeta de crédito**. Seleccione las tarjetas que desea habilitar en su tienda y elige también el **número máximo de cuotas permitidas para las compras a plazos**. 
 * **Tarjeta de débito**. Seleccione las tarjetas que desea habilitar en su tienda. 
 * **Otros medios de pago**: seleccione otros tipos de medios de pago que desee habilitar en su tienda, como Pix, Financiación sin tarjeta (si, además, quieres mostrar esta opción en el checkout de tu tienda, consulte la [documentación](/developers/es/docs/nuvemshop/payments-configuration/mercado-credito)), boleto bancario (indique también, en el campo inferior, el **número de días de vencimiento del boleto**), entre otros. La opción de pago Pix solo se mostrará si existe una clave Pix registrada en Mercado Pago. Si aún no lo ha creado, consulte el [video](https://www.youtube.com/watch?v=60tApKYVnkA) y vea el paso a paso.

------------ 
6. Finalmente, haz clic en **Guardar cambios**.

----[mlb]---- 
<center>

![Payments Checkout Pro - Nuvemshop](/images/nuvemshop/cho-pro-all-es.gif)

</center>
------------
----[mlm, mla, mpe, mco, mlu, mlc]---- 
<center>

![Payments Checkout Pro - Nuvemshop](/images/nuvemshop/cho-pro-mlm-es.gif)

</center>
------------

¡Listo! Checkout Pro está listo para recibir pagos de tu tienda.