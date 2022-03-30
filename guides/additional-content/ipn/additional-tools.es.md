# Herramientas adicionales

## Búsqueda de pagos

En caso de que requieras un listado de los pagos realizados puedes hacer una llamada al endpoint de pagos. En nuestra [Referencia de API](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/reference/payments/_payments_search/get) obtendrás la información que necesitas sobre los parámetros de solicitud y respuesta.

Puedes utilizar parámetros del body de un `payment` como query params para poder filtrar los resultados:

* **Begin date:** fecha de inicio de la búsqueda
* **End date:** fecha de fin de la búsqueda
* **Status:** estado del pago

A continuación, te mostramos un ejemplo de la llamada a la API con estos query params:

```curl
curl --location --request GET 'https://api.mercadopago.com/v1/payments/search?limit=30&range=date_created&begin_date=2019-8-4T00:00:00.001-04:00&end_date=2021-12-4T23:59:59.999-04:00&sort=date_created&criteria=desc' \
--header 'Authorization: Bearer ACCESS_TOKEN'
```
