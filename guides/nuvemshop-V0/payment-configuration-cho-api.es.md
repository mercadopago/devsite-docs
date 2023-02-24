# Configurar pagos con ----[mlb]---- Checkout Transparente ------------ ----[mla, mlm, mpe, mco, mlu, mlc]---- Checkout API ------------

----[mlb]----
Con el [Checkout Transparente](/developers/es/guides/checkout-api/landing), todo el proceso de pago se realizará dentro del entorno de la tienda en línea, sin necesidad de redirigir a una página externa. Además de permitir un mayor control en el proceso de personalización e integración, el checkout ofrece una estructura completa para el procesamiento de pagos con los principales medios disponibles en el mercado.

Para integrar Checkout Transparente, siga los pasos a continuación.

------------

----[mla, mlm, mpe, mco, mlu, mlc]----
Con el [Checkout API](/developers/es/guides/checkout-api/landing), todo el proceso de pago se realizará dentro del entorno de la tienda en línea, sin necesidad de redirigir a una página externa. Además de permitir un mayor control en el proceso de personalización e integración, el checkout ofrece una estructura completa para el procesamiento de pagos con los principales medios disponibles en el mercado.

Para integrar Checkout API, siga los pasos a continuación.

------------

1. En el Panel Administrativo de tu tienda Tiendanube, accede a las **Configuraciones > Métodos de pago**. 
2. Localiza el plugin Mercado Pago, haz clic en **Configurar** y, luego, en **Editar**.
3. Seleccione el **país de operación** y la **moneda** de su tienda.
4. En el campo "Tipo de integración", cambia a la opción **Proceso de compra sin dejar la tienda**.
5. Elige las formas de pago que quieres ofrecer en el entorno de pago de Mercado Pago, las cuales pueden ser:
 ----[mlb]---- 
 * **Tarjeta de crédito**.
 * **Boleto bancário** (o saldo de cuenta de Mercado Pago).
 * **Pix**. La opción de pago con Pix solo se mostrará si existe una chave Pix cadastrada en Mercado Pago. Si aún no las creaste, [haz clic aquí](https://www.youtube.com/watch?v=60tApKYVnkA) y consulta el paso a paso.
 ------------ 
----[mla, mlm, mpe, mco, mlu, mlc]---- 
 * **Tarjeta de crédito**.
 * **Redes de pago en efectivo**.
  ------------
6. Si deseas aplicar un monto mínimo de cuotas para pagos con Checkout Transparente, informa el monto en el campo "Cuotas". 
----[mla, mlb, mpe, mco, mlu, mlc]---- 
7. Si bien Tiendanube utiliza **información de pago en cuotas directamente desde tu cuenta de Mercado Pago**, en el campo "Cuotas" puedes aplicar un monto mínimo de cuotas para el pago.
------------
----[mlm]---- 
7. Si bien Tiendanube utiliza **información de pago en meses directamente desde tu cuenta de Mercado Pago**, en el campo "Meses" puedes aplicar un monto mínimo de cuotas para el pago.
------------
8. Finalmente, haz clic en **Guardar cambios**.

----[mla, mlb, mpe, mco, mlu, mlc]---- 
> Si hiciste cambios, ten en cuenta que se van a ver reflejados en tu tienda en las próximas 24 hs. <br/></br>
> <br/></br>
> Para **sincronizar tus configuraciones manualmente**, accede al "Panel Administrativo" de tu tienda, ve a **Configuración > Métodos de Pago > Mercado Pago**, haz clic en **Editar** y, en el ítem "Cuotas", haz clic en **Reflejar ahora**.

------------
----[mlm]---- 
> Tiendanube utiliza la configuración de **financiación de tu cuenta de Mercado Pago**. Si hiciste cambios, ten en cuenta que se van a ver reflejados en tu tienda en las próximas 24 hs. <br/></br>
> <br/></br>
> Para **sincronizar tus configuraciones manualmente**, accede al "Panel Administrativo" de tu tienda, ve a **Configuración > Métodos de Pago > Mercado Pago**, haz clic en **Editar** y, en el ítem "Meses", haz clic en **Reflejar ahora**.
------------

----[mla, mlm, mpe, mco, mlu, mlc]---- 
¡Listo! El Checkout API está listo para recibir pagos de tu tienda.

------------
----[mlb]---- 
¡Listo! El Checkout Transparente está listo para recibir pagos de tu tienda.

------------