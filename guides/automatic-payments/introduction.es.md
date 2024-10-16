# Pagos automáticos

Esta documentación tiene como objetivo proporcionar todas las herramientas necesarias para realizar la integración de la solución de pagos sin la necesidad de utilizar el CVV (_Card Verification Value_) de la tarjeta para pagos recurrentes.

> WARNING
> 
> Atención
> 
> Esta documentación está destinada únicamente al uso interno del equipo, ya que es un producto exclusivo. Para obtener más detalles, comunícate con el equipo comercial o de integraciones.

----[mlb]----
Con los pagos sin CVV, es posible realizar cobros recurrentes (mensualidades escolares, cuentas de servicios públicos, etc.) con Mercado Pago, y tener la libertad de adaptar la solución de la forma más óptima para tu negocio. La preaprobación solo está disponible a través del checkout personalizado, es decir, mediante el uso de [Checkout Transparente](/developers/es/docs/checkout-api/landing) o [Checkout Bricks](/developers/es/docs/checkout-bricks/landing).

------------
----[mla, mlm, mpe, mco, mlu, mlc]----
Con los pagos sin CVV, es posible realizar cobros recurrentes (mensualidades escolares, cuentas de servicios públicos, etc.) con Mercado Pago, y tener la libertad de adaptar la solución de la forma más óptima para tu negocio. La preaprobación solo está disponible a través del checkout personalizado, es decir, mediante el uso de [Checkout API](/developers/es/docs/checkout-api/landing) o [Checkout Bricks](/developers/es/docs/checkout-bricks/landing).

------------

Además, el vendedor debe cumplir con las siguientes políticas de integración de Mercado Pago:

- Debe comunicar de manera clara e inequívoca a su base de usuarios o clientes que la plataforma de pago en su sitio web es proporcionada por Mercado Pago, indicando también los plazos, fechas y valores de los pagos recurrentes.

- En caso de que los usuarios o clientes existentes del vendedor estén siendo migrados a la plataforma de pagos recurrentes de Mercado Pago, el vendedor debe comunicarlo por escrito, indicando que Mercado Pago procesará los pagos y que en la factura el cargo se verá como "Mercado Pago" o "Mercado Libre".

> En el caso de tarjetas de crédito **Master** y **Amex**, el cargo en la factura aparecerá como` MP*&ltbrand_name&gt`, donde `&ltbrand_name&gt` es el nombre configurado en la cuenta de Mercado Pago del vendedor, que puede ser modificado accediendo a [Menu > Configuracion > Nombre de mi negocio.](https://www.mercadopago[FAKER][URL][DOMAIN]/business#from-section=menu) Por este motivo, para estas banderas, recomendamos el mensaje "En su factura, verá el cargo como `MP*&ltbrand_name&gt`", reemplazando `&ltbrand_name&gt` por el nombre del negocio.