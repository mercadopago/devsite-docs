# Configurar pagos con Checkout Transparente 

Con el [Checkout Transparente](/developers/es/guides/checkout-api/landing), todo el proceso de pago se realizará dentro del entorno de la tienda en línea, sin necesidad de redirigir a una página externa. Además de permitir un mayor control en el proceso de personalización e integración, el checkout ofrece una estructura completa para el procesamiento de pagos con los principales medios disponibles en el mercado.

Al integrar el Checkout Transparente de Mercado Pago a tu tienda, los medios de pago disponibles serán: **tarjetas de crédito**, **boleto bancário** y **Pix** (transferencia bancaria disponible las 24 horas).

Para integrar el checkout a tu tienda en Yampi, sigue los siguientes pasos.

1. En la pantalla de **administración de los gateways de pago**, localiza el método de pago que deseas usar o editar y haz clic en **Visualizar**.
2. En la pantalla de **administración del medio de pago seleccionado**, si aún no está indicado, selecciona la **afiliação** registrada para Mercado Pago.
3. Para algunos de los métodos de pago disponibles, también puede configurar algunos datos, como:
 
* **Boleto Bancário**: indicar un porcentaje de descuento para pagos realizados con comprobante bancario, informar el número de días a considerar para vencimiento y cancelación de comprobantes vencidos, además de insertar posibles instrucciones relacionadas con el medio de pago.
* **Pix**: indica un porcentaje de descuento para pagos realizados con Pix.
 
4. Haz clic en **Salvar** para completar la configuración.

¡Listo! Ya está listo el módulo de Mercado Pago para recibir pagos en línea de tu tienda en Yampi.

> NOTE
>
> Importante
>
> Para pagos con tarjetas de crédito, la configuración de cuotas e intereses debe verificarse directamente en su [panel de usuario de Mercado Pago](https://www.mercadopago.com.br/costs-section#from-section=menu). </br> <br/>
> </br> <br/>
> La opción de pago por Pix solo se mostrará si existe una Clave de Pix registrada en Mercado Pago. Si aún no las creaste, [haz clic aquí](https://www.youtube.com/watch?v=60tApKYVnkA) y consulta el paso a paso. Además, existe un límite al valor de Pix, establecido por el Banco Central de Brasil, que se puede mover durante el período nocturno (entre las 20:00 y las 06:00 horas) de R$ 1.000. Para el período diurno (entre las 6 am y las 8 pm), sin embargo, no hay límite de movimiento.