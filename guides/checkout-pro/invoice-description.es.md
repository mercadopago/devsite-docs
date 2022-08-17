# Descripción de la factura

Descripción de la factura es una configuración que te permite definir el nombre del establecimiento que se mostrará en la factura del comprador. Esto permite la identificación del negocio y evita disputas innecesarias.

1. Envía un POST con el parámetro `statement_descriptor` al endpoint [/checkout/preferences](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/reference/preferences/_checkout_preferences/post).
2. En `statement_descriptor`, ingresa el nombre del establecimiento.
3. Ejecuta la solicitud.