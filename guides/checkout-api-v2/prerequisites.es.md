# Requisitos previos

Para integrar Checkout API, es importante cumplir con los requisitos que se muestran a continuación.

| Requisito  | Descripción  |
| --- | --- |
| Aplicación  | Las aplicaciones son las diversas integraciones contenidas en una o varias tiendas. Puedes crear una aplicación para cada solución que implementes a fin de tener todo organizado y mantener un control que facilite la gestión. Consulta [Dashboard](/developers/es/docs/checkout-api/additional-content/dashboard/introduction) para obtener más información sobre cómo crear una aplicación. |
| Credenciales  | Las credenciales son claves únicas que te proporcionamos para que puedas configurar tus integraciones. Necesitarás un par de credenciales de prueba para probar la integración y un par de credenciales de producción para recibir pagos reales. Consulta [Credenciales](/developers/es/docs/checkout-api/additional-content/credentials) para más información.  |
| MercadoPago.js  | MercadoPago.js permite gestionar los datos de las tarjetas para cumplir con los requisitos de seguridad necesarios y evitar el envío de datos sensibles a sus servidores. Para eso, nuestra biblioteca genera un token que representa esta información y te permite operar de forma segura. Consulta [SDKs](/developers/es/docs/sdks-library/client-side/mp-js-v2) para acceder a MercadoPago.js.  |
----[mlb]---- | Clave Pix  | Si deseas ofrecer pagos a través de Pix, necesitas registrar las claves. Si aún no hiciste, [haz clic aquí](https://www.youtube.com/watch?v=60tApKYVnkA) para obtener más información sobre cómo registrarlas.  | ------------

Si se cumplen todos los requisitos previos, podrás realizar la integración de Checkout API.

