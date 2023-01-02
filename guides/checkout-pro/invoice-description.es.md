# Descripción de factura

Es una configuración que te permite definir el nombre del establecimiento que se mostrará en la factura del comprador. Esto permite la identificación comercial y evita disputas innecesarias.

Para mostrar la descripción en la factura del comprador, envía un **POST** con el parámetro `statement_descriptor` informando el nombre del establecimiento como se indica en el siguiente ejemplo al endpoint [/checkout/preferences](/developers/es/reference/preferences/_checkout_preferences/post) y ejecuta la solicitud.

```json
"statement_descriptor": "MI NEGOCIO"
```
