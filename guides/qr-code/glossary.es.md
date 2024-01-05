# Glosario

Sabemos que algunos términos son nuevos. Antes de empezar, te los dejamos a mano. 

| Término | Descripción |
| --- | --- |
| Credenciales (Credentials) | Tus credenciales son las claves que te proporcionamos para que puedas configurar tus integraciones. Para poder encontrarlas, ve a tus [credenciales](/developers/es/docs/qr-code/additional-content/your-integrations/credentials) y selecciona las productivas. |
| `ACCESS_TOKEN` | Es la clave privada de la aplicación para generar pagos, dentro de la sección [credenciales](/developers/es/docs/qr-code/additional-content/your-integrations/credentials). Debes usarla para identificarte en tus integraciones. Siempre usa las del Modo Producción. |
| `USER_ID` | ID de la cuenta de Mercado Pago. Puedes consultarlo en los [detalles de la aplicación](/developers/es/docs/qr-code/additional-content/your-integrations/application-details). También lo puedes encontrar como _`COLLECTOR_ID`_. |
| `SPONSOR_ID` | Es el `USER_ID` del usuario proveedor del sistema integrado con Mercado Pago. Se compone por los últimos dígitos del `access_token` posteriores al último guión medio. Entonces, por ejemplo, si tu `access_token` es **APP_USR-8499883828799661-062409-bf057c51fc05f87eba5608328f869879-776566693**, entonces tu `USER_ID` es **776566693**.  El `SPONSOR_ID` no puede ser igual al `USER_ID`. |
| Sucursal (Store) | Es una **tienda física** en la que tus clientes pueden adquirir tus productos o servicios. Puedes tener varias sucursales en una misma cuenta. |
| Caja (POS) | Es un **Punto de Venta (PDV)** que existe en una sucursal o tienda física. Cada caja tendrá vinculado un código QR unívoco. |
| Orden | Es el pedido realizado por tu cliente. Contiene un listado de productos con su monto asociado. |