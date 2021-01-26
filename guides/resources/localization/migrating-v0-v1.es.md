----[mla, mlu, mlb]----
# Guía de migración: nueva versión de API de pagos

Protegemos tus pagos, siempre. Trabajamos en la nueva versión de nuestra API para seguir cumpliendo con los más altos estándares de seguridad. 

En esta guía vas a encontrar toda la información necesaria para poder actualizar tu API de pago a la versión nueva (v1).

**Contenidos de la guía**
* [Recursos migrados](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/localization/migrating-v0-v1#recursos_migrados) 
* [Versiones de herramientas para la nueva versión](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/localization/migrating-v0-v1#versiones_de_herramientas_para_la_nueva_versión)
* [Ejemplos](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/localization/migrating-v0-v1#ejemplos) 


### Tené en cuenta: 

* Desde el 10 de diciembre de 2018 la versión antigua **ya no cuenta con soporte**. 
* Si usás botones de pago o Mercado Shops, el cambio no te afecta.
* Si tenés comercio eléctronico propio, consultalo con tu equipo de tecnología. 
* O si trabajás con alguna plataforma, como por ejemplo, Magento, Shopify u otra, contactate con su soporte técnico.

Si usa el recurso de search de payments, tenés que consumir un nuevo recurso e incluir un nuevo parámetro para obtener el mismo resultado. Para más información, mirá la [sección de ejemplos](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/localization/migrating-v0-v1#ejemplos).


> NOTE
>
>  Si continuas con la versión anterior (v0), a partir del 1 de abril solo vas a poder acceder a la búsqueda de información de tus pagos de los últimos 90 días.  

------------

----[mpe, mlc, mco, mlm]----
# Guía de migración: nueva versión de API de pagos

Protegemos tus pagos, siempre. Trabajamos en la nueva versión de nuestra API para seguir cumpliendo con los más altos estándares de seguridad. 

En esta guía vas a encontrar toda la información necesaria para poder actualizar tu API de pago a la versión nueva (v1).

**Contenidos de la guía**
* [Recursos migrados](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/localization/migrating-v0-v1#recursos_migrados) 
* [Versiones de herramientas para la nueva versión](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/localization/migrating-v0-v1#versiones_de_herramientas_para_la_nueva_versión)
* [Ejemplos](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/localization/migrating-v0-v1#ejemplos) 


### Ten en cuenta: 

* Desde el 10 de diciembre de 2018 **la versión antigua ya no cuenta con soporte**. 
* Si usas botones de pago o Mercado Shops, el cambio no te afecta.
* Si tienes comercio eléctronico propio, consultalo con tu equipo de tecnología. 
* O si trabajas con alguna plataforma, como por ejemplo, Magento, Shopify u otra, contáctate con su soporte técnico.
* Si usas el recurso de search de payments, tienes que consumir un nuevo recurso e incluir un nuevo parámetro para obtener el mismo resultado. Para más información, mira la [sección de ejemplos](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/localization/migrating-v0-v1#ejemplos).


> NOTE
>
> Si continuas con la versión anterior (v0), a partir del 1 de abril solo vas a poder acceder a la búsqueda de información de tus pagos de los últimos 90 días.  

------------

## Recursos migrados

A continuación vas a poder encontrar los recursos migrados y sus equivalentes.

| Uso | Método | URI del recurso deprecado | URI del recurso equivalente | Referencia |
| --- | --- | --- | --- | --- |
| Devoluciones | `POST` | /collections/$payment_id/refunds | /v1/payments/$payment_id/refunds | -|
| Devoluciones | `PUT` | /collections/$payment_id | /v1/payments/$payment_id/ | [visita](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/reference/payments/_payments_id/put) |
| Actualización de pago | `PUT` | /payments/$payment_id | /v1/payments/$payment_id/ | [visita](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/reference/payments/_payments_id/put) |
| Actualización de pago | `PUT` | /collections/$payment_id | /v1/payments/$payment_id/ | [visita](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/reference/payments/_payments_id/put) |
| Pagos | `GET` | /payments/$payment_id | /v1/payments/$payment_id/ | [visita](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/reference/payments/_payments_id/get) |
| Pagos | `GET` | /collections/$payment_id | /v1/payments/$payment_id/ | [visita](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/reference/payments/_payments_id/get) |
| Notificación de pagos | `GET` | /collections/notifications/$payment_id | /v1/payments/$payment_id/ |[visita](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/reference/payments/_payments_id/get) |
| Búsqueda de pagos | `GET` | /payments/search | /v1/payments/search | [visita](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/reference/payments/_payments_search/get)|
| Búsqueda de pagos | `GET` | /collections/search | /v1/payments/search | [visita](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/reference/payments/_payments_search/get)|

##Versiones válidas de las herramientas para la nueva versión 

Si usas nuestras herramientas, para la nueva versión de la API es necesario que la versiones instaladas sean las que se detalla en la tabla o superior.

| Herramienta | Versión |
| --- | --- |
| Magento 1.x | 2.11.4 |
| Magento 2.x | 2.2.0 |
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

----[mla, mlu, mlb]----

## Ejemplos 

#### Búsqueda de un pago

Para la búsqueda de pagos tenés que usar el endpoint /v1/payments/search
Tené en cuenta que el resultado de esta búsqueda te va a traer los pagos como payer y collector del invocador.

Para mantener la consistencia semántica con los resultados del endpoint /payments/search tenés que agregar el parámetro payer.id con tu identificador de usuario.

```json
curl -X GET \
 -H 'Authorization: Bearer ENV_ACCESS_TOKEN' \
 "http://api.mercadopago.com/v1/payments/search?site_id=MLA&limit=50&range=date_created&end_date=NOW&begin_date=NOW-90DAYS&sort=date_created&criteria=desc&payer.id=PAYER_ID" 
```

Para mantener la consistencia semántica con los resultados del endpoint /collections/search tenés que agregar el parámetro collector.id con tu identificador de usuario.

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

Si necesitás hacer adaptaciones, recordá que es importante hacer este cambio antes de la fecha límite.

Si tenés alguna duda o necesita ayuda para hacer estos cambios, [contáctanos](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/support).

El equipo de Mercado Pago.

------------

----[mlm, mlc, mco, mpe]----

### Ejemplos 

#### Búsqueda de un pago

Para la búsqueda de pagos tienes que usar el endpoint /v1/payments/search
Ten en cuenta que el resultado de esta búsqueda te trae los pagos como payer y collector del invocador.

Para mantener la consistencia semántica con los resultados del endpoint /payments/search tienes que agregar el parámetro payer.id con tu identificador de usuario.

```json
curl -X GET \
 -H 'Authorization: Bearer ENV_ACCESS_TOKEN' \
 "http://api.mercadopago.com/v1/payments/search?site_id=MLA&limit=50&range=date_created&end_date=NOW&begin_date=NOW-90DAYS&sort=date_created&criteria=desc&payer.id=PAYER_ID" 
```

Para mantener la consistencia semántica con los resultados del endpoint /collections/search tienes que agregar el parámetro collector.id con tu identificador de usuario.

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

Si necesitas hacer adaptaciones, recuerda que es importante hacer este cambio antes de la fecha límite.
 
Si tienes alguna duda o necesita ayuda para hacer estos cambios, [contactanos](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/support).


El equipo de Mercado Pago.

------------