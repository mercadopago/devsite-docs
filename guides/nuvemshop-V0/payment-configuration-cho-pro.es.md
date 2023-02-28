# Configurar pagos con Checkout Pro
 
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
 
1. En el Panel Administrativo de tu tienda Tiendanube, accede a las **Configuraciones > Métodos de pago**. 
2. Localiza el plugin Mercado Pago, haz clic en **Configurar** y, luego, en **Editar**.
3. Seleccione el **país de operación** y la **moneda** de su tienda.
4. En el campo "Tipo de integración", cambia a la opción **Proceso de compra en el sitio de Mercado Pago**.
5. Elige las formas de pago que quieres ofrecer en el entorno de pago de Mercado Pago, las cuales pueden ser:
 ----[mlb]---- 
 * **Tarjeta de crédito**.
 * **Boleto bancário** (o saldo de cuenta de Mercado Pago).
 * **Pix**. La opción de pago con Pix solo se mostrará si existe una chave Pix cadastrada en Mercado Pago. Si aún no las creaste, [haz clic aquí](https://www.youtube.com/watch?v=60tApKYVnkA) y consulta el paso a paso.
 ------------ 
----[mla, mlm, mpe, mco, mlu, mlc]---- 
 * **Tarjeta de crédito**.
 * **Transferencia bancaria**.
 * **Redes de pago en efectivo**.
  ------------
6. Finalmente, haz clic en **Guardar cambios**.

----[mla, mlb, mpe, mco, mlu, mlc]---- 
> Tiendanube utiliza la configuración de **financiación de tu cuenta de Mercado Pago**. Si hiciste cambios, ten en cuenta que se van a ver reflejados en tu tienda en las próximas 24 hs. <br/></br>
> <br/></br>
> Para **sincronizar tus configuraciones manualmente**, accede al "Panel Administrativo" de tu tienda, ve a **Configuración > Métodos de Pago > Mercado Pago**, haz clic en **Editar** y, en el ítem "Cuotas", haz clic en **Reflejar ahora**.

------------
----[mlm]---- 
> Tiendanube utiliza la configuración de **financiación de tu cuenta de Mercado Pago**. Si hiciste cambios, ten en cuenta que se van a ver reflejados en tu tienda en las próximas 24 hs. <br/></br>
> <br/></br>
> Para **sincronizar tus configuraciones manualmente**, accede al "Panel Administrativo" de tu tienda, ve a **Configuración > Métodos de Pago > Mercado Pago**, haz clic en **Editar** y, en el ítem "Meses", haz clic en **Reflejar ahora**.
------------

¡Listo! El Checkout Pro está listo para recibir pagos de tu tienda.