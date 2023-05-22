# Migración de la versión 0 a versión 1 de la API de Pagos de Mercado Pago

En Mercado Pago buscamos siempre optimizar nuestra plataforma ofreciendo la más alta eficiencia y seguridad en el procesamiento de pagos.

En esta ocasión, estamos trabajando en la migración de nuestra API versión 0 a la versión 1 con el objetivo de mantener los más altos estándares de calidad.

En consecuencia, Mercado Pago requerirá la utilización de la nueva versión de la API a partir del 10 de diciembre de 2018.

Después de ese plazo, la versión 0 dejara de tener soporte.

### A tener en cuenta:

* La modificación tendrá efecto **a partir del 10 de diciembre de 2018.**
* Si utiliza sólo los botones de pago de Mercado Pago, este cambio no lo afectará.
* Si utiliza sólo Mercado Shops, este cambio no lo afectará.
* Si tiene su **propio e-commerce, consulte a su equipo de TI**.
* Si **se trabaja con alguna plataforma de comercio electrónico**, por ejemplo: Magento, Shopify u otros **Consulte su soporte técnico**.
* Si **usa el recurso de search de payments**, debera consumir un nuevo recurso e incluir un nuevo parametro para obtener el mismo resultado. Vea la seccion de ejmplos.

## Recursos migrados

La siguiente tabla contiene a los recursos migrados y sus equivalentes.

| Uso | Método | URI del recurso deprecado | URI del recurso equivalente | Referencia |
| --- | --- | --- | --- | --- |
| Devoluciones | `POST` | /collections/$payment_id/refunds | /v1/payments/$payment_id/refunds |- |
| Devoluciones | `PUT` | /collections/$payment_id | /v1/payments/$payment_id/ | [visita](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/reference/payments/_payments_id/put) |
| Actualización de pago | `PUT` | /payments/$payment_id | /v1/payments/$payment_id/ | [visita](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/reference/payments/_payments_id/put) |
| Actualización de pago | `PUT` | /collections/$payment_id | /v1/payments/$payment_id/ | [visita](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/reference/payments/_payments_id/put) |
| Pagos | `GET` | /payments/$payment_id | /v1/payments/$payment_id/ | [visita](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/reference/payments/_payments_id/get) |
| Pagos | `GET` | /collections/$payment_id | /v1/payments/$payment_id/ | [visita](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/reference/payments/_payments_id/get) |
| Notificación de pagos | `GET` | /collections/notifications/$payment_id | /v1/payments/$payment_id/ |[visita](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/reference/payments/_payments_id/get) |
| Búsqueda de pagos | `GET` | /payments/search | /v1/payments/search | [visita](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/reference/payments/_payments_search/get)|
| Búsqueda de pagos | `GET` | /collections/search | /v1/payments/search | [visita](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/reference/payments/_payments_search/get)|

### Versiones migradas de las herramientas de Mercado Pago

A partir de las siguientes versiones de cada una de las herramientas de Mercado Pago se deja de dar soporte a la versión 0 del API:

| Herramienta | Versión |
| --- | --- |
| Magento 1.x | 2.11.4 |
| Adobe Commerce (Magento).x | 2.2.0 |
| Opencart 3.x | 4.1 |
| Opencart 2.3 | 3.2 |
| WooCommerce | 3.0.17 |
| WPCommerce | 4.2.6 |
| OsCommerce | none |
| VirtueMart | 2.2.0 |
| ZenCart | 1.0.3 |
| Prestashop 1.6.x | 3.1.0 |
| Prestashop 1.7.x | 1.0.12 |
| SDK PHP 0.x | 0.5.3 |
| SDK PHP 1.x | 1.1.4 |
| SDK Java 0.x | 0.3.5 |
| SDK Java 1.x | 1.0.19 |
| SDK .net 0.x | 0.3.4 |
| SDK .net 1.x | 1.0.10 |
| SDK ruby 0.x | 0.3.6 |
| SDK python 0.x | 0.3.5 |
| SDK NodeJS 1.x | 1.0.16 |

### Ejemplos

#### Búsqueda de un pago

Para la búsqueda de pagos deberá usarse el endpoint /v1/payments/search teniendo en cuenta que el resultado de esta búsqueda retornará los pagos como payer y collector del invocador. 

Para mantener la consistencia semántica con los resultados del endpoint /payments/search deberás agregar el parámetro payer.id con tu identificador de usuario.

```json
curl -X GET \
 -H 'Authorization: Bearer ENV_ACCESS_TOKEN' \
 "http://api.mercadopago.com/v1/payments/search?site_id=MLA&limit=50&range=date_created&end_date=NOW&begin_date=NOW-90DAYS&sort=date_created&criteria=desc&payer.id=PAYER_ID" 
```
Para mantener la consistencia semántica con los resultados del endpoint /collections/search deberás agregar el parámetro collector.id con tu identificador de usuario.

```json
curl -X GET \
 -H 'Authorization: Bearer ENV_ACCESS_TOKEN' \
 "http://api.mercadopago.com/v1/payments/search?site_id=MLA&limit=50&range=date_created&end_date=NOW&begin_date=NOW-90DAYS&sort=date_created&criteria=desc&collector.id=COLLECTOR_ID" 
```

#### Devolución total
```json
curl -X POST \
        -H "content-type: application/json" \
        -H 'Authorization: Bearer ENV_ACCESS_TOKEN' \
        "https://api.mercadopago.com/v1/payments/:id/refunds"
```

#### Devolución parcial

```curl
curl -X POST \
        -H 'content-type: application/json' \
        -H 'Authorization: Bearer ENV_ACCESS_TOKEN' \
        'https://api.mercadopago.com/v1/payments/12861583/refunds' \
        -d '{
       "amount": 5.0
        }'
```

Si usted necesita hacer adaptaciones, **es importante que usted recuerde hacer este cambio antes de la fecha límite.**

Si tiene alguna duda o necesita ayuda para completar con éxito este cambio, por favor, póngase en contacto con nosotros a través del siguiente [formulario](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/support).

Equipo de Mercado Pago.
